export default function EventsSection() {
  return (
    <section className="events-sec" id="events">
      <div className="events-sec-inner">
        <div className="events-top">
          <div>
            <h2 className="sec-title">Upcoming Events</h2>
          </div>
        </div>
        <iframe
          src="https://luma.com/embed/calendar/cal-mv1ShyAgEAbOMck/events"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: 10, display: 'block' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  )
}
