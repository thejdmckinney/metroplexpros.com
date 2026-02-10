interface ConfirmationEmailProps {
  name?: string
  confirmLink: string
}

export const confirmationEmailTemplate = ({ name, confirmLink }: ConfirmationEmailProps): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Your Subscription</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 40px 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">MetroPlex Pros</h1>
      <p style="margin: 10px 0 0 0; font-size: 14px; opacity: 0.9;">Licensed Electrical Contractor</p>
    </div>
    
    <!-- Main Content -->
    <div style="padding: 40px 30px; background: #ffffff;">
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 20px 0; font-weight: 700;">
        Thanks for subscribing${name ? `, ${name}` : ''}! 🎉
      </h2>
      
      <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 15px 0;">
        We're excited to have you join our community of North Texas homeowners!
      </p>
      
      <p style="color: #4b5563; line-height: 1.7; font-size: 16px; margin: 0 0 30px 0;">
        Click the button below to confirm your subscription and start receiving expert home maintenance and electrical tips:
      </p>
      
      <!-- CTA Button -->
      <div style="text-align: center; margin: 40px 0;">
        <a href="${confirmLink}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4); transition: all 0.2s;">
          Confirm Subscription
        </a>
      </div>
      
      <div style="background: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; margin: 30px 0; border-radius: 4px;">
        <h3 style="color: #1f2937; font-size: 18px; margin: 0 0 10px 0; font-weight: 700;">
          What You'll Get:
        </h3>
        <ul style="color: #4b5563; line-height: 1.8; font-size: 15px; margin: 0; padding-left: 20px;">
          <li>Expert electrical and home maintenance tips</li>
          <li>Seasonal home care reminders for North Texas</li>
          <li>Special offers on our services</li>
          <li>DIY guides and safety information</li>
        </ul>
      </div>
      
      <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <strong>Can't click the button?</strong> Copy and paste this link into your browser:<br/>
        <a href="${confirmLink}" style="color: #2563eb; word-break: break-all; text-decoration: none;">${confirmLink}</a>
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
      <p style="color: #9ca3af; font-size: 11px; margin: 0; line-height: 1.6;">
        You're receiving this because you subscribed to our newsletter.<br/>
        This confirmation link will expire in 7 days.
      </p>
    </div>
  </div>
</body>
</html>
  `.trim()
}

export default confirmationEmailTemplate
