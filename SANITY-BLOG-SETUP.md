# Sanity Blog Setup Guide

This guide will help you set up and configure the Sanity CMS for the blog section of Metroplex Pros.

## 🚀 Quick Start

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign in (or create an account)
2. Click "Create new project"
3. Choose a project name (e.g., "Metroplex Pros Blog")
4. Choose a dataset name (recommended: "production")
5. Copy your Project ID

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Add your Sanity credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. Update `sanity.config.js` with your Project ID:
   ```javascript
   projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
   ```

4. Update `sanity.cli.js` with your Project ID:
   ```javascript
   projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
   ```

### 3. Deploy the Schema to Sanity

Deploy your schema definitions to Sanity:

```bash
npx sanity schema deploy
```

### 4. Run the Sanity Studio (Optional)

If you want to run the Sanity Studio locally:

```bash
npx sanity dev
```

This will start the Sanity Studio at `http://localhost:3333`

Or use the hosted Studio at: `https://www.sanity.io/manage`

## 📝 Creating Content

### Creating Blog Posts

1. Go to your Sanity Studio (local or hosted)
2. Click "Post" in the left sidebar
3. Click "Create new"
4. Fill in the required fields:
   - **Title**: Your blog post title
   - **Slug**: Auto-generated from title (click "Generate")
   - **Main Image**: Upload a featured image
   - **Excerpt**: A short summary (150-200 characters)
   - **Body**: Your blog content (supports rich text)
   - **Categories**: Add relevant categories
   - **Author**: Select or create an author
   - **Published At**: Set the publish date
   - **SEO**: Add meta title, description, and keywords

5. Click "Publish" when ready

### Creating Authors

1. Go to "Author" in the Sanity Studio
2. Click "Create new"
3. Fill in:
   - **Name**: Author name
   - **Slug**: Auto-generated
   - **Image**: Author photo
   - **Bio**: Short author biography

### Creating Categories

1. Go to "Category" in the Sanity Studio
2. Click "Create new"
3. Fill in:
   - **Title**: Category name (e.g., "Plumbing", "Electrical", "DIY Tips")
   - **Slug**: Auto-generated
   - **Description**: Category description

## 🎨 Schema Structure

The blog uses the following schemas:

- **Post** (`schemas/post.js`): Main blog post document
- **Author** (`schemas/author.js`): Author profiles
- **Category** (`schemas/category.js`): Post categories
- **Block Content** (`schemas/blockContent.js`): Rich text content

## 🔧 Customization

### Adding More Fields to Posts

Edit `schemas/post.js` and add new fields:

```javascript
defineField({
  name: 'customField',
  title: 'Custom Field',
  type: 'string',
})
```

### Modifying the Blog Layout

- **Blog listing page**: `pages/blog/index.js`
- **Individual post page**: `pages/blog/[slug].js`

### Styling

The blog uses inline styles matching your site's design system:
- Primary color: `#00f0ff` (cyan)
- Background colors: `#0d1117` (dark), `#161b22` (medium)
- Text colors: `#c9d1d9` (light), `#8b949e` (muted)

## 🌐 Going Live

### Enable CORS in Sanity

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "CORS Origins"
4. Add your domain(s):
   - `http://localhost:3000` (for development)
   - `https://www.metroplexpros.com` (for production)
   - `https://*.vercel.app` (if using Vercel preview deployments)

### Deploy Your Site

The blog pages use Next.js Static Generation (SSG) with Incremental Static Regeneration (ISR):
- Pages regenerate every 60 seconds when visited
- New posts appear automatically without rebuilding

## 📚 Useful Commands

```bash
# Deploy schema changes
npx sanity schema deploy

# Start local Sanity Studio
npx sanity dev

# Start Next.js dev server
npm run dev

# Build and deploy
npm run build
npm start
```

## 🎯 Next Steps

1. ✅ Set up your Sanity project
2. ✅ Configure environment variables
3. ✅ Deploy your schema
4. ✅ Create your first author
5. ✅ Create some categories
6. ✅ Write your first blog post
7. ✅ Test on localhost
8. ✅ Deploy to production

## 🆘 Troubleshooting

### "Schema not found" error
Run `npx sanity schema deploy` to deploy your schema to Sanity.

### Images not loading
Make sure you've added your domain to CORS origins in Sanity.

### Environment variables not working
Restart your Next.js dev server after adding/changing `.env.local`.

### Posts not showing up
Check that:
1. Posts are published (not drafts)
2. They have a `publishedAt` date
3. The GROQ queries in `lib/sanityClient.js` are correct

## 📖 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs)
- [Portable Text](https://www.sanity.io/docs/presenting-block-text)

## 🎉 That's It!

Your blog is now ready to go! Start creating content and sharing your expertise with your customers.

For questions or issues, check the Sanity docs or reach out to the development team.
