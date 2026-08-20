import { TwitchIcon, YoutubeIcon, InstagramIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="ftop">
        <div>
          <div className="fbn">City in Check</div>
          <div className="fbs">NYC Chess Community</div>
          <div className="fbd">New York's home for chess players, tournaments, and community — on the board and online.</div>
        </div>
        <div className="fcol">
          <h4>Navigate</h4>
          <ul>
            <li><a href="/">Events</a></li>
            <li><a href="/#stream">Stream</a></li>
            <li><a href="/about.html">About</a></li>
          </ul>
        </div>
        <div className="fcol">
          <h4>Stream</h4>
          <ul>
            <li><a href="https://twitch.tv/jayvio" target="_blank" rel="noopener">Twitch</a></li>
            <li><a href="https://youtube.com/@JayvioNYC" target="_blank" rel="noopener">YouTube</a></li>
          </ul>
        </div>
        <div className="fcol">
          <h4>More</h4>
          <ul>
            <li><a href="/merch.html">Merch (Soon)</a></li>
            <li><a href="https://discord.gg/sYKgpJE23K" target="_blank" rel="noopener">Join Discord</a></li>
          </ul>
        </div>
      </div>
      <div className="fbot">
        <div className="fcp">© 2025 City in Check · NYC Chess</div>
        <div className="socs">
          <a href="https://twitch.tv/jayvio" className="soc" target="_blank" rel="noopener"><TwitchIcon width="13" height="13" /></a>
          <a href="https://youtube.com/@JayvioNYC" className="soc" target="_blank" rel="noopener"><YoutubeIcon width="13" height="13" /></a>
          <a href="https://instagram.com/cityincheck" className="soc" target="_blank" rel="noopener"><InstagramIcon width="13" height="13" /></a>
        </div>
      </div>
    </footer>
  )
}
