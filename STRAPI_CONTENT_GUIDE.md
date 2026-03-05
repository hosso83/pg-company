# Strapi CMS Content Structure Guide

Complete guide for setting up Strapi CMS content types for the Engineering Global website.

---

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Content Types](#content-types)
3. [Permissions Configuration](#permissions-configuration)
4. [Sample Content](#sample-content)
5. [API Endpoints](#api-endpoints)
6. [Contact Page Setup](#contact-page-setup)

---

## Installation & Setup

### Step 1: Install Strapi

```bash
npx create-strapi-app@latest backend --quickstart
```

This will create a new Strapi project in the `backend` folder and start the admin panel.

### Step 2: Access Admin Panel

Navigate to `http://localhost:1337/admin` and create your admin account.

### Step 3: Configure Environment Variables

In your Next.js project root, add to `.env.local`:

```env


```

To generate an API token:
1. Go to Settings > API Tokens in Strapi admin
2. Create a new token with "Read-only" type
3. Copy the token and add it to your `.env.local`

---

## Content Types

### 1. Project (Collection Type)

Projects showcase completed engineering works and case studies.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `title` | Text | Required, Short text | Project name |
| `description` | Rich Text (Markdown) | Required | Detailed project description |
| `location` | Text | Required, Short text | City or region where project is located |
| `region` | Text | Required, Short text | Geographic region (e.g., "North America", "Europe") |
| `slug` | UID | Required, Target field: title | URL-friendly identifier |
| `image` | Media | Required, Single media | Featured project image |
| `sector` | Text | Optional, Short text | Industry sector (e.g., "Transportation", "Energy") |
| `client` | Text | Optional, Short text | Client name |
| `completionDate` | Date | Optional | When the project was completed |
| `projectValue` | Text | Optional, Short text | Project budget/value |
| `challenge` | Rich Text (Markdown) | Optional | Project challenges faced |
| `solution` | Rich Text (Markdown) | Optional | How challenges were solved |
| `outcomes` | Rich Text (Markdown) | Optional | Project results and impact |

#### JSON Structure Example

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Sydney Metro Northwest Rail Link",
        "description": "A 36km rail line with 8 new stations connecting northwest Sydney to the existing network. The project includes twin 15km tunnels and upgraded infrastructure.",
        "location": "Sydney, Australia",
        "region": "Asia Pacific",
        "slug": "sydney-metro-northwest",
        "sector": "Transportation",
        "client": "Transport for NSW",
        "completionDate": "2019-05-26",
        "projectValue": "$8.3 billion AUD",
        "challenge": "Delivering a complex rail project through densely populated areas with minimal disruption to existing services and communities.",
        "solution": "Advanced tunnel boring technology, extensive community engagement, and innovative construction methods to minimize surface disruption.",
        "outcomes": "Successfully delivered on time, carrying over 100,000 passengers daily and reducing travel times by up to 30 minutes.",
        "image": {
          "data": {
            "id": 1,
            "attributes": {
              "url": "/uploads/sydney_metro_1234.jpg",
              "alternativeText": "Sydney Metro train at station",
              "width": 1920,
              "height": 1080
            }
          }
        },
        "publishedAt": "2024-01-15T10:00:00.000Z"
      }
    }
  ]
}
```

### 2. Service (Collection Type)

Services represent the company's core offerings and capabilities.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `title` | Text | Required, Short text | Service name |
| `description` | Rich Text (Markdown) | Required | Detailed service description |
| `icon` | Text | Required, Short text | Lucide icon name (e.g., "Building2", "Zap") |
| `slug` | UID | Required, Target field: title | URL-friendly identifier |
| `category` | Enumeration | Optional | "Advisory", "Design", "Management", "Digital" |
| `summary` | Text | Optional, Long text | Brief overview for listing pages |
| `keyCapabilities` | JSON | Optional | Array of capability strings |
| `benefits` | Rich Text (Markdown) | Optional | Client benefits and value proposition |
| `industries` | Text | Optional, Long text | Comma-separated industries served |

#### JSON Structure Example

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Transportation Planning",
        "description": "Comprehensive transportation planning services including traffic modeling, public transit design, and smart mobility solutions for cities worldwide.",
        "icon": "Train",
        "slug": "transportation-planning",
        "category": "Advisory",
        "summary": "Strategic planning for sustainable and efficient transportation systems",
        "keyCapabilities": [
          "Traffic impact analysis",
          "Public transit network design",
          "Smart city integration",
          "Pedestrian and cycling infrastructure",
          "Transportation demand modeling"
        ],
        "benefits": "Our transportation planning helps cities reduce congestion, lower emissions, and improve quality of life through data-driven, sustainable solutions.",
        "industries": "Urban Development, Government, Infrastructure"
      }
    }
  ]
}
```

### 3. Team Member (Collection Type)

Team members showcase the company's expertise and leadership.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `name` | Text | Required, Short text | Full name |
| `role` | Text | Required, Short text | Job title/position |
| `location` | Text | Required, Short text | Office location or city |
| `bio` | Rich Text (Markdown) | Required | Professional biography |
| `slug` | UID | Required, Target field: name | URL-friendly identifier |
| `image` | Media | Required, Single media | Professional headshot |
| `email` | Email | Optional | Contact email |
| `linkedIn` | Text | Optional, Short text | LinkedIn profile URL |
| `expertise` | Text | Optional, Long text | Comma-separated areas of expertise |
| `qualifications` | Text | Optional, Long text | Professional certifications and degrees |
| `yearsExperience` | Number | Optional, Integer | Years of professional experience |
| `department` | Enumeration | Optional | "Leadership", "Engineering", "Design", "Advisory" |

#### JSON Structure Example

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Dr. Sarah Chen",
        "role": "Chief Engineer - Sustainable Infrastructure",
        "location": "London, UK",
        "bio": "Dr. Sarah Chen leads our sustainable infrastructure practice with over 20 years of experience in green building design and renewable energy integration. She has delivered major projects across Europe and Asia, focusing on net-zero carbon solutions.",
        "slug": "sarah-chen",
        "email": "sarah.chen@example.com",
        "linkedIn": "https://linkedin.com/in/sarahchen",
        "expertise": "Sustainable Design, Green Buildings, Renewable Energy, Carbon Reduction",
        "qualifications": "PhD Civil Engineering (Cambridge), Chartered Engineer, LEED AP",
        "yearsExperience": 22,
        "department": "Engineering",
        "image": {
          "data": {
            "id": 1,
            "attributes": {
              "url": "/uploads/sarah_chen_1234.jpg",
              "alternativeText": "Dr. Sarah Chen portrait",
              "width": 800,
              "height": 1000
            }
          }
        }
      }
    }
  ]
}
```

### 4. Page Content (Single Type)

Global page content for the homepage hero and about sections.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `heroTitle` | Text | Required, Long text | Main homepage headline |
| `heroSubtitle` | Text | Required, Long text | Supporting hero text |
| `heroImage` | Media | Optional, Single media | Hero background image |
| `aboutTitle` | Text | Required, Short text | About section headline |
| `aboutDescription` | Rich Text (Markdown) | Required | Company overview and mission |
| `statsTitle` | Text | Optional, Short text | Statistics section title |
| `companyName` | Text | Optional, Short text | Company name override |
| `tagline` | Text | Optional, Short text | Company tagline |

#### JSON Structure Example

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "heroTitle": "Engineering Excellence for a Sustainable Future",
      "heroSubtitle": "We deliver world-class infrastructure projects that improve communities and protect our planet for generations to come.",
      "heroImage": {
        "data": {
          "id": 1,
          "attributes": {
            "url": "/uploads/hero_bg_1234.jpg",
            "alternativeText": "Modern infrastructure project",
            "width": 1920,
            "height": 1080
          }
        }
      },
      "aboutTitle": "Global Leaders in Engineering Consultancy",
      "aboutDescription": "For over 50 years, we've been at the forefront of engineering innovation, delivering complex infrastructure projects across 150 countries. Our 18,000 professionals combine technical excellence with local expertise to create sustainable solutions.",
      "statsTitle": "Our Global Impact",
      "companyName": "Engineering Global",
      "tagline": "Opening up opportunities for everyone"
    }
  }
}
```

### 5. Job Posting (Collection Type) - Optional

For the careers page.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `title` | Text | Required, Short text | Job title |
| `location` | Text | Required, Short text | Office location |
| `department` | Enumeration | Required | "Engineering", "Design", "Advisory", "Management", "Digital" |
| `type` | Enumeration | Required | "Full-time", "Part-time", "Contract" |
| `description` | Rich Text (Markdown) | Required | Full job description |
| `requirements` | Rich Text (Markdown) | Required | Required qualifications and skills |
| `slug` | UID | Required, Target field: title | URL-friendly identifier |
| `salary` | Text | Optional, Short text | Salary range |
| `remote` | Boolean | Optional, Default: false | Remote work available |
| `deadline` | Date | Optional | Application deadline |

### 6. Contact Page (Single Type)

Contact page content including office locations and contact information.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `heroTitle` | Text | Required, Short text | Contact page headline |
| `heroSubtitle` | Text | Required, Long text | Contact page description |
| `contactInfo` | JSON | Required | Main contact information object |
| `offices` | JSON | Required | Array of office locations |
| `formSettings` | JSON | Required | Form configuration and options |
| `socialMedia` | JSON | Optional | Social media links |
| `mapSettings` | JSON | Optional | Map configuration |

#### JSON Structure Example

See `strapi-content/contact-page.json` for the complete structure including:
- Headquarters information
- Multiple office locations
- Business hours
- Contact emails and phone numbers
- Form service options
- Social media links

### 7. Markets (Collection Type)

Market sectors the company serves.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `title` | Text | Required, Short text | Market name (e.g., "Buildings", "Energy") |
| `description` | Rich Text (Markdown) | Required | Market description |
| `icon` | Text | Required, Short text | Lucide icon name |
| `slug` | UID | Required, Target field: title | URL-friendly identifier |
| `summary` | Text | Optional, Long text | Brief overview |

### 8. Key Services (Collection Type)

Service capabilities offered by the company.

#### Fields Configuration

| Field Name | Type | Settings | Description |
|------------|------|----------|-------------|
| `title` | Text | Required, Short text | Service name (e.g., "Advisory", "Engineering Design") |
| `description` | Rich Text (Markdown) | Required | Service description |
| `icon` | Text | Required, Short text | Lucide icon name |
| `slug` | UID | Required, Target field: title | URL-friendly identifier |
| `summary` | Text | Optional, Long text | Brief overview |

---

## Permissions Configuration

### Public Role Permissions

Go to **Settings > Users & Permissions > Roles > Public** and enable:

#### All Content Types
- ✅ `find` - Get list of items
- ✅ `findOne` - Get single item by ID

#### Single Types (Page Content, Contact Page)
- ✅ `find` - Get single type content

### API Token (Recommended)

For production, create an API token:

1. Go to **Settings > API Tokens**
2. Click **Create new API Token**
3. Name: "Next.js Frontend"
4. Token type: **Read-only**
5. Token duration: **Unlimited**
6. Click **Save**
7. Copy the token and add to `.env.local` as `STRAPI_API_TOKEN`

---

## API Endpoints

### Projects

```bash
# Get all projects (paginated)
GET /api/projects?populate=image&pagination[page]=1&pagination[pageSize]=8&sort=publishedAt:desc

# Get project by slug
GET /api/projects?filters[slug][$eq]=sydney-metro-northwest&populate=image

# Filter by region
GET /api/projects?filters[region][$eq]=Europe&populate=image
```

### Services

```bash
# Get all services
GET /api/services?sort=id:asc

# Get service by slug
GET /api/services?filters[slug][$eq]=transportation-planning
```

### Team Members

```bash
# Get all team members (paginated)
GET /api/team-members?populate=image&pagination[page]=1&pagination[pageSize]=8

# Get team member by slug
GET /api/team-members?filters[slug][$eq]=sarah-chen&populate=image
```

### Page Content

```bash
# Get homepage content
GET /api/page-content?populate=heroImage
```

### Contact Page

```bash
# Get contact page content
GET /api/contact-page
```

### Markets

```bash
# Get all markets
GET /api/markets?sort=id:asc

# Get market by slug
GET /api/markets?filters[slug][$eq]=buildings
```

### Key Services

```bash
# Get all key services
GET /api/key-services?sort=id:asc

# Get key service by slug
GET /api/key-services?filters[slug][$eq]=advisory
```

---

## Design System Colors

The website uses a black and white color scheme with purple accents:

- **Primary**: Black (`oklch(0 0 0)`)
- **Secondary**: White (`oklch(1 0 0)`)
- **Accent**: Purple (`oklch(0.5915 0.2366 289.67)`)

All navigation menu items are uppercase with larger font size, and links transition to the accent purple color on hover.

---

## Tips & Best Practices

### 1. Image Management
- Upload high-quality images (min 1920x1080 for hero images)
- Use descriptive alternative text for accessibility
- Strapi automatically creates multiple formats

### 2. Slug Generation
- Slugs auto-generate from title/name fields
- Keep slugs URL-friendly (lowercase, hyphens)
- Don't change slugs after publishing (breaks URLs)

### 3. Rich Text Content
- Use Markdown for formatting
- Keep descriptions concise but informative
- Break long content into sections with headings

### 4. Contact Information
- Keep office information up to date
- Ensure all email addresses are monitored
- Update business hours for holidays

### 5. Performance
- Enable CDN for media files in production
- Use pagination for large collections
- Cache frequently accessed content

---

## Troubleshooting

### CORS Errors
Add to `config/middlewares.js` in Strapi:

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
```

### 403 Forbidden Errors
- Check Public role permissions are enabled
- Verify API token is correct in `.env.local`
- Ensure content is published (not draft)

### Images Not Loading
- Check `NEXT_PUBLIC_STRAPI_URL` is correct
- Verify image upload folder has correct permissions
- Ensure images are published with content

---

## Next Steps

1. Install Strapi: `npx create-strapi-app@latest backend --quickstart`
2. Create content types following the field configurations above
3. Configure permissions for Public role
4. Add sample content using the JSON files in `strapi-content/`
5. Set environment variables in `.env.local`
6. Start both Strapi (`npm run develop`) and Next.js (`npm run dev`) servers
7. Visit your Next.js site to see Strapi content

For more information, visit the [Strapi Documentation](https://docs.strapi.io).
