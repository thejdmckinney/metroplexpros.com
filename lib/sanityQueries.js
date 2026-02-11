// Example queries for fetching data from your new Sanity schemas
// Use these in your Next.js pages with getStaticProps or getServerSideProps

import sanityClient from './sanityClient'

// ============================================
// SERVICE PAGES
// ============================================

// Get all active service pages
export async function getAllServices() {
  const query = `*[_type == "servicePage" && isActive == true] | order(displayOrder asc) {
    _id,
    title,
    slug,
    heroHeadline,
    heroSubheadline,
    "heroImageUrl": heroImage.asset->url,
    description,
    features,
    subservices,
    faqs,
    callToAction,
    seo->{
      metaTitle,
      metaDescription,
      keywords,
      "ogImageUrl": ogImage.asset->url
    }
  }`
  
  return await sanityClient.fetch(query)
}

// Get a single service page by slug
export async function getServiceBySlug(slug) {
  const query = `*[_type == "servicePage" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    heroHeadline,
    heroSubheadline,
    "heroImageUrl": heroImage.asset->url,
    "heroImageAlt": heroImage.alt,
    description,
    features,
    subservices,
    faqs,
    callToAction,
    seo->{
      metaTitle,
      metaDescription,
      keywords,
      "ogImageUrl": ogImage.asset->url,
      canonicalUrl,
      structuredData
    }
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// ============================================
// SERVICE AREAS
// ============================================

// Get all active service areas
export async function getAllServiceAreas() {
  const query = `*[_type == "serviceArea" && isActive == true] | order(displayOrder asc) {
    _id,
    name,
    slug,
    heroHeadline,
    heroSubheadline,
    "areaImageUrl": areaImage.asset->url,
    description,
    neighborhoods,
    localStats,
    servicesOffered[]->{
      title,
      slug
    },
    responseTime,
    emergencyServices,
    seo->{
      metaTitle,
      metaDescription,
      keywords
    }
  }`
  
  return await sanityClient.fetch(query)
}

// Get a single service area by slug
export async function getServiceAreaBySlug(slug) {
  const query = `*[_type == "serviceArea" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    heroHeadline,
    heroSubheadline,
    "areaImageUrl": areaImage.asset->url,
    "areaImageAlt": areaImage.alt,
    description,
    neighborhoods,
    localStats,
    servicesOffered[]->{
      title,
      slug,
      heroHeadline
    },
    testimonials,
    responseTime,
    emergencyServices,
    customCTA,
    seo->{
      metaTitle,
      metaDescription,
      keywords,
      "ogImageUrl": ogImage.asset->url,
      canonicalUrl
    }
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// ============================================
// PRICING PACKAGES
// ============================================

// Get all active pricing packages
export async function getAllPricingPackages() {
  const query = `*[_type == "pricingPackage" && isActive == true] | order(displayOrder asc) {
    _id,
    name,
    slug,
    packageType,
    price,
    shortDescription,
    fullDescription,
    features,
    benefits,
    servicesIncluded[]->{
      title,
      slug
    },
    limitations,
    isFeatured,
    featuredLabel,
    buttonText,
    discounts
  }`
  
  return await sanityClient.fetch(query)
}

// Get featured pricing packages
export async function getFeaturedPackages() {
  const query = `*[_type == "pricingPackage" && isActive == true && isFeatured == true] | order(displayOrder asc) {
    _id,
    name,
    slug,
    packageType,
    price,
    shortDescription,
    features,
    benefits,
    featuredLabel,
    buttonText,
    discounts
  }`
  
  return await sanityClient.fetch(query)
}

// Get a single pricing package by slug
export async function getPricingPackageBySlug(slug) {
  const query = `*[_type == "pricingPackage" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    packageType,
    price,
    shortDescription,
    fullDescription,
    features,
    benefits,
    servicesIncluded[]->{
      title,
      slug,
      heroHeadline
    },
    limitations,
    isFeatured,
    featuredLabel,
    buttonText,
    discounts,
    serviceAreas[]->{
      name,
      slug
    }
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// ============================================
// SEO SETTINGS
// ============================================

// Get SEO settings for a specific page
export async function getSeoSettings(pageName) {
  const query = `*[_type == "seoSettings" && pageName == $pageName][0] {
    _id,
    pageName,
    metaTitle,
    metaDescription,
    keywords,
    "ogImageUrl": ogImage.asset->url,
    "ogImageAlt": ogImage.alt,
    ogTitle,
    ogDescription,
    canonicalUrl,
    noindex,
    nofollow,
    structuredData
  }`
  
  return await sanityClient.fetch(query, { pageName })
}

// ============================================
// EXAMPLE USAGE IN A NEXT.JS PAGE
// ============================================

/*
// Example: pages/services/[slug].js

import { getServiceBySlug, getAllServices } from '../../lib/sanityQueries'

export default function ServicePage({ service }) {
  return (
    <Layout>
      <SEO 
        title={service.seo.metaTitle}
        description={service.seo.metaDescription}
        ogImage={service.seo.ogImageUrl}
      />
      
      <section className="hero">
        <h1>{service.heroHeadline}</h1>
        <p>{service.heroSubheadline}</p>
        <img src={service.heroImageUrl} alt={service.heroImageAlt} />
      </section>
      
      <section>
        <h2>What We Offer</h2>
        {service.features.map((feature, index) => (
          <div key={index}>
            <h3>{feature.feature}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>
      
      <section>
        <h2>FAQs</h2>
        {service.faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const service = await getServiceBySlug(params.slug)
  return {
    props: { service },
    revalidate: 60 // Revalidate every 60 seconds
  }
}

export async function getStaticPaths() {
  const services = await getAllServices()
  const paths = services.map(service => ({
    params: { slug: service.slug.current }
  }))
  
  return {
    paths,
    fallback: 'blocking'
  }
}
*/
