# Newsletter System Testing Checklist

Use this checklist to test the complete newsletter system before going live.

---

## ✅ Pre-Deployment Checklist

### Database Setup
- [ ] Supabase SQL script has been run successfully
- [ ] `newsletter_subscribers` table exists in Supabase
- [ ] Table has all required columns (id, email, name, source, tokens, etc.)
- [ ] RLS policies are enabled

### Environment Variables
- [ ] `.env.local` has all required variables
- [ ] Vercel environment variables are set
- [ ] `NEXT_PUBLIC_SITE_URL` matches production domain
- [ ] Resend API key is valid

### Email Domain Setup
- [ ] Domain verified in Resend dashboard
- [ ] DNS records properly configured
- [ ] Test email sent successfully from `newsletter@metroplexpros.com`
- [ ] OR using `onboarding@resend.dev` for testing

---

## 🧪 Local Testing

### Test 1: Newsletter Form Displays Correctly

Visit each location and verify the form appears:

- [ ] **Homepage** - http://localhost:3000
  - Newsletter section appears before final CTA
  - Heading: "Home Improvement Tips & Exclusive Offers"
  - Form has email and name fields
  - Submit button says "Subscribe"

- [ ] **Blog Page** - http://localhost:3000/blog
  - Newsletter appears after trust signals
  - Heading: "Never Miss a Tip"
  - Form styling matches site theme

- [ ] **Footer** - Any page (http://localhost:3000)
  - Newsletter section appears above copyright
  - Heading: "Stay Updated with Home Improvement Tips"
  - Form is centered and responsive

### Test 2: Form Validation

Try each scenario on all three locations:

- [ ] Submit with empty fields → Shows error message
- [ ] Submit with invalid email → Shows error message  
- [ ] Submit with only email (no name) → Shows error message
- [ ] Submit with valid data → Shows success message

### Test 3: Confirmation Email Flow

- [ ] Submit form with your real email
- [ ] Check inbox for confirmation email within 1-2 minutes
- [ ] Email subject is: "Confirm your subscription to Metroplex Pros Newsletter"
- [ ] Email has personalized greeting with your name
- [ ] Email has big blue "Confirm Subscription" button
- [ ] Email has fallback link if button doesn't work
- [ ] Email looks good on desktop
- [ ] Email looks good on mobile

### Test 4: Email Confirmation Link

- [ ] Click "Confirm Subscription" button in email
- [ ] Redirects to: `https://www.metroplexpros.com/newsletter-confirmed`
- [ ] Success page displays correctly
- [ ] Success page shows:
  - ✓ Checkmark icon
  - "You're All Set!" heading
  - What to expect section
  - Links to blog and services

### Test 5: Welcome Email

- [ ] After confirming, check inbox again
- [ ] Receive welcome email within 1-2 minutes
- [ ] Email subject is: "Welcome to Metroplex Pros Newsletter! 🎉"
- [ ] Email has personalized greeting
- [ ] Email has green success checkmark
- [ ] "What to Expect" section is visible
- [ ] Featured content links work
- [ ] Contact information is correct
- [ ] Unsubscribe link is present

### Test 6: Database Verification

Check Supabase after completing a test signup:

- [ ] Go to Supabase → Table Editor → newsletter_subscribers
- [ ] New row exists with your email
- [ ] `name` field contains your name
- [ ] `source` field shows correct location (homepage/blog/footer)
- [ ] `confirmed` is `true` after clicking confirmation link
- [ ] `confirmed_at` timestamp is set
- [ ] `confirm_token` is a UUID string

### Test 7: Error Scenarios

#### Invalid Token
- [ ] Visit: `/api/newsletter/confirm?token=invalid-token-12345`
- [ ] Redirects to error page
- [ ] Shows "Invalid confirmation link" message

#### Expired/Used Token
- [ ] Click the same confirmation link twice
- [ ] Second click redirects to confirmed page with "already=true"
- [ ] Message indicates already confirmed

#### Duplicate Email
- [ ] Try to subscribe with same email again
- [ ] Should either: prevent duplicate or show already subscribed message

### Test 8: Mobile Responsiveness

Test on mobile device or browser dev tools (375px width):

- [ ] Homepage newsletter form is fully visible
- [ ] Blog page newsletter form is readable
- [ ] Footer newsletter form works on small screens
- [ ] Email templates render correctly on mobile
- [ ] Confirmation button in email is tappable
- [ ] Success page is mobile-friendly

---

## 🚀 Production Testing

After deploying to production, repeat key tests:

### Production Smoke Tests

- [ ] Visit production site: https://www.metroplexpros.com
- [ ] Newsletter appears on homepage
- [ ] Newsletter appears on blog
- [ ] Newsletter appears in footer
- [ ] Submit test signup with production email
- [ ] Receive confirmation email
- [ ] Click confirmation link
- [ ] Receive welcome email
- [ ] Check Supabase production database for test entry

### Cross-Browser Testing

Test on different browsers:

- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Chrome (mobile)
- [ ] Safari (iOS)

### Email Client Testing

Test email appearance in different clients:

- [ ] Gmail (web)
- [ ] Gmail (mobile app)
- [ ] Apple Mail (desktop)
- [ ] Apple Mail (iOS)
- [ ] Outlook (web)
- [ ] Outlook (desktop app)

---

## 📊 Monitoring After Launch

### First 24 Hours

- [ ] Check Resend dashboard for email delivery success rate
- [ ] Check Supabase for new subscribers
- [ ] Monitor for any error logs
- [ ] Verify confirmation rate (confirmed/total signups)

### First Week

- [ ] Track source breakdown (homepage vs blog vs footer)
- [ ] Calculate conversion rate per page
- [ ] Check for bounce rate issues
- [ ] Review email open rates if available

### Analytics Queries

Run these in Supabase SQL Editor:

**Total Signups:**
```sql
SELECT COUNT(*) FROM newsletter_subscribers;
```

**Confirmed vs Unconfirmed:**
```sql
SELECT 
  SUM(CASE WHEN confirmed THEN 1 ELSE 0 END) as confirmed,
  SUM(CASE WHEN NOT confirmed THEN 1 ELSE 0 END) as unconfirmed
FROM newsletter_subscribers;
```

**Signups by Source:**
```sql
SELECT source, COUNT(*) as count
FROM newsletter_subscribers
GROUP BY source
ORDER BY count DESC;
```

**Recent Signups (Last 7 Days):**
```sql
SELECT email, name, source, confirmed, created_at
FROM newsletter_subscribers
WHERE created_at > NOW() - INTERVAL '7 days'
ORDER BY created_at DESC;
```

---

## 🐛 Common Issues & Fixes

### Emails Not Sending

**Symptom:** Form submits but no email received

**Check:**
1. Resend API key is correct in Vercel
2. Domain is verified in Resend
3. Check Resend logs for errors
4. Verify Supabase connection works

**Fix:**
```bash
# Test Resend API manually
curl -X POST 'https://api.resend.com/emails' \
  -H 'Authorization: Bearer YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "newsletter@metroplexpros.com",
    "to": "your-email@example.com",
    "subject": "Test Email",
    "html": "<p>This is a test</p>"
  }'
```

### Confirmation Link Broken

**Symptom:** Clicking confirmation link shows 404 or error

**Check:**
1. `NEXT_PUBLIC_SITE_URL` environment variable
2. Token exists in database
3. API route is deployed

**Fix:**
- Verify URL in email matches production domain
- Check Vercel deployment includes API routes
- Test API route directly: `/api/newsletter/confirm?token=test`

### Database Connection Fails

**Symptom:** Form shows "An error occurred" message

**Check:**
1. Supabase URL is correct
2. Service role key is correct (not anon key)
3. Table exists and has correct schema

**Fix:**
- Test Supabase connection in browser console
- Verify RLS policies don't block service role
- Check Supabase logs for connection errors

### Form Not Showing Up

**Symptom:** Newsletter section missing from pages

**Check:**
1. Component imported correctly
2. Build succeeded without errors
3. Cache cleared (hard refresh)

**Fix:**
```bash
# Clear Next.js cache and rebuild
rm -rf .next
npm run build
npm run dev
```

---

## ✅ Sign-Off Checklist

Before announcing newsletter to users:

- [ ] All local tests passed
- [ ] All production tests passed
- [ ] Email templates look professional
- [ ] Mobile experience is smooth
- [ ] Error handling works correctly
- [ ] Database is properly configured
- [ ] Monitoring is set up
- [ ] Team knows how to check signups
- [ ] Backup plan ready if issues arise

---

## 🎉 Launch Checklist

Ready to go live:

- [ ] Announce newsletter on social media
- [ ] Add CTA to marketing materials
- [ ] Train team on checking signups
- [ ] Set reminder to send first newsletter
- [ ] Document process for creating newsletters
- [ ] Plan content calendar for monthly sends
- [ ] Set up analytics tracking

**Congratulations! Your newsletter system is live! 🚀**
