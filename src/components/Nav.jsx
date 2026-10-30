import { useEffect, useState } from 'react'

export default function Nav({ active, scrollAware = false }) {
  const [light, setLight] = useState(!scrollAware)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!scrollAware) return
    function onScroll() {
      setLight(window.scrollY > window.innerHeight - 80)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollAware])

  function handleSectionLink(e, hash) {
    const onHome = window.location.pathname === '/' || window.location.pathname === '/index.html'
    if (onHome) {
      e.preventDefault()
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    setMenuOpen(false)
  }

  return (
    <nav id="nav" className={light ? 'light' : ''}>
      <a href="/" className="nav-logo" onClick={(e) => handleSectionLink(e, null)}>
        <img src="/assets/logo.png" alt="City in Check" className="nav-icon" />
        <div>
          <div className="nav-name">City in Check</div>
          <div className="nav-sub">NYC Chess</div>
        </div>
      </a>

      <button
        type="button"
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul id="nav-links" className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="/#events" className={active === 'events' ? 'active' : ''} onClick={(e) => handleSectionLink(e, '#events')}>Events</a></li>
        <li><a href="/#stream" onClick={(e) => handleSectionLink(e, '#stream')}>Stream</a></li>
        <li><a href="/about" className={active === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="https://jayvio-shop.fourthwall.com/en-usd" target="_blank" rel="noopener">Merch</a></li>
        <li><a href="https://discord.gg/sYKgpJE23K" target="_blank" rel="noopener" className="nav-cta">Join Discord</a></li>
      </ul>
    </nav>
  )
}
