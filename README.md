# Engineering Global - Strapi CMS Website

A professional engineering consultancy website built with Next.js 16 and Strapi CMS, inspired by Mott MacDonald's design aesthetic.

## Features

- **Strapi CMS Integration** - Full headless CMS for dynamic content management
- **Modern Design** - Professional black and white theme with purple accent
- **Responsive** - Mobile-first design that works perfectly on all devices
- **Scroll Animations** - Smooth, professional animations when elements come into view
- **Type-safe** - Full TypeScript implementation with proper Strapi typing
- **SEO Optimized** - Comprehensive metadata for all pages
- **Image Optimization** - Next.js Image component for optimized media delivery

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **CMS**: Strapi (Headless)
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Animations**: CSS animations with Intersection Observer
- **Icons**: Lucide React

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing and detail pages
│   ├── services/          # Services listing and detail pages
│   ├── team/              # Team listing and detail pages
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Site footer
│   ├── hero-section.tsx  # Homepage hero
│   └── ...               # Other components
├── hooks/                # Custom React hooks
│   └── use-scroll-animation.ts
├── lib/                  # Utilities
│   └── strapi.ts        # Strapi API integration
├── strapi-content/       # Sample Strapi JSON content
│   ├── projects.json
│   ├── services.json
│   ├── markets.json
│   ├── key-services.json
│   ├── team-members.json
│   ├── jobs.json
│   ├── contact-page.json
│   └── page-content.json
├── public/               # Static assets
└── STRAPI_CONTENT_GUIDE.md  # Detailed Strapi setup guide
```

## Design System

### Colors

- **Primary**: Black (`oklch(0 0 0)`)
- **Secondary**: White (`oklch(1 0 0)`)
- **Accent**: Purple (`oklch(0.5915 0.2366 289.67)`)
- **Background**: White
- **Foreground**: Black

### Typography

- **Font Family**: Inter (sans-serif)
- **Headings**: 600 weight, negative letter-spacing
- **Body**: 400 weight, 1.6 line-height

### Components

- Sharp corners (no border radius) for professional aesthetic
- Hover transitions to accent color on all links
- Smooth scroll animations using Intersection Observer
- Mobile-responsive navigation with slide-out drawer

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Strapi backend (optional - site works with fallback content)

### Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
STRAPI_API_TOKEN=your_api_token_here
```

Note: The site works without Strapi using fallback content. Add these variables only if you want to connect to a Strapi backend.

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Strapi CMS Setup (Optional)

The website includes comprehensive fallback content, so Strapi is optional. To connect a Strapi backend:

### 1. Install Strapi

```bash
npx create-strapi-app@latest backend --quickstart
```

### 2. Create Content Types

Follow the detailed instructions in `STRAPI_CONTENT_GUIDE.md` to set up:

- Projects (Collection Type)
- Services (Collection Type)
- Markets (Collection Type)
- Key Services (Collection Type)
- Team Members (Collection Type)
- Jobs (Collection Type)
- Page Content (Single Type)
- Contact Page (Single Type)

### 3. Configure Permissions

In Strapi admin panel:
- Go to **Settings > Users & Permissions > Roles > Public**
- Enable `find` and `findOne` for all content types

### 4. Add Sample Content

Use the JSON files in `strapi-content/` directory as reference for creating content.

### 5. Set Environment Variables

Add your Strapi URL and API token to `.env.local` as shown above.

## Content Structure

### Pages

- **Homepage** (`/`) - Hero, stats, featured projects, services overview
- **About** (`/about`) - Company mission, values, heritage
- **Services** (`/services`) - Markets and key services breakdown
- **Projects** (`/projects`) - Filterable project showcase
- **Team** (`/team`) - Team member profiles
- **Careers** (`/careers`) - Job listings and application info
- **Contact** (`/contact`) - Contact form and office locations

### Dynamic Routes

- `/projects/[slug]` - Individual project detail pages
- `/services/[slug]` - Individual service detail pages
- `/team/[slug]` - Individual team member profiles

## API Integration

The `lib/strapi.ts` file provides utilities for fetching data from Strapi:

```typescript
// Fetch all projects
const projects = await getProjects()

// Fetch single project by slug
const project = await getProjectBySlug('sydney-metro')

// Fetch all services
const services = await getServices()

// Fetch page content
const pageContent = await getPageContent()
```

All functions include proper error handling and return `null` or empty arrays on failure, allowing graceful fallback to example content.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_STRAPI_URL` | Strapi API URL (e.g., `http://localhost:1337/api`) | No* |
| `STRAPI_API_TOKEN` | Strapi API authentication token | No* |

*Not required - site functions with fallback content when Strapi is not connected.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a template project. Feel free to customize it for your needs!

## License

MIT License - feel free to use this project for any purpose.

## Support

For questions or issues:
- Check `STRAPI_CONTENT_GUIDE.md` for Strapi setup
- Review the code comments for implementation details
- Ensure environment variables are correctly configured

## Acknowledgments

- Design inspired by Mott MacDonald
- Built with Next.js, Strapi, and Tailwind CSS
- UI components from shadcn/ui
