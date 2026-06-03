# Angole Sharif Abubakar - Professional Portfolio

Personal brand website showcasing offensive security expertise, cloud infrastructure, web development, and data analytics services.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd sh3rif-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Note: Use `--legacy-peer-deps` if you encounter dependency conflicts.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
sh3rif-portfolio/
├── app/
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── projects/       # Projects listing
│   ├── blog/           # Blog posts
│   ├── contact/        # Contact form
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── content/           # (To be added) MDX blog posts & projects
├── public/            # Static assets
└── package.json
```

## 📝 Content Management

### Adding Blog Posts

Blog posts will be managed using MDX files in the `content/blog/` directory (to be set up).

### Adding Projects

Projects will be managed using MDX files in the `content/projects/` directory (to be set up).

## 🔧 Configuration

### Update Personal Information

1. **Contact Details:** Update in `components/Footer.tsx` and `app/contact/page.tsx`
2. **Social Links:** Update GitHub, LinkedIn URLs in `app/page.tsx` and `components/Footer.tsx`
3. **CTF Profiles:** Update links in `app/page.tsx` (TryHackMe, HackTheBox, TCM, picoCTF)

### Domain Setup

1. Register domain: `sh3rif.com`
2. Deploy to Vercel
3. Configure custom domain in Vercel dashboard

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if needed)
4. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

## 📋 To-Do List

- [ ] Secure domain (sh3rif.com)
- [ ] Add MDX support for blog posts
- [ ] Create first 3 blog posts
- [ ] Add project detail pages
- [ ] Integrate contact form with email service
- [ ] Add resume PDF download
- [ ] Set up Google Analytics
- [ ] Add dark/light mode toggle (optional)
- [ ] Create sitemap and robots.txt

## 🎨 Customization

### Colors

Main color theme is defined in Tailwind classes:
- **Primary:** Cyan (security/tech feel)
- **Secondary:** Purple (cloud services)
- **Accent:** Green (development)
- **Data:** Yellow (analytics)

Update colors in `app/globals.css` and component files.

## 📧 Contact

- **Email:** sharifidris8@gmail.com
- **Phone:** +256 765 721 427
- **Location:** Lira City, Uganda

## 📄 License

Private portfolio - All rights reserved © 2026 Angole Sharif Abubakar

---

**Built with 💚 for the East African tech community**
