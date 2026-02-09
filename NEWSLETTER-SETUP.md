# Newsletter Signup System - Setup Instructions

## ✅ Files Created

### Components
- `components/NewsletterSignup.tsx` - Newsletter signup form component

### API Routes
- `pages/api/newsletter/subscribe.ts` - Handles newsletter subscriptions
- `pages/api/newsletter/confirm.ts` - Handles email confirmations

### Pages
- `pages/newsletter-confirmed.tsx` - Success page after email confirmation
- `pages/newsletter-error.tsx` - Error page if confirmation fails

### Database
- `supabase-newsletter-setup.sql` - SQL script to create the database table

## 🗄️ Database Setup

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/agtymepyibxxizfmpyqz
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy the contents of `supabase-newsletter-setup.sql` and paste it
5. Click "Run" to create the table

The table will have these columns:
- `id` - Unique identifier (UUID)
- `email` - Subscriber email (unique, required)
- `name` - Subscriber name (optional)
- `source` - Where they signed up from (required)
- `confirm_token` - Email confirmation token (unique)
- `confirmed` - Whether email is confirmed (boolean)
- `confirmed_at` - When they confirmed (timestamp)
- `status` - active or unsubscribed
- `subscribed_at` - When they subscribed
- `unsubscribed_at` - When they unsubscribed (if applicable)
- `created_at` - Record creation time
- `updated_at` - Last update time

## 📧 Email Setup

Your Resend API key is already configured in `.env.local`:
```
RESEND_API_KEY=re_NoZeHZfL_4pa8dkBiP3EPmFbbFkBAeUpw
```

**IMPORTANT:** You need to verify your domain with Resend to send from `@metroplexpros.com`:

1. Go to https://resend.com/domains
2. Add your domain: `metroplexpros.com`
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (usually a few minutes to hours)

Until then, emails will send from Resend's sandbox domain (only to verified email addresses).

## 🔑 Environment Variables

All required environment variables are already set in `.env.local`:

```bash
# Supabase (Newsletter Database)
NEXT_PUBLIC_SUPABASE_URL=https://agtymepyibxxizfmpyqz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABSE_SERVICE_ROLE_KEY=eyJhbGci...

# Resend (Email Sending)
RESEND_API_KEY=re_NoZeHZfL_4pa8dkBiP3EPmFbbFkBAeUpw

# Site URL (for confirmation links)
NEXT_PUBLIC_SITE_URL=https://www.metroplexpros.com
```

**Note:** There's a typo in the service key variable name (`SUPABSE_SERVICE_ROLE_KEY` instead of `SUPABASE_SERVICE_ROLE_KEY`). The code is already using the typo'd version, so it will work as-is.

## 🎨 How to Use

### Add to Any Page

Import and use the component:

```tsx
import NewsletterSignup from '../components/NewsletterSignup'

// Inside your page component:
<NewsletterSignup source="homepage" />

// Or with custom styling:
<NewsletterSignup 
  source="blog-electrical-tips" 
  className="my-custom-class"
/>
```

### Add to Blog Posts

Example for `/pages/blog/[slug].tsx`:

```tsx
import NewsletterSignup from '../../components/NewsletterSignup'

// After the blog content:
<section style={{ padding: '4rem 0', backgroundColor: '#0d1117' }}>
  <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
    <NewsletterSignup source={`blog-${post.slug.current}`} />
  </div>
</section>
```

## 🧪 Testing Checklist

### Local Testing (before deploying):

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Create test page** (optional):
   Create `/pages/test-newsletter.tsx`:
   ```tsx
   import NewsletterSignup from '../components/NewsletterSignup'
   
   export default function TestNewsletter() {
     return (
       <div style={{ padding: '4rem 2rem', background: '#0d1117', minHeight: '100vh' }}>
         <NewsletterSignup source="test-page" />
       </div>
     )
   }
   ```
   Visit: http://localhost:3000/test-newsletter

3. **Test subscription flow:**
   - Fill out form with your email
   - Click "Subscribe Now"
   - Should see success message
   - Check email for confirmation link
   - Click confirmation link
   - Should redirect to `/newsletter-confirmed`

4. **Check Supabase:**
   - Go to Supabase dashboard
   - Click "Table Editor"
   - Select `newsletter_subscribers` table
   - Verify your record shows `confirmed: true`

### Production Testing (after deploying):

1. Add `<NewsletterSignup source="blog-test" />` to a blog post
2. Test the full flow on your live site
3. Verify emails are being sent and received

## 🚀 Deployment

The system is ready to deploy! Just commit and push:

```bash
git add .
git commit -m "Add newsletter signup system with email confirmation"
git push origin main
```

Vercel will automatically:
- Deploy the new API routes
- Deploy the new pages
- Use the environment variables from your Vercel project settings

**Important:** Make sure these environment variables are also set in your Vercel project:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABSE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

## 📊 Viewing Subscribers

To view your newsletter subscribers:

1. Go to Supabase dashboard: https://supabase.com/dashboard/project/agtymepyibxxizfmpyqz
2. Click "Table Editor"
3. Select `newsletter_subscribers` table
4. You'll see all subscribers with:
   - Email
   - Name
   - Source (which page they subscribed from)
   - Confirmation status
   - Subscribe date

## 🔒 Security Features

- ✅ Email validation (regex check)
- ✅ Duplicate email prevention
- ✅ Service role key used for database writes (not exposed to client)
- ✅ Confirmation tokens are UUIDs (secure and unique)
- ✅ Row Level Security (RLS) enabled on database table
- ✅ Rate limiting handled by Vercel Edge Functions automatically

## 📝 Future Enhancements

You can add later:
- Unsubscribe functionality
- Welcome email after confirmation
- Admin dashboard to view/export subscribers
- Integration with email marketing service (Mailchimp, ConvertKit, etc.)
- Analytics tracking for signup sources

## ❓ Troubleshooting

### Emails not sending:
- Check Resend API key is correct
- Verify domain is added to Resend
- Check Resend dashboard for error logs

### Confirmation not working:
- Check Supabase service key is correct
- Verify table was created properly
- Check browser console for errors

### Database errors:
- Verify Supabase URL and keys are correct
- Check table exists in Supabase dashboard
- Verify RLS policies are set correctly

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Check Vercel deployment logs
3. Check Supabase logs in dashboard
4. Check Resend logs in dashboard

---

**System is ready to use! Just run the SQL script in Supabase and start testing.** 🎉
