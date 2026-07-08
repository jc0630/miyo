import { Link } from 'react-router-dom';

export default function AutoEV() {
  return (
    <main>
        <section className="hero-ind">
            <div className="custom-container">
                <h1>Automotive & EV<br/>Heating Solutions</h1>
            </div>
        </section>

        <section className="env-bar">
            <div className="env-item">
                <p>Operating Range</p>
                <span>-40&deg;C to +105&deg;C</span>
            </div>
            <div className="env-item">
                <p>Technology Base</p>
                <span>INK PET (Polyester Film)</span>
            </div>
            <div className="env-item">
                <p>Uniformity</p>
                <span>&plusmn; 2&deg;C Deviation</span>
            </div>
        </section>

        <section className="alternating-section custom-container">
            
            <div className="flex-block">
                <div className="flex-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')" }}></div>
                <div className="flex-text">
                    <h2>Superior Visibility:<br/>Mirror De-icing & Defogging</h2>
                    <p>Driving safety in winter and rainy seasons starts with a clear view. MIYO’s Polyester Film Heaters are the benchmark for automotive rear-view mirror thermal management.</p>
                    <p>Our INK PET technology is specifically engineered to clear frost, ice, and fog within seconds, ensuring the driver maintains 100% operational visibility even in the harshest global climates.</p>
                    <div className="feature-badges">
                        <span className="badge">Snow Removal</span>
                        <span className="badge">Frost Clearance</span>
                        <span className="badge">Instant Defogging</span>
                    </div>
                </div>
            </div>

            <div className="flex-block">
                <div className="flex-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80')" }}></div>
                <div className="flex-text">
                    <h2>Advanced Engineering:<br/>Precision Circuit Adhesion</h2>
                    <p>Automotive environments demand extreme durability. MIYO utilizes proprietary surface treatment and circuit adhesion techniques to ensure that our heating elements remain stable through lifelong vibrations and thermal cycling.</p>
                    <p>Our "Zonal Independent Heating" design allows for targeted thermal distribution, ensuring the most efficient power usage for modern EV energy management systems.</p>
                    <div className="feature-badges">
                        <span className="badge">Zonal Heating Control</span>
                        <span className="badge">Proprietary Circuit Bonding</span>
                        <span className="badge">Enhanced Durability</span>
                    </div>
                </div>
            </div>

        </section>

        <section className="experience-banner">
            <div className="custom-container">
                <h2>200+ Projects</h2>
                <p>With more than 200 successful product developments for domestic and international automotive manufacturers, MIYO Technology offers a proven database of solutions and a robust inventory to support your scale-up requirements.</p>
            </div>
        </section>

        <section className="contact-cta-white">
            <div className="custom-container cta-content">
                <h2>Ready to Engineer Your Automotive Thermal Solution?</h2>
                <p>Consult with our automotive specialists for IATF-compliant designs.</p>
                <Link to="/contact" className="btn-large">Request a Technical Consultation</Link>
            </div>
        </section>
    </main>
  );
}
