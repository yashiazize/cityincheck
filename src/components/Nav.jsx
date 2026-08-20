import { useEffect, useState } from 'react'

export default function Nav({ active, scrollAware = false }) {
  const [light, setLight] = useState(!scrollAware)

  useEffect(() => {
    if (!scrollAware) return
    function onScroll() {
      setLight(window.scrollY > window.innerHeight - 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollAware])

  return (
    <nav id="nav" className={light ? 'light' : ''}>
      <a href="/" className="nav-logo">
        <img src="/assets/logo.png" alt="City in Check" className="nav-icon" />
        <div>
          <div className="nav-name">City in Check</div>
          <div className="nav-sub">NYC Chess</div>
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="/" className={active === 'events' ? 'active' : ''}>Events</a></li>
        <li><a href="/#stream">Stream</a></li>
        <li><a href="/about.html" className={active === 'about' ? 'active' : ''}>About</a></li>
        <li><a href="https://discord.gg/sYKgpJE23K" target="_blank" rel="noopener" className="nav-cta">Join Discord</a></li>
      </ul>
    </nav>
  )
}
