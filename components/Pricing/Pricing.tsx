export default function Pricing() {
  return (
    <>
      <section id="pricing" className="sec" style={{"background":"#fff"}}>
  <div className="sec-inner">
    <div className="sec-label">Subscription Plans</div>
    <h2 className="sec-h2">Simple, transparent <em>pricing</em></h2>
    <p className="sec-p" style={{"marginBottom":"48px"}}>Your subscription is priced in your local currency — what you pay is what your doctor charges, converted at checkout. SureCova adds a flat cross-border fee only when you and your doctor are in different countries.</p>
    <div className="pricing-grid">
      <div className="price-card"><div className="price-icon">🌱</div><div className="price-name">Local Care</div><div className="price-amt" style={{"fontSize":"1.5rem","lineHeight":"1.2"}}>Local<br />Currency</div><div className="price-period">priced in your currency</div><div className="price-mkt">Same country as your doctor</div><div className="price-div"></div><div className="price-feats"><div className="price-feat">Any verified doctor in your country</div><div className="price-feat">Unlimited text & voice consultations</div><div className="price-feat">Locally valid prescriptions</div><div className="price-feat">Lab order coordination</div><div className="price-feat">Proxy & family care</div></div><button className="price-cta price-cta-g" >Get Started →</button></div>
      <div className="price-card feat"><div className="price-badge">Most Popular</div><div className="price-icon">🌍</div><div className="price-name">Cross-Border</div><div className="price-amt" style={{"fontSize":"1.5rem","lineHeight":"1.2"}}>Local<br />Currency</div><div className="price-period">+ small cross-border fee</div><div className="price-mkt">Different country to your doctor</div><div className="price-div"></div><div className="price-feats"><div className="price-feat">Any verified doctor globally</div><div className="price-feat">Unlimited text & voice consultations</div><div className="price-feat">Cross-border prescription system</div><div className="price-feat">Locally licensed partner prescribing</div><div className="price-feat">Proxy & family care</div></div><button className="price-cta price-cta-p" >Get Started →</button></div>
      <div className="price-card"><div className="price-icon">🏥</div><div className="price-name">For Doctors</div><div className="price-amt">Free</div><div className="price-period">to join SureCova</div><div className="price-mkt">You set your own subscription price</div><div className="price-div"></div><div className="price-feats"><div className="price-feat">Set your own monthly rate</div><div className="price-feat">Build a steady patient panel</div><div className="price-feat">AI-assisted documentation</div><div className="price-feat">Integrated prescription writing</div><div className="price-feat">Lab ordering tools</div></div><button className="price-cta price-cta-g" >Learn More →</button></div>
    </div>
    <div style={{"marginTop":"22px","background":"rgba(13,155,136,.05)","border":"1px solid rgba(13,155,136,.14)","borderRadius":"var(--r-md)","padding":"16px 22px","fontSize":".82rem","color":"var(--ink-2)","lineHeight":"1.7","maxWidth":"680px"}}>
      <strong style={{"color":"var(--dark)"}}>How pricing works:</strong> Each doctor sets their own monthly rate. When you subscribe, the price is shown and charged in your local currency — ₦ for Nigeria, GH₵ for Ghana, KSh for Kenya, and so on. No currency confusion, no surprise conversions.
    </div>
  </div>
</section>
    </>
  );
}
