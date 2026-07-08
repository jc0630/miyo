import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <main>
        <section className="resource-hero">
            <div className="custom-container">
                <h1>Technical FAQ & Terminology Center</h1>
                <p>Comprehensive engineering support and definitions for high-performance flexible heating technology.</p>
            </div>
        </section>

        <div className="custom-container faq-layout">
            <aside className="faq-sidebar">
                <h3>Categories</h3>
                <ul>
                    <li><a href="#faq-general" className="active">General FAQ</a></li>
                    <li><a href="#faq-technical">Technical Design</a></li>
                    <li><a href="#faq-compliance">Quality & Compliance</a></li>
                    <li><a href="#terminology">Terminology Glossary</a></li>
                </ul>
            </aside>

            <div className="faq-main">
                <section id="faq-general" className="faq-section">
                    <h2>General FAQ</h2>
                    
                    <details>
                        <summary>What is a flexible heater and how does it work?</summary>
                        <div className="faq-content">
                            A flexible heater is a screen-printed or chemically etched foil heating element laminated between layers of flexible insulation (such as Polyimide or Silicone Rubber). It provides targeted, uniform heat distribution and can conform to irregular surfaces and complex geometries.
                        </div>
                    </details>

                    <details>
                        <summary>Polyimide (Kapton) vs. Silicone Rubber heaters: Which one should I choose?</summary>
                        <div className="faq-content">
                            <strong>Polyimide Heaters</strong> are ideal for applications requiring ultra-thin profiles, high dielectric strength, and extreme temperature stability. <strong>Silicone Rubber Heaters</strong> are rugged, moisture-resistant, and better suited for industrial environments where durability and larger surface areas are required.
                        </div>
                    </details>

                    <details>
                        <summary>Can MIYO heaters be customized for specific shapes?</summary>
                        <div className="faq-content">
                            Yes. One of our core strengths is "Design-in" support. We can manufacture heaters in nearly any shape, size, or wattage density to meet your product's specific spatial constraints and thermal requirements.
                        </div>
                    </details>
                </section>

                <section id="faq-technical" className="faq-section">
                    <h2>Technical Design</h2>
                    
                    <details>
                        <summary>What is "Watt Density" and why is it important?</summary>
                        <div className="faq-content">
                            Watt Density is the amount of power (watts) per unit of heating area (sq cm or sq in). It determines the heater's ability to reach target temperatures quickly. Higher watt densities require better heat sinking to prevent overheating and ensure long-term reliability.
                        </div>
                    </details>

                    <details>
                        <summary>Does MIYO provide integrated thermal sensors?</summary>
                        <div className="faq-content">
                            Absolutely. We offer value-added assembly services where we can integrate thermistors, RTDs, thermocouples, or thermal switches directly into the heater assembly for precise temperature monitoring and control.
                        </div>
                    </details>
                </section>

                <section id="terminology" className="faq-section">
                    <h2>Terminology Glossary</h2>
                    <div className="term-box">
                        <div className="term-item">
                            <strong>Dielectric Strength</strong>
                            <p>The maximum electric field that a material can withstand without undergoing electrical breakdown. Important for ensuring safety in high-voltage applications.</p>
                        </div>
                        <div className="term-item">
                            <strong>Outgassing</strong>
                            <p>The release of gas that was dissolved, trapped, or frozen in some material. Crucial for aerospace and vacuum applications; Polyimide is preferred for low outgassing.</p>
                        </div>
                        <div className="term-item">
                            <strong>Thermal Uniformity</strong>
                            <p>The consistency of temperature across the entire surface of the heater. MIYO uses advanced circuit layout optimization to achieve high uniformity within &plusmn;2&deg;C.</p>
                        </div>
                        <div className="term-item">
                            <strong>ZIF Connector</strong>
                            <p>Zero Insertion Force connector. A type of IC socket or electrical connector that requires very little force for insertion. Often used with our Polyimide Gold-Finger leads.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <section className="contact-cta">
            <div className="custom-container cta-content">
                <h2>Can't Find the Answer You're Looking For?</h2>
                <p>Our technical engineering team is ready to assist you with your specific thermal challenges.</p>
                <Link to="/contact" className="btn-large">Ask an Engineer</Link>
            </div>
        </section>
    </main>
  );
}
