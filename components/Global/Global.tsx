export default function Global() {
  return (
    <>
      <section id="global" className="sec" style={{"background":"linear-gradient(180deg,#F8FAFB 0%,#fff 100%)"}}>
  <div className="sec-inner">
    <div className="sec-label">Global Platform</div>
    <h2 className="sec-h2">For anyone. <em>Anywhere.</em> No exceptions.</h2>
    <div className="global-layout">
      <div>
        <div className="globe-card">
          <div style={{"fontSize":".65rem","color":"var(--ink-3)","fontWeight":"700","textTransform":"uppercase","letterSpacing":".07em","marginBottom":"13px"}}>Example cross-border prescription flow</div>
          <div className="globe-route"><div className="globe-node"><div className="globe-city">Patient</div><div className="globe-country">🇧🇷 São Paulo</div></div><div className="globe-arrow">→</div><div className="globe-node"><div className="globe-city">Doctor</div><div className="globe-country">🇬🇧 Manchester</div></div></div>
          <div className="globe-rx">📋 &nbsp; Partner doctor in Brazil issues a <strong>legally valid Brazilian prescription</strong> · Patient fills at local pharmacy</div>
        </div>
        <div className="globe-card">
          <div style={{"fontSize":".65rem","color":"var(--ink-3)","fontWeight":"700","textTransform":"uppercase","letterSpacing":".07em","marginBottom":"14px"}}>Active & Expanding Markets</div>
          <div className="markets-grid">
            <div className="mkt-item"><div className="mkt-flag">🇳🇬</div><div><div className="mkt-city">Nigeria</div><div className="mkt-status live">● Live</div></div></div>
            <div className="mkt-item"><div className="mkt-flag">🇬🇧</div><div><div className="mkt-city">United Kingdom</div><div className="mkt-status live">● Live</div></div></div>
            <div className="mkt-item"><div className="mkt-flag">🇰🇪</div><div><div className="mkt-city">Kenya</div><div className="mkt-status">Expanding</div></div></div>
            <div className="mkt-item"><div className="mkt-flag">🇮🇳</div><div><div className="mkt-city">India</div><div className="mkt-status">Expanding</div></div></div>
            <div className="mkt-item"><div className="mkt-flag">🇮🇩</div><div><div className="mkt-city">Indonesia</div><div className="mkt-status">Expanding</div></div></div>
            <div className="mkt-item"><div className="mkt-flag">🇵🇰</div><div><div className="mkt-city">Pakistan</div><div className="mkt-status">Expanding</div></div></div>
          </div>
        </div>
      </div>
      <div>
        <p className="sec-p">Good healthcare shouldn't depend on which country you happen to be standing in.</p>
        <p className="sec-p" style={{"marginTop":"14px"}}>Whether you moved abroad and lost your doctor, you live somewhere specialists are out of reach, or you simply want the continuity only a personal doctor can provide — SureCova was built for you.</p>
        <p className="sec-p" style={{"marginTop":"14px"}}>The platform works across borders, currencies, and languages. Your doctor doesn't need to be in your country. They just need to know you.</p>
        <div className="global-quote">"The problem isn't that there aren't enough doctors in the world. The problem is that patients and doctors can't find each other — and when they do, borders stop the prescription."<div className="global-quote-attr">— SureCova founding principle</div></div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
