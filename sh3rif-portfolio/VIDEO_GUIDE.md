# Video Background Guide

## ✅ What's Been Built

Your site now has a `VideoBackground` component that:
- Plays looping video in the background
- Has adjustable opacity for readability
- Includes dark overlay for text contrast
- Has cool scanline animation effect (hacker vibe)
- Auto-plays on page load
- Mobile-friendly (uses less battery)

## 🎥 Where to Get FREE Cyber/Tech Videos

### Option 1: Pexels (Best - Free, No Attribution Required)
**URL:** https://www.pexels.com/videos/

**Search Terms:**
- "cyber security"
- "hacking"
- "code"
- "data center"
- "circuit board"
- "cloud computing"
- "network"
- "matrix"
- "technology abstract"

**Recommended Videos:**
1. **Digital Code Background**
   - Search: "code running"
   - Perfect for developer/hacker aesthetic

2. **Network/Server Footage**
   - Search: "data center"
   - Professional cloud computing vibe

3. **Matrix Style**
   - Search: "matrix code"
   - Classic hacker look

4. **Circuit Board**
   - Search: "circuit board"
   - Tech/hardware aesthetic

**How to Download:**
1. Go to pexels.com/videos
2. Search for cyber/tech videos
3. Click video you like
4. Click "Free Download"
5. Choose "HD" or "Full HD" quality
6. Download MP4 file

---

### Option 2: Pixabay
**URL:** https://pixabay.com/videos/

Similar to Pexels, completely free. Good search terms:
- "technology"
- "cyber"
- "digital"
- "programming"
- "server"

---

### Option 3: Coverr
**URL:** https://coverr.co/

Beautiful tech videos, all free. Categories:
- Technology
- Business
- Abstract

---

### Option 4: Videezy (Free with Attribution)
**URL:** https://www.videezy.com/

More options, but some require attribution.

---

## 📁 Adding Video to Your Site

### Step 1: Download Video
Choose a video from Pexels (recommended) and download it.

### Step 2: Optimize Video (Important!)
Videos can be large. Compress before using:

**Online Tool:** https://www.freeconvert.com/video-compressor
- Upload your video
- Set quality to 70-80%
- Target size: Under 5MB for best performance

**Or use HandBrake (Free Software):**
1. Download from handbrake.fr
2. Load your video
3. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
4. Convert

### Step 3: Add to Project
1. Create `public/videos/` folder in your project
2. Save video as `cyber-bg.mp4` (or any name)
3. The VideoBackground component will use it automatically!

```
sh3rif-portfolio/
├── public/
│   └── videos/
│       └── cyber-bg.mp4   ← Your video here
```

### Step 4: Update Component (if needed)
If you use a different filename:

```tsx
<VideoBackground videoUrl="/videos/your-video-name.mp4" />
```

---

## 🎨 Customization Options

### Adjust Video Opacity
```tsx
<VideoBackground opacity={0.3} />  // Darker (better for text)
<VideoBackground opacity={0.5} />  // Lighter (more visible)
```

### Remove Overlay
```tsx
<VideoBackground overlay={false} />  // No dark gradient
```

### Multiple Videos (Advanced)
Different videos for different pages:

```tsx
// Home page
<VideoBackground videoUrl="/videos/cyber-bg.mp4" />

// About page
<VideoBackground videoUrl="/videos/code-bg.mp4" />

// Services page
<VideoBackground videoUrl="/videos/cloud-bg.mp4" />
```

---

## 📱 Performance Best Practices

### Video Specs (Recommended)
- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Length:** 10-30 seconds (will loop)
- **Frame Rate:** 24-30 fps
- **File Size:** 3-8 MB (after compression)
- **Format:** MP4 (H.264 codec)

### Why Small Files Matter
- Faster page load
- Less mobile data usage
- Better user experience
- Lower hosting costs

---

## 🎬 Recommended Videos for Your Brand

### For Offensive Security Focus
**Search:** "hacking code" or "cyber security"
- Dark theme with green/cyan code
- Matrix-style falling characters
- Network visualization
- Terminal/command line footage

### For Cloud/AWS Focus
**Search:** "data center" or "server room"
- Server racks with blinking lights
- Cloud network animations
- Abstract tech connections

### For Full-Stack Developer
**Search:** "programming code"
- Code editor with typing
- Colorful syntax highlighting
- Multiple screens coding

---

## 🚀 Quick Start (Copy-Paste Ready)

1. **Download this video from Pexels:**
   - Search: "cyber security code"
   - Or: "data matrix"
   - Pick one you like in HD

2. **Compress it to under 5MB**

3. **Save as:** `public/videos/cyber-bg.mp4`

4. **Done!** Your site now has a video background.

---

## 🎨 Alternative: CSS-Only Animated Background

If you prefer no video (for performance), use pure CSS:

```css
/* Animated gradient background */
.animated-bg {
  background: linear-gradient(45deg, #0a0a0a, #1a1a2e, #16213e);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 🎯 Current Setup

✅ VideoBackground component created
✅ Scanline animation added (hacker vibe)
✅ Integrated into home page hero section
✅ Dark overlay for text readability
✅ Auto-play with loop
✅ Mobile-optimized

**Next Step:** Download a cool video and drop it in `public/videos/cyber-bg.mp4`!

---

## 💡 Pro Tips

1. **Loop Seamlessly:** Choose videos that loop naturally (start/end look similar)
2. **Test on Mobile:** Video backgrounds use battery - test performance
3. **Fallback Option:** If video fails to load, background gradient shows
4. **Subtle is Better:** Lower opacity (0.2-0.3) keeps focus on content
5. **Match Your Brand:** Cyan/green for security, blue for cloud, colorful for dev

---

**Your site will look way more impressive than typical static image portfolios!** 🚀
