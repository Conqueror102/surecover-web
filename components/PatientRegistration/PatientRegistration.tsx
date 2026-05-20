export default function PatientRegistration() {
  return (
    <>
      {/*  ═══════════════════════════════════════
     HOW IT WORKS — HOSPITAL PATIENTS
═══════════════════════════════════════  */}
<section id="hc-how">
  <div style={{"maxWidth":"1240px","margin":"0 auto"}}>
    <div className="sec-label">Patient Journey</div>
    <h2 className="sec-h2">From discharge to <em>connected care</em> — in under 3 minutes</h2>
    <p className="sec-p">Your hospital handles the setup. You just download an app and start talking to your doctor.</p>
    <div className="hc-steps">
      <div className="hc-step">
        <div className="hc-step-num">01</div>
        <span className="hc-step-ic">🏥</span>
        <div className="hc-step-title">Scan or Visit</div>
        <div className="hc-step-desc">Your discharge nurse gives you a QR code — or you visit your hospital's SureCova link. You land directly on the right page for your hospital's doctors.</div>
      </div>
      <div className="hc-step">
        <div className="hc-step-num">02</div>
        <span className="hc-step-ic">🩺</span>
        <div className="hc-step-title">Choose Your Specialist</div>
        <div className="hc-step-desc">See the specialist who managed your inpatient care — or select from your hospital's enrolled doctors. Your treating consultant's profile appears first.</div>
      </div>
      <div className="hc-step hl">
        <div className="hc-step-num">03</div>
        <span className="hc-step-ic">📋</span>
        <div className="hc-step-title">Register & Pay</div>
        <div className="hc-step-desc">Enter your details and subscribe. A secure 6-digit PIN is generated for you instantly. This is your personal key to activate the app.</div>
      </div>
      <div className="hc-step">
        <div className="hc-step-num">04</div>
        <span className="hc-step-ic">📱</span>
        <div className="hc-step-title">Download & Connect</div>
        <div className="hc-step-desc">Install the SureCova app. Enter your PIN. You're immediately connected to your doctor — who already knows your hospital history.</div>
      </div>
    </div>
  </div>
</section>

{/*  ═══════════════════════════════════════
     PATIENT REGISTRATION FORM
═══════════════════════════════════════  */}
<section id="hc-register">
  <div className="hc-reg-layout">

    {/*  FORM CARD  */}
    <div>
      <div className="sec-label" style={{"marginBottom":"8px"}}>Register as a Patient</div>
      <h2 className="sec-h2" style={{"fontSize":"clamp(1.4rem,2.2vw,1.9rem)","marginBottom":"22px"}}>Connect with your <em>St. Mary's doctor</em></h2>
      <div className="hc-reg-form-card">
        <div className="hc-rfh">
          <h3>Patient Registration</h3>
          <p id="hc-rfh-sub">St. Mary's Teaching Hospital · Powered by SureCova</p>
          <div className="hc-rfh-prog">
            <div className="hc-rp on" id="hc-prog-1"></div>
            <div className="hc-rp" id="hc-prog-2"></div>
            <div className="hc-rp" id="hc-prog-3"></div>
          </div>
        </div>
        <div className="hc-step-tabs">
          <div className="hc-step-tab active" id="hc-tab-1">Your Details</div>
          <div className="hc-step-tab" id="hc-tab-2">Your Doctor</div>
          <div className="hc-step-tab" id="hc-tab-3">Confirm & Pay</div>
        </div>
        <div className="hc-rfb">

          {/*  STEP 1  */}
          <div className="hc-form-step active" id="hc-step-1">
            <div className="fr">
              <div className="fg"><div className="fl">First Name</div><input className="fi" id="hc-fname" type="text" placeholder="e.g. Chinyere" /></div>
              <div className="fg"><div className="fl">Last Name</div><input className="fi" id="hc-lname" type="text" placeholder="e.g. Okonkwo" /></div>
            </div>
            <div className="fg"><div className="fl">Email Address</div><input className="fi" id="hc-email" type="email" placeholder="you@email.com" /></div>
            <div className="fg"><div className="fl">Phone Number</div><input className="fi" id="hc-phone" type="tel" placeholder="+234 080 0000 0000" /></div>
            <div className="fr">
              <div className="fg"><div className="fl">Date of Birth</div><input className="fi" id="hc-dob" type="date" /></div>
              <div className="fg"><div className="fl">Biological Sex</div><select className="fsel"><option value="">Select…</option><option>Male</option><option>Female</option></select></div>
            </div>
            <div className="fg">
              <div className="fl">Ward / Department Referred From <span style={{"fontSize":".63rem","color":"var(--ink-3)","fontWeight":"400","textTransform":"none"}}>(optional)</span></div>
              <select className="fsel"><option value="">Select if known…</option><option>Cardiology Ward</option><option>Endocrinology Clinic</option><option>Nephrology Unit</option><option>General Medical Ward</option><option>Surgical Ward</option><option>ICU / Step-down</option><option>Other</option></select>
            </div>
            <div className="fg">
              <div className="fl">Hospital File Number <span style={{"fontSize":".63rem","color":"var(--ink-3)","fontWeight":"400","textTransform":"none"}}>(optional — links your hospital record)</span></div>
              <input className="fi" type="text" placeholder="e.g. STM-2024-00847" />
            </div>
            <div className="fnote">Your data is securely stored and shared only with your assigned doctor. We comply with NDPR and applicable data protection law.</div>
            <button className="fsubmit fs-teal" >Continue to Doctor Selection →</button>
          </div>

          {/*  STEP 2  */}
          <div className="hc-form-step" id="hc-step-2">
            <p style={{"fontSize":".8rem","color":"var(--ink-2)","lineHeight":"1.65"}}>We've pre-selected your treating specialist. Change if needed.</p>
            <div className="hc-doc-assign">
              <div className="hc-da-label" id="hc-da-label">Assigned from your department</div>
              <div className="hc-da-doc">
                <div className="hc-da-ava" id="hc-da-ava" style={{"background":"linear-gradient(135deg,#0B6E6E,#0D9B88)"}}>EO</div>
                <div>
                  <div className="hc-da-name" id="hc-da-name">Dr. Emeka Okafor</div>
                  <div className="hc-da-dept" id="hc-da-dept">Cardiology · St. Mary's Teaching Hospital</div>
                  <div className="hc-da-note">Select a different doctor below if needed.</div>
                </div>
              </div>
            </div>
            <div style={{"fontSize":".68rem","fontWeight":"700","color":"var(--ink-3)","textTransform":"uppercase","letterSpacing":".08em","marginBottom":"6px"}}>All St. Mary's Specialists</div>
            <div style={{"display":"flex","flexDirection":"column","gap":"7px"}}>
              <div className="hc-spec-card" style={{"marginBottom":"0","padding":"10px 13px"}} ><div className="hc-spec-ava" style={{"width":"32px","height":"32px","fontSize":".7rem","background":"linear-gradient(135deg,#0B6E6E,#0D9B88)"}}>EO</div><div className="hc-spec-info"><div className="hc-spec-name" style={{"fontSize":".78rem"}}>Dr. Emeka Okafor</div><div className="hc-spec-dept">Cardiology</div></div><span style={{"fontSize":".63rem","fontWeight":"700","color":"var(--teal-hi)"}}>Select</span></div>
              <div className="hc-spec-card" style={{"marginBottom":"0","padding":"10px 13px"}} ><div className="hc-spec-ava" style={{"width":"32px","height":"32px","fontSize":".7rem","background":"linear-gradient(135deg,#3A0B5C,#6A20A0)"}}>AB</div><div className="hc-spec-info"><div className="hc-spec-name" style={{"fontSize":".78rem"}}>Dr. Amina Bello</div><div className="hc-spec-dept">Endocrinology</div></div><span style={{"fontSize":".63rem","fontWeight":"700","color":"var(--teal-hi)"}}>Select</span></div>
              <div className="hc-spec-card" style={{"marginBottom":"0","padding":"10px 13px"}} ><div className="hc-spec-ava" style={{"width":"32px","height":"32px","fontSize":".7rem","background":"linear-gradient(135deg,#0B2545,#1A3A5C)"}}>CN</div><div className="hc-spec-info"><div className="hc-spec-name" style={{"fontSize":".78rem"}}>Dr. Chukwudi Nwosu</div><div className="hc-spec-dept">Nephrology</div></div><span style={{"fontSize":".63rem","fontWeight":"700","color":"var(--teal-hi)"}}>Select</span></div>
              <div className="hc-spec-card" style={{"marginBottom":"0","padding":"10px 13px"}} ><div className="hc-spec-ava" style={{"width":"32px","height":"32px","fontSize":".7rem","background":"linear-gradient(135deg,#2A6E20,#3A9B2A)"}}>NE</div><div className="hc-spec-info"><div className="hc-spec-name" style={{"fontSize":".78rem"}}>Dr. Ngozi Eze</div><div className="hc-spec-dept">General Practice</div></div><span style={{"fontSize":".63rem","fontWeight":"700","color":"var(--teal-hi)"}}>Select</span></div>
            </div>
            <div style={{"display":"flex","gap":"9px","marginTop":"6px"}}>
              <button className="fsubmit" style={{"background":"var(--navy-3)","color":"var(--ink-2)","flex":".4"}} >← Back</button>
              <button className="fsubmit fs-teal" style={{"flex":"1"}} >Continue to Payment →</button>
            </div>
          </div>

          {/*  STEP 3  */}
          <div className="hc-form-step" id="hc-step-3">
            <div style={{"background":"var(--navy-2)","border":"1px solid var(--ink-5)","borderRadius":"var(--r-md)","padding":"15px"}}>
              <div style={{"fontSize":".62rem","fontWeight":"700","color":"var(--ink-3)","textTransform":"uppercase","letterSpacing":".08em","marginBottom":"10px"}}>Subscription Summary</div>
              <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"7px"}}><span style={{"fontSize":".8rem","color":"var(--ink-2)"}}>Patient</span><span style={{"fontSize":".8rem","fontWeight":"700","color":"var(--dark)"}} id="hc-confirm-name">—</span></div>
              <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"7px"}}><span style={{"fontSize":".8rem","color":"var(--ink-2)"}}>Doctor</span><span style={{"fontSize":".8rem","fontWeight":"700","color":"var(--dark)"}} id="hc-confirm-doc">Dr. Emeka Okafor</span></div>
              <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"7px"}}><span style={{"fontSize":".8rem","color":"var(--ink-2)"}}>Hospital</span><span style={{"fontSize":".8rem","fontWeight":"700","color":"var(--dark)"}}>St. Mary's Teaching Hospital</span></div>
              <div style={{"height":"1px","background":"var(--ink-5)","margin":"8px 0"}}></div>
              <div style={{"display":"flex","justifyContent":"space-between"}}><span style={{"fontSize":".8rem","color":"var(--ink-2)"}}>Monthly subscription</span><span style={{"fontSize":".95rem","fontWeight":"700","color":"var(--teal-hi)"}}>₦3,000 / month</span></div>
            </div>
            <div>
              <div className="fl" style={{"marginBottom":"9px"}}>Payment Method</div>
              <div style={{"display":"flex","flexDirection":"column","gap":"7px"}}>
                <label style={{"display":"flex","alignItems":"center","gap":"9px","padding":"11px 13px","border":"1.5px solid rgba(13,155,136,.3)","borderRadius":"var(--r-sm)","background":"rgba(13,155,136,.04)","cursor":"pointer"}}><input type="radio" name="hc-pay" checked style={{"accentColor":"var(--teal)"}} /><span style={{"fontSize":".8rem","fontWeight":"600","color":"var(--dark)"}}>💳 Debit / Credit Card (Paystack)</span></label>
                <label style={{"display":"flex","alignItems":"center","gap":"9px","padding":"11px 13px","border":"1.5px solid var(--ink-4)","borderRadius":"var(--r-sm)","cursor":"pointer"}}><input type="radio" name="hc-pay" style={{"accentColor":"var(--teal)"}} /><span style={{"fontSize":".8rem","fontWeight":"600","color":"var(--dark)"}}>🏦 Bank Transfer</span></label>
              </div>
            </div>
            <div className="fnote">Subscriptions auto-renew monthly. Cancel anytime in the app. Your PIN is issued immediately after payment.</div>
            <div style={{"display":"flex","gap":"9px"}}>
              <button className="fsubmit" style={{"background":"var(--navy-3)","color":"var(--ink-2)","flex":".4"}} >← Back</button>
              <button className="fsubmit fs-teal" style={{"flex":"1"}} id="hc-pay-btn" >Pay & Get My PIN →</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/*  RIGHT INFO  */}
    <div>
      <div style={{"fontSize":".65rem","fontWeight":"700","color":"var(--ink-3)","textTransform":"uppercase","letterSpacing":".1em","marginBottom":"18px"}}>What happens after you register</div>
      <div className="rb"><div className="rb-ic">🔐</div><div><div className="rb-title">You receive a unique PIN instantly</div><div className="rb-desc">After payment, a 6-digit PIN is generated for you. This is your key to activate the SureCova app and connect directly to your doctor — nobody else can use it.</div></div></div>
      <div className="rb"><div className="rb-ic">📱</div><div><div className="rb-title">Download the app — once</div><div className="rb-desc">Install SureCova from the App Store or Google Play. Enter your PIN. The app loads already configured with your doctor, your hospital tag, and your profile.</div></div></div>
      <div className="rb"><div className="rb-ic">💬</div><div><div className="rb-title">Message your doctor directly</div><div className="rb-desc">No appointments. No waiting rooms. Type a message. Your doctor sees it, reviews your case history, and responds — typically within hours.</div></div></div>
      <div className="rb"><div className="rb-ic">📋</div><div><div className="rb-title">Your hospital record follows you</div><div className="rb-desc">With your consent, your treating doctor can see a summary of your in-hospital care — so you never have to explain your condition from scratch.</div></div></div>
      <div className="rb" style={{"borderBottom":"none"}}><div className="rb-ic">💊</div><div><div className="rb-title">Prescriptions issued remotely</div><div className="rb-desc">Your SureCova doctor can issue valid prescriptions remotely. Receive them digitally and fill at any participating pharmacy.</div></div></div>
      <div style={{"marginTop":"16px","padding":"16px","background":"rgba(13,155,136,.06)","border":"1.5px solid rgba(13,155,136,.18)","borderRadius":"var(--r-md)"}}>
        <div style={{"fontSize":".65rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".09em","marginBottom":"6px"}}>Monthly cost</div>
        <div style={{"fontSize":".86rem","color":"var(--ink-2)","lineHeight":"1.7"}}>Subscriptions start from <strong style={{"color":"var(--dark)"}}>₦3,000/month</strong> in Nigeria. Your doctor sets the rate. Cancel anytime.</div>
      </div>
    </div>
  </div>
</section>

{/*  ═══════════════════════════════════════
     SUCCESS + PIN SCREEN
═══════════════════════════════════════  */}
<section id="hc-success">
  <div className="hc-success-inner">
    <div className="hc-success-check">✓</div>
    <h2 className="hc-success-h">You're registered.<br /><em>Here's your PIN.</em></h2>
    <p className="hc-success-p">Save this PIN — you'll need it to activate the SureCova app. Once entered, you're immediately connected to your doctor. Setup takes under 2 minutes.</p>
    <div className="hc-pin-display">
      <div className="hc-pin-lbl">Your Activation PIN</div>
      <div className="hc-pin-code" id="hc-patient-pin">— — — — — —</div>
      <div className="hc-pin-note">This PIN is unique to you. Keep it safe. Enter it in the SureCova app to activate your account and connect with your doctor.</div>
      <div className="hc-pin-doc">
        <div className="hc-pin-doc-ava" id="hc-success-ava" style={{"background":"linear-gradient(135deg,#0B6E6E,#0D9B88)"}}>EO</div>
        <div>
          <div className="hc-pin-doc-name" id="hc-success-doc-name">Dr. Emeka Okafor</div>
          <div className="hc-pin-doc-role" id="hc-success-doc-role">Cardiology · St. Mary's Teaching Hospital · SureCova</div>
        </div>
      </div>
    </div>
    <div className="hc-app-dl-grid">
      <div className="hc-app-dl-btn"><div className="hc-app-dl-ic">🍎</div><div><div className="hc-app-dl-sub">Download on the</div><div className="hc-app-dl-name">App Store</div></div></div>
      <div className="hc-app-dl-btn"><div className="hc-app-dl-ic">▶</div><div><div className="hc-app-dl-sub">Get it on</div><div className="hc-app-dl-name">Google Play</div></div></div>
    </div>
    <div style={{"fontSize":".78rem","color":"rgba(255,255,255,.45)","lineHeight":"1.7"}}>Open SureCova → tap <strong style={{"color":"#fff"}}>Activate with PIN</strong> → enter your 6-digit code above.<br />Your doctor receives a notification that you've connected and will reach out within 24 hours.</div>
  </div>
</section>

    </>
  );
}
