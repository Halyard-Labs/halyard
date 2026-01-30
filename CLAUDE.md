# Halyard Consulting Website

Next.js marketing site with contact form.

## Commands

```bash
yarn install     # Install dependencies
yarn dev         # Dev server on localhost:3000
yarn build       # Production build
yarn start       # Start production server
```

## Environment Variables

Required in `.env.local`:
- `SENDGRID_API_KEY` - SendGrid API key for email
- `EMAIL` - Destination email for contact form submissions

## Structure

- `pages/` - Next.js pages (index, contact)
- `pages/api/email.ts` - Contact form handler (sends receipt + forwards inquiry)
- `components/` - UI components (button, footer, grid, logo, nav, textfield)
- `lib/sendgrid.tsx` - SendGrid client setup

## Contact Form Flow

1. User submits form on `/contact`
2. `POST /api/email` receives `{email, name, description}`
3. Sends auto-receipt to user + forwards inquiry to `EMAIL` env var

## MCP Servers

```json
{
  "mcpServers": {
    "ask-expert": {
      "type": "http",
      "url": "https://mcp.ask-expert.ai"
    },
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    },
    "vercel": {
      "type": "http",
      "url": "https://mcp.vercel.com"
    }
  }
}
```
