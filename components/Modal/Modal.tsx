export default function Modal() {
  return (
    <>
      <div id="modal-bg" >
  <div id="modal">
    <div className="modal-head"><div><div className="modal-h">Subscribe to Doctor</div><div className="modal-sub">Your subscription starts immediately</div></div><button className="modal-x" >×</button></div>
    <div className="modal-doc"><div className="modal-doc-ava" id="m-ava">AN</div><div><div className="modal-doc-name" id="m-name">Dr. Adaeze Nwachukwu</div><div className="modal-doc-spec" id="m-spec">General Practice</div></div></div>
    <div className="modal-price-row" style={{"flexDirection":"column","gap":"4px","padding":"0 28px 14px"}}>
      <div style={{"fontSize":".67rem","fontWeight":"700","color":"var(--teal-hi)","textTransform":"uppercase","letterSpacing":".08em"}}>Subscription Price</div>
      <div style={{"fontSize":".86rem","color":"var(--ink-2)","lineHeight":"1.6"}}>This doctor's rate is shown in your <strong style={{"color":"var(--dark)"}}>local currency</strong> on their full profile. Payment is processed in your currency at checkout — no conversion friction.</div>
    </div>
    <div className="modal-feats">
      <div className="modal-feat"><div className="modal-feat-check">✓</div>Unlimited consultations via chat & voice</div>
      <div className="modal-feat"><div className="modal-feat-check">✓</div>Legally valid prescription in your country</div>
      <div className="modal-feat"><div className="modal-feat-check">✓</div>Lab orders & result interpretation</div>
      <div className="modal-feat"><div className="modal-feat-check">✓</div>Monthly health check-in & medication review</div>
      <div className="modal-feat"><div className="modal-feat-check">✓</div>Cancel anytime</div>
    </div>
    <div className="modal-pay"><div className="modal-pay-lbl">Payment Method</div>
      <div className="pay-opt on" ><div className="pay-opt-ic">💳</div><div><div className="pay-opt-name">Paystack</div><div className="pay-opt-detail">Naira · Ghana Cedis · Cards</div></div></div>
      <div className="pay-opt" ><div className="pay-opt-ic">🌐</div><div><div className="pay-opt-name">Stripe</div><div className="pay-opt-detail">USD / GBP · International cards</div></div></div>
      <div className="pay-opt" ><div className="pay-opt-ic">🇮🇳</div><div><div className="pay-opt-name">Razorpay</div><div className="pay-opt-detail">Indian Rupee · UPI</div></div></div>
    </div>
    <div className="modal-note">You'll be redirected to your payment provider. Subscription starts immediately after payment.</div>
    <button className="modal-btn" >View Full Profile & Subscribe →</button>
  </div>
</div>


    </>
  );
}
