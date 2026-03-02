export default function Footer() {
  return (
    <footer className="relative z-10 px-8 md:px-16 py-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-[11px] text-dim tracking-wide">
        © 2025 <span className="text-accent">Chaïma Hassani</span> — ~/tchi
      </span>
      <span className="font-mono text-[11px] text-dim tracking-wide">
        Algiers, <span className="text-accent">Algeria</span> 🇩🇿
      </span>
      <span className="font-mono text-[11px] text-dim tracking-wide">
        Built with <span className="text-accent">React</span> + <span className="text-accent">Framer Motion</span>
      </span>
    </footer>
  )
}
