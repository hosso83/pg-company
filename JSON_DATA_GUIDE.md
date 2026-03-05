# JSON-Only Data System (No Strapi Required)

This application now uses **only JSON files** for all data. No Strapi CMS connection is needed.

## 🎯 How It Works

All data is loaded directly from JSON files in the `strapi-content/` directory:

```
strapi-content/
├── page-content.json       → Homepage content
├── projects.json           → All projects
├── services.json           → All services
├── team-members.json       → All team members
└── contact-page.json       → Contact information
```

## 📝 Data Files

### 1. Homepage Content (`page-content.json`)

```json
{
  "data": {
    "homepage": {
      "hero": {
        "title": "Engineering Excellence",
        "subtitle": "..."
      }
    }
  }
}
```

**Used by:** [app/page.tsx](app/page.tsx)

### 2. Projects (`projects.json`)

```json
{
  "data": [
    {
      "title": "Project Name",
      "slug": "project-slug",
      "description": "...",
      "image": { "url": "...", "alternativeText": "..." },
      ...
    }
  ]
}
```

**Used by:**

- Homepage (featured projects)
- [app/projects/page.tsx](app/projects/page.tsx)
- [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)

### 3. Services (`services.json`)

```json
{
  "data": [
    {
      "title": "Service Name",
      "slug": "service-slug",
      "description": "...",
      ...
    }
  ]
}
```

**Used by:**

- Homepage (featured services)
- [app/services/page.tsx](app/services/page.tsx)
- [app/services/[slug]/page.tsx](app/services/[slug]/page.tsx)

### 4. Team Members (`team-members.json`)

```json
{
  "data": [
    {
      "name": "Name",
      "slug": "name-slug",
      "title": "Job Title",
      "bio": "...",
      "image": { "url": "...", "alternativeText": "..." },
      ...
    }
  ]
}
```

**Used by:**

- Homepage (featured members)
- [app/team/page.tsx](app/team/page.tsx)
- [app/team/[slug]/page.tsx](app/team/[slug]/page.tsx)

### 5. Contact Page (`contact-page.json`)

```json
{
  "data": {
    "heroTitle": "Get in Touch",
    "offices": [...],
    "email": "...",
    ...
  }
}
```

**Used by:** [app/contact/page.tsx](app/contact/page.tsx)

## 🚀 Quick Start

### 1. Start Development Server

```bash
npm run dev
```

### 2. Pages are immediately available:

- Homepage: http://localhost:3000
- Projects: http://localhost:3000/projects
- Services: http://localhost:3000/services
- Team: http://localhost:3000/team
- Contact: http://localhost:3000/contact

### 3. No external dependencies:

✅ No Strapi needed  
✅ No API calls  
✅ No environment variables required  
✅ Works offline

## ✏️ Editing Content

### Add a New Project

1. Open `strapi-content/projects.json`
2. Add entry to `data` array:

```json
{
  "title": "New Project",
  "slug": "new-project",
  "description": "Project description",
  "location": "City, Country",
  "image": {
    "url": "/placeholder.svg?height=800&width=1200",
    "alternativeText": "Project image"
  },
  "featured": true,
  ...
}
```

3. Save file
4. Refresh page - content updates instantly

### Add a New Service

1. Open `strapi-content/services.json`
2. Add entry to `data` array:

```json
{
  "title": "New Service",
  "slug": "new-service",
  "description": "Service description",
  "icon": "IconName",
  "featured": true,
  ...
}
```

3. Save and refresh

### Add a Team Member

1. Open `strapi-content/team-members.json`
2. Add entry to `data` array:

```json
{
  "name": "Person Name",
  "slug": "person-name",
  "title": "Job Title",
  "location": "City, Country",
  "bio": "Professional bio",
  "image": {
    "url": "/placeholder.svg?height=600&width=600",
    "alternativeText": "Profile photo"
  },
  "featured": true,
  ...
}
```

3. Save and refresh

### Update Homepage

1. Open `strapi-content/page-content.json`
2. Edit the `homepage` object
3. Save and refresh

### Update Contact Info

1. Open `strapi-content/contact-page.json`
2. Edit the `data` object
3. Save and refresh

## 🔧 Data Structure

### All Items Have:

- `title` - Display name
- `slug` - URL-friendly identifier (use lowercase, hyphens only)
- `description` - Short description
- `featured` - Boolean (shows on homepage)

### Projects Include:

- `location` - Geographic location
- `sector` - Industry sector
- `client` - Client name
- `value` - Project value
- `duration` - Timeline
- `status` - Current status
- `services` - Services provided (array)
- `outcomes` - Project achievements (array)
- `challenges` - Technical challenges (array)
- `gallery` - Additional images (array)

### Services Include:

- `icon` - Icon name (Train, Droplet, Building2, Zap, etc.)
- `capabilities` - Technical capabilities (array)
- `sectors` - Industry sectors (array)
- `expertise` - Expertise description
- `caseStudies` - Related projects (array)
- `relatedServices` - Cross-sell services (array)

### Team Members Include:

- `department` - Department name
- `email` - Email address
- `expertise` - Skills/expertise (array)
- `qualifications` - Degrees/certifications (array)
- `achievements` - Awards/achievements (array)

## 🖼️ Images

### Image Format

```json
{
  "url": "/path/to/image.jpg",
  "alternativeText": "Descriptive alt text"
}
```

### Using Images

- Place images in `public/` folder
- Reference as `/images/photo.jpg`
- Or use placeholder: `/placeholder.svg?height=800&width=1200`

## 📊 Functions Available

Located in [lib/strapi.ts](lib/strapi.ts):

```typescript
// Homepage content
getPageContent()

// Projects
getProjects(page = 1, pageSize = 5)      // All projects
getProjectBySlug(slug: string)            // Single project

// Services
getServices()                              // All services
getServiceBySlug(slug: string)            // Single service

// Team
getTeamMembers(page = 1, pageSize = 8)   // All members
getTeamMemberBySlug(slug: string)         // Single member

// Contact
getContactPage()                          // Contact info

// Images
getStrapiMedia(url: string)               // Returns URL as-is
```

## 🧪 Testing

### Check Console

All functions log errors (if any) to browser console:

```
Error loading projects from JSON: ...
```

### Verify Data Loads

1. Open any page
2. Open DevTools (F12)
3. Check Console tab for any errors
4. Verify content displays

### Add Test Data

1. Add entry to any JSON file
2. Save
3. Refresh page
4. New content appears immediately

## 📋 File Validation

All JSON files are validated automatically:

- Check for valid JSON syntax
- Verify required fields present
- Ensure slugs are unique

### Common JSON Errors

```json
// ❌ Missing closing brace
{
  "data": [
    { "title": "Item" }

// ✅ Correct
{
  "data": [
    { "title": "Item" }
  ]
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### No Configuration Needed

- No environment variables
- No external services
- No build-time setup

### Works Everywhere

- Development: `npm run dev`
- Production: `npm run build && npm start`
- Deployment: Works as-is on any Node.js server

## 💡 Tips

1. **Unique Slugs** - Always use unique, lowercase slugs with hyphens
2. **Required Images** - Add `image` field to all items
3. **Descriptions** - Keep descriptions concise (<200 chars)
4. **Featured Items** - Only 3-5 items should be `featured: true`
5. **Pagination** - Items are paginated (projects: 5/page, team: 8/page)
6. **Sorting** - Items display in JSON order
7. **Valid URLs** - Ensure all URLs are properly formatted

## ❓ Troubleshooting

### Page shows empty content

- Check JSON file for syntax errors
- Verify `data` array exists
- Check browser console for errors
- Try refreshing page

### Images not showing

- Check image path is correct
- Verify image file exists in `public/`
- Try using placeholder URL

### Slug not working

- Ensure slug is lowercase
- Use hyphens instead of spaces
- Check slug in JSON matches URL

### Changes not appearing

- Hard refresh page (Ctrl+F5)
- Clear browser cache
- Check JSON file was saved
- Verify JSON syntax is valid

## 📞 Support

- Check JSON file syntax with `npm run build`
- Review browser console for error messages
- Ensure all required fields are present
- Verify image paths are correct

## ✅ Advantages

✅ **No External Dependencies** - Works completely offline  
✅ **Fast Development** - Edit and see changes instantly  
✅ **Easy to Deploy** - Just commit JSON files to git  
✅ **Type Safe** - TypeScript validates data  
✅ **SEO Friendly** - Server-side rendering included  
✅ **No Maintenance** - No Strapi server to manage  
✅ **Version Control** - Track content changes in git  
✅ **Zero Cost** - No hosting fees for CMS

---

**System Status:** ✅ Production Ready  
**Last Updated:** 2024  
**No Strapi Required!**
