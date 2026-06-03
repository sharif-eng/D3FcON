# Content Management Guide

## Current Setup (Static)
All content is hardcoded in the page components. Simple but requires code changes.

## Option 1: JSON Files (Easiest)
Store content in JSON files for easy updates without touching code.

### Setup:
1. Create `/data` folder in root
2. Add files:
   - `data/projects.json`
   - `data/blog-posts.json`
   - `data/stats.json`

### Example `data/projects.json`:
```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "My Project",
      "category": "security",
      "description": "Project description",
      "tags": ["Tag1", "Tag2"],
      "github": "https://github.com/sharif-eng/project",
      "demo": "https://demo-link.com"
    }
  ]
}
```

### Update pages to import JSON:
```typescript
import projectsData from '@/data/projects.json';
const projects = projectsData.projects;
```

**Pros:** Simple, no database needed, version control
**Cons:** Need to rebuild site after changes

---

## Option 2: MDX Files (Best for Blog)
Write blog posts in Markdown with frontmatter.

### Setup:
1. Install: `npm install @next/mdx @mdx-js/loader @mdx-js/react`
2. Create `/content/blog/` folder
3. Write posts as `.mdx` files

### Example `content/blog/my-first-post.mdx`:
```mdx
---
title: "Getting Started with Offensive Security"
date: "2026-05-28"
category: "Security"
excerpt: "My journey into ethical hacking"
---

# Getting Started

This is my blog post content in **Markdown**!

## Section 1
Content here...
```

**Pros:** Easy to write, version controlled, supports code syntax
**Cons:** Requires build process

---

## Option 3: CMS (Headless)
Use a Content Management System for non-technical updates.

### Recommended Options:

1. **Sanity.io** (Free tier)
   - Visual editor
   - Real-time updates
   - Free for small projects

2. **Contentful** (Free tier)
   - Easy interface
   - Good documentation

3. **Strapi** (Self-hosted)
   - Full control
   - Free and open source

**Pros:** Non-technical team can update, media management
**Cons:** More complex setup, possible costs

---

## Option 4: Database (Most Dynamic)
Use a database for full dynamic content.

### Setup with Supabase (Free):
1. Create Supabase project
2. Create tables: `projects`, `blog_posts`, `stats`
3. Fetch data in pages using API

**Pros:** Real-time updates, user submissions possible
**Cons:** Requires backend knowledge

---

## 📝 Recommendation for You:

### For NOW (Quick Start):
**JSON Files** - Easy to update, no extra setup needed

### For FUTURE (When Growing):
**MDX for Blog** + **JSON for Projects** + **Sanity CMS** (when you need team collaboration)

---

## Quick Start: JSON Implementation

### Step 1: Create data folder structure
```
/data
  ├── projects.json
  ├── blog.json
  └── stats.json
```

### Step 2: Update projects page to use JSON
Import and map the data instead of hardcoded array

### Step 3: Edit JSON files to update content
No code changes needed, just edit JSON

---

Would you like me to implement JSON-based content management now?
