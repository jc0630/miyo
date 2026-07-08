import { Link } from 'react-router-dom';

export default function Quality() {
  return (
    <main>
        <section className="hero-banner">
            <div className="custom-container">
                <h1>Quality & Certifications</h1>
            </div>
        </section>

        <div className="breadcrumb">
            <div className="custom-container">
                <Link to="/">Home</Link> / Quality & Certifications
            </div>
        </div>

        <section className="section custom-container">
            <div className="section-header">
                <h2>International Standards</h2>
            </div>
            <div className="cert-grid">
                <div className="cert-card">
                    <i className="fa-solid fa-award"></i>
                    <h3>ISO 9001:2015</h3>
                    <p>Quality Management System</p>
                </div>
                <div className="cert-card">
                    <i className="fa-solid fa-shield-halved"></i>
                    <h3>UL Certified</h3>
                    <p>Safety Component Recognition</p>
                </div>
                <div className="cert-card">
                    <i className="fa-solid fa-leaf"></i>
                    <h3>RoHS 2.0</h3>
                    <p>Environmental Compliance</p>
                </div>
                <div className="cert-card">
                    <i className="fa-solid fa-earth-americas"></i>
                    <h3>REACH</h3>
                    <p>Global Chemical Safety</p>
                </div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="custom-container">
                <div className="policy-flex">
                    <div className="policy-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')" }}></div>
                    <div className="policy-text">
                        <div className="section-header"><h2>Our Quality Philosophy</h2></div>
                        <p>At MIYO Technology, quality is engineered into every circuit layout and material choice. Our philosophy centers on <strong>"Precision & Reliability"</strong>—ensuring that every flexible heater performs consistently under the most rigorous industrial, medical, and automotive conditions.</p>
                        <p>As an ISO 9001:2015 certified manufacturer, we maintain a complete traceability system from raw material sourcing to final product shipment.</p>
                    </div>
                </div>

                <div className="policy-flex">
                    <div className="policy-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')" }}></div>
                    <div className="policy-text">
                        <div className="section-header"><h2>Testing & Validation</h2></div>
                        <p>Beyond standard inspections, MIYO employs high-end testing methodologies to guarantee performance:</p>
                        <ul style={{ paddingLeft: '20px', color: 'var(--text-gray)', marginTop: '15px' }}>
                            <li><strong>Thermal Imaging Analysis:</strong> Monitoring heat distribution uniformity.</li>
                            <li><strong>Dielectric Strength Testing:</strong> Ensuring high-voltage insulation safety.</li>
                            <li><strong>MTBF Validation:</strong> Verifying product lifespan and durability.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-cta-white">
            <div className="custom-container cta-content">
                <h2>Ready to Experience MIYO Quality?</h2>
                <p>Collaborate with a certified leader in flexible heating technology.</p>
                <Link to="/contact" className="btn-large">Request a Technical Consultation</Link>
            </div>
        </section>
    </main>
  );
}
