import '../styles/links.css'
import { InstagramIcon, DiscordIcon, TwitchIcon, YoutubeIcon, WebIcon, ArrowIcon } from '../components/icons.jsx'

const links = [
  { href: 'https://instagram.com/cityincheck', icon: InstagramIcon, iconClass: 'ico-instagram', name: 'Instagram', desc: 'Drop a follow on IG!', delay: '.04s', external: true },
  { href: 'https://discord.gg/sYKgpJE23K', icon: DiscordIcon, iconClass: 'ico-discord', name: 'Join Discord', desc: 'Chat with the community!', delay: '.08s', external: true },
  { href: 'https://twitch.tv/jayvio', icon: TwitchIcon, iconClass: 'ico-twitch', name: 'Watch Live', desc: 'Catch a Live Stream!', delay: '.12s', external: true },
  { href: 'https://youtube.com/@JayvioNYC', icon: YoutubeIcon, iconClass: 'ico-youtube', name: 'YouTube', desc: 'Support the content!', delay: '.16s', external: true },
  { href: '/', icon: WebIcon, iconClass: 'ico-web', name: 'Official Website', desc: 'Discover City in Check!', delay: '.2s', external: false },
]

export default function Links() {
  return (
    <div className="page">

      <header className="lt-hero">
        <div className="lt-hero-inner">
          <div className="lt-brand">
            <img src="/assets/logo.png" alt="City in Check logo" className="lt-logo" />
            <h1 className="lt-title">City in<br />Check</h1>
          </div>
          <div className="lt-tag">Every move shapes what <em>we build.</em></div>
          <div className="lt-divider">♟</div>
        </div>
      </header>

      <div className="sec-head">
        <div className="sec-eyebrow">Connect &amp; Follow</div>
        <p className="sec-sub">Follow the journey, join the community, and stay up to date.</p>
      </div>

      <div className="links-grid">
        {links.map(({ href, icon: Icon, iconClass, name, desc, delay, external }) => (
          <a
            key={name}
            className="lt-card"
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener' : undefined}
            style={{ animationDelay: delay }}
          >
            <div className={`lt-ico ${iconClass}`}>
              <Icon />
            </div>
            <div className="lt-txt">
              <div className="lt-name">{name}</div>
              <div className="lt-desc">{desc}</div>
            </div>
            <ArrowIcon className="lt-arrow" width="18" height="18" />
          </a>
        ))}
      </div>

      <section className="about">
        <div className="about-piece">♜</div>
        <div>
          <div className="about-title">About City in Check</div>
          <p className="about-body">City in Check is a community-driven chess initiative creating accessible chess experiences throughout New York City. Through pop-up events, local meetups, and community partnerships, we bring people together to play, learn, and connect while making chess more visible and welcoming for everyone.</p>
          <div className="about-rule">♟</div>
          <div className="about-thanks">Thanks for being part of the journey.</div>
        </div>
      </section>

      <div className="lt-foot">© 2026 City in Check · <a href="/">cityincheck</a></div>

    </div>
  )
}
