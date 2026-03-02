import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mouse.current.x - 6 + 'px'
        cursorRef.current.style.top = mouse.current.y - 6 + 'px'
      }
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 18 + 'px'
        ringRef.current.style.top = ring.current.y - 18 + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursorRef.current?.style.setProperty('transform', 'scale(2)')
      ringRef.current?.style.setProperty('transform', 'scale(1.5)')
      ringRef.current?.style.setProperty('border-color', 'rgba(57,255,143,0.9)')
    }
    const onLeave = () => {
      cursorRef.current?.style.setProperty('transform', 'scale(1)')
      ringRef.current?.style.setProperty('transform', 'scale(1)')
      ringRef.current?.style.setProperty('border-color', 'rgba(57,255,143,0.4)')
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] w-3 h-3 bg-accent rounded-full pointer-events-none mix-blend-difference transition-transform duration-150"
        style={{ position: 'fixed' }}
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] w-9 h-9 rounded-full pointer-events-none transition-all duration-200"
        style={{
          position: 'fixed',
          border: '1px solid rgba(57,255,143,0.4)',
        }}
      />
    </>
  )
}
