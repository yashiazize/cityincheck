import { useEffect, useRef, useState } from 'react'

const SLIDE_DUR = 5000
const SLIDES = [
  { cls: 'slide-1', piece: '♞' },
  { cls: 'slide-2', piece: '♟' },
  { cls: 'slide-3', piece: '♜' },
  { cls: 'slide-4', piece: '♛' },
]

export default function Hero() {
  const [cur, setCur] = useState(0)
  const timerRef = useRef()

  function goTo(n) {
    setCur((n + SLIDES.length) % SLIDES.length)
  }

  useEffect(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => goTo(cur + 1), SLIDE_DUR)
    return () => clearTimeout(timerRef.current)
  }, [cur])

  return (
    <section id="hero">
      <div className="hero-slides">
        {SLIDES.map((s, i) => (
          <div key={s.cls} className={`hero-slide ${s.cls}${i === cur ? ' active' : ''}`}>
            <div className="hero-slide-bg"></div>
            <div className="slide-piece">{s.piece}</div>
          </div>
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-inner">
          <h1 className="hero-title">City<br /><em>in Check</em></h1>
          <div className="hero-eyebrow">New York City Chess Community</div>
          <p className="hero-sub">Where NYC's chess players compete, connect, and level up.</p>
          <div className="hero-btns">
            <a href="#events" className="btn btn-p">View Upcoming Events</a>
            <a href="https://discord.gg/sYKgpJE23K" target="_blank" rel="noopener" className="btn btn-o">Join Discord</a>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.cls}
            className={`hdot${i === cur ? ' on' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1} of ${SLIDES.length}`}
            aria-current={i === cur}
          ></button>
        ))}
      </div>
    </section>
  )
}
