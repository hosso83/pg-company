# Fallback Data Guide

This document maps all Strapi API endpoints and data used across the application with their corresponding fallback JSON files.

## Overview

The application uses Strapi CMS as the primary data source. When Strapi is unavailable, fallback JSON files in the `strapi-content/` directory are used to maintain functionality.

---

## API Endpoints & Fallback Data Mapping

### 1. **Homepage Content**

- **Strapi Endpoint:** `/api/homepage?populate=*`
- **Function:** `getPageContent()`
- **Used in:** [app/page.tsx](app/page.tsx)
- **Fallback File:** `strapi-content/page-content.json`
- **Data Structure:**
  ```typescript
  interface PageContent {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: StrapiImage;
    aboutTitle: string;
    aboutDescription: string;
  }
  ```
- **Key Fields Used:**
  - `heroTitle` - Hero section title
  - `heroSubtitle` - Hero section subtitle
  - `heroImage` - Hero background image

---

### 2. **Projects**

- **Strapi Endpoint:** `/api/projects?populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
- **Function:** `getProjects(page, pageSize)`
- **Used in:**
  - [app/page.tsx](app/page.tsx) - Homepage project showcase
  - [app/projects/page.tsx](app/projects/page.tsx) - Projects listing page
- **Fallback File:** `strapi-content/projects.json`
- **Data Structure:**
  ```typescript
  interface Project {
    id: number;
    title: string;
    description: string;
    slug: string;
    location: string;
    region: string;
    image: StrapiImage;
    publishedAt: string;
    // Extended fields in fallback:
    sector: string;
    services: string[];
    client: string;
    value: string;
    duration: string;
    status: string;
    featured: boolean;
    gallery: Array<{ url: string; alternativeText: string }>;
    outcomes: string[];
    challenges: string[];
  }
  ```
- **Key Fields Used:**
  - `title` - Project name
  - `description` - Short description
  - `slug` - URL slug
  - `image` - Project image
  - `location` - Project location
  - `featured` - Show on homepage

---

### 3. **Individual Project Details**

- **Strapi Endpoint:** `/api/projects?filters[slug][$eq]=${slug}&populate=image`
- **Function:** `getProjectBySlug(slug)`
- **Used in:** [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)
- **Fallback File:** `strapi-content/projects.json`
- **Returns:** Single project from the projects array matching the slug

---

### 4. **Services**

- **Strapi Endpoint:** `/api/services?sort=id:asc`
- **Function:** `getServices()`
- **Used in:**
  - [app/page.tsx](app/page.tsx) - Homepage services showcase
  - [app/services/page.tsx](app/services/page.tsx) - Services listing page
- **Fallback File:** `strapi-content/services.json`
- **Data Structure:**
  ```typescript
  interface Service {
    id: number;
    title: string;
    description: string;
    slug: string;
    icon: string;
    image: StrapiImage;
    featured: boolean;
    // Extended fields in fallback:
    content: string;
    capabilities: string[];
    sectors: string[];
    expertise: string;
    caseStudies: string[];
    relatedServices: string[];
    publishedAt: string;
  }
  ```
- **Key Fields Used:**
  - `title` - Service name
  - `description` - Short description
  - `slug` - URL slug
  - `icon` - Icon name
  - `featured` - Show on homepage

---

### 5. **Individual Service Details**

- **Strapi Endpoint:** `/api/services?filters[slug][$eq]=${slug}`
- **Function:** `getServiceBySlug(slug)`
- **Used in:** [app/services/[slug]/page.tsx](app/services/[slug]/page.tsx)
- **Fallback File:** `strapi-content/services.json`
- **Returns:** Single service from services array matching the slug

---

### 6. **Team Members**

- **Strapi Endpoint:** `/api/team-members?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
- **Function:** `getTeamMembers(page, pageSize)`
- **Used in:**
  - [app/page.tsx](app/page.tsx) - Homepage team showcase
  - [app/team/page.tsx](app/team/page.tsx) - Team listing page
- **Fallback File:** `strapi-content/team-members.json`
- **Data Structure:**
  ```typescript
  interface TeamMember {
    id: number;
    name: string;
    role: string;
    slug: string;
    location: string;
    bio: string;
    image: StrapiImage;
    // Extended fields in fallback:
    title: string;
    department: string;
    email: string;
    expertise: string[];
    qualifications: string[];
    achievements: string[];
    featured: boolean;
    publishedAt: string;
  }
  ```
- **Key Fields Used:**
  - `name` - Team member name
  - `role` - Job title
  - `slug` - URL slug
  - `image` - Profile image
  - `bio` - Short biography
  - `featured` - Show on homepage

---

### 7. **Individual Team Member Details**

- **Strapi Endpoint:** `/api/team-members?filters[slug][$eq]=${slug}&populate=image`
- **Function:** `getTeamMemberBySlug(slug)`
- **Used in:** [app/team/[slug]/page.tsx](app/team/[slug]/page.tsx)
- **Fallback File:** `strapi-content/team-members.json`
- **Returns:** Single team member from team-members array matching the slug

---

### 8. **Contact Page**

- **Strapi Endpoint:** `/api/contactpage?populate=*`
- **Function:** `getContactPage()`
- **Used in:** [app/contact/page.tsx](app/contact/page.tsx)
- **Fallback File:** `strapi-content/contact-page.json`
- **Data Structure:**
  ```typescript
  interface ContactPage {
    id: number;
    title: string;
    description: string;
    email: string;
    telephone: string;
    address: Address[];
    // Extended fields in fallback:
    heroTitle: string;
    heroSubtitle: string;
    contactInfo: {
      headquarters: {...};
      internationalPhone: string;
      careersEmail: string;
      mediaEmail: string;
      businessHours: {...};
    };
    offices: Array<{...}>;
  }
  ```

---

### 9. **Global Settings**

- **Strapi Endpoint:** `/api/global`
- **Function:** `getGlobals()`
- **Used in:** [app/page.tsx](app/page.tsx) - Homepage
- **Fallback File:** Not yet created (optional)
- **Data Structure:**
  ```typescript
  interface Global {
    id: number;
    company: string;
    slogan: string;
    logo: StrapiImage;
  }
  ```

---

### 10. **Markets** (Not currently used but available)

- **Fallback File:** `strapi-content/markets.json`
- **Typically used in:** Market section pages
- **Contains:** Market/sector information with capabilities and case studies

---

### 11. **Key Services** (Not currently used but available)

- **Fallback File:** `strapi-content/key-services.json`
- **Typically used in:** Service category pages
- **Contains:** Key service offerings with descriptions and capabilities

---

### 12. **Jobs** (Not currently used but available)

- **Fallback File:** `strapi-content/jobs.json`
- **Typically used in:** [app/careers/page.tsx](app/careers/page.tsx) if available
- **Contains:** Job listings with requirements and benefits

---

## StrapiImage Interface

All image fields follow this structure:

```typescript
interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string;
  width: number;
  height: number;
}
```

**Usage:** Images are resolved using `getStrapiMedia(url)` which prepends the Strapi base URL.

---

## Implementation Notes

### Error Handling Pattern

All pages implement graceful fallback:

```typescript
try {
  const data = await getDataFunction();
  // Use data
} catch (error) {
  console.error("Error fetching data from Strapi:", error);
  // Use fallback data or empty state
}
```

### Media URL Resolution

Images from Strapi are resolved using:

```typescript
getStrapiMedia(imageUrl) || "/placeholder.svg";
```

This function prepends the Strapi base URL from environment variable `STRAPI_API_URL`.

### Fallback Strategy

When Strapi is unavailable:

1. Functions return `null` or empty arrays
2. Pages display empty states or cached data from JSON files
3. No errors are shown to users
4. Static placeholders maintain UI integrity

---

## Adding New Content

When adding new Strapi endpoints:

1. Define the interface in [lib/strapi.ts](lib/strapi.ts)
2. Create the fetch function
3. Add corresponding JSON fallback in `strapi-content/`
4. Import and use in relevant pages
5. Implement error handling with fallback

---

## File Locations

```
strapi-content/
├── page-content.json       # Homepage content
├── projects.json           # Projects collection
├── services.json           # Services collection
├── team-members.json       # Team members collection
├── contact-page.json       # Contact page content
├── markets.json           # Market sectors
├── key-services.json      # Key service offerings
└── jobs.json              # Job listings
```

---

## Troubleshooting

**Issue:** Pages show empty states instead of data

**Solutions:**

1. Verify Strapi is running and `STRAPI_API_URL` is correct
2. Check `STRAPI_API_TOKEN` if required
3. Verify fallback JSON files exist and have valid structure
4. Check browser console for specific error messages

---

## Environment Variables

```env
STRAPI_API_URL=http://localhost:1337      # Strapi base URL
STRAPI_API_TOKEN=your-token-here          # Optional API token
```

---

Last Updated: 2024
