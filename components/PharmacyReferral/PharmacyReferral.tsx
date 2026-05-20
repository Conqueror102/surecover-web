export default function PharmacyReferral() {
  return (
    <>
      <section id="register-pharmacy" style={{"background":"var(--navy-2)","padding":"80px var(--pad)"}}>
  <div className="sec-inner">
    <div className="sec-label">Pharmacy Referral Program</div>
    <h2 className="sec-h2">Refer patients. Earn a <em>monthly commission.</em></h2>
    <p className="sec-p" style={{"marginBottom":"44px"}}>Open exclusively to licensed pharmacists and pharmacy technicians. Refer patients, earn recurring commission for every active subscriber you bring.</p>
    <div className="reg-layout">
      <div>
        <div className="reg-form-card">
          <div className="rfh rfh-pharm"><h3>Pharmacy Referral Application</h3><p>For licensed pharmacists and pharmacy technicians only</p><div className="rfh-prog"><div className="rp on"></div><div className="rp"></div><div className="rp"></div></div></div>
          <div className="rfb">
            <div className="fr"><div className="fg"><div className="fl">First Name</div><input className="fi" type="text" placeholder="First name" /></div><div className="fg"><div className="fl">Last Name</div><input className="fi" type="text" placeholder="Last name" /></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Email</div><input className="fi" type="email" placeholder="you@pharmacy.com" /></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Phone</div><input className="fi" type="tel" placeholder="+234 080 0000 0000" /></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Role</div><div className="chip-grp"><div className="fchip on">Pharmacist</div><div className="fchip">Pharmacy Technician</div></div></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Pharmacy Name</div><input className="fi" type="text" placeholder="Name of pharmacy where you work" /></div></div>
            <div className="fr"><div className="fg"><div className="fl">Country</div><select className="fsel"><option>Select…</option><option>Nigeria</option><option>Ghana</option><option>Kenya</option><option>South Africa</option><option>India</option><option>Other</option></select></div><div className="fg"><div className="fl">City</div><input className="fi" type="text" placeholder="City" /></div></div>
            <div className="fr full"><div className="fg"><div className="fl">Pharmacy Council Registration Number</div><input className="fi" type="text" placeholder="e.g. PCN-XXXX" /></div></div>
            <div style={{"marginBottom":"18px"}}><div className="fl" style={{"marginBottom":"8px"}}>Upload Pharmacy Licence / Registration Certificate</div><div className="upload-area"><div className="upload-icon">📄</div><div className="upload-txt">Tap to upload · PDF, JPG, PNG · <strong>Must be current and valid</strong></div></div></div>
            <div className="fnote">Only licensed pharmacists and pharmacy technicians qualify. After verification you receive your referral code, patient brochure, and commission details.</div>
            <div style={{"height":"14px"}}></div>
            <button className="fsubmit fs-teal" >Submit Application →</button>
          </div>
        </div>
      </div>
      <div className="reg-right">
        <div className="rrlab">How it works</div>
        <div className="rb"><div className="rb-ic">🪪</div><div><div className="rb-title">Verification first</div><div className="rb-desc">Apply with your pharmacy registration certificate. Verified within 48 hours.</div></div></div>
        <div className="rb"><div className="rb-ic">🔗</div><div><div className="rb-title">Get your referral code</div><div className="rb-desc">Share with patients at the counter. When they subscribe, the code links to you.</div></div></div>
        <div className="rb"><div className="rb-ic">💬</div><div><div className="rb-title">Refer naturally</div><div className="rb-desc">Patients picking up chronic disease medications are already managing a condition — SureCova is a natural next step.</div></div></div>
        <div className="rb"><div className="rb-ic">💰</div><div><div className="rb-title">Earn monthly</div><div className="rb-desc">For every patient who stays subscribed, you earn a monthly commission for as long as they're active.</div></div></div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
