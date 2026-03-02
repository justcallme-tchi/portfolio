import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  { icon: '⌨️', name: 'Languages', tags: ['JavaScript', 'Java', 'Python', 'PHP', 'C', 'Dart'] },
  { icon: '🌐', name: 'Web & Frameworks', tags: ['Angular', 'Bootstrap', 'HTML', 'CSS', 'React Native'] },
  { icon: '📱', name: 'Mobile', tags: ['Flutter', 'Android', 'Dart'] },
  { icon: '🗄️', name: 'Databases', tags: ['MySQL', 'PostgreSQL', 'Oracle', 'Supabase'] },
  { icon: '🔐', name: 'Cybersecurity', tags: ['Kali Linux', 'CTF', 'Hardware Security', 'Bash'] },
  { icon: '👁️', name: 'Vision & Tools', tags: ['OpenCV', 'Git', 'Linux', 'VSCode'] },
]

function SkillCard({ cat, index }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group bg-card border border-border p-8 relative overflow-hidden transition-colors duration-300 hover:border-accent/40"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(57,255,143,0.05) 0%, transparent 60%)` }}
      />
      <div className="absolute left-0 top-0 w-0.5 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

      <span className="text-3xl mb-4 block">{cat.icon}</span>
      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent mb-4">{cat.name}</p>
      <div className="flex flex-wrap gap-1.5">
        {cat.tags.map(tag => (
          <span key={tag}
            className="text-[12px] px-2.5 py-1 bg-accent/5 border border-accent/15 text-text tracking-wide group-hover:border-accent/30 transition-colors duration-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-8 md:px-16 py-32 bg-surface border-t border-b border-border">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
          <span className="w-8 h-px bg-accent" />
          Skills & Tools
        </div>
        <h2 className="font-syne font-extrabold leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          My <em className="font-serif-custom font-normal not-italic" style={{ color: '#00bfff' }}>toolkit</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {categories.map((cat, i) => (
          <SkillCard key={cat.name} cat={cat} index={i} />
        ))}
      </div>
    </section>
  )
}
