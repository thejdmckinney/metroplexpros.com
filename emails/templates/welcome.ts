interface WelcomeEmailProps {
  name?: string
  email: string
}

export const welcomeEmailTemplate = ({ name, email }: WelcomeEmailProps): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MetroPlex Pros</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 40px 20px; text-align: center;">
      <div style="font-size: 48px; margin-bottom: 10px;">✓</div>
      <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">Welcome to MetroPlex Pros!</h1>
      <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.95;">You're officially subscribed</p>
    </div>
    
    <!-- Main Content -->
    <div style="padding: 40px 30px; background: #ffffff;">
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 20px 0; font-weight: 700;">
        Thanks for confirming${name ? `, ${name}` : ''}! 🎉
      </h2>
      
      <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 15px 0;">
        Your subscription is now active! You're part of a growing community of North Texas homeowners who trust MetroPlex Pros for expert electrical and home maintenance guidance.
      </p>
      
      <!-- What to Expect Box -->
      <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid #2563eb; padding: 25px; margin: 30px 0; border-radius: 8px;">
        <h3 style="color: #1e40af; font-size: 20px; margin: 0 0 15px 0; font-weight: 700;">
          📬 What to Expect
        </h3>
        <ul style="color: #1e40af; line-height: 1.8; font-size: 15px; margin: 0; padding-left: 20px;">
          <li><strong>Weekly Tips:</strong> Expert electrical and home maintenance advice</li>
          <li><strong>Seasonal Guides:</strong> North Texas-specific home care reminders</li>
          <li><strong>Exclusive Offers:</strong> Special discounts for subscribers</li>
          <li><strong>Safety Alerts:</strong> Important electrical safety updates</li>
        </ul>
      </div>
      
      <!-- Featured Content -->
      <div style="background: #f9fafb; padding: 25px; margin: 30px 0; border-radius: 8px; border: 1px solid #e5e7eb;">
        <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 15px 0; font-weight: 700;">
          🔧 While You're Here...
        </h3>
        <p style="color: #4b5563; line-height: 1.7; font-size: 15px; margin: 0 0 20px 0;">
          Check out our most popular resources:
        </p>
        <div style="margin-bottom: 15px;">
          <a href="https://www.metroplexpros.com/blog" style="display: inline-block; color: #2563eb; text-decoration: none; font-weight: 600; font-size: 15px;">
            📖 Browse Our Blog →
          </a>
        </div>
        <div style="margin-bottom: 15px;">
          <a href="https://www.metroplexpros.com/services/electrical" style="display: inline-block; color: #2563eb; text-decoration: none; font-weight: 600; font-size: 15px;">
            ⚡ Electrical Services →
          </a>
        </div>
        <div>
          <a href="https://www.metroplexpros.com/services/electrical/basic-inspection" style="display: inline-block; color: #2563eb; text-decoration: none; font-weight: 600; font-size: 15px;">
            🔍 Schedule Inspection →
          </a>
        </div>
      </div>
      
      <!-- Contact Section -->
      <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 4px;">
        <h3 style="color: #92400e; font-size: 18px; margin: 0 0 10px 0; font-weight: 700;">
          💡 Need Electrical Help?
        </h3>
        <p style="color: #78350f; line-height: 1.7; font-size: 15px; margin: 0 0 15px 0;">
          We're here for all your electrical needs in the Dallas-Fort Worth area.
        </p>
        <div style="text-align: center;">
          <a href="tel:682-466-2130" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 700; font-size: 15px; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);">
            Call (682) 466-2130
          </a>
        </div>
      </div>
      
      <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <strong>P.S.</strong> We respect your inbox. No spam, just valuable content. You can unsubscribe anytime by clicking the link at the bottom of any email.
      </p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 30px 20px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 13px; margin: 0 0 5px 0; font-weight: 600;">
        MetroPlex Pros
      </p>
      <p style="color: #9ca3af; font-size: 12px; margin: 0 0 15px 0;">
        Licensed Electrical Contractor | Dallas-Fort Worth, TX
      </p>
      <div style="margin: 20px 0;">
        <a href="https://www.metroplexpros.com" style="color: #2563eb; text-decoration: none; font-size: 12px; margin: 0 10px;">Website</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://www.metroplexpros.com/blog" style="color: #2563eb; text-decoration: none; font-size: 12px; margin: 0 10px;">Blog</a>
        <span style="color: #d1d5db;">|</span>
        <a href="https://www.metroplexpros.com/contact" style="color: #2563eb; text-decoration: none; font-size: 12px; margin: 0 10px;">Contact</a>
      </div>
      <p style="color: #9ca3af; font-size: 11px; margin: 0; line-height: 1.6;">
        You're receiving this because you confirmed your subscription to ${email}<br/>
        <a href="https://www.metroplexpros.com/unsubscribe?email=${encodeURIComponent(email)}" style="color: #9ca3af; text-decoration: underline;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export default welcomeEmailTemplate
