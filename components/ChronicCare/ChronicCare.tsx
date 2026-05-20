export default function ChronicCare() {
  return (
    <>
      <section id="chronic" className="sec" style={{"background":"#fff"}}>
  <div className="sec-inner">
    <div className="chronic-hdr">
      <div>
        <div className="sec-label">What SureCova Manages</div>
        <h2 className="sec-h2">Built for <em>chronic conditions</em> — and every concern in between</h2>
      </div>
      <div>
        <p className="sec-p" style={{"maxWidth":"100%"}}>You now have access to the world's doctors. Not just your city's. For the first time, you can subscribe to a specialist anywhere in the world who is the right fit for your exact condition — not just the closest available option.</p>
        <p className="sec-p" style={{"maxWidth":"100%","marginTop":"14px"}}>This platform is particularly powerful for patients managing long-term conditions — hypertension, diabetes, heart disease, kidney disease, asthma, thyroid disorders, and more. But the scope doesn't stop there. Any non-emergency health concern you bring to your doctor, they can address.</p>
      </div>
    </div>

    {/*  SPECIALIST TYPES CALLOUT  */}
    <div style={{"background":"linear-gradient(135deg,rgba(13,155,136,.06),rgba(11,37,69,.04))","border":"1.5px solid rgba(13,155,136,.18)","borderRadius":"var(--r-xl)","padding":"40px","marginBottom":"32px"}}>
      <div style={{"fontSize":".68rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".12em","marginBottom":"6px"}}>Who you'll find on SureCova</div>
      <p style={{"fontSize":"1.05rem","fontFamily":"'Playfair Display',serif","fontWeight":"500","color":"var(--dark)","lineHeight":"1.5","marginBottom":"20px"}}>Beyond general practitioners and medical specialists, SureCova is home to <em style={{"color":"var(--teal-hi)"}}>psychologists, dieticians, nutritionists, and weight loss specialists</em> — because health is more than just prescriptions.</p>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(3,1fr)","gap":"13px"}} className="spec-grid">
        <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"18px 20px","display":"flex","alignItems":"center","gap":"12px"}}>
          <div style={{"fontSize":"1.4rem","flexShrink":"0"}}>🩺</div>
          <div>
            <div style={{"fontSize":".86rem","fontWeight":"700","color":"var(--dark)"}}>General Practitioners</div>
            <div style={{"fontSize":".7rem","color":"var(--ink-3)","marginTop":"2px"}}>Your first port of call for any concern</div>
          </div>
        </div>
        <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"18px 20px","display":"flex","alignItems":"center","gap":"12px"}}>
          <div style={{"fontSize":"1.4rem","flexShrink":"0"}}>🫀</div>
          <div>
            <div style={{"fontSize":".86rem","fontWeight":"700","color":"var(--dark)"}}>Medical Specialists</div>
            <div style={{"fontSize":".7rem","color":"var(--ink-3)","marginTop":"2px"}}>Cardiologists, endocrinologists, nephrologists & more</div>
          </div>
        </div>
        <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"18px 20px","display":"flex","alignItems":"center","gap":"12px"}}>
          <div style={{"fontSize":"1.4rem","flexShrink":"0"}}>🧠</div>
          <div>
            <div style={{"fontSize":".86rem","fontWeight":"700","color":"var(--dark)"}}>Psychologists</div>
            <div style={{"fontSize":".7rem","color":"var(--ink-3)","marginTop":"2px"}}>Mental health support — discreet and continuous</div>
          </div>
        </div>
        <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"18px 20px","display":"flex","alignItems":"center","gap":"12px"}}>
          <div style={{"fontSize":"1.4rem","flexShrink":"0"}}>🥗</div>
          <div>
            <div style={{"fontSize":".86rem","fontWeight":"700","color":"var(--dark)"}}>Dieticians & Nutritionists</div>
            <div style={{"fontSize":".7rem","color":"var(--ink-3)","marginTop":"2px"}}>Evidence-based nutrition and dietary management</div>
          </div>
        </div>
        <div style={{"background":"#fff","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"18px 20px","display":"flex","alignItems":"center","gap":"12px"}}>
          <div style={{"fontSize":"1.4rem","flexShrink":"0"}}>⚖️</div>
          <div>
            <div style={{"fontSize":".86rem","fontWeight":"700","color":"var(--dark)"}}>Weight Loss Specialists</div>
            <div style={{"fontSize":".7rem","color":"var(--ink-3)","marginTop":"2px"}}>Medical weight management, not just advice</div>
          </div>
        </div>
        <div style={{"background":"rgba(13,155,136,.06)","border":"1.5px dashed rgba(13,155,136,.2)","borderRadius":"var(--r-md)","padding":"18px 20px","display":"flex","alignItems":"center","gap":"12px"}}>
          <div style={{"fontSize":"1.4rem","flexShrink":"0"}}>➕</div>
          <div>
            <div style={{"fontSize":".86rem","fontWeight":"700","color":"var(--teal-hi)"}}>And much more</div>
            <div style={{"fontSize":".7rem","color":"var(--ink-3)","marginTop":"2px"}}>Browse the full directory in our doctor marketplace</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{"background":"var(--navy-2)","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"20px 24px","fontSize":".88rem","color":"var(--ink-2)","lineHeight":"1.75"}}>
      <strong style={{"color":"var(--dark)"}}>Not sure if SureCova handles your concern?</strong> If it can be managed through conversation, history-taking, review of results, and a prescription — SureCova handles it. Bring any non-emergency health question to your personal doctor.
    </div>
  </div>
</section>
    </>
  );
}
