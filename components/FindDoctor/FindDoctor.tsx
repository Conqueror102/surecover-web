export default function FindDoctor() {
  return (
    <>
      <section id="find" style={{"background":"var(--navy-2)","padding":"72px var(--pad)"}}>
  <div className="sec-inner">
    <div className="sec-label">Doctor Marketplace</div>
    <h2 className="sec-h2">Find your <em>personal doctor</em></h2>
    <p className="sec-p" style={{"marginBottom":"40px"}}>Don't know which specialty you need? Start by tapping the part of your body that's giving you trouble — we'll surface the right doctors. Or search by name if you already have someone in mind.</p>

    {/*  ══ SEARCH PANEL ══  */}
    <div style={{"background":"#fff","border":"1.5px solid rgba(13,155,136,.2)","borderRadius":"var(--r-xl)","overflow":"hidden","boxShadow":"0 8px 40px rgba(13,155,136,.08)","marginBottom":"36px"}}>

      {/*  Panel header  */}
      <div style={{"background":"linear-gradient(135deg,var(--teal-lo),var(--teal-mid))","padding":"20px 28px","display":"flex","alignItems":"center","justifyContent":"space-between","flexWrap":"wrap","gap":"12px"}}>
        <div>
          <div style={{"fontFamily":"'Playfair Display',serif","fontSize":"1.05rem","fontWeight":"700","color":"#fff","marginBottom":"2px"}}>Where does it hurt?</div>
          <div style={{"fontSize":".72rem","color":"rgba(255,255,255,.65)"}}>Tap any area · select one or more · we'll find the best match</div>
        </div>
        <div id="active-filters" style={{"display":"flex","gap":"6px","flexWrap":"wrap"}}></div>
      </div>

      {/*  Body area tile grid  */}
      <div style={{"padding":"24px 28px 20px","borderBottom":"1px solid var(--ink-5)"}}>
        <div className="body-tile-grid" id="body-tiles">
          {/*  tiles injected by JS  */}
        </div>
        <div style={{"textAlign":"right","marginTop":"10px"}}>
          <span style={{"fontSize":".7rem","color":"var(--teal-hi)","fontWeight":"600","cursor":"pointer"}} >More areas ↓</span>
        </div>
      </div>

      {/*  Divider  */}
      <div style={{"display":"flex","alignItems":"center","gap":"12px","padding":"14px 28px"}}>
        <div style={{"flex":"1","height":"1px","background":"var(--ink-4)"}}></div>
        <span style={{"fontSize":".62rem","fontWeight":"700","color":"var(--ink-3)","textTransform":"uppercase","letterSpacing":".1em","flexShrink":"0"}}>Refine with</span>
        <div style={{"flex":"1","height":"1px","background":"var(--ink-4)"}}></div>
      </div>

      {/*  Secondary filters  */}
      <div style={{"padding":"0 28px 24px","display":"grid","gridTemplateColumns":"1fr 1fr 1fr 1fr auto","gap":"12px","alignItems":"end"}} className="search-bar-row">
        <div className="sf-grp">
          <div className="sf-lbl">🔍 Doctor Name</div>
          <input className="sf-inp" type="text" placeholder="Search by name…" id="name-search" />
        </div>
        <div className="sf-grp">
          <div className="sf-lbl">📍 Location</div>
          <select className="sf-sel">
            <option>Any Location</option><option>Nigeria</option><option>United Kingdom</option><option>Ghana</option><option>Kenya</option><option>India</option><option>South Africa</option><option>Indonesia</option><option>Pakistan</option><option>United States</option><option>Canada</option><option>Australia</option><option>Other</option>
          </select>
        </div>
        <div className="sf-grp">
          <div className="sf-lbl">🗣️ Language</div>
          <select className="sf-sel">
            <option>Any Language</option><option>English</option><option>Hausa</option><option>Yoruba</option><option>Igbo</option><option>French</option><option>Arabic</option><option>Hindi</option><option>Tamil</option><option>Swahili</option><option>Twi</option>
          </select>
        </div>
        <div className="sf-grp">
          <div className="sf-lbl">🩺 Specialty</div>
          <select className="sf-sel">
            <option>All Specialties</option><option>General Practice</option><option>Cardiology</option><option>Endocrinology</option><option>Nephrology</option><option>Pulmonology</option><option>Psychiatry</option><option>Psychology</option><option>Dietician / Nutrition</option><option>Weight Loss</option><option>Dermatology</option><option>OB/GYN</option><option>Paediatrics</option>
          </select>
        </div>
        <button className="sf-btn"  style={{"padding":"11px 22px","borderRadius":"var(--r-md)","height":"fit-content"}}>🔍 Search</button>
      </div>

      {/*  Results count bar  */}
      <div style={{"background":"rgba(13,155,136,.05)","borderTop":"1px solid rgba(13,155,136,.1)","padding":"10px 28px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
        <div style={{"fontSize":".72rem","fontWeight":"700","color":"var(--ink-3)"}} id="result-count">All Doctors · <span style={{"color":"var(--teal-hi)"}}>Beta — Growing directory</span></div>
        <div style={{"fontSize":".68rem","color":"var(--ink-3)"}}>Ranked by match · rating · response time</div>
      </div>
    </div>

    {/*  DOCTOR CARDS  */}
    <div className="docs-grid">
      <div className="doc-card" >
        <div style={{"background":"linear-gradient(135deg,#0B6E6E,#0D9B88)","padding":"16px 20px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"11px"}}>
            <div style={{"width":"44px","height":"44px","borderRadius":"12px","background":"rgba(255,255,255,.2)","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Playfair Display',serif","fontSize":"1.1rem","fontWeight":"700","color":"#fff","flexShrink":"0"}}>AN</div>
            <div><div style={{"fontSize":".88rem","fontWeight":"700","color":"#fff"}}>Dr. Adaeze Nwachukwu</div><div style={{"fontSize":".68rem","color":"rgba(255,255,255,.75)"}}>General Practice · Abuja, Nigeria</div></div>
          </div>
          <div style={{"textAlign":"right"}}><div style={{"fontSize":".65rem","color":"rgba(255,255,255,.7)","fontWeight":"600","background":"rgba(255,255,255,.15)","padding":"4px 9px","borderRadius":"100px"}}>View Pricing →</div></div>
        </div>
        <div style={{"padding":"14px 20px 0"}}><div style={{"display":"flex","gap":"5px","flexWrap":"wrap","marginBottom":"10px"}}><span className="doc-tag">❤️ Heart</span><span className="doc-tag">🩸 Diabetes</span><span className="doc-tag">English</span><span className="doc-tag">Igbo</span></div><div style={{"fontSize":".7rem","color":"var(--ink-3)","display":"flex","gap":"12px","flexWrap":"wrap"}}><span>📍 Nigeria</span><span>✓ MDCN Verified</span><span>★ 4.9 · 84 patients</span></div></div>
        <div style={{"padding":"12px 20px 16px","borderTop":"1px solid var(--ink-5)","marginTop":"14px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
          <div><div style={{"display":"flex","alignItems":"center","gap":"5px","fontSize":".67rem","color":"var(--green)","marginBottom":"3px"}}><div style={{"width":"6px","height":"6px","borderRadius":"50%","background":"var(--green)"}}></div>Accepting patients</div><div style={{"fontSize":".6rem","color":"var(--ink-3)"}}>Responds within 12 hours</div></div>
          <button className="doc-cta">Subscribe</button>
        </div>
      </div>

      <div className="doc-card" >
        <div style={{"background":"linear-gradient(135deg,#0B2545,#1A3A5C)","padding":"16px 20px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"11px"}}>
            <div style={{"width":"44px","height":"44px","borderRadius":"12px","background":"rgba(255,255,255,.2)","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Playfair Display',serif","fontSize":"1.1rem","fontWeight":"700","color":"#fff","flexShrink":"0"}}>KM</div>
            <div><div style={{"fontSize":".88rem","fontWeight":"700","color":"#fff"}}>Dr. Kwame Mensah</div><div style={{"fontSize":".68rem","color":"rgba(255,255,255,.75)"}}>Cardiology · Accra, Ghana</div></div>
          </div>
          <div style={{"textAlign":"right"}}><div style={{"fontSize":".65rem","color":"rgba(255,255,255,.7)","fontWeight":"600","background":"rgba(255,255,255,.15)","padding":"4px 9px","borderRadius":"100px"}}>View Pricing →</div></div>
        </div>
        <div style={{"padding":"14px 20px 0"}}><div style={{"display":"flex","gap":"5px","flexWrap":"wrap","marginBottom":"10px"}}><span className="doc-tag">⭐ Best Match</span><span className="doc-tag">🫀 Heart</span><span className="doc-tag">English</span><span className="doc-tag">Twi</span></div><div style={{"fontSize":".7rem","color":"var(--ink-3)","display":"flex","gap":"12px","flexWrap":"wrap"}}><span>📍 Ghana</span><span>✓ MDCG Verified</span><span>★ 4.8 · 61 patients</span></div></div>
        <div style={{"padding":"12px 20px 16px","borderTop":"1px solid var(--ink-5)","marginTop":"14px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
          <div><div style={{"display":"flex","alignItems":"center","gap":"5px","fontSize":".67rem","color":"var(--green)","marginBottom":"3px"}}><div style={{"width":"6px","height":"6px","borderRadius":"50%","background":"var(--green)"}}></div>Accepting patients</div><div style={{"fontSize":".6rem","color":"var(--ink-3)"}}>Responds within 8 hours</div></div>
          <button className="doc-cta">Subscribe</button>
        </div>
      </div>

      <div className="doc-card" >
        <div style={{"background":"linear-gradient(135deg,#072E28,#0B5C52)","padding":"16px 20px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"11px"}}>
            <div style={{"width":"44px","height":"44px","borderRadius":"12px","background":"rgba(255,255,255,.2)","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Playfair Display',serif","fontSize":"1.1rem","fontWeight":"700","color":"#fff","flexShrink":"0"}}>PN</div>
            <div><div style={{"fontSize":".88rem","fontWeight":"700","color":"#fff"}}>Dr. Priya Nair</div><div style={{"fontSize":".68rem","color":"rgba(255,255,255,.75)"}}>Endocrinology · Chennai, India</div></div>
          </div>
          <div style={{"textAlign":"right"}}><div style={{"fontSize":".65rem","color":"rgba(255,255,255,.7)","fontWeight":"600","background":"rgba(255,255,255,.15)","padding":"4px 9px","borderRadius":"100px"}}>View Pricing →</div></div>
        </div>
        <div style={{"padding":"14px 20px 0"}}><div style={{"display":"flex","gap":"5px","flexWrap":"wrap","marginBottom":"10px"}}><span className="doc-tag">🩸 Diabetes</span><span className="doc-tag">⚖️ Thyroid</span><span className="doc-tag">English</span><span className="doc-tag">Tamil</span></div><div style={{"fontSize":".7rem","color":"var(--ink-3)","display":"flex","gap":"12px","flexWrap":"wrap"}}><span>📍 India</span><span>✓ MCI Verified</span><span>★ 4.9 · 102 patients</span></div></div>
        <div style={{"padding":"12px 20px 16px","borderTop":"1px solid var(--ink-5)","marginTop":"14px","display":"flex","alignItems":"center","justifyContent":"space-between"}}>
          <div><div style={{"display":"flex","alignItems":"center","gap":"5px","fontSize":".67rem","color":"var(--green)","marginBottom":"3px"}}><div style={{"width":"6px","height":"6px","borderRadius":"50%","background":"var(--green)"}}></div>Accepting patients</div><div style={{"fontSize":".6rem","color":"var(--ink-3)"}}>Responds within 24 hours</div></div>
          <button className="doc-cta">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
