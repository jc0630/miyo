import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <main>
        <section className="resource-hero">
            <div className="custom-container">
                <h1>Technical Insights & Blog</h1>
                <p>Engineering resources, design guides, and the latest in flexible heating technology.</p>
            </div>
        </section>

        <div className="custom-container blog-layout">
            
            <div className="blog-main">
                {/* Featured Post */}
                <article className="blog-card blog-featured">
                    <div className="blog-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')" }}></div>
                    <div className="blog-card-content">
                        <div className="blog-meta"><span>Engineering Guide</span> &bull; 8 min read</div>
                        <h3>Understanding Flexible Heaters: A Comprehensive Guide</h3>
                        <p>A flexible heater is a screen-printed or chemically etched foil heating element laminated between layers of flexible insulation. Discover how they provide targeted, uniform heat distribution and can conform to irregular surfaces and complex geometries.</p>
                        <Link to="#" className="blog-read-more">Read Full Article &rarr;</Link>
                    </div>
                </article>

                {/* Grid Posts */}
                <div className="blog-grid">
                    <article className="blog-card">
                        <div className="blog-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-card-content">
                            <div className="blog-meta"><span>Materials</span> &bull; 5 min read</div>
                            <h3>Polyimide vs. Silicone Rubber: Choosing the Right Solution</h3>
                            <p>Polyimide Heaters are ideal for ultra-thin profiles, while Silicone Rubber Heaters are rugged and moisture-resistant. Learn which is best for your application.</p>
                            <Link to="#" className="blog-read-more">Read Article &rarr;</Link>
                        </div>
                    </article>

                    <article className="blog-card">
                        <div className="blog-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-card-content">
                            <div className="blog-meta"><span>Technical Design</span> &bull; 6 min read</div>
                            <h3>The Importance of Watt Density in Thermal Engineering</h3>
                            <p>Watt Density determines a heater's ability to reach target temperatures. Find out how to optimize it for long-term reliability and safety.</p>
                            <Link to="#" className="blog-read-more">Read Article &rarr;</Link>
                        </div>
                    </article>

                    <article className="blog-card">
                        <div className="blog-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-card-content">
                            <div className="blog-meta"><span>Integration</span> &bull; 4 min read</div>
                            <h3>Advanced Heater Integration: Thermal Sensors & Control</h3>
                            <p>Integrating thermistors, RTDs, and thermal switches directly into the heater assembly provides unparalleled precision in temperature monitoring.</p>
                            <Link to="#" className="blog-read-more">Read Article &rarr;</Link>
                        </div>
                    </article>

                    <article className="blog-card">
                        <div className="blog-card-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-card-content">
                            <div className="blog-meta"><span>Terminology</span> &bull; 10 min read</div>
                            <h3>Critical Terminology: Dielectric Strength & Outgassing</h3>
                            <p>A glossary of essential thermal design terms. Understand Dielectric Strength, Outgassing, and Thermal Uniformity for high-voltage applications.</p>
                            <Link to="#" className="blog-read-more">Read Article &rarr;</Link>
                        </div>
                    </article>
                </div>
            </div>

            <aside className="blog-sidebar">
                <h4>Categories</h4>
                <ul className="blog-sidebar-list">
                    <li><Link to="#">Engineering Guides (12)</Link></li>
                    <li><Link to="#">Materials Science (8)</Link></li>
                    <li><Link to="#">Quality & Compliance (5)</Link></li>
                    <li><Link to="#">Industry News (3)</Link></li>
                    <li><Link to="#">Terminology (1)</Link></li>
                </ul>

                <h4>Popular Tags</h4>
                <div className="blog-tags">
                    <Link to="#" className="blog-tag">Polyimide</Link>
                    <Link to="#" className="blog-tag">Silicone Rubber</Link>
                    <Link to="#" className="blog-tag">Watt Density</Link>
                    <Link to="#" className="blog-tag">Cold-Start</Link>
                    <Link to="#" className="blog-tag">EV Battery</Link>
                    <Link to="#" className="blog-tag">Medical Devices</Link>
                </div>
            </aside>
            
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
