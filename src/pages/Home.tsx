import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
        <section className="hero-split">
            <Link to="/pi-heaters" className="hero-split-block block-products">
                <div className="hero-split-content">
                    <span className="hero-split-sub">Discover</span>
                    <h2>Products &<br/>Capabilities</h2>
                    <span className="hero-split-btn">Explore Products</span>
                </div>
            </Link>
            <Link to="/cold-start" className="hero-split-block block-solutions">
                <div className="hero-split-content">
                    <span className="hero-split-sub">Custom</span>
                    <h2>Engineered<br/>Solutions</h2>
                    <span className="hero-split-btn">View Solutions</span>
                </div>
            </Link>
            <Link to="/auto-ev" className="hero-split-block block-industries">
                <div className="hero-split-content">
                    <span className="hero-split-sub">Global</span>
                    <h2>Served<br/>Industries</h2>
                    <span className="hero-split-btn">Discover Industries</span>
                </div>
            </Link>
        </section>

        <section className="section">
            <div className="custom-container about-flex">
                <div className="about-text">
                    <div className="section-header"><h2>About MIYO</h2></div>
                    <p>Founded in 2001, MIYO Technology has been at the forefront of flexible heating innovation. We specialize in Polyimide and Silicone Rubber heating elements, providing one-stop solutions from design-in engineering to high-volume manufacturing for global leaders.</p>
                    <Link to="/about" className="read-more-btn">Our Company Profile &rarr;</Link>
                </div>
                <div className="about-img"></div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="custom-container">
                <div className="section-header"><h2>Products & Capabilities</h2></div>
                <div className="product-grid">
                    <div className="p-card">
                        <div className="p-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80')" }}></div>
                        <div className="p-content">
                            <h3>Polyimide (PI / Kapton)</h3>
                            <p>Ultra-thin, high-temp resistant heaters for medical and aerospace.</p>
                            <Link to="/pi-heaters" className="read-more-btn">View Detailed Specs &rarr;</Link>
                        </div>
                    </div>
                    <div className="p-card">
                        <div className="p-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')" }}></div>
                        <div className="p-content">
                            <h3>Silicone Rubber Heaters</h3>
                            <p>Rugged industrial heaters designed for harsh environments.</p>
                            <Link to="#" className="read-more-btn">View Detailed Specs &rarr;</Link>
                        </div>
                    </div>
                    <div className="p-card">
                        <div className="p-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')" }}></div>
                        <div className="p-content">
                            <h3>Heater Integration</h3>
                            <p>Integrated assemblies with sensors, controllers, and insulation.</p>
                            <Link to="#" className="read-more-btn">View Detailed Specs &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="custom-container">
                <div className="section-header"><h2>Solutions</h2></div>
                <div className="sol-grid">
                    <div className="sol-card"><i className="fa-solid fa-snowflake"></i><h4>Cold-Start Heating</h4><p>Rapid activation in extreme cold.</p></div>
                    <div className="sol-card"><i className="fa-solid fa-battery-half"></i><h4>Battery Management</h4><p>Thermal control for EV battery packs.</p></div>
                    <div className="sol-card"><i className="fa-solid fa-wind"></i><h4>Defogging Heating</h4><p>ADAS and surveillance camera clarity.</p></div>
                    <div className="sol-card"><i className="fa-solid fa-shield-halved"></i><h4>Equipment Insulation</h4><p>Precision temperature holding.</p></div>
                    <div className="sol-card"><i className="fa-solid fa-microchip"></i><h4>Custom Engineering</h4><p>Full design-in support.</p></div>
                </div>
                <Link to="/cold-start" className="read-more-btn">All Technical Solutions &rarr;</Link>
            </div>
        </section>

        <section className="section bg-light">
            <div className="custom-container">
                <div className="section-header"><h2>Industries</h2></div>
                <div className="ind-grid">
                    <div className="ind-item">Automotive & EV</div>
                    <div className="ind-item">Semiconductor</div>
                    <div className="ind-item">Medical & Bio</div>
                    <div className="ind-item">Industrial Computer</div>
                    <div className="ind-item">Surveillance</div>
                </div>
                <Link to="/auto-ev" className="read-more-btn">View Applications &rarr;</Link>
            </div>
        </section>

        <section className="contact-cta">
            <div className="custom-container cta-content">
                <h2>Ready to Optimize Your Thermal Design?</h2>
                <p>Our engineering team is ready to support your project from prototyping to high-volume production. Get a technical consultation and quote today.</p>
                <Link to="/contact" className="btn-large">Request a Quote / Contact Us</Link>
            </div>
        </section>
    </main>
  );
}
