import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service, message, budget } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'jeremy@metroplexpros.com',
      to: ['jeremy@metroplexpros.com', 'ashley@creativejobhub.com'],
      subject: `🔔 New Lead: ${name} - ${service || 'General Inquiry'}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0a0e14 0%, #00f0ff 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #00f0ff; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #00f0ff; }
              .footer { background: #0a0e14; color: #8b949e; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
              .badge { display: inline-block; background: #00f0ff; color: #0a0e14; padding: 5px 15px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 28px;">🎯 New Lead Received!</h1>
                <div class="badge">METROPLEX PROS</div>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Phone:</div>
                  <div class="value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">🔧 Service Requested:</div>
                  <div class="value">${service || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <div class="label">💰 Budget:</div>
                  <div class="value">${budget || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${message || 'No message provided'}</div>
                </div>
                
                <div class="field">
                  <div class="label">🌐 Source:</div>
                  <div class="value">metroplexpros.com</div>
                </div>
                
                <div class="field">
                  <div class="label">⏰ Submitted:</div>
                  <div class="value">${new Date().toLocaleString()}</div>
                </div>
              </div>
              
              <div class="footer">
                <p>This is an automated notification from your Metroplex Pros contact form.</p>
                <p>Reply directly to this email to respond to the customer.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
