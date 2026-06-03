# 🔐 Admin Dashboard Guide

## 🎯 Access Your Dashboard

**URL:** http://localhost:3000/admin

**Default Password:** `sh3rif2026`

⚠️ **IMPORTANT:** Change the password in `app/admin/page.tsx` (line 13)

---

## 📊 Dashboard Features

### 1. **Projects Management**
- ✅ View all projects
- ✅ Add new projects
- ✅ Edit existing projects
- ✅ Delete projects
- ✅ Download updated JSON

### 2. **Blog Posts Management**
- ✅ View all blog posts
- ✅ Add new posts
- ✅ Edit existing posts
- ✅ Delete posts
- ✅ Download updated JSON

### 3. **Statistics Management**
- ✅ Update numbers in real-time
- ✅ See live preview
- ✅ Download updated JSON

---

## 🚀 How to Update Content (4 Steps)

### Step 1: Login
Go to: http://localhost:3000/admin
Enter password: `sh3rif2026`

### Step 2: Make Changes
- Click on the tab (Projects/Blog/Stats)
- Edit, add, or delete content
- Use the forms to update

### Step 3: Download JSON
- Click "Download JSON" button
- File saves to your Downloads folder

### Step 4: Replace File
- Copy downloaded file to `/data` folder
- Replace old file
- Refresh your site - Done! ✨

---

## 📝 Examples

### Adding a Project:
1. Go to Projects tab
2. Click "Add Project"
3. Fill in the form:
   - Title: "My CTF Writeup"
   - Category: security
   - Description: "Solved XYZ challenge"
   - Tags: ["CTF", "HackTheBox"]
   - GitHub: Your repo URL
4. Click "Download JSON"
5. Replace `data/projects.json`

### Adding a Blog Post:
1. Go to Blog tab
2. Click "Add Post"
3. Fill in:
   - Title: "My First Writeup"
   - Slug: "my-first-writeup"
   - Excerpt: "How I solved..."
   - Date: 2026-06-15
   - Category: Security
4. Click "Download JSON"
5. Replace `data/blog.json`

### Update Stats:
1. Go to Stats tab
2. Change numbers in input boxes
3. Click "Download JSON"
4. Replace `data/stats.json`

---

## 🔒 Security Notes

### Change Password:
Edit `app/admin/page.tsx`:
```typescript
const ADMIN_PASSWORD = "your-secure-password"; // Change this!
```

### For Production:
Consider using environment variables:
```typescript
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
```

---

## 🎨 Dashboard Features

✅ **Easy to Use** - Visual interface, no JSON editing
✅ **Live Preview** - See your content as you edit
✅ **Safe** - Download JSON, review before replacing
✅ **Fast** - Make changes in seconds
✅ **Mobile Friendly** - Use on phone/tablet

---

## 🆘 Troubleshooting

**Can't Login?**
- Check password spelling
- Clear browser cache
- Try incognito mode

**Downloaded File Won't Replace?**
- Make sure filename matches exactly
- Check file permissions
- Use VS Code to open and verify JSON

**Changes Not Showing?**
- Hard refresh: `Ctrl + Shift + R`
- Clear cache
- Restart dev server

---

## 💡 Pro Tips

1. **Backup First** - Keep a copy of original JSON files
2. **Test Locally** - Preview changes before going live
3. **Use Chrome** - Best compatibility
4. **Bookmark Admin** - Quick access to dashboard
5. **Mobile Access** - Works on phone too!

---

## 🔄 Workflow Summary

```
Login → Edit Content → Download JSON → Replace File → Refresh Site
```

**That's it!** No more manual JSON editing! 🎉

---

## 📱 Access Dashboard

**Local Development:**
http://localhost:3000/admin

**Production (After Deploy):**
https://yoursite.com/admin

---

## 🎯 Quick Commands

**Login:** `/admin`
**Dashboard:** `/admin/dashboard` (auto-redirects after login)

---

**Your content management is now super easy!** 🚀

Visual interface + Download JSON = No more code editing! ✨
