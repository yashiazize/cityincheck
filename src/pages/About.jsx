import '../styles/light-theme.css'
import '../styles/about.css'
import Nav from '../components/Nav.jsx'
import NotifySection from '../components/NotifySection.jsx'
import Footer from '../components/Footer.jsx'

export default function About() {
  return (
    <>
      <Nav active="about" />

      <section className="about-header">
        <div className="about-header-inner">
          <div className="sec-eyebrow">♟ Who We Are</div>
          <h1 className="page-title">About <em>City in Check</em></h1>
          <p className="page-sub">Where NYC's chess players compete, connect, and level up.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-inner">
          <h2 className="sec-title">Our Mission</h2>
          <p className="sec-desc">City in Check is a community-driven chess initiative creating accessible chess experiences throughout New York City. Through pop-up events, local meetups, and community partnerships, we bring people together to play, learn, and connect — making chess more visible and welcoming for everyone, from total beginners to seasoned tournament players.</p>
        </div>
      </section>

      <section className="about-grid-sec">
        <div className="about-grid-sec-inner">
          <div className="sec-eyebrow">♟ What We Do</div>
          <h2 className="sec-title">Every Way to Play</h2>
          <div className="about-grid">
            <div className="about-card tournament">
              <div className="about-card-bar"></div>
              <div className="about-card-title">Tournaments</div>
              <div className="about-card-body">Rated and casual tournaments held around the city — bring your best game and compete for the board.</div>
            </div>
            <div className="about-card community">
              <div className="about-card-bar"></div>
              <div className="about-card-title">Community Nights</div>
              <div className="about-card-body">Drop-in meetups across the boroughs — parks, cafés, and community spaces where all skill levels are welcome.</div>
            </div>
            <div className="about-card workshop">
              <div className="about-card-bar"></div>
              <div className="about-card-title">Workshops</div>
              <div className="about-card-body">Lessons and masterclasses on openings, tactics, and endgames — a place to sharpen your game with the community.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stream">
        <div className="about-stream-inner">
          <div className="sec-eyebrow">♟ On Stream</div>
          <h2 className="sec-title">Chess, Live From the Bronx</h2>
          <p className="about-stream-body">City in Check's livestream is hosted by Jayvio, playing and talking chess live on Twitch and YouTube — a way to stay connected with the community between in-person events.</p>
          <div className="about-stream-btns">
            <a href="/#stream" className="btn btn-p">Watch the Stream</a>
            <a href="https://twitch.tv/jayvio" target="_blank" rel="noopener" className="btn btn-o">twitch.tv/jayvio</a>
          </div>
        </div>
      </section>

      <NotifySection />
      <Footer />
    </>
  )
}
