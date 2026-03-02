const items = [
  'React Native', 'Cybersecurity', 'Full-Stack Development',
  'Flutter', 'OpenCV', 'Health-Tech', 'Ed-Tech',
  'Angular', 'Computer Vision', 'ML / DL', 'CTF Challenges',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-accent border-t border-b border-accent/40 py-2.5 overflow-hidden relative z-10">
      <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-[11px] font-bold text-bg tracking-[0.15em] uppercase px-10">
            {item}
            <span className="mx-4 opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
