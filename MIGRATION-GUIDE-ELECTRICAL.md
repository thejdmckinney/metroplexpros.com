# Migration Guide: Electrical Services Page to Sanity

## Step 1: Create SEO Settings Document

1. Open your Sanity Studio: https://metroplexpros.sanity.studio
2. Click **"SEO Settings"** in the sidebar
3. Click **"Create new SEO Settings"**
4. Fill in these fields:

### Basic Info:
- **Page Name:** `Electrical Services Page`
- **Page Type:** `service`

### SEO Fields:
- **Meta Title:** 
  ```
  Dallas Electrician Near Me | 24/7 Emergency Service | Licensed & Insured | MetroPlex Pros
  ```

- **Meta Description:**
  ```
  Dallas Electrician Near Me | Licensed & Insured | 24/7 Emergency Electrical Service | Panel Upgrades, Rewiring, Lighting, Generators | Same-Day Service Available | Call (682) 466-2130 now!
  ```

- **Focus Keywords:** (Add these as tags)
  - electrician Dallas
  - electrician near me Dallas
  - electrical services DFW
  - home electrical repair service
  - electrical home repair
  - home electrical repair near me
  - panel upgrade
  - electrical wiring
  - lighting installation
  - generator installation
  - emergency electrician
  - emergency electrician near me

### Open Graph:
- **OG Title:** `Dallas Electrician Near Me | 24/7 Emergency Service`
- **OG Description:** `Licensed & Insured electricians serving Dallas-Fort Worth. Panel upgrades, rewiring, lighting, generators. Same-day service available!`
- **OG Image:** Upload `/public/og-image-electrical-metroplex.png` (if you have it)

### Advanced:
- **Canonical URL:** `https://www.metroplexpros.com/services/electrical/`

4. Click **"Publish"**
5. **Copy the Document ID** that appears in the URL (looks like: `seo-abc123...`)

---

## Step 2: Create Service Page Document

1. Click **"Service Pages"** in the sidebar
2. Click **"Create new Service Page"**
3. Fill in these fields:

### Basic Info:
- **Service Title:** `Electrical Services`
- **URL Slug:** Click "Generate" → should create `electrical`
- **Display Order:** `1`
- **Active:** ✅ Check this box

### Hero Section:
- **Hero Headline:** 
  ```
  Professional Electrical Services for Dallas-Fort Worth
  ```

- **Hero Subheadline:**
  ```
  Panel Upgrades • Wiring • Lighting • Smart Home • Generators
  ```

- **Hero Image:** Upload `/public/electrical-services-banner-mpp.png`
  - **Alt Text:** `MetroPlex Pros electrician installing electrical panel in Dallas-Fort Worth`

### Service Description:
Click in the **Service Description** field and add:
```
MetroPlex Pros provides comprehensive home electrical repair service throughout the Dallas-Fort Worth area. Our licensed electricians handle everything from simple outlet installations to complete electrical panel upgrades, ensuring your home's electrical system is safe, efficient, and up to code. Whether you need electrical home repair near me or scheduled installations, we're here to help 24/7.
```

### Key Features:
Click "Add Item" for each feature:

**Feature 1:**
- Feature: `Licensed Master Electricians`
- Description: `All our electricians are licensed, insured, and highly trained professionals.`

**Feature 2:**
- Feature: `24/7 Emergency Service`
- Description: `Available round the clock for urgent electrical issues and emergencies.`

**Feature 3:**
- Feature: `Guaranteed Quality Work`
- Description: `We stand behind our work with comprehensive warranties and guarantees.`

### Sub-Services:
Click "Add Item" for each sub-service. Copy these exactly:

**1. Electrical Panel Upgrades**
- Name: `Electrical Panel Upgrades`
- Description: `Upgrade from 100-150 amp to 200 amp service. Essential for modern homes with increased electrical demands from HVAC, appliances, home offices, and EV charging.`
- Icon Emoji: `⚡`
- URL Path: `panel-upgrades`

**2. Outlets & Switches**
- Name: `Outlets & Switches`
- Description: `Installation, replacement, and upgrades for outlets and switches throughout your property. GFCI and AFCI protection for safety and code compliance.`
- Icon Emoji: `🔌`
- URL Path: `outlets`

**3. Lighting Installation**
- Name: `Lighting Installation`
- Description: `Interior and exterior lighting solutions including recessed lighting, chandeliers, landscape lighting, and security lighting.`
- Icon Emoji: `💡`
- URL Path: `lighting`

**4. Smart Home Electrical**
- Name: `Smart Home Electrical`
- Description: `Electrical infrastructure for smart home devices. Proper wiring for thermostats, doorbells, security systems, and whole-home automation.`
- Icon Emoji: `🏠`
- URL Path: `smart-home-installations`

**5. Wiring & Rewiring**
- Name: `Wiring & Rewiring`
- Description: `New construction wiring, home rewiring, aluminum wiring remediation, and code compliance upgrades for older homes.`
- Icon Emoji: `🔧`
- URL Path: `rewiring`

**6. Generator Installation**
- Name: `Generator Installation`
- Description: `Whole-home and portable generator installation. Keep your home powered during outages with properly installed backup power systems.`
- Icon Emoji: `⚙️`
- URL Path: `generators`

**7. EV Charger Installation**
- Name: `EV Charger Installation`
- Description: `Electric vehicle charging station installation. Level 2 chargers for faster, more efficient home charging of your EV.`
- Icon Emoji: `🚗`
- URL Path: `ev-charger`

**8. Pool & Spa Electrical**
- Name: `Pool & Spa Electrical`
- Description: `Specialized electrical work for pools, hot tubs, and spas. Pumps, heaters, lighting, and automated control systems.`
- Icon Emoji: `🏊`
- URL Path: `pool-spa`

**9. Outdoor Electrical**
- Name: `Outdoor Electrical`
- Description: `Exterior outlets, landscape lighting, security lighting, and electrical for outdoor living spaces.`
- Icon Emoji: `🌳`
- URL Path: `outdoor`

**10. Ceiling Fan Installation**
- Name: `Ceiling Fan Installation`
- Description: `Professional ceiling fan installation and replacement. Proper support and wiring for safe, balanced operation.`
- Icon Emoji: `🔥`
- URL Path: `ceiling-fans`

**11. Commercial Electrical**
- Name: `Commercial Electrical`
- Description: `Electrical services for offices, retail spaces, and small commercial properties. Code-compliant installations.`
- Icon Emoji: `🏢`
- URL Path: `commercial`

**12. Emergency Electrical**
- Name: `Emergency Electrical`
- Description: `24/7 emergency electrical service for power outages, electrical hazards, sparking outlets, and urgent safety issues.`
- Icon Emoji: `🚨`
- URL Path: `emergency`

### FAQs:
Click "Add Item" for each FAQ:

**FAQ 1:**
- Question: `How much does electrical work cost?`
- Answer: `Costs vary based on the specific service. Simple outlet installations start around $125, while panel upgrades range from $1,800-$4,500. Use our free electrical calculators for instant estimates, or call (682) 466-2130 for a detailed quote.`

**FAQ 2:**
- Question: `Do you offer emergency electrical service?`
- Answer: `Yes! We provide 24/7 emergency electrical service for urgent issues like power outages, sparking outlets, burning smells, or any electrical hazard. Call (682) 466-2130 anytime for immediate assistance.`

**FAQ 3:**
- Question: `Are your electricians licensed and insured?`
- Answer: `Absolutely. All our electricians are licensed master electricians with extensive training. We're fully insured and bonded, and all our work meets or exceeds local electrical codes.`

**FAQ 4:**
- Question: `What areas do you serve?`
- Answer: `We serve the entire Dallas-Fort Worth metroplex including Dallas, Fort Worth, Plano, Frisco, McKinney, Arlington, Irving, Garland, Richardson, and surrounding areas.`

**FAQ 5:**
- Question: `Do I need a permit for electrical work?`
- Answer: `Many electrical projects require permits. We handle all permitting and inspections as part of our service to ensure your work is completely code-compliant and properly documented.`

### Call to Action:
- **CTA Headline:** `Need Electrical Service? Call Now!`
- **Button Text:** `Call (682) 466-2130`
- **Phone Number:** `(682) 466-2130`

### SEO Settings:
- Click the dropdown and select the **"Electrical Services Page"** SEO Settings you created in Step 1

4. Click **"Publish"**

---

## ✅ Done!

Once you've created both documents, let me know and I'll update your page to fetch from Sanity instead of hardcoded content!

**Estimated Time:** 15-20 minutes (copy/paste makes it fast!)

**Pro Tip:** You can duplicate this pattern for your other service pages (Plumbing, Handyman, etc.)
