import { useEffect, useRef } from 'react'
import { TwitchIcon, YoutubeIcon } from './icons.jsx'

export default function StreamSection() {
  const embedRef = useRef(null)

  useEffect(() => {
    const parent = window.location.hostname || 'cityincheck.netlify.app'
    const iframe = document.createElement('iframe')
    iframe.src = `https://player.twitch.tv/?channel=jayvio&parent=${parent}&autoplay=false`
    iframe.setAttribute('allowfullscreen', '')
    embedRef.current.appendChild(iframe)
    return () => { embedRef.current && (embedRef.current.innerHTML = '') }
  }, [])

  return (
    <section className="stream-sec" id="stream">
      <div className="stream-inner">
        <div className="stream-info">
          <h2 className="sec-title">Watch the Stream</h2>
          <div className="stream-schedule">
            <span className="stream-live-dot"></span>
            Live Mon · Wed · Sat
          </div>
        </div>
        <div>
          <div className="stream-prev" id="twitchEmbed" ref={embedRef}></div>
          <div className="plats">
            <a href="https://twitch.tv/jayvio" target="_blank" rel="noopener" className="plat ptw">
              <TwitchIcon width="13" height="13" />
              twitch.tv/jayvio
            </a>
            <a href="https://youtube.com/@JayvioNYC" target="_blank" rel="noopener" className="plat pyt">
              <YoutubeIcon width="13" height="13" />
              @JayvioNYC
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
