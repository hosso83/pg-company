# Strapi Data Usage - Visual Summary

## 📊 Data Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                      Strapi CMS                             │
│  (http://localhost:1337/api)                               │
├─────────────────────────────────────────────────────────────┤
│  /homepage        /projects      /services                  │
│  /team-members    /contactpage   /global                    │
└──────────────┬────────────────────────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
    Success         Failure
       │                │
       ▼                ▼
   Use Strapi     Load JSON Fallback
       │                │
       └───────┬────────┘
               │
               ▼
         Render Page
         (Rich Content)
```

---

## 🗂️ Data File Organization

```
strapi-content/
│
├── 📄 page-content.json
│   └── Used by: [app/page.tsx](app/page.tsx)
│       Data: Hero title, subtitle, image, about content
│       Size: ~5KB
│
├── 📄 projects.json
│   └── Used by: [app/page.tsx](app/page.tsx)
│              [app/projects/page.tsx](app/projects/page.tsx)
│              [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)
│       Data: 5+ complete projects with details
│       Size: ~50-100KB
│
├── 📄 services.json
│   └── Used by: [app/page.tsx](app/page.tsx)
│              [app/services/page.tsx](app/services/page.tsx)
│              [app/services/[slug]/page.tsx](app/services/[slug]/page.tsx)
│       Data: 5+ services with capabilities
│       Size: ~30-50KB
│
├── 📄 team-members.json
│   └── Used by: [app/page.tsx](app/page.tsx)
│              [app/team/page.tsx](app/team/page.tsx)
│              [app/team/[slug]/page.tsx](app/team/[slug]/page.tsx)
│       Data: 5+ team members with bios
│       Size: ~40-80KB
│
├── 📄 contact-page.json
│   └── Used by: [app/contact/page.tsx](app/contact/page.tsx)
│       Data: Contact info, offices, emails, phones
│       Size: ~10-15KB
│
├── 📄 markets.json
│   └── Optional: Not currently used
│       Data: Market sectors and capabilities
│       Size: ~30KB
│
├── 📄 key-services.json
│   └── Optional: Not currently used
│       Data: Key service offerings
│       Size: ~25KB
│
├── 📄 jobs.json
│   └── Optional: Not currently used
│       Data: Job listings with requirements
│       Size: ~40KB
│
└── 📄 _data-usage-index.json
    └── Index: Machine-readable metadata
        Data: All endpoints and mappings
        Size: ~5KB
```

---

## 🔄 Page-by-Page Data Requirements

### Homepage: [app/page.tsx](app/page.tsx)

```
GET /api/homepage?populate=*
GET /api/projects?populate=image&pagination[pageSize]=6
GET /api/services?sort=id:asc
GET /api/global

Fallbacks:
├── page-content.json (hero, about)
├── projects.json (featured 6)
├── services.json (all services)
└── (global data optional)
```

### Projects: [app/projects/page.tsx](app/projects/page.tsx)

```
GET /api/projects?populate=image&pagination[pageSize]={pageSize}

Fallback: projects.json
```

### Project Detail: [app/projects/[slug]/page.tsx](app/projects/[slug]/page.tsx)

```
GET /api/projects?filters[slug][$eq]={slug}&populate=image

Fallback: projects.json (filtered by slug)
```

### Services: [app/services/page.tsx](app/services/page.tsx)

```
GET /api/services?sort=id:asc

Fallback: services.json
```

### Service Detail: [app/services/[slug]/page.tsx](app/services/[slug]/page.tsx)

```
GET /api/services?filters[slug][$eq]={slug}

Fallback: services.json (filtered by slug)
```

### Team: [app/team/page.tsx](app/team/page.tsx)

```
GET /api/team-members?populate=*&pagination[pageSize]={pageSize}

Fallback: team-members.json
```

### Team Member: [app/team/[slug]/page.tsx](app/team/[slug]/page.tsx)

```
GET /api/team-members?populate=*

Fallback: team-members.json (filtered by slug)
```

### Contact: [app/contact/page.tsx](app/contact/page.tsx)

```
GET /api/contactpage?populate=*

Fallback: contact-page.json
```

### About: [app/about/page.tsx](app/about/page.tsx)

```
Static content (no Strapi calls)

Fallback: N/A
```

---

## 📈 Data Usage Statistics

| Endpoint          | Used By | Frequency | Criticality |
| ----------------- | ------- | --------- | ----------- |
| /api/homepage     | 1 page  | On load   | HIGH        |
| /api/projects     | 3 pages | On load   | HIGH        |
| /api/services     | 3 pages | On load   | HIGH        |
| /api/team-members | 3 pages | On load   | HIGH        |
| /api/contactpage  | 1 page  | On load   | MEDIUM      |
| /api/global       | 1 page  | On load   | MEDIUM      |

**Total API Calls Per Session:** 5-6 (after caching)

---

## 🎯 Sample Data Counts

| Collection   | Count | Featured | Featured Count |
| ------------ | ----- | -------- | -------------- |
| Projects     | 5+    | Yes      | 4              |
| Services     | 5+    | Yes      | 4              |
| Team Members | 5+    | Yes      | 4              |
| Markets      | 5+    | N/A      | N/A            |
| Key Services | 5+    | N/A      | N/A            |
| Jobs         | 5+    | N/A      | N/A            |

---

## 🔑 Key Data Fields by Collection

### Projects

```
id, title, slug, description, content, location
sector, services, client, value, duration, status
featured, image, gallery, outcomes, challenges, publishedAt
```

### Services

```
id, title, slug, description, content, icon, image
featured, capabilities, sectors, expertise
caseStudies, relatedServices, publishedAt
```

### Team Members

```
id, name, slug, title, role, department, location
email, bio, image, expertise, qualifications
achievements, featured, publishedAt
```

### Page Content (Homepage)

```
heroTitle, heroSubtitle, heroImage
aboutTitle, aboutDescription
```

### Contact Page

```
title, description, email, telephone
contactInfo (headquarters, internationalPhone, businessHours)
offices (array of office details)
```

---

## 🌐 Featured Content on Homepage

### Homepage Components

```
┌─────────────────────────────┐
│     Hero Section            │
│  (from page-content.json)   │
└─────────────────────────────┘
                ↓
┌─────────────────────────────┐
│  About Section              │
│  (from page-content.json)   │
└─────────────────────────────┘
                ↓
┌─────────────────────────────┐
│  Stats Section              │
│  (hardcoded + optional data)│
└─────────────────────────────┘
                ↓
┌─────────────────────────────┐
│  Featured Projects (6)      │
│  (from projects.json)       │
│  where featured = true      │
└─────────────────────────────┘
                ↓
┌─────────────────────────────┐
│  Featured Services (4-5)    │
│  (from services.json)       │
│  where featured = true      │
└─────────────────────────────┘
                ↓
┌─────────────────────────────┐
│  Team Showcase (3-4)        │
│  (from team-members.json)   │
│  where featured = true      │
└─────────────────────────────┘
                ↓
┌─────────────────────────────┐
│  CTA Section                │
└─────────────────────────────┘
```

---

## 📊 Data Dependency Map

```
Homepage
├── page-content.json (hero, about)
├── projects.json (featured projects)
├── services.json (featured services)
└── global.json (optional branding)

Projects Page
└── projects.json (paginated list)

Project Detail
└── projects.json (single project)

Services Page
└── services.json (paginated list)

Service Detail
└── services.json (single service)

Team Page
└── team-members.json (paginated list)

Team Member Detail
└── team-members.json (single member)

Contact Page
└── contact-page.json (contact info)

About Page
└── (static HTML - no dependencies)
```

---

## 🚀 Data Loading Flow

```
Page Request
    ↓
┌───────────────────────────┐
│ Call Strapi API           │
│ (with 2-5s timeout)       │
└───────────┬───────────────┘
            │
     ┌──────┴──────┐
     │             │
  Success       Failure
     │             │
     ▼             ▼
Return        Return
Data          Null
     │             │
     └──────┬──────┘
            │
     ┌──────▼──────┐
     │ Has Data?   │
     └──────┬──────┘
            │
     ┌──────┴──────┐
     │             │
   Yes           No
     │             │
     ▼             ▼
Use         Load JSON
Strapi      Fallback
     │             │
     └──────┬──────┘
            │
     ┌──────▼──────────────┐
     │ Render Component    │
     │ with Data           │
     └─────────────────────┘
```

---

## 📋 Implementation Checklist

### Existing Implementation ✅

- [x] Strapi fetch functions in `lib/strapi.ts`
- [x] Error handling with try-catch blocks
- [x] Fallback JSON files created
- [x] All pages use graceful degradation
- [x] Environment variables configured
- [x] TypeScript interfaces defined

### Documentation ✅

- [x] FALLBACK_DATA_GUIDE.md - Complete mapping
- [x] STRAPI_DATA_COMPLETE_REFERENCE.md - Detailed reference
- [x] QUICK_IMPLEMENTATION_GUIDE.md - Implementation guide
- [x] \_data-usage-index.json - Machine-readable index
- [x] This visual summary

### Optional Features 🔄

- [ ] Add ISR (Incremental Static Regeneration)
- [ ] Implement client-side caching (SWR/React Query)
- [ ] Add image optimization
- [ ] Implement analytics tracking
- [ ] Add webhook support for real-time updates

---

## 🔗 Quick Links

| Resource      | Purpose                   | Location                                                               |
| ------------- | ------------------------- | ---------------------------------------------------------------------- |
| Main Mapping  | Complete endpoint mapping | [FALLBACK_DATA_GUIDE.md](FALLBACK_DATA_GUIDE.md)                       |
| Reference     | Detailed data structures  | [STRAPI_DATA_COMPLETE_REFERENCE.md](STRAPI_DATA_COMPLETE_REFERENCE.md) |
| Quick Start   | Implementation guide      | [QUICK_IMPLEMENTATION_GUIDE.md](QUICK_IMPLEMENTATION_GUIDE.md)         |
| Index         | Machine-readable index    | [\_data-usage-index.json](strapi-content/_data-usage-index.json)       |
| API Functions | All Strapi functions      | [lib/strapi.ts](lib/strapi.ts)                                         |

---

## 💡 Key Principles

1. **Graceful Degradation** - Pages work without Strapi
2. **No User Errors** - Failures are silent to users
3. **Rich Fallback** - Fallback data is complete and realistic
4. **Type Safety** - All data is properly typed
5. **Maintainability** - Clear patterns and documentation
6. **Testability** - Easy to test without Strapi

---

**Created:** 2024  
**Status:** Complete  
**All systems ready for production**
