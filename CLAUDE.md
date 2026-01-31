# Halyard Labs Website

Next.js marketing site with contact form.

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Dev server on localhost:3000
pnpm build       # Production build
pnpm start       # Start production server
pnpm typecheck   # Run TypeScript type checking
pnpm lint        # Run ESLint
```

## Environment Variables

Required in `.env.local`:
- `RESEND_API_KEY` - Resend API key for email
- `EMAIL` - Destination email for contact form submissions

## Structure

- `pages/` - Next.js pages (index, about, contact)
- `pages/og-preview.tsx` - OG image template (1200x630)
- `pages/api/email.ts` - Contact form handler
- `public/` - Static assets (preview.png, alex.png, favicon)
- `lib/resend.ts` - Resend client setup

## OG Image Generation

To regenerate the OG preview image:

```bash
# Start dev server
pnpm dev

# Capture screenshot with Playwright (adjust port if needed)
npx playwright screenshot --viewport-size="1200,630" http://localhost:3000/og-preview public/preview.png
```

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
