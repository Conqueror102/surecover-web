import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section id="hero">
  <div className="hero-grid"></div>
  <div className="hero-orb orb-1"></div>
  <div className="hero-orb orb-2"></div>
  <div className="hero-inner">
    <div>
      <div className="hero-badge"><div className="live-dot"></div>Now Live · Global Platform</div>
      <h1 className="hero-h1">A personal doctor for every patient.<br /><em>Anywhere on earth.</em></h1>
      <p className="hero-sub">SureCova connects patients anywhere in the world to qualified personal doctors anywhere in the world — with legally valid prescriptions delivered across borders. One subscription. One doctor. Continuous, personal care.</p>
      <div className="hero-ctas">
        <Link href="/patient-registration" className="btn btn-teal">Start as a Patient →</Link>
        <Link href="/join-doctor" className="btn btn-ghost">Join as a Doctor</Link>
      </div>

      <div className="hero-stats">
        <div className="hs-item"><div className="hs-num" style={{"fontSize":"1rem","letterSpacing":".04em"}}>Growing<br /><span style={{"fontSize":"1.4rem"}}>Daily</span></div><div className="hs-label">Early access · Join now</div></div>
        <div className="hs-item"><div className="hs-num"><span>2</span></div><div className="hs-label">Doctor system</div></div>
        <div className="hs-item"><div className="hs-num"><span>∞</span></div><div className="hs-label">Border-free care</div></div>
      </div>
    </div>
    <div className="hero-right">
      <div className="hero-phone">
        <div className="ph-notch"></div>
        <div className="ph-screen">
          <div className="ph-head">
            <div className="ph-ava">AO</div>
            <div><div className="ph-name">Dr. Adaeze Nwachukwu</div><div className="ph-status">Online · Your Personal Doctor</div></div>
          </div>
          <div className="ph-msgs">
            <div className="msg msg-in">Good morning Doctor. BP today was 148/92. Feeling dizzy when I stand up.</div>
            <div className="msg msg-out">Thanks for the early reading. That dizziness is likely postural hypotension. I want to review your Amlodipine dose. Send me today's full reading.</div>
            <div className="msg msg-in">Sending now 📊</div>
            <div className="msg msg-out">Reviewed. I'll have your prescription updated before end of day. Don't adjust your dose yet.</div>
          </div>
          <div className="ph-input">
            <div className="ph-inp">Type a message…</div>
            <div className="ph-send"><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M1 6h10M7 2l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          </div>
        </div>
      </div>
      <div className="hf hf-1"><div className="hf-ic">💊</div><div><div className="hf-lbl">Prescription</div><div className="hf-val">Legally issued</div></div></div>
      <div className="hf hf-2"><div><div className="hf-lbl">Your doctor</div><div className="hf-val">🌍 Online Now</div></div></div>
    </div>
  </div>
</section>
    </>
  );
}
