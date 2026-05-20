export default function Emergency() {
  return (
    <>
      <section id="emergency" className="sec" style={{"background":"#fff"}}>
  <div className="sec-inner">
    <div className="sec-label">Important Notice</div>
    <h2 className="sec-h2">SureCova is <em>not</em> an emergency service</h2>
    <div className="emg-box">
      <div className="emg-icon">🚨</div>
      <div>
        <div className="emg-title">Emergency? Go to your nearest hospital immediately.</div>
        <div className="emg-desc">SureCova is not equipped for medical emergencies — chest pain, stroke, severe accidents, loss of consciousness. Your personal doctor cannot call an ambulance, perform procedures, or physically attend to you. If you are in a life-threatening situation, call emergency services or go to an emergency room immediately.</div>
        <div className="emg-good">
          <div className="emg-good-title">What SureCova is great for</div>
          <div className="emg-g">Ongoing chronic condition management — diabetes, hypertension, asthma, kidney disease</div>
          <div className="emg-g">Prescription renewals and medication adjustments</div>
          <div className="emg-g">Non-urgent symptoms — rashes, mild infections, sleep concerns, fatigue</div>
          <div className="emg-g">Lab result interpretation and follow-up care</div>
          <div className="emg-g">Second opinions and mental health support</div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
