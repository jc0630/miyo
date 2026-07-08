import { Link } from 'react-router-dom';

export default function ColdStart() {
  return (
    <main>
        <section className="hero-sol">
            <div className="custom-container">
                <h1>Cold-Start Heating Solutions</h1>
            </div>
        </section>

        <section className="section-padding custom-container">
            <div className="value-box">
                <h2>Circuit Layout & Thermal Optimization Services</h2>
                <p>At MIYO Technology, we understand that overcoming extreme low-temperature start-up failures is critical for high-reliability systems. We provide comprehensive, customized circuit layout designs and thermal field optimization recommendations tailored specifically to your product's spatial constraints, target temperature requirements, and power distribution limits. Our design-in approach ensures maximum heating efficiency and uniform heat distribution, protecting sensitive components from thermal shock during rapid cold-booting.</p>
            </div>

            <h2 className="section-title" style={{ marginTop: '80px' }}>Application Scenarios</h2>
            <div className="scenario-grid">
                <div className="scenario-card">
                    <div className="scenario-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558441719-67450807e98a?auto=format&fit=crop&q=80')" }}></div>
                    <div className="scenario-content">
                        <span className="scenario-tag">Automotive</span>
                        <h3>EV Battery Pre-Heating</h3>
                        <p>Optimizing battery performance in sub-zero winters. Our heaters ensure the battery pack reaches safe charging and discharge temperatures before the system activates.</p>
                    </div>
                </div>
                <div className="scenario-card">
                    <div className="scenario-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80')" }}></div>
                    <div className="scenario-content">
                        <span className="scenario-tag">Surveillance</span>
                        <h3>Lens De-Icing & Defogging</h3>
                        <p>Enabling outdoor surveillance and ADAS cameras to clear frost and fog instantly upon start-up, ensuring immediate operational visibility.</p>
                    </div>
                </div>
                <div className="scenario-card">
                    <div className="scenario-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80')" }}></div>
                    <div className="scenario-content">
                        <span className="scenario-tag">Aviation</span>
                        <h3>High-Altitude Avionics Boot-Up</h3>
                        <p>Preventing instrument failure during rapid altitude changes. Custom circuitry provides targeted warmth to motherboards and sensors in cryogenic conditions.</p>
                    </div>
                </div>
                <div className="scenario-card">
                    <div className="scenario-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80')" }}></div>
                    <div className="scenario-content">
                        <span className="scenario-tag">Energy</span>
                        <h3>Renewable Base Station Startup</h3>
                        <p>Ensuring 5G and communication towers in high-altitude or polar regions can activate internal electronics without cold-start damage.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-cta">
            <div className="custom-container cta-content">
                <h2>Ready to Solve Your Cold-Start Challenges?</h2>
                <p>Partner with MIYO for industry-leading thermal design expertise.</p>
                <Link to="/contact" className="btn-large">Consult an Engineer Today</Link>
            </div>
        </section>
    </main>
  );
}
