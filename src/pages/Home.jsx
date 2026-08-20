import '../styles/light-theme.css'
import '../styles/home.css'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import EventsSection from '../components/EventsSection.jsx'
import StreamSection from '../components/StreamSection.jsx'
import NotifySection from '../components/NotifySection.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Nav active="events" scrollAware />
      <Hero />
      <EventsSection />
      <StreamSection />
      <NotifySection />
      <Footer />
    </>
  )
}
