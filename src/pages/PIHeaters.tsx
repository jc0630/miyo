import { Link } from 'react-router-dom';

export default function PIHeaters() {
  return (
    <main>
        <section className="hero-banner pi-heaters border-left">
            <div className="custom-container">
                <h1>Polyimide / Kapton Heaters</h1>
            </div>
        </section>

        <section className="section-padding custom-container">
            <div className="description-box">
                <div className="desc-text">
                    <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px', textTransform: 'uppercase' }}>Engineered Thin-Film Solutions</h2>
                    <p className="desc-highlight">High-performance polyimide heaters designed for precision thermal stability in extreme environments.</p>
                    <p>MIYO’s Polyimide (PI) heaters utilize industry-leading Kapton&reg; films to provide an ultra-low profile heating solution. These heaters are ideal for applications requiring rapid heat transfer, precise thermal control, and superior electrical insulation within confined spaces.</p>
                </div>
                <div className="product-main-img"></div>
            </div>
        </section>

        <section className="section-padding bg-light">
            <div className="custom-container">
                <h2 className="section-title">Custom Options</h2>
                <div className="core-app-grid">
                    <div className="core-app-card"><i className="fa-solid fa-temperature-half"></i><h4>Thermistors</h4></div>
                    <div className="core-app-card"><i className="fa-solid fa-bolt"></i><h4>Fuses</h4></div>
                    <div className="core-app-card"><i className="fa-solid fa-tape"></i><h4>Adhesive Backing</h4></div>
                    <div className="core-app-card"><i className="fa-solid fa-plug"></i><h4>Connectors</h4></div>
                </div>
            </div>
        </section>

        <section className="section-padding custom-container">
            <h2 className="section-title">Technical Specifications</h2>
            <table className="spec-table">
                <thead>
                    <tr>
                        <th>Characteristic</th>
                        <th>Specification Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Watt Density</strong></td>
                        <td>1.5W/cm&sup2; design with high thermal uniformity</td>
                    </tr>
                    <tr>
                        <td><strong>Standard Dimensions</strong></td>
                        <td>250 x 300 mm (Material standard size)</td>
                    </tr>
                    <tr>
                        <td><strong>Custom Dimensions</strong></td>
                        <td>Up to 250 x 750 mm (Tailored to specific designs)</td>
                    </tr>
                    <tr>
                        <td><strong>Termination Types</strong></td>
                        <td>Lead Wires, Gold Finger (ZIF TYPE), Riveted Terminals</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section className="section-padding bg-light">
            <div className="custom-container">
                <h2 className="section-title">Key Features & Properties</h2>
                <div className="feature-grid">
                    <div className="feature-item"><i className="fa-solid fa-check"></i><div><h5>Lightweight & Ultra-Thin</h5><p>Profiles as thin as 0.20mm with high flexibility for contoured surfaces.</p></div></div>
                    <div className="feature-item"><i className="fa-solid fa-check"></i><div><h5>High Temperature Resistance</h5><p>Stable operating performance up to 150&deg;C (302&deg;F).</p></div></div>
                    <div className="feature-item"><i className="fa-solid fa-check"></i><div><h5>Harsh Environment Proof</h5><p>Radiation resistant, weather-proof, and excellent chemical resistance.</p></div></div>
                    <div className="feature-item"><i className="fa-solid fa-check"></i><div><h5>Fully Customizable</h5><p>Tailored shapes and wattage densities to fit your exact mechanical constraints.</p></div></div>
                    <div className="feature-item"><i className="fa-solid fa-check"></i><div><h5>Integrated Module Design</h5><p>Capable of integrating thermal switches and temperature sensors.</p></div></div>
                    <div className="feature-item"><i className="fa-solid fa-check"></i><div><h5>Certified Compliance</h5><p>UL recognized materials; REACH & RoHS 2.0 compliant.</p></div></div>
                </div>
            </div>
        </section>

        <section className="section-padding custom-container">
            <h2 className="section-title">Typical Use Cases</h2>
            <div className="app-list-grid">
                <div className="app-list-item"><h4>Communications & Mechanical Equipment</h4><p>Low-temperature protection for critical outdoor hardware.</p></div>
                <div className="app-list-item"><h4>Battery Thermal Management</h4><p>Extending life and efficiency for EV and energy storage packs.</p></div>
                <div className="app-list-item"><h4>Medical Instrumentation</h4><p>Precise heating for laboratory diagnostics and sample handling.</p></div>
                <div className="app-list-item"><h4>Respiratory Support (CPAP)</h4><p>Thermal and moisture control for medical breathing devices.</p></div>
            </div>
        </section>

        <section className="contact-cta">
            <div className="custom-container cta-content">
                <h2>Start Your Custom PI Heater Project Today</h2>
                <p>Collaborate with our engineering team for a high-performance thermal design.</p>
                <Link to="/contact" className="btn-large">Contact Us / Request a Quote</Link>
            </div>
        </section>
    </main>
  );
}
