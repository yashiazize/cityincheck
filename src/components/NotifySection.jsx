export default function NotifySection() {
  return (
    <section className="notify-sec" id="notify">
      <div className="notify-inner">
        <div className="sec-eyebrow" style={{ textAlign: 'center' }}>♟ NYC Chess Community</div>
        <h2 className="sec-title" style={{ textAlign: 'center' }}>Join City in Check</h2>
        <p style={{ fontSize: 15, color: 'var(--ink-soft)', fontWeight: 300, textAlign: 'center', marginTop: 6, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          Jump into our Discord to chat, find games, and stay in the loop on every event.
        </p>
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a href="https://discord.gg/sYKgpJE23K" target="_blank" rel="noopener" className="btn btn-p" style={{ fontSize: 13, padding: '16px 48px', borderRadius: 6, letterSpacing: 3 }}>
            Join Discord
          </a>
          <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: "'DM Mono',monospace", letterSpacing: 1, marginTop: 14 }}>
            Free to join · See you on the board.
          </p>
        </div>
      </div>
    </section>
  )
}
