# Sanity Content Management Setup - Complete! ✅

## What We Just Added

You now have **4 new content types** in your Sanity Studio:

1. **Service Pages** (`servicePage`) - Manage all your service content
2. **Service Areas** (`serviceArea`) - Location-specific content for each city
3. **Pricing & Packages** (`pricingPackage`) - Service pricing and your $99 plan
4. **SEO Settings** (`seoSettings`) - Centralized meta tags and SEO data

---

## 🚀 How to Access Your Sanity Studio

### Option 1: Visit Online Studio
Go to: **https://metroplexpros.sanity.studio**

### Option 2: Run Local Studio
```bash
cd /Users/jeremymckinney/Documents/GitHub/metroplexpros.com
npm run dev
```
Then visit: **http://localhost:3333** (or whatever port Sanity uses)

---

## 📝 What Each Schema Does

### 1. Service Pages (`servicePage`)
**Use this for:** Managing content for your main service pages like Electrical, Plumbing, Handyman

**Fields include:**
- Hero headline & subheadline
- Hero image with alt text
- Service description (rich text)
- Key features list
- Sub-services (e.g., Panel Upgrades, Rewiring)
- FAQs
- Call-to-action buttons
- SEO settings reference
- Display order & active status

**Example:** Create a "Electrical Services" page with all content managed in Sanity instead of hardcoded in React

---

### 2. Service Areas (`serviceArea`)
**Use this for:** Managing content for location pages like Garland, Irving, Richardson

**Fields include:**
- Area name & slug
- Hero content specific to that area
- Area image
- Description
- Neighborhoods served (array)
- Local statistics (population, home values, etc.)
- Services available in that area (references to service pages)
- Local testimonials
- Response time
- Emergency services availability
- Custom CTA per area
- SEO settings

**Example:** Create "Garland, TX" page with local stats, neighborhoods, and testimonials from that area

---

### 3. Pricing & Packages (`pricingPackage`)
**Use this for:** Managing your $99 plan, service packages, and pricing

**Fields include:**
- Package name & type (subscription, one-time, emergency, bundle)
- Price structure (amount, frequency, display format)
- Short & full descriptions
- Included features (with included/excluded flags)
- Key benefits
- Services included (references to service pages)
- Limitations/exclusions
- Featured package flag (for "Most Popular" badge)
- Discounts with expiration dates
- Service areas where available
- CTA button text
- Active status

**Example:** Your $99/month plan with all included services, features, and benefits

---

### 4. SEO Settings (`seoSettings`)
**Use this for:** Centralizing all SEO metadata instead of hardcoding in each page

**Fields include:**
- Page name (internal reference)
- Meta title (with character count validation)
- Meta description (with character count validation)
- Focus keywords (tag format)
- Open Graph image (1200x630px)
- OG title & description
- Canonical URL
- Noindex/nofollow flags
- Structured data (Schema.org JSON-LD)
- Page type
- Last updated timestamp

**Example:** Create SEO settings for "Electrical Services Page" and reference it from your service page

---

## 🔗 How to Use in Your Pages

### Step 1: Create Content in Sanity Studio
1. Go to your Sanity Studio
2. Create new documents for each content type
3. Fill in the fields
4. Publish the documents

### Step 2: Fetch Data in Your Next.js Pages

I've created helper functions in `/lib/sanityQueries.js`. Here's how to use them:

```javascript
// In your Next.js page (e.g., pages/services/electrical.js)
import { getServiceBySlug } from '../../lib/sanityQueries'

export async function getStaticProps() {
  const service = await getServiceBySlug('electrical')
  
  return {
    props: { service },
    revalidate: 60 // Revalidate every 60 seconds
  }
}

export default function ElectricalPage({ service }) {
  return (
    <Layout>
      <SEO 
        title={service.seo.metaTitle}
        description={service.seo.metaDescription}
      />
      
      <section className="hero">
        <h1>{service.heroHeadline}</h1>
        <p>{service.heroSubheadline}</p>
        <img src={service.heroImageUrl} alt={service.heroImageAlt} />
      </section>
      
      {/* Map through features, FAQs, etc. */}
    </Layout>
  )
}
```

---

## 📋 Available Helper Functions

Check `/lib/sanityQueries.js` for:

### Service Pages
- `getAllServices()` - Get all active services
- `getServiceBySlug(slug)` - Get single service by URL slug

### Service Areas
- `getAllServiceAreas()` - Get all active areas
- `getServiceAreaBySlug(slug)` - Get single area by slug

### Pricing
- `getAllPricingPackages()` - Get all active packages
- `getFeaturedPackages()` - Get featured packages only
- `getPricingPackageBySlug(slug)` - Get single package

### SEO
- `getSeoSettings(pageName)` - Get SEO settings by page name

---

## 🎯 Quick Start Guide

### 1. Create Your First Service Page

1. Go to Sanity Studio
2. Click "Service Pages" → "Create new Service Page"
3. Fill in:
   - Title: "Electrical Services"
   - Slug: Click "Generate" to auto-create "electrical"
   - Hero Headline: "Professional Electrical Services in Dallas-Fort Worth"
   - Hero Subheadline: Your current subheadline
   - Upload hero image
   - Add description, features, sub-services
   - Add FAQs
4. Create an SEO Settings document first, then reference it
5. Click "Publish"

### 2. Create Your $99 Plan

1. Click "Pricing & Packages" → "Create new Pricing Package"
2. Fill in:
   - Name: "$99 Plan"
   - Package Type: "Subscription"
   - Price Amount: 99
   - Frequency: "Monthly"
   - Display Price: "$99/month"
   - Add all features, benefits, included services
   - Check "Featured Package"
   - Featured Label: "Most Popular"
3. Click "Publish"

### 3. Create a Service Area

1. Click "Service Areas" → "Create new Service Area"
2. Fill in:
   - Name: "Garland"
   - Generate slug: "garland"
   - Add local content, neighborhoods, stats
   - Link to available services
   - Add testimonials
3. Click "Publish"

---

## 🔄 Content Workflow

**Old Way (Hardcoded):**
1. Edit React component
2. Commit code
3. Push to GitHub
4. Wait for Vercel deployment
5. Changes go live

**New Way (Sanity CMS):**
1. Log into Sanity Studio
2. Edit content
3. Click "Publish"
4. Changes go live in ~60 seconds (due to revalidate)
5. No code deployment needed!

---

## 💡 Pro Tips

1. **Reusable SEO Settings:** Create one SEO Settings document per page, then reference it from service pages, area pages, etc.

2. **Featured Packages:** Use the "Featured" flag to highlight your best packages (like the $99 plan)

3. **Display Order:** Use the "Display Order" field to control how services/areas appear on your site

4. **Inactive Content:** Use "Active" toggle to hide content without deleting it

5. **Rich Text:** Use the description fields (array of blocks) for formatted content with headings, lists, bold, etc.

6. **References:** Link services to areas, packages to services, etc. to create relationships

7. **Images:** Upload images directly to Sanity - they're automatically optimized and served via CDN

---

## 🛠 Next Steps

### Quick Wins (Do These First):
1. ✅ Create SEO settings for your top 5 pages
2. ✅ Create your $99 Plan pricing package
3. ✅ Create your main service pages (Electrical, Plumbing, Handyman)

### Phase 2 (When Ready):
4. Create all service area pages
5. Update your existing pages to fetch from Sanity instead of hardcoded content
6. Add testimonials schema (if you want to manage those too)
7. Set up preview mode so you can see drafts before publishing

---

## 📞 Need Help?

If you want to migrate your existing pages to use Sanity data instead of hardcoded content, I can help you:
1. Convert your existing pages to fetch from Sanity
2. Migrate your current content into Sanity
3. Set up dynamic routing for service and area pages
4. Add more schemas (testimonials, team members, etc.)

Just let me know what you'd like to tackle next!

---

## 🎉 What You've Accomplished

- ✅ 4 new Sanity schemas deployed
- ✅ Helper functions ready to use
- ✅ SEO metadata centralized
- ✅ Content management setup for non-technical team members
- ✅ Faster content updates without code deployments
- ✅ Reusable content blocks and references
- ✅ Image optimization via Sanity CDN

**You now have a professional CMS powering your site!** 🚀
