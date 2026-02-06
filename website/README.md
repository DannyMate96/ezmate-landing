# ezmate.ai Landing Page

HVCO (High-Value Content Offer) landing page for lead capture.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Auto-deploys on every push

## Pages

- `/` - Landing page with email capture
- `/thank-you` - Post-signup confirmation

## Configuration

### Email Provider Integration

Update the form submission handler in `src/app/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  // Add your ConvertKit/Mailerlite API integration here
}
```

### Calendly Link

Update the Calendly URL in `src/app/thank-you/page.tsx`:

```typescript
const calendlyLink = 'https://calendly.com/your-link'
```

## Environment Variables (Optional)

Create `.env.local` for API keys:

```
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id
```
