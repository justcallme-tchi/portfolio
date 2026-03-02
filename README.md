# 🖥️ My Personal Portfolio

Hey! I'm **Chaïma Hassani** (aka tchi) — a software engineer from Algiers, Algeria.  
I hold a **Bachelor's degree in Software Engineering** and I'm currently a **1st year Master's student in Cybersecurity**.  
This is my personal portfolio website, built to showcase my skills, projects, and who I am as a developer.

I built it using **React**, **Tailwind CSS**, **Framer Motion**, and **Vite** and deployed it for on **Vercel**.  
No templates, no drag-and-drop builders, so just code. 🙂

---

## 🛠️ What I used

- **React** — component-based UI
- **Vite** — fast development build tool
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations and transitions
- **Lucide React** — clean icon library

---

## 📁 Project Structure

Here's how I organized the code — each section of the portfolio is its own component:

```
src/
  components/
    Cursor.jsx      # Custom animated cursor
    Navbar.jsx      # Navigation bar (auto-hides on scroll down)
    Hero.jsx        # Landing / intro section
    Ticker.jsx      # Scrolling tech stack marquee
    About.jsx       # About me, stats, and the code block
    Skills.jsx      # Tech skills grid with hover effects
    Projects.jsx    # My GitHub projects
    Contact.jsx     # Contact info and social links
    Footer.jsx      # Footer
  App.jsx           # Root component — puts it all together
  main.jsx          # Entry point
  index.css         # Global styles + Tailwind directives
```

---

## ⚡ Run it locally

If you want to run this on your machine:

**1. Clone the repo**
```bash
git clone https://github.com/justcallme-tchi/portfolio.git
cd portfolio
```

**2. Install dependencies** (install Node.js to run npm commands, https://nodejs.org )
```bash
npm install
```

**3. Start the dev server**
```bash
npm run dev
```

Then open **http://localhost:5173** in your browser. That's it! 🎉

---

## 🚀 How I deployed it

I deployed this for free on **Vercel** by connecting it to this GitHub repo.  
Every time I push changes, Vercel automatically redeploys, no manual steps needed.

If you want to do the same:
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** and import this repo
3. Hit **Deploy** , Vercel detects Vite automatically

Your live URL will look something like: `https://portfolio-username.vercel.app`

---

## ✏️ Want to customize it?

If you're forking this for yourself, here's where to find everything:

- **Projects** → `src/components/Projects.jsx` — edit the `projects` array
- **Skills** → `src/components/Skills.jsx` — edit the `categories` array
- **Colors** → `tailwind.config.js` under `theme.extend.colors`
- **Contact & socials** → `src/components/Contact.jsx`
- **Your info** → `src/components/Hero.jsx` and `src/components/About.jsx`

---

## 📫 Let's connect

- 💼 [LinkedIn](https://www.linkedin.com/in/justcallme-tchi/)
- 🐙 [GitHub](https://github.com/justcallme-tchi)
- 📧 hassani.chaima18@gmail.com
