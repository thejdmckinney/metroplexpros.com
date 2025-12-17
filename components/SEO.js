import Head from 'next/head'
import React from 'react'

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
    url: canonicalUrl || 'https://metroplexpros.com',
    images: [
      {
        url: 'https://metroplexpros.com/Gemini_Generated_Image_9oyqc49oyqc49oyq.png',
        width: 1456,
        height: 816,
        alt: 'Metroplex Pros - Electrical, Plumbing & Smart Home Services in Dallas',
        type: 'image/png'
      }
    ]
  }

  const ogData = { ...defaultOpenGraph, ...openGraph }

  // Local Business Schema Markup - Updated for Electrician/Plumber Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Electrician", "Plumber", "HomeImprovementBusiness"],
    "name": "Metroplex Pros",
    "alternateName": ["Metroplex Pros Electrical & Plumbing", "MetroPlex Pros Dallas"],
    "description": "Licensed Dallas electricians and plumbers providing expert electrical repairs, plumbing services, smart home installations, and 24/7 emergency service throughout the DFW metroplex since 2010.",
    "url": "https://metroplexpros.com",
    "logo": "https://metroplexpros.com/logo.svg",
    "image": "https://metroplexpros.com/logo.svg",
    "telephone": "(682) 466-2130",
    "email": "info@metroplexpros.com",
    "priceRange": "$$-$$$",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Check", "Financing Available"],
    "currenciesAccepted": "USD",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dallas-Fort Worth Metroplex",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US",
      "postalCode": "75201"
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
      },
      {
        "@type": "City",
        "name": "Garland",
        "sameAs": "https://en.wikipedia.org/wiki/Garland,_Texas"
      },
      {
        "@type": "City",
        "name": "Irving",
        "sameAs": "https://en.wikipedia.org/wiki/Irving,_Texas"
      },
      {
        "@type": "City",
        "name": "Highland Park"
      },
      {
        "@type": "City",
        "name": "University Park"
      }
    ],
    "serviceType": [
      "Electrical Panel Upgrades",
      "Electrical Wiring & Rewiring",
      "Outlet & Switch Installation",
      "Lighting Installation",
      "Ceiling Fan Installation",
      "EV Charger Installation",
      "Generator Installation",
      "Emergency Electrical Service",
      "Plumbing Repairs",
      "Drain Cleaning",
      "Water Heater Installation",
      "Leak Detection & Repair",
      "Fixture Installation",
      "Pipe Repair & Repiping",
      "Emergency Plumbing Service",
      "Smart Thermostat Installation",
      "Smart Home Automation",
      "Security Camera Installation",
      "Smart Lighting Systems",
      "Video Doorbell Installation",
      "Home Network Setup"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Electrical, Plumbing & Smart Home Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Electrical Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Electrical Panel Upgrade"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Outlet Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Lighting Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Electrical Repair"}}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Plumbing Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Water Heater Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Drain Cleaning"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Leak Repair"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Emergency Plumbing"}}
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Smart Home Services",
          "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Thermostat Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Security Camera Installation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Smart Lighting Automation"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Home Automation Integration"}}
          ]
        }
      ]
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "23:59",
        "description": "Emergency Service Only"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/metroplexpros",
      "https://www.instagram.com/metroplexpros", 
      "https://www.linkedin.com/company/metroplexpros",
      "https://www.yelp.com/biz/metroplex-pros-dallas"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "slogan": "Dallas's Trusted Licensed Electricians & Plumbers",
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "8"
    },
    "knowsAbout": [
      "Electrical Systems",
      "Plumbing Systems",
      "Smart Home Technology",
      "Home Automation",
      "Energy Efficiency",
      "Emergency Repairs",
      "Texas Building Codes"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "24/7 Emergency Service",
        "description": "Round-the-clock emergency electrical and plumbing service available"
      },
      {
        "@type": "Offer",
        "name": "Free Estimates",
        "description": "Complimentary estimates for all non-emergency work"
      },
      {
        "@type": "Offer",
        "name": "Licensed & Insured",
        "description": "Fully licensed, bonded, and insured for your protection"
      }
    ]
  }

  // Service Area Schema - Updated for Electrical & Plumbing
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Electrical, Plumbing & Smart Home Services",
    "provider": {
      "@type": "Electrician",
      "name": "Metroplex Pros",
      "additionalType": "Plumber"
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
        },
        {
          "@type": "City",
          "name": "Highland Park, TX"
        },
        {
          "@type": "City",
          "name": "University Park, TX"
        },
        {
          "@type": "City",
          "name": "Lakewood, TX"
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+1-682-466-2130",
        "contactType": "Customer Service",
        "areaServed": "US-TX",
        "availableLanguage": "English"
      }
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
      {ogData.url && <meta property="og:url" content={ogData.url} />}
      {ogData.images && ogData.images.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          <meta property="og:image:secure_url" content={image.url} />
          <meta property="og:image:type" content={image.type || 'image/png'} />
          <meta property="og:image:width" content={image.width?.toString()} />
          <meta property="og:image:height" content={image.height?.toString()} />
          <meta property="og:image:alt" content={image.alt} />
        </React.Fragment>
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogData.title} />
      <meta name="twitter:description" content={ogData.description} />
      {ogData.images && <meta name="twitter:image" content={ogData.images[0].url} />}
      {ogData.images && <meta name="twitter:image:alt" content={ogData.images[0].alt} />}
      
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