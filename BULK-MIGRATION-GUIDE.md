# Bulk Migration Guide - Automated Sanity Migration

## 🚀 Quick Start

This script will automatically migrate **all remaining service pages** to Sanity in about 30 seconds!

### Pages That Will Be Migrated:

**Main Services:**
- ✅ Plumbing Services
- ✅ Handyman Services  
- ✅ Smart Home Installation
- ✅ Kitchen Remodeling
- ✅ Bathroom Renovation

**Electrical Sub-Pages:**
- ✅ Code Compliance
- ✅ Generators
- ✅ Lighting
- ✅ Outlets & Switches
- ✅ Rewiring

**Plumbing Sub-Pages:**
- ✅ Drain Cleaning
- ✅ Fixture Installation
- ✅ Leak Repair
- ✅ Pipe Replacement
- ✅ Sewer Repair
- ✅ Water Heater Repair

**Handyman Sub-Pages:**
- ✅ Door Repair
- ✅ Drywall Repair
- ✅ Fixture Installation
- ✅ General Repairs
- ✅ Interior Painting
- ✅ Wall Art Hanging
- ✅ Window Treatments

**Smart Home Sub-Pages:**
- ✅ Home Automation
- ✅ Smart Doorbells
- ✅ Smart Lighting
- ✅ Smart Locks
- ✅ Smart Security
- ✅ Smart Thermostats

**Total: 28 pages will be created automatically!**

---

## Step 1: Get Your Sanity API Token

1. Go to https://www.sanity.io/manage
2. Click on your project: **metroplexpros.com**
3. Go to **API** in the sidebar
4. Click **Tokens** tab
5. Click **Add API Token**
6. Settings:
   - **Name:** `Bulk Migration Script`
   - **Permissions:** Select **Editor**
7. Click **Create**
8. **COPY THE TOKEN** (you won't see it again!)

---

## Step 2: Set the Environment Variable

In your terminal, paste this command (replace with your actual token):

```bash
export SANITY_API_TOKEN="your-token-here"
```

**Example:**
```bash
export SANITY_API_TOKEN="skAbCd123XyZ456..."
```

---

## Step 3: Run the Migration Script

```bash
node scripts/bulk-migrate-to-sanity.js
```

The script will:
1. ✅ Skip pages you've already migrated manually (Electrical, Basic Inspection, etc.)
2. ✅ Read each remaining page file
3. ✅ Extract SEO metadata (title, description, keywords)
4. ✅ Extract hero section content (headlines, subheadlines)
5. ✅ Create SEO Settings document in Sanity
6. ✅ Create Service Page document in Sanity
7. ✅ Link them together
8. ✅ Print progress and summary

**Expected Runtime:** ~30 seconds for all 28 pages

---

## Step 4: Review in Sanity Studio

1. Go to https://metroplexpros.sanity.studio
2. Check **SEO Settings** - you should see 28 new documents
3. Check **Service Pages** - you should see 28 new documents
4. Review the content - it should look correct!
5. **Publish** the documents you want to go live

---

## What Gets Created?

For each page, the script creates:

### SEO Settings Document:
- Page Name
- Page Type (service)
- Meta Title (from your existing `title` prop)
- Meta Description (from your existing `description` prop)
- Focus Keywords (from your existing `keywords` prop)
- OG Title & Description
- Canonical URL
- All other SEO fields

### Service Page Document:
- Service Title
- URL Slug
- Hero Headline (extracted from `<h1>`)
- Hero Subheadline (extracted from hero subtitle)
- Description (extracted from hero description paragraph)
- 3 Default Key Features (Licensed, 24/7, Quality)
- 3 Default FAQs (Cost, Emergency, Licensed)
- Call to Action section
- Reference to SEO Settings
- Display Order
- Active status

---

## Troubleshooting

### "SANITY_API_TOKEN not set"
- Make sure you ran the `export SANITY_API_TOKEN="..."` command
- Make sure you're in the same terminal window
- Try running it again in a new terminal

### "File not found"
- The script expects files to be in specific locations
- If you've moved files, update the `SERVICE_PAGES` object in the script

### Rate Limiting
- The script includes 500ms delays between requests
- If you hit rate limits, it will fail gracefully and report which pages failed

---

## After Migration

Once all pages are migrated to Sanity, you can:

1. **Update your Next.js pages** to fetch from Sanity (like we did with electrical.js)
2. **Edit content in Sanity Studio** instead of code
3. **Publish changes instantly** (live in 60 seconds)
4. **Delete the hardcoded content** from your `.js` files (optional)

---

## Notes

- ✅ The script is **safe** - it only creates new documents, doesn't modify existing ones
- ✅ Pages you've already migrated manually are **automatically skipped**
- ✅ If a page fails, the script continues with the next one
- ✅ You get a detailed summary at the end
- ✅ All documents are created as **drafts** - you decide when to publish

---

## Need Help?

If anything goes wrong:
1. Check the error message in the terminal
2. The script will tell you exactly which page failed and why
3. You can always create pages manually using the migration guide
4. Or reach out for help!

---

**Ready? Let's migrate those pages! 🚀**
