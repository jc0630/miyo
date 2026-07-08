import { Link } from 'react-router-dom';

export default function Faq() {
  return (
    <main>
        <div className="custom-container blog-list-layout">
            
            {/* Sidebar */}
            <aside className="blog-sidebar-left">
                <div className="blog-sidebar-menu">
                    <Link to="#" className="active">Design Guide</Link>
                    <Link to="#">Heater Selector</Link>
                    <Link to="#">Power/Time Calculator</Link>
                    <Link to="#">Technical FAQ</Link>
                    <Link to="#">White Papers</Link>
                    <Link to="#">Case Studies</Link>
                    <Link to="#">Video Center</Link>
                    <Link to="#">Datasheet Download</Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="blog-list-main">
                
                <Link to="/blog/understanding-flexible-heaters" className="blog-list-card">
                    <div className="blog-list-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')" }}></div>
                    <div className="blog-list-content">
                        <h3 className="blog-list-title">Understanding Flexible Heaters: A Comprehensive Guide</h3>
                        <div className="blog-list-meta">2026.7.7 / Category: Design Guide</div>
                        <p className="blog-list-desc">A flexible heater is a highly engineered, conformal heating element designed to provide precise, uniform thermal transfer to complex surfaces. Discover how they provide targeted heat distribution.</p>
                        <span className="blog-list-read-more">Read More</span>
                    </div>
                </Link>

                <Link to="#" className="blog-list-card">
                    <div className="blog-list-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')" }}></div>
                    <div className="blog-list-content">
                        <h3 className="blog-list-title">How to Choose Heating Element Materials</h3>
                        <div className="blog-list-meta">2026.6.16 / Category: Design Guide</div>
                        <p className="blog-list-desc">Polyimide Heaters are ideal for ultra-thin profiles, while Silicone Rubber Heaters are rugged and moisture-resistant. Learn which is best for your application.</p>
                        <span className="blog-list-read-more">Read More</span>
                    </div>
                </Link>

                <Link to="#" className="blog-list-card">
                    <div className="blog-list-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80')" }}></div>
                    <div className="blog-list-content">
                        <h3 className="blog-list-title">Power Density Calculation (W/cm²)</h3>
                        <div className="blog-list-meta">2026.6.11 / Category: Design Guide</div>
                        <p className="blog-list-desc">Watt Density determines a heater's ability to reach target temperatures. Find out how to optimize it for long-term reliability and safety.</p>
                        <span className="blog-list-read-more">Read More</span>
                    </div>
                </Link>

                <Link to="#" className="blog-list-card">
                    <div className="blog-list-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80')" }}></div>
                    <div className="blog-list-content">
                        <h3 className="blog-list-title">Temperature Uniformity Design</h3>
                        <div className="blog-list-meta">2026.6.11 / Category: Design Guide</div>
                        <p className="blog-list-desc">Integrating thermistors, RTDs, and thermal switches directly into the heater assembly provides unparalleled precision in temperature monitoring.</p>
                        <span className="blog-list-read-more">Read More</span>
                    </div>
                </Link>

                <Link to="#" className="blog-list-card">
                    <div className="blog-list-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')" }}></div>
                    <div className="blog-list-content">
                        <h3 className="blog-list-title">Thickness and Bending Radius Limits</h3>
                        <div className="blog-list-meta">2026.6.2 / Category: Design Guide</div>
                        <p className="blog-list-desc">A guide to the physical limitations of flexible heaters, explaining the importance of proper installation to avoid trace breakage.</p>
                        <span className="blog-list-read-more">Read More</span>
                    </div>
                </Link>

            </div>

        </div>
    </main>
  );
}
