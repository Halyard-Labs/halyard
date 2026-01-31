// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from 'next'
import { resend } from '../../lib/resend'

const emailFooter = `
<table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 24px;">
  <tr>
    <td>
      <p style="font-family: 'DM Sans', Arial, sans-serif; font-size: 16px; font-weight: 700; color: #1e1b4b; margin: 0;">
        <span style="display: inline-block; width: 10px; height: 10px; background: #f472b6; border-radius: 50%; margin-right: 8px; vertical-align: middle;"></span>Halyard Labs
      </p>
      <p style="font-family: 'DM Sans', Arial, sans-serif; font-size: 13px; color: #94a3b8; margin: 12px 0 0 0;">
        AI & Software Consultancy
      </p>
      <p style="font-family: 'DM Sans', Arial, sans-serif; font-size: 12px; color: #94a3b8; margin: 8px 0 0 0;">
        <a href="https://halyard.dev" style="color: #64748b; text-decoration: none;">halyard.dev</a>
      </p>
    </td>
  </tr>
</table>
`

function sendReceipt(email: string) {
  const textContent = `Thanks for reaching out to Halyard Labs!

I've received your enquiry and will be in touch shortly.

In the meantime, feel free to reply to this email if you have any additional details to share about your project or questions you'd like to discuss.

Cheers,
Alex

--
Halyard Labs · AI & Software Consultancy
https://halyard.dev`

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 24px; background: #fffbeb; font-family: 'DM Sans', Arial, sans-serif;">
  <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <p style="font-size: 16px; line-height: 1.7; color: #1e1b4b; margin: 0 0 16px 0;">
      Thanks for reaching out to Halyard Labs!
    </p>
    <p style="font-size: 16px; line-height: 1.7; color: #64748b; margin: 0 0 16px 0;">
      I've received your enquiry and will be in touch shortly.
    </p>
    <p style="font-size: 16px; line-height: 1.7; color: #64748b; margin: 0 0 24px 0;">
      In the meantime, feel free to reply to this email if you have any additional details to share about your project or questions you'd like to discuss.
    </p>
    <p style="font-size: 16px; line-height: 1.7; color: #1e1b4b; margin: 0;">
      Cheers,<br>Alex
    </p>
    ${emailFooter}
  </div>
</body>
</html>
`

  return resend.emails.send({
    replyTo: process.env.EMAIL!,
    from: 'Alex <alex@halyard.dev>',
    to: email,
    text: textContent,
    html: htmlContent,
    subject: 'Thanks for your enquiry - Halyard Labs',
  })
}

function forwardEmail(email: string, name: string, description: string) {
  const textContent = `New enquiry from halyard.dev

Name: ${name}
Email: ${email}

Message:
${description}

--
Reply directly to respond to ${email}`

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 24px; background: #fffbeb; font-family: 'DM Sans', Arial, sans-serif;">
  <div style="max-width: 520px; margin: 0 auto; background: #fff; border-radius: 12px; padding: 32px; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
    <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin: 0 0 16px 0;">
      New Enquiry
    </p>
    <table cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
      <tr>
        <td style="font-size: 14px; color: #94a3b8; padding: 4px 16px 4px 0; vertical-align: top;">Name</td>
        <td style="font-size: 14px; color: #1e1b4b; font-weight: 500;">${name}</td>
      </tr>
      <tr>
        <td style="font-size: 14px; color: #94a3b8; padding: 4px 16px 4px 0; vertical-align: top;">Email</td>
        <td style="font-size: 14px; color: #1e1b4b;"><a href="mailto:${email}" style="color: #1e1b4b;">${email}</a></td>
      </tr>
    </table>
    <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <p style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin: 0 0 8px 0;">
        Message
      </p>
      <p style="font-size: 15px; line-height: 1.6; color: #1e1b4b; margin: 0; white-space: pre-wrap;">${description}</p>
    </div>
    <p style="font-size: 13px; color: #64748b; margin: 0;">
      Reply directly to respond to <a href="mailto:${email}" style="color: #1e1b4b;">${email}</a>
    </p>
    ${emailFooter}
  </div>
</body>
</html>
`

  return resend.emails.send({
    replyTo: email,
    from: 'Halyard <noreply@halyard.dev>',
    to: process.env.EMAIL!,
    text: textContent,
    html: htmlContent,
    subject: `New Enquiry: ${name}`,
  })
}

const handler: NextApiHandler = async (req, res) => {
  const { email, description, name } = JSON.parse(req.body)

  try {
    await Promise.all([
      sendReceipt(email),
      forwardEmail(email, name, description),
    ])
    console.log('Emails sent')
    res.status(200).json(req.body)
  } catch (error) {
    console.error('Email send failed:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}

export default handler
