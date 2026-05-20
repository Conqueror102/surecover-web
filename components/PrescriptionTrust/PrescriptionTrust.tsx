"use client";
export default function PrescriptionTrust() {
  return (
    <>
      <section id="model" className="sec" style={{"background":"linear-gradient(180deg,#F2F8F7 0%,#fff 100%)"}}>
  <div className="sec-inner">
    <div className="sec-label">Prescriptions</div>
    <h2 className="sec-h2">Every prescription is <em>legally valid</em><br />in your country. Full stop.</h2>
    <p className="sec-p" style={{"marginBottom":"52px","maxWidth":"600px"}}>When your SureCova doctor recommends medication, you receive a prescription that is fully valid under the laws of your country — one you can fill at any local pharmacy, no questions asked. We handle the compliance so you never have to think about it.</p>

    <div style={{"display":"grid","gridTemplateColumns":"repeat(3,1fr)","gap":"18px","marginBottom":"40px"}} className="rx-trust-grid">
      <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-lg)","padding":"28px","display":"flex","flexDirection":"column","gap":"12px","transition":"all .22s"}} onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(13,155,136,.22)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,.06)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor=''; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
        <div style={{"width":"44px","height":"44px","background":"rgba(13,155,136,.1)","borderRadius":"11px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem"}}>✅</div>
        <div style={{"fontSize":".92rem","fontWeight":"700","color":"var(--dark)"}}>Locally valid</div>
        <div style={{"fontSize":".78rem","color":"var(--ink-2)","lineHeight":"1.68"}}>Your prescription is issued in compliance with the laws of your country. Fill it at any pharmacy near you.</div>
      </div>
      <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-lg)","padding":"28px","display":"flex","flexDirection":"column","gap":"12px","transition":"all .22s"}} onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(13,155,136,.22)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,.06)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor=''; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
        <div style={{"width":"44px","height":"44px","background":"rgba(13,155,136,.1)","borderRadius":"11px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem"}}>🔒</div>
        <div style={{"fontSize":".92rem","fontWeight":"700","color":"var(--dark)"}}>Compliance built in</div>
        <div style={{"fontSize":".78rem","color":"var(--ink-2)","lineHeight":"1.68"}}>SureCova's prescription system is built from the ground up around the regulatory requirements of every market we serve.</div>
      </div>
      <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-lg)","padding":"28px","display":"flex","flexDirection":"column","gap":"12px","transition":"all .22s"}} onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(13,155,136,.22)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 16px 40px rgba(0,0,0,.06)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor=''; e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}>
        <div style={{"width":"44px","height":"44px","background":"rgba(13,155,136,.1)","borderRadius":"11px","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.2rem"}}>🏥</div>
        <div style={{"fontSize":".92rem","fontWeight":"700","color":"var(--dark)"}}>Pharmacy-ready</div>
        <div style={{"fontSize":".78rem","color":"var(--ink-2)","lineHeight":"1.68"}}>Walk into any pharmacy. Present your prescription. No grey areas, no explanations, no rejections.</div>
      </div>
    </div>

    <div style={{"background":"linear-gradient(135deg,rgba(13,155,136,.06),rgba(11,37,69,.03))","border":"1.5px solid rgba(13,155,136,.18)","borderRadius":"var(--r-xl)","padding":"36px 40px","display":"flex","alignItems":"center","gap":"28px","flexWrap":"wrap"}}>
      <div style={{"fontSize":"2.4rem","flexShrink":"0"}}>⚖️</div>
      <div style={{"flex":"1","minWidth":"240px"}}>
        <div style={{"fontSize":".92rem","fontWeight":"700","color":"var(--dark)","marginBottom":"6px"}}>We take compliance seriously — so you don't have to</div>
        <div style={{"fontSize":".78rem","color":"var(--ink-2)","lineHeight":"1.72"}}>SureCova operates within the legal framework of every country we serve. Our prescription system has been designed with this as a non-negotiable — not an afterthought. If you have specific questions about prescription validity in your country, our support team is here.</div>
      </div>
      <a href="#contact" className="btn btn-ghost" style={{"flexShrink":"0"}}>Ask a question →</a>
    </div>
  </div>
</section>
    </>
  );
}
