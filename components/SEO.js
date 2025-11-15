import Head from 'next/head'

export default function SEO({ 
  title = 'Metroplex Pros - Dallas Home Improvement Services',
  description = 'Professional home improvement services in Dallas, Texas. Kitchen remodeling, bathroom renovation, flooring, painting & more. Licensed & insured contractors serving DFW metroplex.',
  keywords = 'home improvement Dallas, contractors Dallas TX, kitchen remodeling Plano, bathroom renovation Frisco, Dallas home renovation, DFW contractors',
  canonicalUrl,
  openGraph = {},
  localBusiness = true 
}) {
  const defaultOpenGraph = {
    title: title,
    description: description,
    type: 'website',
    locale: 'en_US',
    site_name: 'Metroplex Pros',
    images: [
      {
        url: '/logo.svg',
        width: 400,
        height: 400,
        alt: 'Metroplex Pros Logo'
      }
    ]
  }

  const ogData = { ...defaultOpenGraph, ...openGraph }

  // Local Business Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeImprovementBusiness",
    "name": "Metroplex Pros",
    "alternateName": "Metroplex Pros Home Improvement",
    "description": "Professional home improvement services in Dallas, Texas. Specializing in kitchen remodeling, bathroom renovation, flooring installation, painting, and home additions.",
    "url": "https://metroplexpros.com",
    "logo": "https://metroplexpros.com/logo.svg",
    "image": "https://metroplexpros.com/logo.svg",
    "telephone": "(555) 123-4567",
    "email": "info@metroplexpros.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.7767",
      "longitude": "-96.7970"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dallas",
        "sameAs": "https://en.wikipedia.org/wiki/Dallas"
      },
      {
        "@type": "City", 
        "name": "Plano",
        "sameAs": "https://en.wikipedia.org/wiki/Plano,_Texas"
      },
      {
        "@type": "City",
        "name": "Frisco", 
        "sameAs": "https://en.wikipedia.org/wiki/Frisco,_Texas"
      },
      {
        "@type": "City",
        "name": "McKinney",
        "sameAs": "https://en.wikipedia.org/wiki/McKinney,_Texas"
      },
      {
        "@type": "City",
        "name": "Allen",
        "sameAs": "https://en.wikipedia.org/wiki/Allen,_Texas"
      },
      {
        "@type": "City",
        "name": "Richardson",
        "sameAs": "https://en.wikipedia.org/wiki/Richardson,_Texas"
      }
    ],
    "serviceType": [
      "Kitchen Remodeling",
      "Bathroom Renovation", 
      "Interior Painting",
      "Exterior Painting",
      "Flooring Installation",
      "Home Additions",
      "Roofing Services",
      "General Contracting"
    ],
    "priceRange": "$$$",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-16:00"
    ],
    "sameAs": [
      "https://www.facebook.com/metroplexpros",
      "https://www.instagram.com/metroplexpros", 
      "https://www.linkedin.com/company/metroplexpros"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Service Area Schema
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Home Improvement Services",
    "provider": {
      "@type": "HomeImprovementBusiness",
      "name": "Metroplex Pros"
    },
    "areaServed": {
      "@type": "State",
      "name": "Texas",
      "containsPlace": [
        {
          "@type": "City",
          "name": "Dallas, TX"
        },
        {
          "@type": "City", 
          "name": "Plano, TX"
        },
        {
          "@type": "City",
          "name": "Frisco, TX"
        },
        {
          "@type": "City",
          "name": "McKinney, TX"
        },
        {
          "@type": "City",
          "name": "Allen, TX"
        },
        {
          "@type": "City",
          "name": "Richardson, TX"
        },
        {
          "@type": "City",
          "name": "Garland, TX"
        },
        {
          "@type": "City",
          "name": "Irving, TX"
        }
      ]
    }
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Metroplex Pros" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogData.type} />
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:site_name" content={ogData.site_name} />
      <meta property="og:locale" content={ogData.locale} />
      {ogData.images && ogData.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" content={ogData.description} />
      {ogData.images && <meta name="twitter:image" content={ogData.images[0].url} />}
      
      {/* Local SEO */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Dallas" />
      <meta name="geo.position" content="32.7767;-96.7970" />
      <meta name="ICBM" content="32.7767, -96.7970" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/logo.svg" />
      
      {/* Structured Data */}
      {localBusiness && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema)
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceAreaSchema)
            }}
          />
        </>
      )}
    </Head>
  )
}