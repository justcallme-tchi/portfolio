import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-8 md:px-16 pt-32 pb-20 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, rgba(57,255,143,0.07) 0%, transparent 70%)', top: '5%', left: '-100px' }} />
      <div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,191,255,0.05) 0%, transparent 70%)', bottom: '10%', right: '-50px', animation: 'glow-pulse 6s ease-in-out infinite reverse' }} />

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: 'repeating-linear-gradient(to bottom, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />

      <div className="relative z-[2] max-w-5xl">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-8 px-3 py-1.5 border border-accent/30 bg-accent/5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
          Available for collaboration
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold leading-[0.88] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
          >
            Chaïma
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-syne font-extrabold leading-[0.88] tracking-[-0.03em] text-outline"
            style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
          >
            Hassani
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.5)} className="font-serif-custom italic text-muted mb-12"
          style={{ fontSize: 'clamp(18px, 2.5vw, 28px)' }}>
          CS student building things that{' '}
          <span className="text-accent2 not-italic font-syne font-semibold">matter</span>{' '}
          — full-stack · mobile · cybersecurity
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-mono text-xs font-bold tracking-[0.1em] uppercase hover:bg-white transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(57,255,143,1)]"
          >
            View Projects →
          </a>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-text font-mono text-xs tracking-[0.1em] uppercase border border-border hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_rgba(57,255,143,0.2)]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
      >
        <span className="font-mono text-[10px] text-dim tracking-widest uppercase">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} className="text-dim" />
        </motion.div>
      </motion.div>
    </section>
  )
}
