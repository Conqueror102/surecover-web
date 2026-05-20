export default function VisualFlow() {
  return (
    <>
      <div style={{"background":"var(--dark)","padding":"52px var(--pad)","overflow":"hidden","position":"relative"}}>
  <div style={{"position":"absolute","inset":"0","backgroundImage":"linear-gradient(rgba(13,155,136,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(13,155,136,.06) 1px,transparent 1px)","backgroundSize":"60px 60px","opacity":".5"}}></div>
  <div style={{"maxWidth":"1240px","margin":"0 auto","position":"relative","zIndex":"1"}}>
    <div style={{"textAlign":"center","marginBottom":"36px"}}>
      <div style={{"fontSize":".67rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".14em","marginBottom":"8px"}}>How It Works</div>
      <div style={{"fontFamily":"'Playfair Display',serif","fontSize":"clamp(1.4rem,2.5vw,2rem)","fontWeight":"700","color":"#fff","lineHeight":"1.15"}}>From sign-up to <em style={{"color":"var(--teal-hi)","fontStyle":"italic"}}>your first consultation</em></div>
    </div>
    <div className="flow-strip">
      <div style={{"background":"rgba(255,255,255,.05)","border":"1px solid rgba(13,155,136,.2)","borderRadius":"var(--r-lg)","padding":"24px 20px","textAlign":"center"}}>
        <div style={{"width":"52px","height":"52px","borderRadius":"50%","background":"rgba(13,155,136,.2)","border":"1.5px solid var(--teal)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","margin":"0 auto 14px"}}>📝</div>
        <div style={{"fontSize":".7rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".08em","marginBottom":"5px"}}>Step 1</div>
        <div style={{"fontFamily":"'Playfair Display',serif","fontSize":".95rem","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Create Profile</div>
        <div style={{"fontSize":".72rem","color":"rgba(255,255,255,.45)","lineHeight":"1.6"}}>Your health history. Your conditions. Your location. Under 3 minutes.</div>
      </div>
      <div style={{"textAlign":"center","padding":"0 8px","color":"var(--teal-hi)","fontSize":"1.4rem","opacity":".6"}}>→</div>
      <div style={{"background":"rgba(255,255,255,.05)","border":"1px solid rgba(13,155,136,.2)","borderRadius":"var(--r-lg)","padding":"24px 20px","textAlign":"center"}}>
        <div style={{"width":"52px","height":"52px","borderRadius":"50%","background":"rgba(13,155,136,.2)","border":"1.5px solid var(--teal)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","margin":"0 auto 14px"}}>🔍</div>
        <div style={{"fontSize":".7rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".08em","marginBottom":"5px"}}>Step 2</div>
        <div style={{"fontFamily":"'Playfair Display',serif","fontSize":".95rem","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Find Your Doctor</div>
        <div style={{"fontSize":".72rem","color":"rgba(255,255,255,.45)","lineHeight":"1.6"}}>Tap the body area. We match you. Or search by name if you know who you want.</div>
      </div>
      <div style={{"textAlign":"center","padding":"0 8px","color":"var(--teal-hi)","fontSize":"1.4rem","opacity":".6"}}>→</div>
      <div style={{"background":"rgba(255,255,255,.05)","border":"1px solid rgba(13,155,136,.2)","borderRadius":"var(--r-lg)","padding":"24px 20px","textAlign":"center"}}>
        <div style={{"width":"52px","height":"52px","borderRadius":"50%","background":"rgba(13,155,136,.2)","border":"1.5px solid var(--teal)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","margin":"0 auto 14px"}}>💬</div>
        <div style={{"fontSize":".7rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".08em","marginBottom":"5px"}}>Step 3</div>
        <div style={{"fontFamily":"'Playfair Display',serif","fontSize":".95rem","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Consult Anytime</div>
        <div style={{"fontSize":".72rem","color":"rgba(255,255,255,.45)","lineHeight":"1.6"}}>Chat. Send readings. Share test results. No appointment. No waiting room.</div>
      </div>
      <div style={{"textAlign":"center","padding":"0 8px","color":"var(--teal-hi)","fontSize":"1.4rem","opacity":".6"}}>→</div>
      <div style={{"background":"linear-gradient(135deg,rgba(13,155,136,.15),rgba(13,155,136,.08))","border":"1.5px solid rgba(13,155,136,.35)","borderRadius":"var(--r-lg)","padding":"24px 20px","textAlign":"center"}}>
        <div style={{"width":"52px","height":"52px","borderRadius":"50%","background":"var(--teal)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.3rem","margin":"0 auto 14px","boxShadow":"0 0 20px rgba(13,155,136,.4)"}}>💊</div>
        <div style={{"fontSize":".7rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".08em","marginBottom":"5px"}}>Step 4</div>
        <div style={{"fontFamily":"'Playfair Display',serif","fontSize":".95rem","fontWeight":"700","color":"#fff","marginBottom":"6px"}}>Get Prescription</div>
        <div style={{"fontSize":".72rem","color":"rgba(255,255,255,.55)","lineHeight":"1.6"}}>A legally valid prescription is issued for your country. Fill it at any local pharmacy.</div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
