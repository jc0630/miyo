import re

with open("src/pages/BlogPost1.tsx", "r") as f:
    content = f.read()

sidebar_content = """            {/* Sidebar Right */}
            <aside className="blog-sidebar-right">
                
                <div className="blog-sidebar-widget">
                    <h4 className="blog-sidebar-title">Categories</h4>
                    <div className="blog-sidebar-menu">
                        <Link to="/faq" className="active">Design Guide</Link>
                        <Link to="#">Heater Selector</Link>
                        <Link to="#">Power/Time Calculator</Link>
                        <Link to="#">Technical FAQ</Link>
                        <Link to="#">White Papers</Link>
                        <Link to="#">Case Studies</Link>
                        <Link to="#">Video Center</Link>
                        <Link to="#">Datasheet Download</Link>
                    </div>
                </div>

                <div className="blog-sidebar-widget">
                    <h4 className="blog-sidebar-title">Hot Articles</h4>
                    
                    <Link to="#" className="blog-mini-card">
                        <div className="blog-mini-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-mini-content">
                            <div className="blog-mini-meta">2026.6.16</div>
                            <h5 className="blog-mini-title">How to Choose Heating Element Materials</h5>
                        </div>
                    </Link>

                    <Link to="#" className="blog-mini-card">
                        <div className="blog-mini-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-mini-content">
                            <div className="blog-mini-meta">2026.6.11</div>
                            <h5 className="blog-mini-title">Power Density Calculation (W/cm²)</h5>
                        </div>
                    </Link>

                    <Link to="#" className="blog-mini-card">
                        <div className="blog-mini-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-mini-content">
                            <div className="blog-mini-meta">2026.6.11</div>
                            <h5 className="blog-mini-title">Temperature Uniformity Design</h5>
                        </div>
                    </Link>
                    
                    <Link to="#" className="blog-mini-card">
                        <div className="blog-mini-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')" }}></div>
                        <div className="blog-mini-content">
                            <div className="blog-mini-meta">2026.6.2</div>
                            <h5 className="blog-mini-title">Thickness and Bending Radius Limits</h5>
                        </div>
                    </Link>
                </div>

            </aside>"""

new_content = re.sub(r'\{\/\* Sidebar Right \*\/.*?<\/aside>', sidebar_content, content, flags=re.DOTALL)

with open("src/pages/BlogPost1.tsx", "w") as f:
    f.write(new_content)
