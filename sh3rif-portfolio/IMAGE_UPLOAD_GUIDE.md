# 📸 How to Add Images to Projects & Blog Posts

## 🎯 Image Storage Structure

Your images are stored in:
```
public/Images/
├── projects/     ← Project images go here
└── blog/         ← Blog post images go here
```

---

## 📂 Manual Method (Current - Simple)

### For Projects:
1. Put your image in: `public/Images/projects/`
2. Name it something like: `my-project.jpg`
3. In admin dashboard, add project
4. In "Image" field, enter: `/Images/projects/my-project.jpg`
5. Save & Publish!

### For Blog Posts:
1. Put your image in: `public/Images/blog/`
2. Name it something like: `my-post.jpg`
3. In admin dashboard, add blog post
4. In "Image" field, enter: `/Images/blog/my-post.jpg`
5. Save & Publish!

---

## 🖼️ Image Best Practices

### Recommended Sizes:
- **Project Images:** 800x600px or 1200x900px
- **Blog Post Images:** 1200x630px (good for social sharing)

### File Formats:
- JPG/JPEG - Photos
- PNG - Graphics with transparency
- WebP - Modern, smaller files

### File Names:
- Use lowercase
- Use hyphens not spaces
- Example: `my-awesome-project.jpg`

---

## ✨ Coming Soon: Upload Button

I'm working on adding a direct upload button in the admin dashboard so you can:
- Click "Upload Image"
- Select file from computer
- Auto-upload to correct folder
- Auto-fill the image path

---

## 📝 Current Workflow

**Adding a Project with Image:**

1. Go to Admin Dashboard
2. Click "Add Project"
3. Fill in all fields
4. For "Image URL" field, enter: `/Images/projects/your-image.jpg`
5. Click "Add Project"
6. Click "Save & Publish"

**Note:** Make sure image exists in the folder first!

---

## 🎯 Quick Example

```
Step 1: Copy image to folder
C:\...\public\Images\projects\ctf-challenge.jpg

Step 2: In dashboard form, enter:
Image URL: /Images/projects/ctf-challenge.jpg

Step 3: Save & Publish
Done! ✅
```

---

**Your images will display automatically on your portfolio!** 🎨
