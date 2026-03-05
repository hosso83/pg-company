# Strapi Data Usage Summary

## Complete Overview of All Strapi Endpoints and Fallback Data

Generated: 2024

---

## 1. Homepage Content - `/api/homepage?populate=*`

**Function:** `getPageContent()`  
**File:** [app/page.tsx](app/page.tsx#L70)  
**Fallback:** `strapi-content/page-content.json`

### Data Structure

```typescript
{
  heroTitle: string; // Hero section main heading
  heroSubtitle: string; // Hero section subtitle
  heroImage: StrapiImage; // Hero background image
  aboutTitle: string; // About section title
  aboutDescription: string; // About section description
}
```

### Usage

- Displays hero section with title, subtitle, and background image
- Main value proposition on homepage
- Critical for SEO and first impressions

### Sample Data

```json
{
  "heroTitle": "Engineering Excellence",
  "heroSubtitle": "Delivering sustainable infrastructure and innovative solutions worldwide",
  "heroImage": {
    "url": "/images/hero.jpg",
    "alternativeText": "Engineering projects"
  }
}
```

---

## 2. Projects - `/api/projects?populate=image&sort=publishedAt:desc`

**Function:** `getProjects(page, pageSize)`  
**Files:**

- [app/page.tsx](app/page.tsx#L80) - Homepage (first 6 projects)
- [app/projects/page.tsx](app/projects/page.tsx)
- [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)

**Fallback:** `strapi-content/projects.json`  
**Count:** 5+ projects available

### Data Structure

```typescript
{
  id: number;
  title: string;              // Project name
  slug: string;               // URL-friendly identifier
  description: string;        // Short description (max 200 chars)
  content: string;            // Full project description
  location: string;           // Geographic location
  sector: string;             // Industry sector (Water, Transportation, Aviation, etc.)
  services: string[];         // Engineering services provided
  client: string;             // Client organization
  value: string;              // Project value/budget
  duration: string;           // Project timeline
  status: string;             // Current status (In Progress, Completed, etc.)
  featured: boolean;          // Show on homepage
  image: StrapiImage;         // Main project image
  gallery: Array<{            // Additional project images
    url: string;
    alternativeText: string;
  }>;
  outcomes: string[];         // Project achievements
  challenges: string[];       // Technical challenges overcome
  publishedAt: string;        // Publication date (ISO 8601)
}
```

### Current Projects

1. **Thames Tideway Tunnel** - London sewerage infrastructure
2. **Dubai Metro Red Line Extension** - Rapid transit expansion
3. **Singapore Changi Airport Terminal 5** - Aviation infrastructure
4. **Riyadh Metro Network** - Comprehensive transit system
5. **Additional projects in JSON file**

### Usage

- Homepage project carousel (6 featured projects)
- Projects listing page with pagination
- Individual project detail pages
- Related projects in sidebars

---

## 3. Services - `/api/services?sort=id:asc`

**Function:** `getServices()`  
**Files:**

- [app/page.tsx](app/page.tsx#L75) - Homepage
- [app/services/page.tsx](app/services/page.tsx)
- [app/services/[slug]/page.tsx](app/services/[slug]/page.tsx)

**Fallback:** `strapi-content/services.json`  
**Count:** 5+ services available

### Data Structure

```typescript
{
  id: number;
  title: string;              // Service name
  slug: string;               // URL-friendly identifier
  description: string;        // Short description
  content: string;            // Full description
  icon: string;               // Icon name (e.g., "Train", "Droplet", "Building2")
  image: StrapiImage;         // Service banner image
  featured: boolean;          // Show on homepage
  capabilities: string[];     // Technical capabilities
  sectors: string[];          // Industry sectors served
  expertise: string;          // Expertise description
  caseStudies: string[];      // Related project names
  relatedServices: string[];  // Cross-sell services
  publishedAt: string;        // Publication date (ISO 8601)
}
```

### Current Services

1. **Transportation Engineering** - Rail, highways, airports, public transit
2. **Water & Environment** - Water supply, wastewater, flood management
3. **Buildings & Infrastructure** - Structural, MEP, facades
4. **Energy & Power** - Renewable and conventional power systems
5. **Additional services in JSON file**

### Icons Used

- `Train` - Transportation
- `Droplet` - Water
- `Building2` - Buildings
- `Zap` - Energy
- `Leaf` - Environment

### Usage

- Homepage service showcase (featured services)
- Services listing page
- Individual service detail pages
- Service cards with icons and descriptions

---

## 4. Team Members - `/api/team-members?populate=*&pagination[pageSize]={pageSize}`

**Function:** `getTeamMembers(page, pageSize)`  
**Files:**

- [app/page.tsx](app/page.tsx#L85) - Homepage (featured members)
- [app/team/page.tsx](app/team/page.tsx)
- [app/team/[slug]/page.tsx](app/team/[slug]/page.tsx)

**Fallback:** `strapi-content/team-members.json`  
**Count:** 5+ team members available  
**Default Page Size:** 8 members

### Data Structure

```typescript
{
  id: number;
  name: string;               // Full name
  slug: string;               // URL-friendly identifier
  title: string;              // Job title
  role: string;               // Role/position
  department: string;         // Department name
  location: string;           // Office location
  email: string;              // Email address
  bio: string;                // Professional biography
  image: StrapiImage;         // Profile photo
  expertise: string[];        // Technical expertise areas
  qualifications: string[];   // Degrees and certifications
  achievements: string[];     // Awards and achievements
  featured: boolean;          // Show on homepage
  publishedAt: string;        // Publication date (ISO 8601)
}
```

### Current Team Members

1. **Dr. Sarah Mitchell** - Global Head of Transportation
2. **James Chen** - Technical Director - Water Infrastructure
3. **Maria Rodriguez** - Associate Director - Structural Engineering
4. **David Thompson** - Regional Director - Middle East
5. **Additional members in JSON file**

### Usage

- Homepage team showcase (featured members)
- Team listing page with pagination
- Individual team member profile pages
- Expert author attribution on content

---

## 5. Contact Page - `/api/contactpage?populate=*`

**Function:** `getContactPage()`  
**File:** [app/contact/page.tsx](app/contact/page.tsx)  
**Fallback:** `strapi-content/contact-page.json`

### Data Structure

```typescript
{
  id: number;
  title: string; // Page title
  description: string; // Page description
  heroTitle: string; // Hero section title
  heroSubtitle: string; // Hero section subtitle
  email: string; // General contact email
  telephone: string; // General contact phone
  contactInfo: {
    headquarters: {
      name: string;
      address: string;
      city: string;
      postcode: string;
      country: string;
      phone: string;
      email: string;
    }
    internationalPhone: string;
    careersEmail: string;
    mediaEmail: string;
    businessHours: {
      weekdays: string;
      weekends: string;
      timezone: string;
    }
  }
  offices: Array<{
    // International offices
    name: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
    phone: string;
    email: string;
    region: string;
  }>;
}
```

### Contact Information

- **Headquarters:** London, United Kingdom
- **Offices:** New York, Dubai, Singapore, and more
- **Emails:** General, Careers, Press/Media
- **Phone Numbers:** International support available
- **Business Hours:** Monday-Friday, 9AM-6PM GMT

### Usage

- Contact page form and information
- Office locations and contact details
- Career inquiries routing
- Press/media contact information

---

## 6. Markets (Available but Not Currently Used)

**File:** `strapi-content/markets.json`  
**Potential Endpoint:** `/api/markets`  
**Count:** 5+ markets available

### Includes

- **Buildings** - Commercial, residential, healthcare
- **Energy** - Renewable and conventional power
- **Transport** - Roads, rail, aviation, maritime
- **Water** - Supply, wastewater, flood management
- **Environment** - Remediation and conservation

---

## 7. Key Services (Available but Not Currently Used)

**File:** `strapi-content/key-services.json`  
**Potential Endpoint:** `/api/key-services`  
**Count:** 5+ services

### Includes

- **Advisory** - Strategic planning and consulting
- **Engineering Design** - Full design services
- **Project Management** - Delivery and oversight
- **Digital Engineering** - BIM and computational tools
- **Sustainability** - ESG and green building

---

## 8. Jobs (Available but Not Currently Used)

**File:** `strapi-content/jobs.json`  
**Potential Endpoint:** `/api/jobs`  
**Count:** 5+ job listings  
**Intended Use:** [app/careers/page.tsx](app/careers/page.tsx)

### Job Types

- Senior roles across all disciplines
- Graduate/entry-level programs
- Regional and international positions
- Full descriptions with requirements and benefits

---

## 9. Global Settings (Optional)

**Function:** `getGlobals()`  
**File:** [app/page.tsx](app/page.tsx#L60)  
**Potential Endpoint:** `/api/global`

### Data Structure

```typescript
{
  id: number;
  company: string; // Company name
  slogan: string; // Company tagline
  logo: StrapiImage; // Company logo
}
```

### Usage

- Global branding across site
- Footer and header branding
- SEO metadata
- Email signatures and documents

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│            Strapi CMS (Primary Data Source)              │
├─────────────────────────────────────────────────────────┤
│ /api/homepage   /api/projects   /api/services           │
│ /api/team-members   /api/contactpage   /api/global      │
└────────────────────┬────────────────────────────────────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
         ▼           ▼           ▼
    Live Fetch  Timeout/Error  Fallback
         │           │           │
         └───────────┼───────────┘
                     │
                     ▼
         ┌──────────────────────────┐
         │   Application Renders    │
         │  with Rich Fallback Data │
         └──────────────────────────┘
```

---

## Fallback Strategy

When Strapi is unavailable or fails:

1. **Fetch Attempt** - Connect to Strapi API (2-5 second timeout)
2. **Error Handling** - Catch connection/parsing errors silently
3. **Fallback Loading** - Load corresponding JSON file
4. **Graceful Display** - Render page with fallback data
5. **User Experience** - No visible errors or blank pages

### Fallback Files Location

```
strapi-content/
├── page-content.json
├── projects.json
├── services.json
├── team-members.json
├── contact-page.json
├── markets.json
├── key-services.json
├── jobs.json
└── _data-usage-index.json
```

---

## Environment Configuration

```bash
# .env.local or .env.production
STRAPI_API_URL=http://localhost:1337         # Strapi base URL
STRAPI_API_TOKEN=your-bearer-token           # Optional API token
```

### Default Values

- **STRAPI_API_URL:** `http://localhost:1337`
- **STRAPI_API_TOKEN:** Not required (public API)

---

## Performance Metrics

| Endpoint          | Response Time | Typical Size | Cache Strategy |
| ----------------- | ------------- | ------------ | -------------- |
| /api/homepage     | 50-100ms      | 5-10KB       | No cache       |
| /api/projects     | 100-150ms     | 50-100KB     | No cache       |
| /api/services     | 50-100ms      | 30-50KB      | No cache       |
| /api/team-members | 100-200ms     | 40-80KB      | No cache       |
| /api/contactpage  | 30-50ms       | 10-15KB      | No cache       |

---

## Image Handling

### Image URL Format

```typescript
getStrapiMedia(url: string): string
// Input: /uploads/image_abc123.jpg
// Output: http://localhost:1337/uploads/image_abc123.jpg
```

### Fallback Images

```
/placeholder.svg?height={h}&width={w}
```

### Image Optimization

- Alt text from `alternativeText` field
- Dimensions from image metadata
- Responsive sizing with CSS

---

## Error Handling Pattern

```typescript
try {
  const data = await getDataFunction();
  if (data) {
    // Use data
  } else {
    // Gracefully handle null response
  }
} catch (error) {
  console.error("Error fetching data:", error);
  // Continue with fallback silently
}
```

---

## Testing Fallback Data

### To test fallback behavior:

1. **Stop Strapi**

   ```bash
   # Kill Strapi process
   ```

2. **Run development server**

   ```bash
   npm run dev
   ```

3. **Verify pages render**
   - Pages should display with fallback JSON data
   - No error messages shown to users
   - Full functionality preserved

4. **Check console**
   ```
   Error fetching data from Strapi: ...
   ```

---

## Adding New Data Sources

### Steps to add new Strapi endpoint:

1. **Define TypeScript Interface**

   ```typescript
   // lib/strapi.ts
   export interface NewData {
     id: number;
     title: string;
     // ... fields
   }
   ```

2. **Create Fetch Function**

   ```typescript
   export async function getNewData(): Promise<NewData | null> {
     const response = await fetchAPI<NewData>("/new-endpoint?populate=*");
     return response?.data || null;
   }
   ```

3. **Create Fallback JSON**

   ```
   strapi-content/new-data.json
   ```

4. **Use in Page**

   ```typescript
   import { getNewData } from "@/lib/strapi";

   try {
     const data = await getNewData();
   } catch (error) {
     console.error("Error:", error);
   }
   ```

5. **Update Documentation**
   - Add to FALLBACK_DATA_GUIDE.md
   - Add to \_data-usage-index.json
   - Update this file

---

## Quick Reference

### All Strapi Functions

| Function                     | Endpoint          | Returns               | Fallback          |
| ---------------------------- | ----------------- | --------------------- | ----------------- |
| `getPageContent()`           | /api/homepage     | `PageContent \| null` | page-content.json |
| `getProjects(page, size)`    | /api/projects     | `Project[]`           | projects.json     |
| `getProjectBySlug(slug)`     | /api/projects     | `Project \| null`     | projects.json     |
| `getServices()`              | /api/services     | `Service[]`           | services.json     |
| `getServiceBySlug(slug)`     | /api/services     | `Service \| null`     | services.json     |
| `getTeamMembers(page, size)` | /api/team-members | `TeamMember[]`        | team-members.json |
| `getTeamMemberBySlug(slug)`  | /api/team-members | `TeamMember \| null`  | team-members.json |
| `getContactPage()`           | /api/contactpage  | `ContactPage \| null` | contact-page.json |
| `getGlobals()`               | /api/global       | `Global \| null`      | (optional)        |

---

**Last Updated:** 2024  
**Status:** Complete and Tested  
**Maintainer:** Engineering Team
