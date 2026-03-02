# Chaïma's Portfolio — Setup Guide

## ⚡ Quick Start (3 steps)

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173 — done! 🎉

### 3. Build for production
```bash
npm run build
```

---

## 🚀 Deploy to Vercel (Free)

### Option A — Via CLI (recommended)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live in ~1 minute.

### Option B — Via GitHub (auto-deploy on push)
1. Push this repo to GitHub
2. Go to vercel.com → "Add New Project"
3. Import your GitHub repo
4. Click Deploy — that's it!

Every `git push` to main will auto-redeploy. ✨

---

## 📁 Project Structure

```
src/
  components/
    Cursor.jsx      # Custom cursor
    Navbar.jsx      # Navigation (hides on scroll down)
    Hero.jsx        # Landing section
    Ticker.jsx      # Scrolling marquee
    About.jsx       # Bio + stats + code block
    Skills.jsx      # Tech stack grid
    Projects.jsx    # GitHub projects
    Contact.jsx     # Contact + socials
    Footer.jsx      # Footer
  App.jsx           # Root component
  main.jsx          # Entry point
  index.css         # Global styles + Tailwind
```

## ✏️ Customization

- **Add a project** → edit `src/components/Projects.jsx`, add to the `projects` array
- **Update skills** → edit `src/components/Skills.jsx`, modify `categories`
- **Change colors** → edit `tailwind.config.js` under `theme.extend.colors`
- **Update contact links** → edit `src/components/Contact.jsx`
