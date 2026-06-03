# 📝 How to Update Your Portfolio Content

## 🎯 Overview
Your portfolio now uses JSON files for easy content management. No code editing required!

---

## 📂 Content Files Location

All your content is stored in the `/data` folder:

```
sh3rif-portfolio/
└── data/
    ├── projects.json    ← Your projects
    ├── blog.json        ← Your blog posts
    └── stats.json       ← Your statistics
```

---

## 🚀 Adding a New Project

### Step 1: Open the file
Navigate to: `data/projects.json`

### Step 2: Add your project
Copy this template and add it to the "projects" array:

```json
{
  "id": "my-new-project",
  "title": "My Awesome Project",
  "category": "security",
  "description": "A detailed description of what this project does and the problem it solves.",
  "tags": ["Python", "Security", "Automation"],
  "github": "https://github.com/sharif-eng/my-project",
  "demo": "https://demo-link.com"
}
```

### Step 3: Customize the fields

- **id**: Unique identifier (lowercase, use hyphens)
- **title**: Project name (shown as heading)
- **category**: Choose one:
  - `"security"` - Shows shield icon
  - `"development"` - Shows code icon  
  - `"cloud"` - Shows cloud icon
- **description**: Brief explanation (1-2 sentences)
- **tags**: Array of skills/technologies used
- **github**: Link to GitHub repo (or `"#"` if private)
- **demo**: Live demo URL (or `null` if no demo)

### Step 4: Save the file
That's it! The site updates automatically.

### ⚠️ IMPORTANT: JSON Syntax Rules
- Use double quotes `"` not single quotes `'`
- Add comma after each project (except the last one)
- Keep proper brackets and braces

---

## ✍️ Adding a New Blog Post

### Step 1: Open the file
Navigate to: `data/blog.json`

### Step 2: Add your blog post
Copy this template:

```json
{
  "slug": "my-blog-post",
  "title": "How I Built My First CTF Challenge",
  "excerpt": "A short summary of what this blog post is about. Keep it under 200 characters.",
  "date": "2026-06-15",
  "readTime": "5 min read",
  "category": "Security"
}
```

### Step 3: Customize the fields

- **slug**: URL-friendly version (lowercase, hyphens)
- **title**: Blog post title
- **excerpt**: Short summary (appears in listing)
- **date**: Format: `YYYY-MM-DD`
- **readTime**: Estimated reading time
- **category**: Post category (e.g., "Security", "Cloud", "Development")

### Step 4: Save the file

### 📝 Note: Full Blog Posts
The listing page is ready. To add full blog post content, you'll need to:
1. Create a folder: `app/blog/[slug]/`
2. Add a `page.tsx` file with the full content
(We can set this up later if needed)

---

## 📊 Updating Statistics

### Step 1: Open the file
Navigate to: `data/stats.json`

### Step 2: Update the numbers
Simply change the `value` field:

```json
{
  "label": "Projects Completed",
  "value": 10,  ← Change this number
  "suffix": "+",
  "icon": "📦"
}
```

### Available Stats:
1. Projects Completed
2. Happy Clients
3. CTF Challenges Solved
4. Months Experience

### Step 3: Save the file

---

## 🔄 How Updates Work

### After Editing JSON Files:

1. **Development (Local):**
   - File changes auto-reload
   - Refresh browser if needed
   - No rebuild required

2. **Production (Deployed):**
   - Push changes to GitHub
   - Vercel auto-deploys
   - Live in ~2 minutes

---

## 📝 Example: Adding Your First Real Project

Let's say you completed a CTF challenge. Here's how to add it:

### 1. Open `data/projects.json`

### 2. Add after existing projects:

```json
{
  "projects": [
    ... existing projects ...,
    {
      "id": "hackthebox-photobomb",
      "title": "HackTheBox: Photobomb Machine",
      "category": "security",
      "description": "Complete walkthrough of exploiting a vulnerable web application with SSTI and privilege escalation.",
      "tags": ["HackTheBox", "SSTI", "Linux", "PrivEsc"],
      "github": "https://github.com/sharif-eng/htb-photobomb-writeup",
      "demo": null
    }
  ]
}
```

### 3. Save and check your portfolio!

---

## ✅ Quick Checklist Before Saving

- [ ] Valid JSON syntax (no trailing commas)
- [ ] All strings in double quotes
- [ ] Proper date format (YYYY-MM-DD)
- [ ] URLs start with http:// or https://
- [ ] Unique IDs for each item
- [ ] Commas between items

---

## 🆘 Common Mistakes & Fixes

### ❌ Error: Unexpected token
**Problem:** Missing comma or quote
**Fix:** Check JSON syntax, use a validator

### ❌ Error: Duplicate key
**Problem:** Two projects with same ID
**Fix:** Make sure each ID is unique

### ❌ Site not updating
**Problem:** JSON syntax error
**Fix:** Check browser console for errors

---

## 🛠️ Tools to Help

### JSON Validators:
- https://jsonlint.com
- Paste your JSON to check for errors

### VS Code Tips:
- Install "JSON" extension
- Red squiggly lines = syntax errors
- Auto-format: `Shift + Alt + F`

---

## 🚀 Workflow Summary

1. **Add content** → Edit JSON file
2. **Save file** → Auto-reload (dev) or push to GitHub (production)
3. **View changes** → Refresh browser
4. **Done!** ✨

---

## 📧 Need Help?

If you get stuck:
1. Check the JSON syntax
2. Look at existing examples
3. Use jsonlint.com to validate
4. Check browser console for errors

---

**Your portfolio is now super easy to update! 🎉**

Just edit JSON files - no code required!
