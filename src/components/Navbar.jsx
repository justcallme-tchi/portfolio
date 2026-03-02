import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setHidden(y > lastY && y > 80)
    setLastY(y)
  })

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 border-b border-border/50 backdrop-blur-xl bg-bg/70"
    >
      <a href="#" className="font-mono text-xs text-accent tracking-wider">~/tchi</a>
      <ul className="hidden md:flex gap-10">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="font-mono text-[11px] tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="mailto:hassani.chaima18@gmail.com"
        className="hidden md:inline-flex font-mono text-[11px] tracking-wider uppercase px-4 py-2 border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200"
      >
        Hire me
      </a>
    </motion.nav>
  )
}
