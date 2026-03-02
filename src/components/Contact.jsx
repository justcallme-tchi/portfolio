import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Instagram, Send, MessageCircle } from 'lucide-react'

const socials = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/justcallme-tchi/' },
  { icon: Github, label: 'GitHub', url: 'https://github.com/justcallme-tchi' },
  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/justcallme.tchi' },
  { icon: Send, label: 'Telegram', url: 'https://t.me/justcallme_tchi' },
  { icon: MessageCircle, label: 'Discord', url: 'https://discord.com/users/895728962767048746' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-8 md:px-16 py-40 text-center overflow-hidden">
      {/* Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(57,255,143,0.04) 0%, transparent 70%)' }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-12">
          <span className="w-8 h-px bg-accent" />
          Contact
          <span className="w-8 h-px bg-accent" />
        </div>

        <h2 className="font-syne font-extrabold leading-[0.9] tracking-tight mb-8" style={{ fontSize: 'clamp(52px, 9vw, 110px)' }}>
          <span className="block text-outline">Let's</span>
          <span className="block text-accent">connect</span>
        </h2>

        <p className="text-muted text-base leading-relaxed mb-12 max-w-sm mx-auto">
          Looking to collaborate on health-tech or ed-tech? Want to discuss cybersecurity? Or just say hi?
        </p>

        <motion.a
          href="mailto:hassani.chaima18@gmail.com"
          whileHover={{ scale: 1.02, x: -2, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg font-mono text-sm font-bold tracking-wide hover:bg-white transition-colors duration-200 hover:shadow-[4px_4px_0_rgba(57,255,143,1)]"
        >
          <Mail size={16} />
          hassani.chaima18@gmail.com
        </motion.a>

        <div className="flex items-center justify-center flex-wrap gap-3 mt-10">
          {socials.map(({ icon: Icon, label, url }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border font-mono text-[11px] tracking-widest uppercase text-muted hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-200"
            >
              <Icon size={13} />
              {label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
