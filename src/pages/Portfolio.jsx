import { useEffect, useMemo, useState } from 'react'
import '../styles/light-theme.css'
import '../styles/portfolio.css'
import { portfolioWork, categories } from '../portfolio-data.jsx'
import Footer from '../components/Footer.jsx'

const sectionMeta = {
  stickers: { title: 'Stickers', blurb: 'Die-cut vinyl stickers, ready to print or ship.' },
  'profile-photos': { title: 'Profile Photos', blurb: 'Custom avatars for streamers, gamers, and online handles.' },
  illustrations: { title: 'Illustrations', blurb: 'Character pieces and personal work, painted digitally and traditionally.' },
  merch: { title: 'Merch Designs', blurb: 'Apparel and product art made for the shop.' },
  drawings: { title: 'Drawings', blurb: 'Art projects and studies.' },
  emotes: { title: 'Emotes', blurb: 'Twitch & Discord emotes built to read clearly at tiny sizes.' },
}

function FrameMedia({ item, onOpen }) {
  if (item.image) {
    return (
      <img
        className="frame-media"
        src={item.image}
        alt={item.alt}
        loading="lazy"
        onClick={() => onOpen(item)}
      />
    )
  }
  return <div className="frame-media ph" aria-hidden="true">No image yet</div>
}

function IllustrationCard({ item, onOpen }) {
  return (
    <div className="ill-card">
      <div className="ill-frame"><FrameMedia item={item} onOpen={onOpen} /></div>
      <div className="ill-title">{item.title}</div>
      <div className="ill-meta">{item.medium}</div>
    </div>
  )
}

function EmoteCard({ item, onOpen }) {
  return (
    <div className="emote-card">
      <div className="emote-frame"><FrameMedia item={item} onOpen={onOpen} /></div>
      <div className="emote-name">:{item.name}:</div>
    </div>
  )
}

function ProfilePhotoItem({ item, onOpen }) {
  return (
    <div className="pfp-item">
      <div className="pfp-frame"><FrameMedia item={item} onOpen={onOpen} /></div>
      <div className="pfp-handle">{item.handle}</div>
      <div className="pfp-meta">{item.style}</div>
    </div>
  )
}

function StickerFrame({ item, onOpen }) {
  return (
    <div className="sticker-frame">
      <div className="sticker-img-wrap"><FrameMedia item={item} onOpen={onOpen} /></div>
      <div className="sticker-name">{item.name}</div>
      <div className="sticker-meta">{item.format} · {item.size}</div>
    </div>
  )
}

function MerchCard({ item, onOpen }) {
  return (
    <div className="ill-card">
      <div className="ill-frame"><FrameMedia item={item} onOpen={onOpen} /></div>
      <div className="ill-title">{item.title}</div>
      <div className="ill-meta">{item.product}</div>
    </div>
  )
}

const renderers = {
  illustrations: { Card: IllustrationCard, gridClass: 'ill-grid' },
  drawings: { Card: IllustrationCard, gridClass: 'ill-grid' },
  emotes: { Card: EmoteCard, gridClass: 'emote-grid' },
  'profile-photos': { Card: ProfilePhotoItem, gridClass: 'pfp-grid' },
  stickers: { Card: StickerFrame, gridClass: 'sticker-grid' },
  merch: { Card: MerchCard, gridClass: 'ill-grid' },
}

function encodeForm(data) {
  return Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join('&')
}

const commissionCategories = ['Illustration', 'Profile photo', 'Stickers', 'Merch design', 'Something else']

function CommissionForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [category, setCategory] = useState('')
  const [categoryError, setCategoryError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!category) {
      setCategoryError(true)
      return
    }
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    data.category = category
    setStatus('sending')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm(data),
    })
      .then(() => setStatus('sent'))
      .catch(() => setStatus('error'))
  }

  if (status === 'sent') {
    return <p className="form-success">Thanks — your request is in. I'll get back to you soon.</p>
  }

  return (
    <form
      name="commission-request"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="commission-form"
    >
      <input type="hidden" name="form-name" value="commission-request" />
      <p hidden>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="form-grid-2">
        <div className="form-row">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" required />
        </div>
        <div className="form-row">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="cf-channel">Channel or brand <span className="opt">(optional)</span></label>
        <input id="cf-channel" name="channel" type="text" placeholder="Twitch, Instagram, website..." />
      </div>

      <div className="form-row">
        <label id="cf-category-label">What do you need?</label>
        <div className="cat-pills" role="radiogroup" aria-labelledby="cf-category-label">
          {commissionCategories.map(opt => (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={category === opt}
              className={`cat-pill${category === opt ? ' active' : ''}`}
              onClick={() => { setCategory(opt); setCategoryError(false) }}
            >
              {opt}
            </button>
          ))}
        </div>
        {categoryError && <p className="form-error">Pick what you need.</p>}
      </div>

      <div className="form-row">
        <label htmlFor="cf-message">Tell me about the project</label>
        <textarea
          id="cf-message"
          name="message"
          rows="5"
          required
          placeholder="What should it show, the vibe you're going for, how many pieces, where it'll be used..."
        ></textarea>
      </div>

      <div className="form-row">
        <label htmlFor="cf-refs">Reference links <span className="opt">(optional)</span></label>
        <input id="cf-refs" name="references" type="text" placeholder="Pinterest board, images, examples you like" />
      </div>

      <div className="form-grid-2">
        <div className="form-row">
          <label htmlFor="cf-needed-by">Needed by <span className="opt">(optional)</span></label>
          <input id="cf-needed-by" name="needed-by" type="date" />
        </div>
        <div className="form-row">
          <label htmlFor="cf-budget">Budget <span className="opt">(optional)</span></label>
          <select id="cf-budget" name="budget" defaultValue="">
            <option value="">Prefer not to say</option>
            <option>Under $50</option>
            <option>$50 – $150</option>
            <option>$150 – $300</option>
            <option>$300+</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-fill" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send request'}
      </button>
      {status === 'error' && <p className="form-error">Something went wrong — please try again.</p>}
    </form>
  )
}

function CommissionModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="commission-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h2 id="commission-modal-title" className="contact-title modal-title">Let's make something.</h2>
        <p className="contact-sub modal-sub">Have an idea? Tell me about it and I'll get back to you.</p>
        <CommissionForm />
      </div>
    </div>
  )
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">×</button>
      <img className="lightbox-img" src={item.image} alt={item.alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState('all')
  const [lightboxItem, setLightboxItem] = useState(null)
  const [showCommissionModal, setShowCommissionModal] = useState(false)

  const byCategory = useMemo(() => {
    const map = {}
    portfolioWork.forEach(item => {
      map[item.category] = map[item.category] || []
      map[item.category].push(item)
    })
    return map
  }, [])

  const counts = useMemo(() => {
    const c = { all: portfolioWork.length }
    portfolioWork.forEach(item => { c[item.category] = (c[item.category] || 0) + 1 })
    return c
  }, [])

  return (
    <div data-accent="sky">
      <header className="site-header">
        <div className="wrap header-row">
          <a href="#top" className="logo">Jayvio<span className="dot">.</span></a>
          <ul className="main-nav">
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="eyebrow">Graphic Designer · Illustrator</div>
          <h1 className="hero-headline">Design for creators, streamers and brands.</h1>
          <p className="hero-bio">I'm an NYC-based illustrator and streamer who loves bringing other people's ideas to life. Working digitally lets me explore a different style with every project.</p>
        </div>
      </section>

      <div className="tabs-sticky" id="work">
        <div className="wrap">
          <div className="tabs" role="tablist" aria-label="Filter work by category">
            {categories.map(cat => (
              <button
                key={cat.id}
                type="button"
                className="tab"
                role="tab"
                aria-selected={selected === cat.id}
                onClick={() => setSelected(cat.id)}
              >
                {cat.label} <span className="count">({counts[cat.id] || 0})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        {Object.keys(sectionMeta).map(cat => {
          if (selected !== 'all' && selected !== cat) return null
          const meta = sectionMeta[cat]
          const items = byCategory[cat] || []
          const { Card, gridClass } = renderers[cat]
          return (
            <section className="gallery-section" key={cat}>
              <div className="wrap">
                <div className="sec-head">
                  <div className="gold-bar"></div>
                  <h2 className="sec-title">{meta.title}</h2>
                  <p className="sec-blurb">{meta.blurb}</p>
                </div>
                <div className={gridClass}>
                  {items.map((item, i) => <Card item={item} key={i} onOpen={setLightboxItem} />)}
                </div>
                {cat === 'emotes' && (
                  <p className="emote-note">Delivered at 112 · 56 · 28 px for Twitch and Discord.</p>
                )}
              </div>
            </section>
          )
        })}
      </div>

      <div className="wrap">
        <div className="contact-panel" id="contact">
          <div>
            <h2 className="contact-title">Let's make something.</h2>
            <p className="contact-sub">Have an idea? Tell me about it and I'll get back to you.</p>
            <button type="button" className="btn btn-accent" onClick={() => setShowCommissionModal(true)}>
              Request a commission
            </button>
          </div>
        </div>
      </div>

      {showCommissionModal && <CommissionModal onClose={() => setShowCommissionModal(false)} />}
      {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}

      <Footer />
    </div>
  )
}
