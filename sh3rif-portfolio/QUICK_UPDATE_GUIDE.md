# 🎯 QUICK GUIDE: Update Your Portfolio in 3 Steps

## 📁 Your Content Files

```
data/
├── projects.json   👈 Add/edit projects here
├── blog.json       👈 Add/edit blog posts here  
└── stats.json      👈 Update numbers here
```

---

## 🚀 Adding a New Project (30 seconds)

### 1. Open File
`data/projects.json`

### 2. Copy & Paste This:
```json
,
{
  "id": "project-name",
  "title": "Project Title",
  "category": "security",
  "description": "What the project does",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "github": "https://github.com/sharif-eng/repo",
  "demo": null
}
```

### 3. Customize & Save!

**Categories:**
- `security` = 🛡️ Shield icon
- `development` = 💻 Code icon
- `cloud` = ☁️ Cloud icon

---

## ✍️ Adding a Blog Post (30 seconds)

### 1. Open File
`data/blog.json`

### 2. Copy & Paste This:
```json
,
{
  "slug": "post-url-name",
  "title": "Blog Post Title",
  "excerpt": "Short description of the post",
  "date": "2026-06-15",
  "readTime": "5 min read",
  "category": "Security"
}
```

### 3. Customize & Save!

---

## 📊 Update Statistics (10 seconds)

### 1. Open File
`data/stats.json`

### 2. Change Numbers:
```json
{
  "label": "Projects Completed",
  "value": 10,  ← Just change this number!
  "suffix": "+",
  "icon": "📦"
}
```

### 3. Save!

---

## ⚠️ Important Rules

✅ **DO:**
- Use double quotes `"text"`
- Add comma between items
- Use format: `YYYY-MM-DD` for dates

❌ **DON'T:**
- Use single quotes `'text'`
- Forget commas between items
- Add comma after last item

---

## 🔄 See Your Changes

### Local (Development):
1. Save JSON file
2. Refresh browser
3. Done! ✨

### Live (Production):
1. Save JSON file
2. Push to GitHub
3. Vercel auto-deploys
4. Live in ~2 minutes! 🚀

---

## 🆘 Quick Fixes

**Site broken after update?**
→ Check JSON syntax at: https://jsonlint.com

**Changes not showing?**
→ Hard refresh: `Ctrl + Shift + R`

**Still stuck?**
→ Check browser console (F12) for errors

---

## 💡 Pro Tips

1. **Always validate JSON** before saving
2. **Keep backups** of your JSON files
3. **Test locally** before pushing live
4. **Use VS Code** for auto-formatting

---

## 📝 Real Example

**Adding a CTF Writeup:**

```json
{
  "id": "htb-photobomb",
  "title": "HackTheBox: Photobomb",
  "category": "security",
  "description": "Exploiting SSTI vulnerability and privilege escalation on Linux machine",
  "tags": ["HackTheBox", "SSTI", "Linux", "CTF"],
  "github": "https://github.com/sharif-eng/htb-photobomb",
  "demo": null
}
```

**That's it!** Your portfolio now shows this project! 🎉

---

## 📂 File Structure Reference

```
sh3rif-portfolio/
├── data/               ← Your content folder
│   ├── projects.json   ← Projects
│   ├── blog.json       ← Blog posts
│   └── stats.json      ← Statistics
│
├── HOW_TO_UPDATE.md    ← Full guide (this file)
└── README.md           ← Project info
```

---

**You're all set! Update your portfolio anytime by editing JSON files! 🚀**

No coding needed - just edit, save, and go! ✨
