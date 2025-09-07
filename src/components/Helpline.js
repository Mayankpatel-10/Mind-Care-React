import React from 'react';

const Helpline = () => {
  return (
    <section className="card helpline-section" id="helpline-section">
      <h2>📞 Helpline Numbers (India)</h2>
      <div className="helpline-cards">
        <div className="helpline-card">
          <h3>National Mental Health Helpline</h3>
          <p>Available 24/7 for counseling and support.</p>
          <div className="helpline-number">14443 (Toll-Free)</div>
        </div>
        
        <div className="helpline-card">
          <h3>AASRA - Suicide Prevention</h3>
          <p>Specialized support for suicide prevention and crisis.</p>
          <div className="helpline-number">+91-22-2754 6669</div>
        </div>
        
        <div className="helpline-card">
          <h3>Kiran Helpline (Govt. of India)</h3>
          <p>Toll-Free Mental Health Helpline provided by Government of India.</p>
          <div className="helpline-number">1800-599-0019</div>
        </div>
      </div>
    </section>
  );
};

export default Helpline;