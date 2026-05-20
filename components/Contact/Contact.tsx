export default function Contact() {
  return (
    <>
      <section id="contact">
  <div className="contact-inner">
    <div>
      <div className="sec-label">Contact & Support</div>
      <h2 className="sec-h2">We're a real team.<br /><em>Talk to us.</em></h2>
      <p className="sec-p" style={{"marginBottom":"0"}}>Whether you're a patient with a question, a doctor considering joining, or a pharmacist asking about the referral program — reach out.</p>
      <div className="contact-channels">
        <div className="contact-ch"><div className="contact-ch-ic">✉️</div><div><div className="contact-ch-label">Email — General</div><div className="contact-ch-val">hello@surecova.com</div></div></div>
        <div className="contact-ch"><div className="contact-ch-ic">🩺</div><div><div className="contact-ch-label">Email — Doctors</div><div className="contact-ch-val">doctors@surecova.com</div></div></div>
        <div className="contact-ch"><div className="contact-ch-ic">🆘</div><div><div className="contact-ch-label">Patient Support</div><div className="contact-ch-val">support@surecova.com</div></div></div>
        <div className="contact-ch" style={{"cursor":"pointer"}} >
          <div className="contact-ch-ic">💬</div>
          <div>
            <div className="contact-ch-label">WhatsApp — Fastest response</div>
            <div className="contact-ch-val" style={{"color":"var(--teal-hi)","fontWeight":"600"}}>Chat with us on WhatsApp →</div>
          </div>
        </div>
        <div className="contact-ch"><div className="contact-ch-ic">🏢</div><div><div className="contact-ch-label">Registered</div><div className="contact-ch-val">SureCova Inc. · Delaware C-Corp</div></div></div>
      </div>
    </div>
    <div>
      <div className="contact-form">
        <div className="contact-form-head"><h3>Send us a message</h3><p>We respond within 24 hours on business days.</p></div>
        <div className="contact-form-body">
          <div className="fg"><div className="fl">Your Name</div><input className="fi" type="text" placeholder="Full name" /></div>
          <div className="fg"><div className="fl">Email</div><input className="fi" type="email" placeholder="you@email.com" /></div>
          <div className="fg"><div className="fl">I am a</div><select className="fsel"><option>Select…</option><option>Patient</option><option>Doctor considering joining</option><option>Pharmacist</option><option>Investor / Press</option><option>Other</option></select></div>
          <div className="fg"><div className="fl">Message</div><textarea className="fta" placeholder="Your question or message…" rows={4}></textarea></div>
          <button className="fsubmit fs-teal" >Send Message →</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
