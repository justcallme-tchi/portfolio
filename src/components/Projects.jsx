import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'opencv-scripts',
    desc: 'Basic OpenCV scripts for first-time learning of computer vision concepts. A growing collection as I explore image processing and computer vision.',
    lang: 'Python',
    langColor: '#3572A5',
    url: 'https://github.com/justcallme-tchi/opencv-scripts',
    featured: true,
    badge: '📌 Pinned',
  },
  {
    num: '02',
    title: 'hardware-security-learning-journey',
    desc: 'My comprehensive learning path through hardware security fundamentals — documenting the journey from first concepts to real challenges.',
    lang: 'Documentation',
    langColor: '#39ff8f',
    url: 'https://github.com/justcallme-tchi/hardware-security-learning-journey',
  },
  {
    num: '03',
    title: 'More coming soon...',
    desc: 'Currently working on new projects in health-tech and ed-tech. Watch this space 👀',
    lang: 'In progress',
    langColor: '#334155',
    url: null,
    muted: true,
  },
]

function ProjectCard({ project, index }) {
  const Wrapper = project.url ? motion.a : motion.div

  return (
    <Wrapper
      href={project.url || undefined}
      target={project.url ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      whileHover={project.url ? { x: -3, y: -3 } : {}}
      className={`
        group relative bg-card border border-border p-10 block
        ${project.url ? 'hover:border-accent/40 hover:shadow-[5px_5px_0_rgba(57,255,143,0.1)] transition-all duration-300' : ''}
        ${project.featured ? 'md:col-span-2 border-accent/20 bg-gradient-to-br from-card to-accent/5' : ''}
        ${project.muted ? 'opacity-50' : ''}
      `}
    >
      {project.badge && (
        <span className="inline-block font-mono text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 bg-accent/10 border border-accent/30 text-accent mb-5">
          {project.badge}
        </span>
      )}

      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[11px] text-dim tracking-widest">{project.num}</span>
        {project.url && (
          <motion.div
            className="text-dim group-hover:text-accent transition-colors duration-200"
            whileHover={{ x: 4, y: -4 }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        )}
      </div>

      <h3 className={`font-syne font-bold mb-3 leading-snug group-hover:text-accent transition-colors duration-200 ${project.featured ? 'text-2xl' : 'text-xl'}`}>
        {project.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-6">{project.desc}</p>
      <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
        <span className="w-2 h-2 rounded-full" style={{ background: project.langColor }} />
        {project.lang}
      </div>
    </Wrapper>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-8 md:px-16 py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
          <span className="w-8 h-px bg-accent" />
          Projects
        </div>
        <h2 className="font-syne font-extrabold leading-[0.95] tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          What I've <em className="font-serif-custom font-normal not-italic" style={{ color: '#00bfff' }}>built</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="https://github.com/justcallme-tchi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-muted hover:text-accent transition-colors duration-200"
        >
          View all on GitHub <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </section>
  )
}
