# Payload CMS Setup Guide

## Installation

Payload CMS has been added to your project.

### Environment Variables

Add to `.env.local`:

```
PAYLOAD_SECRET=your-super-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
DATABASE_URI=mongodb://localhost:27017/pg-company
```

### MongoDB Setup

1. **Local MongoDB** (Development):
   - Install: https://docs.mongodb.com/manual/installation/
   - Or use Docker:
     ```bash
     docker run -d -p 27017:27017 --name mongo mongo:latest
     ```

2. **MongoDB Atlas** (Production):
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create cluster and get connection string
   - Update `DATABASE_URI` in `.env.local`

### Running Payload CMS

Start Payload development server:

```bash
npm run cms
```

Access admin at: `http://localhost:3001/admin`

### Collections

- **Projects**: Manage engineering projects
- **Services**: Manage service offerings
- **Team Members**: Manage team profiles
- **Media**: Upload and manage images

## Connecting to Next.js

Update your Next.js data fetching to call Payload API:

```typescript
// Replace strapi calls with:
const res = await fetch("http://localhost:3001/api/projects");
const projects = await res.json();
```

## Integration Next Steps

1. Run MongoDB locally or connect to Atlas
2. Start Payload CMS: `npm run cms`
3. Create initial content in admin panel
4. Update Next.js components to fetch from `/api/` endpoints
5. Deploy Payload to production (Vercel, Railway, etc.)

## Build for Production

```bash
npm run cms:build
npm run build
```
