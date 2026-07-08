import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
        <section className="about-hero">
            <div className="custom-container">
                <h1>Defining the Future of<br/>Thermal Engineering</h1>
            </div>
        </section>

        <section className="stats-strip">
            <div className="custom-container">
                <div className="stats-grid">
                    <div className="stat-item"><h2>2001</h2><p>Founded</p></div>
                    <div className="stat-item"><h2>20+</h2><p>Years Experience</p></div>
                    <div className="stat-item"><h2>200+</h2><p>Successful Projects</p></div>
                    <div className="stat-item"><h2>ISO</h2><p>9001 Certified</p></div>
                </div>
            </div>
        </section>

        <section className="intro-section">
            <div className="custom-container intro-flex">
                <div className="intro-text">
                    <h2>A Seamless Extension of Your R&D Team</h2>
                    <p>MIYO Technology isn't just a manufacturer; we are your strategic thermal partner. For over 20 years, we have mastered the art of flexible heating, specializing in Polyimide (PI) and Silicone Rubber elements that power global innovations.</p>
                    <p>Our "Design-in" engineering service transforms complex spatial and thermal constraints into high-performance, scalable solutions for the world's most demanding sectors.</p>
                </div>
                <div className="intro-visual">
                    <div className="intro-decoration"></div>
                    <div className="intro-img"></div>
                </div>
            </div>
        </section>

        <section className="timeline-section">
            <div className="custom-container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '32px', textTransform: 'uppercase', marginTop: 0 }}>Our Journey</h2>
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    
                    <div className="timeline-item" style={{ textAlign: 'right' }}>
                        <div className="timeline-date">2001</div>
                        <div className="timeline-content">
                            <h4>MIYO Founded</h4>
                            <p>Established with a focus on precision electric heating technology.</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-date">2010</div>
                        <div className="timeline-content">
                            <h4>ISO 9001 Certification</h4>
                            <p>Formalizing our commitment to global quality management standards.</p>
                        </div>
                    </div>

                    <div className="timeline-item" style={{ textAlign: 'right' }}>
                        <div className="timeline-date">2018</div>
                        <div className="timeline-content">
                            <h4>EV & Medical Expansion</h4>
                            <p>Pioneering zonal heating solutions for Automotive EV and Medical diagnostics.</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-date">2025</div>
                        <div className="timeline-content">
                            <h4>The New Standard</h4>
                            <p>Continuing to define precision heating for next-gen global industries.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="clients-section" style={{ padding: '80px 0', background: '#f8f8f8', textAlign: 'center' }}>
            <div className="custom-container">
                <h2 style={{ fontSize: '32px', textTransform: 'uppercase', marginBottom: '40px', color: 'var(--text-dark)' }}>Our Clients</h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <img src="/clients.jpg" alt="Global Partners and Clients" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', objectFit: 'cover' }} />
                </div>
            </div>
        </section>

        <section className="contact-cta">
            <div className="custom-container cta-content">
                <h2>READY TO START YOUR PROJECT?</h2>
                <p>Collaborate with our engineers to solve your most difficult thermal challenges.</p>
                <Link to="/contact" className="btn-large">Consult an Engineer</Link>
            </div>
        </section>
    </main>
  );
}
