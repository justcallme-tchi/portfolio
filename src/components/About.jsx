import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
      <span className="w-8 h-px bg-accent" />
      {children}
    </div>
  )
}

const stats = [
  { num: 'BSc', label: 'Software Engineering' },
  { num: 'MSc', label: 'Cybersecurity - 1st year (in progress)' },
  { num: '7+', label: 'Languages mastered' },
  { num: 'DZ', label: 'Based in Algiers' },
  { num: '12', label: 'GitHub repositories' },
  { num: '∞', label: 'Curiosity levels' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative z-10 px-8 md:px-16 py-32 grid md:grid-cols-2 gap-20 items-start">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionLabel>About Me</SectionLabel>
        <h2 className="font-syne font-extrabold leading-[0.95] tracking-tight mb-8" style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}>
          Engineer turned<br />
          <em className="font-serif-custom font-normal not-italic" style={{ color: '#00bfff' }}>security researcher</em>
        </h2>
        <p className="text-muted leading-relaxed mb-5 text-[15px]">
          Hey, I'm Chaïma — a software engineer Bachelor graduate from Algiers, Algeria and also 1st year MSc student in Cybersecurity, passionate about building software that makes a real difference in people's lives.
        </p>
        <p className="text-muted leading-relaxed mb-5 text-[15px]">
          I explore the intersection of health-tech, education technology, and security — currently sharpening my skills in cybersecurity and computer vision.
        </p>
        <p className="font-mono text-[13px] text-dim italic">
          🕵️‍♀️ "Debugging is just detective work in disguise... with snacks 🍫"
        </p>

        <div className="grid grid-cols-2 gap-0.5 mt-12">
          {stats.map(({ num, label }) => (
            <div key={label}
              className="group bg-card border border-border p-7 relative overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              <div className="absolute left-0 top-0 w-0.5 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
              <div className="font-syne font-extrabold text-4xl text-accent mb-2 leading-none">{num}</div>
              <div className="font-mono text-[11px] text-muted tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right — Code block */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-surface border border-border rounded overflow-hidden font-mono text-sm leading-relaxed">
          {/* Window bar */}
          <div className="bg-card px-5 py-3 border-b border-border flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent" />
            <span className="ml-3 text-[11px] text-muted tracking-wide">chaima.js</span>
          </div>
          <div className="p-6 overflow-x-auto text-[13px]">
            <pre className="whitespace-pre-wrap break-words">
{`\x1b`}
<span style={{color:'#7c9cbf'}}>const </span>
<span style={{color:'#00bfff'}}>chaima</span>
<span style={{color:'#334155'}}> = {'{'}</span>
{`
  `}<span style={{color:'#7c9cbf'}}>bio</span><span style={{color:'#334155'}}>: {'{'}</span>{`
    `}<span style={{color:'#7c9cbf'}}>location</span><span style={{color:'#334155'}}>: </span><span style={{color:'#39ff8f'}}>'Algeria'</span><span style={{color:'#334155'}}>,</span>{`
    `}<span style={{color:'#7c9cbf'}}>nick</span><span style={{color:'#334155'}}>: </span><span style={{color:'#39ff8f'}}>'tchi'</span><span style={{color:'#334155'}}>,</span>{`
    `}<span style={{color:'#7c9cbf'}}>bachelor</span><span style={{color:'#334155'}}>: </span><span style={{color:'#39ff8f'}}>'Software Engineering'</span><span style={{color:'#334155'}}>,</span>{`
    `}<span style={{color:'#7c9cbf'}}>master</span><span style={{color:'#334155'}}>: </span><span style={{color:'#39ff8f'}}>'Cybersecurity (1st year)'</span><span style={{color:'#334155'}}>,</span>{`
  `}<span style={{color:'#334155'}}>},</span>{`
  `}<span style={{color:'#7c9cbf'}}>focus</span><span style={{color:'#334155'}}>: [</span>{`
    `}<span style={{color:'#39ff8f'}}>'React Native'</span><span style={{color:'#334155'}}>,</span>{`
    `}<span style={{color:'#39ff8f'}}>'Cybersecurity'</span><span style={{color:'#334155'}}>,</span>{`
    `}<span style={{color:'#39ff8f'}}>'Full-Stack Dev'</span><span style={{color:'#334155'}}>,</span>{`
  `}<span style={{color:'#334155'}}>],</span>{`
  `}<span style={{color:'#7c9cbf'}}>learning</span><span style={{color:'#334155'}}>: [</span>{`
    `}<span style={{color:'#39ff8f'}}>'OpenCV'</span><span style={{color:'#334155'}}>, </span><span style={{color:'#39ff8f'}}>'CTF'</span><span style={{color:'#334155'}}>,</span>{`
    `}<span style={{color:'#39ff8f'}}>'Hardware security'</span><span style={{color:'#334155'}}>,</span>{`
  `}<span style={{color:'#334155'}}>],</span>{`
`}<span style={{color:'#334155'}}>{'}'}</span>{`
`}<span style={{color:'#3d5166', fontStyle:'italic'}}>// open to opportunities! 🚀</span>
            </pre>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
