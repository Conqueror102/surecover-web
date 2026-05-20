export default function HospitalChannel() {
  return (
    <>
      {/*  ═══════════════════════════════════════
     HOSPITAL CHANNEL DIVIDER
═══════════════════════════════════════  */}
<div className="hosp-divider">
  <div className="hosp-divider-inner">
    <div style={{"width":"1px","height":"20px","background":"rgba(255,255,255,.2)","flexShrink":"0"}}></div>
    <span style={{"fontSize":".7rem","fontWeight":"700","color":"rgba(255,255,255,.5)","textTransform":"uppercase","letterSpacing":".12em"}}>For individuals</span>
    <div style={{"width":"1px","height":"20px","background":"rgba(255,255,255,.2)","flexShrink":"0"}}></div>
    <span style={{"fontSize":".7rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".12em"}}>🏥 For hospitals — SureCova discharge care channel</span>
    <div style={{"width":"1px","height":"20px","background":"rgba(255,255,255,.2)","flexShrink":"0"}}></div>
  </div>
</div>

{/*  ═══════════════════════════════════════
     HOSPITAL CHANNEL HERO
═══════════════════════════════════════  */}
<section id="hospital-channel">
  <div className="hc-grid-bg"></div>
  <div className="hc-orb-1"></div>
  <div className="hc-orb-2"></div>
  <div className="hc-inner">
    <div className="hc-hero-grid">

      {/*  LEFT  */}
      <div>
        <div className="hc-brand-row">
          <div className="hc-logo-box" id="hc-logo-initials">SM</div>
          <div>
            <div className="hc-institution" id="hc-hosp-name">St. Mary's Teaching Hospital</div>
            <div className="hc-powered">Discharge Care · powered by <span className="sc-mini">SureCova</span></div>
          </div>
          <div className="hc-brand-sep"></div>
          <div className="hc-verified"><div className="live-dot"></div> Verified Partner</div>
        </div>

        <div className="hc-discharge-badge">
          <span style={{"fontSize":"1rem"}}>🏥</span>
          <div className="hc-db-text">
            <strong>Continuing care after discharge.</strong>
            This is your hospital's personal doctor channel — stay connected with the specialist who treated you, from home.
          </div>
        </div>

        <h2 className="hc-h1">Your doctor,<br /><em>after discharge.</em></h2>
        <p className="hc-sub">Your hospital wants to stay with you beyond the ward. SureCova connects you to the specialist who managed your care — so the relationship continues at home. Subscribe in minutes. No waiting room. No new appointments.</p>
        <div className="hc-ctas">
          <a href="#hc-register" className="btn btn-teal">Register as a Patient →</a>
          <a href="#hc-partner" className="btn btn-ghost">For Hospitals</a>
        </div>

      </div>

      {/*  RIGHT: specialist panel  */}
      <div>
        <div className="hc-panel-label">St. Mary's Specialists on SureCova <span id="hc-spec-count">4 available</span></div>

        <div className="hc-spec-card featured" >
          <div className="hc-spec-ava" style={{"background":"linear-gradient(135deg,#0B6E6E,#0D9B88)"}}>EO</div>
          <div className="hc-spec-info">
            <div className="hc-spec-name">Dr. Emeka Okafor</div>
            <div className="hc-spec-dept">Cardiology — <span>Heart & Hypertension</span></div>
            <div className="hc-spec-meta"><div className="hc-spec-avail">Accepting patients</div><span>·</span><span>★ 4.9 · 78 patients</span></div>
          </div>
          <button className="hc-spec-btn">Select →</button>
        </div>

        <div className="hc-spec-card" >
          <div className="hc-spec-ava" style={{"background":"linear-gradient(135deg,#3A0B5C,#6A20A0)"}}>AB</div>
          <div className="hc-spec-info">
            <div className="hc-spec-name">Dr. Amina Bello</div>
            <div className="hc-spec-dept">Endocrinology — <span>Diabetes & Thyroid</span></div>
            <div className="hc-spec-meta"><div className="hc-spec-avail">Accepting patients</div><span>·</span><span>★ 4.8 · 55 patients</span></div>
          </div>
          <button className="hc-spec-btn">Select →</button>
        </div>

        <div className="hc-spec-card" >
          <div className="hc-spec-ava" style={{"background":"linear-gradient(135deg,#0B2545,#1A3A5C)"}}>CN</div>
          <div className="hc-spec-info">
            <div className="hc-spec-name">Dr. Chukwudi Nwosu</div>
            <div className="hc-spec-dept">Nephrology — <span>Kidney Disease & CKD</span></div>
            <div className="hc-spec-meta"><div className="hc-spec-avail">Accepting patients</div><span>·</span><span>★ 4.7 · 41 patients</span></div>
          </div>
          <button className="hc-spec-btn">Select →</button>
        </div>

        <div className="hc-spec-card" >
          <div className="hc-spec-ava" style={{"background":"linear-gradient(135deg,#2A6E20,#3A9B2A)"}}>NE</div>
          <div className="hc-spec-info">
            <div className="hc-spec-name">Dr. Ngozi Eze</div>
            <div className="hc-spec-dept">General Practice — <span>Post-discharge follow-up</span></div>
            <div className="hc-spec-meta"><div className="hc-spec-avail">Accepting patients</div><span>·</span><span>★ 4.9 · 112 patients</span></div>
          </div>
          <button className="hc-spec-btn">Select →</button>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ═══════════════════════════════════════
     HOSPITAL ADMIN PORTAL PREVIEW
═══════════════════════════════════════  */}
<section id="hc-admin">
  <div className="hc-admin-inner">
    <div className="sec-label" style={{"color":"var(--teal-hi)"}}>Hospital Administration</div>
    <h2 className="sec-h2" style={{"color":"#fff"}}>Your hospital's <em style={{"color":"var(--teal-hi)"}}>discharge dashboard.</em></h2>
    <p className="sec-p" style={{"color":"rgba(255,255,255,.5)","marginBottom":"0"}}>Everything you need to see how your post-discharge channel is performing — live subscribers, doctor activity, revenue remittance, and monthly reporting.</p>
    <div className="hc-admin-layout">
      {/*  Dashboard mockup  */}
      <div className="hc-dash">
        <div className="hc-dash-head">
          <div><div className="hc-dh-title">St. Mary's — SureCova Portal</div><div className="hc-dh-sub">stmarys.surecova.com · Admin View</div></div>
          <div className="hc-dh-badge"><div className="live-dot"></div> Live</div>
        </div>
        <div className="hc-admin-stats">
          <div className="hc-astat"><div className="hc-astat-num"><span>147</span></div><div className="hc-astat-lbl">Active subscribers</div></div>
          <div className="hc-astat"><div className="hc-astat-num"><span>4</span></div><div className="hc-astat-lbl">Enrolled doctors</div></div>
          <div className="hc-astat"><div className="hc-astat-num"><span>₦441k</span></div><div className="hc-astat-lbl">Monthly MRR</div></div>
        </div>
        <div className="hc-admin-docs">
          <div style={{"fontSize":".58rem","color":"rgba(255,255,255,.28)","textTransform":"uppercase","letterSpacing":".07em","marginBottom":"3px"}}>Doctor Activity — This Month</div>
          <div className="hc-adr"><div className="hc-adr-ava" style={{"background":"linear-gradient(135deg,#0B6E6E,#0D9B88)"}}>EO</div><div style={{"flex":"1"}}><div className="hc-adr-name">Dr. Emeka Okafor</div><div className="hc-adr-dept">Cardiology</div></div><div><div className="hc-adr-count">52 patients</div><div className="hc-adr-split">70% of net</div></div></div>
          <div className="hc-adr"><div className="hc-adr-ava" style={{"background":"linear-gradient(135deg,#3A0B5C,#6A20A0)"}}>AB</div><div style={{"flex":"1"}}><div className="hc-adr-name">Dr. Amina Bello</div><div className="hc-adr-dept">Endocrinology</div></div><div><div className="hc-adr-count">41 patients</div><div className="hc-adr-split">70% of net</div></div></div>
          <div className="hc-adr"><div className="hc-adr-ava" style={{"background":"linear-gradient(135deg,#0B2545,#1A3A5C)"}}>CN</div><div style={{"flex":"1"}}><div className="hc-adr-name">Dr. Chukwudi Nwosu</div><div className="hc-adr-dept">Nephrology</div></div><div><div className="hc-adr-count">32 patients</div><div className="hc-adr-split">70% of net</div></div></div>
          <div className="hc-adr"><div className="hc-adr-ava" style={{"background":"linear-gradient(135deg,#2A6E20,#3A9B2A)"}}>NE</div><div style={{"flex":"1"}}><div className="hc-adr-name">Dr. Ngozi Eze</div><div className="hc-adr-dept">General Practice</div></div><div><div className="hc-adr-count">22 patients</div><div className="hc-adr-split">70% of net</div></div></div>
        </div>
        <div className="hc-admin-rev">
          <div className="hc-arv-lbl">Month-End Remittance Preview — May 2026</div>
          <div className="hc-arv-row"><div className="hc-arv-item">Total subscriptions collected</div><div className="hc-arv-val">₦441,000</div></div>
          <div className="hc-arv-row"><div className="hc-arv-item">SureCova platform fee (20%)</div><div className="hc-arv-val red">– ₦88,200</div></div>
          <div className="hc-arv-div"></div>
          <div className="hc-arv-row"><div className="hc-arv-item">Net to distribute</div><div className="hc-arv-val">₦352,800</div></div>
          <div className="hc-arv-row"><div className="hc-arv-item">Hospital share (30%)</div><div className="hc-arv-val teal">₦105,840 → Your account</div></div>
          <div className="hc-arv-row"><div className="hc-arv-item">Doctors' share (70%)</div><div className="hc-arv-val teal">₦246,960 → Doctors' accounts</div></div>
          <div className="hc-arv-div"></div>
          <div className="hc-arv-row"><div className="hc-arv-item" style={{"fontSize":".65rem","color":"rgba(255,255,255,.28)"}}>SureCova remits automatically on the 1st of each month</div></div>
          <button className="hc-arv-cta">Download Remittance Report →</button>
        </div>
      </div>
      {/*  Feature list  */}
      <div className="hc-admin-features">
        <div className="hc-af"><div className="hc-af-ic">🏥</div><div><div className="hc-af-title">Your own hospital subdomain</div><div className="hc-af-desc">Patients access your portal at yourname.surecova.com — branded with your institution. First thing they see is your logo and your doctors.</div></div></div>
        <div className="hc-af"><div className="hc-af-ic">👨‍⚕️</div><div><div className="hc-af-title">You control the doctor roster</div><div className="hc-af-desc">Add or remove specialist doctors anytime. You decide who appears, which departments are listed, and what the subscription rates are.</div></div></div>
        <div className="hc-af"><div className="hc-af-ic">📊</div><div><div className="hc-af-title">Live subscriber analytics</div><div className="hc-af-desc">Active patients, most-subscribed doctors, retention rates by department, and monthly acquisition from QR discharge codes.</div></div></div>
        <div className="hc-af"><div className="hc-af-ic">💳</div><div><div className="hc-af-title">Zero payment admin</div><div className="hc-af-desc">Set your split once at onboarding. SureCova collects all subscriptions and automatically remits your share and each doctor's share on the 1st.</div></div></div>
        <div className="hc-af"><div className="hc-af-ic">🔲</div><div><div className="hc-af-title">QR codes per ward / department</div><div className="hc-af-desc">Generate a unique QR per ward. Cardiology patients scan one code; Nephrology patients scan another. Routing is automatic.</div></div></div>
        <div className="hc-af"><div className="hc-af-ic">🔒</div><div><div className="hc-af-title">NDPR-compliant data handling</div><div className="hc-af-desc">All patient data stays within SureCova's compliant infrastructure. You receive only aggregate analytics — never individual records without consent.</div></div></div>
      </div>
    </div>
  </div>
</section>

{/*  ═══════════════════════════════════════
     HOSPITAL PARTNERSHIP + REVENUE MODEL
═══════════════════════════════════════  */}
<section id="hc-partner">
  <div className="hc-partner-inner">
    <div>
      <div className="sec-label">For Hospital Leadership</div>
      <h2 className="sec-h2">Your patients don't disappear<br />after discharge. <em>Now neither do you.</em></h2>
      <p className="sec-p" style={{"maxWidth":"100%"}}>Partner with SureCova to become the continuity-of-care infrastructure for your discharged patients. You earn a share of every active subscription — passively, monthly, with zero extra overhead.</p>
      <div className="hc-pv-grid">
        <div className="hc-pv"><span className="hc-pv-ic">📉</span><div className="hc-pv-title">Reduce readmission</div><div className="hc-pv-desc">Patients with continuous post-discharge monitoring are significantly less likely to return. A clinical and reputational win.</div></div>
        <div className="hc-pv"><span className="hc-pv-ic">💰</span><div className="hc-pv-title">New revenue stream</div><div className="hc-pv-desc">Your hospital earns a share of every subscription from patients you've already treated and discharged.</div></div>
        <div className="hc-pv"><span className="hc-pv-ic">🤝</span><div className="hc-pv-title">Retain your doctors</div><div className="hc-pv-desc">Specialists earn more. Seeing their own discharged patients via SureCova is a natural extension — not extra work.</div></div>
        <div className="hc-pv"><span className="hc-pv-ic">📋</span><div className="hc-pv-title">Zero admin complexity</div><div className="hc-pv-desc">SureCova handles registration, payments, routing, and remittance. Set the split once and receive a deposit every month.</div></div>
      </div>
      <div className="hc-rev-model">
        <div className="hc-rm-title">How revenue is split</div>
        <div className="hc-rm-bar">
          <div className="hc-rm-seg hc-rm-sc">20%</div>
          <div className="hc-rm-seg hc-rm-hosp">Hospital</div>
          <div className="hc-rm-seg hc-rm-doc">Doctor</div>
        </div>
        <div className="hc-rm-legend">
          <div className="hc-rm-leg"><div className="hc-rm-dot" style={{"background":"var(--teal)"}}></div>SureCova — 20% platform fee</div>
          <div className="hc-rm-leg"><div className="hc-rm-dot" style={{"background":"var(--dark)"}}></div>Your hospital — you set this %</div>
          <div className="hc-rm-leg"><div className="hc-rm-dot" style={{"background":"#2A6E60"}}></div>Doctor — remainder</div>
        </div>
        <div className="hc-rm-note">Example: 200 subscribers at ₦3,000/month = ₦600,000 collected. After SureCova's 20% (₦120,000), ₦480,000 splits between your hospital and your doctors at whatever percentages you configure. We remit automatically — you never chase payments.</div>
      </div>
    </div>
    {/*  Partnership form  */}
    <div>
      <div className="hc-partner-form">
        <div className="hc-pfh"><h3>Apply to Partner with SureCova</h3><p>For hospitals, clinics, and health systems. We'll reach out within 48 hours.</p></div>
        <div className="hc-rfb">
          <div className="fr">
            <div className="fg"><div className="fl">Contact First Name</div><input className="fi" type="text" placeholder="First name" /></div>
            <div className="fg"><div className="fl">Contact Last Name</div><input className="fi" type="text" placeholder="Last name" /></div>
          </div>
          <div className="fg"><div className="fl">Role / Title</div><input className="fi" type="text" placeholder="e.g. Medical Director, COO" /></div>
          <div className="fg"><div className="fl">Institution Name</div><input className="fi" type="text" placeholder="Full name of your hospital or clinic" /></div>
          <div className="fr">
            <div className="fg"><div className="fl">Country</div><select className="fsel"><option value="">Select…</option><option>Nigeria</option><option>Ghana</option><option>Kenya</option><option>South Africa</option><option>Other Africa</option><option>United Kingdom</option><option>Other</option></select></div>
            <div className="fg"><div className="fl">City</div><input className="fi" type="text" placeholder="City" /></div>
          </div>
          <div className="fg"><div className="fl">Work Email</div><input className="fi" type="email" placeholder="you@hospital.org" /></div>
          <div className="fg"><div className="fl">Phone / WhatsApp</div><input className="fi" type="tel" placeholder="+234 080 0000 0000" /></div>
          <div className="fg"><div className="fl">Hospital Type</div><select className="fsel"><option value="">Select…</option><option>Teaching / Tertiary Hospital</option><option>Private Specialist Hospital</option><option>General Hospital</option><option>Clinic / Health Centre</option><option>Health Maintenance Organisation (HMO)</option></select></div>
          <div className="fg"><div className="fl">Approximate monthly discharges</div><select className="fsel"><option value="">Estimate…</option><option>Under 50</option><option>50 – 150</option><option>150 – 500</option><option>500+</option></select></div>
          <div className="fnote">Filling this form is the first step. We'll schedule a 30-minute call to walk through setup, pricing, and your hospital's workflow. No cost to explore.</div>
          <button className="fsubmit fs-teal" >Submit Partnership Enquiry →</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
