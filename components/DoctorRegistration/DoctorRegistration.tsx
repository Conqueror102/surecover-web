export default function DoctorRegistration() {
  return (
    <>
      <section id="register-doctor">
  <div className="sec-inner" style={{"maxWidth":"1240px","margin":"0 auto"}}>
    <div className="sec-label">Doctor Application</div>
    <h2 className="sec-h2">Apply to join SureCova as a <em>personal doctor</em></h2>
    <p className="sec-p" style={{"marginBottom":"44px"}}>Takes about 10 minutes. Your profile goes live within 48–72 hours of credential verification.</p>
    <div className="reg-layout">
      <div>
        <div className="reg-form-card">
          <div className="rfh rfh-doc"><h3>Doctor Application — Step 1 of 8</h3><p>Personal details · Profile completeness affects your subscriber rate</p><div className="rfh-prog"><div className="rp on"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div></div></div>
          <div className="rfb">
            <div className="fr full"><div className="fg"><div className="fl">Full Name (as on your medical certificate)</div><input className="fi" type="text" placeholder="Dr. " /></div></div>
            <div className="fr"><div className="fg"><div className="fl">Date of Birth</div><input className="fi" type="date" /></div><div className="fg"><div className="fl">Gender</div><select className="fsel"><option>Select…</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Email Address</div><input className="fi" type="email" placeholder="your@email.com" /></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Phone (with country code)</div><input className="fi" type="tel" placeholder="+44 7700 000000" /></div></div>
            <div className="fr"><div className="fg"><div className="fl">Current Country</div><select className="fsel"><option>Select…</option><option>Nigeria</option><option>United Kingdom</option><option>Ghana</option><option>Kenya</option><option>South Africa</option><option>India</option><option>United States</option><option>Canada</option><option>Australia</option><option>Other</option></select></div><div className="fg"><div className="fl">City</div><input className="fi" type="text" placeholder="Your city" /></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Languages You Speak</div><div className="chip-grp"><div className="fchip on">English</div><div className="fchip">Hausa</div><div className="fchip">Yoruba</div><div className="fchip">Igbo</div><div className="fchip">French</div><div className="fchip">Arabic</div><div className="fchip">Hindi</div><div className="fchip">Twi</div><div className="fchip">Swahili</div></div></div></div>
            <div style={{"height":"14px"}}></div>
            <div className="fnote">After personal details: Credentials → Specialty → Pricing → Bio & photo → Bank details → Go live. Documents uploaded in Step 2.</div>
            <div style={{"height":"14px"}}></div>
            <button className="fsubmit fs-teal" >Continue to Credentials →</button>
          </div>
        </div>
        <div id="doc-step-2" style={{"display":"none","marginTop":"18px"}}>
          <div className="reg-form-card">
            <div className="rfh rfh-doc"><h3>Step 2 of 8 — Medical Credentials</h3><p>Upload your documents. Verified by our medical review team within 24–72 hours.</p><div className="rfh-prog"><div className="rp on"></div><div className="rp on"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div><div className="rp"></div></div></div>
            <div className="rfb">
              <div className="fr full"><div className="fg"><div className="fl">Medical Degree (MBBCh, MBBS, MD, etc.)</div><input className="fi" type="text" placeholder="e.g. MBBCh, University of Lagos, 2012" /></div></div>
              <div className="fr"><div className="fg"><div className="fl">Licensing Body</div><input className="fi" type="text" placeholder="e.g. MDCN, GMC, MCI" /></div><div className="fg"><div className="fl">Registration Number</div><input className="fi" type="text" placeholder="Your licence number" /></div></div>
              <div className="fr full"><div className="fg"><div className="fl">Primary Specialty</div><select className="fsel"><option>Select…</option><option>General Practice / Family Medicine</option><option>Internal Medicine</option><option>Cardiology</option><option>Endocrinology</option><option>Nephrology</option><option>Pulmonology</option><option>Psychiatry / Mental Health</option><option>Dermatology</option><option>Obstetrics & Gynaecology</option><option>Paediatrics</option><option>Orthopaedics</option><option>Other</option></select></div></div>
              <div className="fr full"><div className="fg"><div className="fl">Years in Clinical Practice</div><select className="fsel"><option>Select…</option><option>1–3 years</option><option>4–7 years</option><option>8–14 years</option><option>15+ years</option></select></div></div>
              <div style={{"marginBottom":"13px"}}><div className="fl" style={{"marginBottom":"8px"}}>Medical Degree Certificate</div><div className="upload-area"><div className="upload-icon">📄</div><div className="upload-txt">Tap to upload · PDF, JPG, PNG · <strong>Max 5MB</strong></div></div></div>
              <div style={{"marginBottom":"13px"}}><div className="fl" style={{"marginBottom":"8px"}}>Current Medical Licence / Registration Certificate</div><div className="upload-area"><div className="upload-icon">🪪</div><div className="upload-txt">Tap to upload · PDF, JPG, PNG · <strong>Must be current and valid</strong></div></div></div>
              <div style={{"marginBottom":"13px"}}><div className="fl" style={{"marginBottom":"8px"}}>Government-Issued ID (Passport or National ID)</div><div className="upload-area"><div className="upload-icon">🛂</div><div className="upload-txt">Tap to upload · JPG, PNG · <strong>Front and back</strong></div></div></div>
              <div style={{"marginBottom":"18px"}}><div className="fl" style={{"marginBottom":"8px"}}>Professional Headshot <span style={{"color":"var(--teal-hi)","fontStyle":"italic"}}>(strongly recommended — raises subscriber conversion)</span></div><div className="upload-area"><div className="upload-icon">🖼️</div><div className="upload-txt">Tap to upload · JPG, PNG · <strong>Clear, professional photo</strong></div></div></div>
              <div className="fnote">Documents are reviewed within 24–72 hours. You will be notified by email when your profile goes live.</div>
              <div style={{"height":"14px"}}></div>
              <button className="fsubmit fs-teal" >Continue to Specialty Profile →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="reg-right">
        <div className="rrlab">What to expect after applying</div>
        <div className="rb"><div className="rb-ic">📋</div><div><div className="rb-title">Steps 1–8 cover everything</div><div className="rb-desc">Personal details → Credentials → Specialty → Pricing → Bio & photo → Bank account → Review → Launch.</div></div></div>
        <div className="rb"><div className="rb-ic">🔍</div><div><div className="rb-title">Credential verification</div><div className="rb-desc">Our medical review team verifies your documents within 24–72 hours. You're notified by email.</div></div></div>
        <div className="rb"><div className="rb-ic">🚀</div><div><div className="rb-title">Profile goes live</div><div className="rb-desc">Patients can find you, see your specialty and rate, and subscribe. Your dashboard activates.</div></div></div>
        <div className="rb"><div className="rb-ic">💬</div><div><div className="rb-title">First consultation</div><div className="rb-desc">A subscribed patient messages you. You respond. That's it — you're practising on SureCova.</div></div></div>
        <div className="rb"><div className="rb-ic">💰</div><div><div className="rb-title">Monthly payout</div><div className="rb-desc">Earnings accumulate in your wallet. Paid out monthly to your bank via Paystack, Stripe, or Wise.</div></div></div>
        <div style={{"marginTop":"20px","padding":"18px","background":"rgba(13,155,136,.07)","border":"1px solid rgba(13,155,136,.18)","borderRadius":"var(--r-md)"}}>
          <div style={{"fontSize":".67rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".09em","marginBottom":"10px"}}>Quick income estimate</div>
          <div style={{"fontSize":".8rem","color":"var(--ink-2)","lineHeight":"1.7"}}>At just <strong style={{"color":"var(--dark)"}}>20 subscribers at $15/month</strong>, that is <strong style={{"color":"var(--teal-hi)"}}>$300 recurring monthly</strong> — before you see a single walk-in patient. Grow to 100 subscribers at $25/month and you are looking at <strong style={{"color":"var(--teal-hi)"}}>$2,500/month</strong> in stable, predictable income.</div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
