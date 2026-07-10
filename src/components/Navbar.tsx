import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
        <div className="top-bar" style={{ padding: '8px 0', fontSize: '13px', width: '100%' }}>
            <div className="custom-container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#" style={{ color: 'var(--accent-red)', textDecoration: 'none', fontWeight: 'bold' }}>English</a>
                    <span style={{ margin: '0 10px', color: '#999' }}>|</span>
                    <a href="#" style={{ color: '#333', textDecoration: 'none' }}>繁體中文</a>
                    <span style={{ margin: '0 10px', color: '#999' }}>|</span>
                    <Link to="/search" style={{ color: '#333', display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                </div>
            </div>
        </div>
        <div className="custom-container header-flex">
            <Link to="/" className="logo-link" style={{ height: '28px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                <Logo className="logo-svg" />
            </Link>
            
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="nav-ul">
                    <li className="nav-item">
                        <span className="nav-link cursor-pointer">Products & Capabilities ▾</span>
                        <div className="mega-menu">
                            <div className="mega-grid">
                                <div className="mega-title"><h2>Products & Capabilities</h2><p>Engineering-grade flexible heaters.</p></div>
                                <div className="mega-links">
                                    <div className="sub-item"><Link to="/pi-heaters"><h4>Polyimide (PI / Kapton) Flexible Heaters</h4><p>High-precision thin-film thermal elements.</p></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Silicone Rubber Heaters</h4><p>Rugged, moisture-resistant industrial solutions.</p></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Specialty Materials & Heater Integration</h4><p>Full integration with sensors and connectors.</p></Link></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link cursor-pointer">Solutions ▾</span>
                        <div className="mega-menu">
                            <div className="mega-grid">
                                <div className="mega-title"><h2>Solutions</h2><p>Solving complex thermal challenges.</p></div>
                                <div className="mega-links">
                                    <div className="sub-item"><Link to="/cold-start"><h4>Cold-Start Heating Solutions</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Battery Heating & Thermal Management</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Defogging & Anti-Condensation Heating</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Equipment Insulation & Temperature Holding</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Custom Thermal Engineering Service</h4></Link></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link cursor-pointer">Industries ▾</span>
                        <div className="mega-menu">
                            <div className="mega-grid">
                                <div className="mega-title"><h2>Industries</h2><p>Supporting critical global sectors.</p></div>
                                <div className="mega-links">
                                    <div className="sub-item"><Link to="/auto-ev"><h4>Automotive & EV Heating Solutions</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Semiconductor Equipment Heating</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Medical & Bio Instrument Heating</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Industrial Computer Heating</h4></Link></div>
                                    <div className="sub-item"><Link to="#"><h4>Outdoor Surveillance Heating</h4></Link></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link cursor-pointer">Technical Resources ▾</span>
                        <div className="mega-menu">
                            <div className="mega-grid">
                                <div className="mega-title"><h2>Technical Resources</h2><p>Tools for engineering partners.</p></div>
                                <div className="mega-links">
                                    <div className="sub-item"><Link to="#"><h4>Flexible Heater Design Guide</h4></Link></div>
                                    <div className="sub-item"><Link to="/faq"><h4>Technical FAQ & Terminology</h4></Link></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link to="/quality" className="nav-link">Quality & Certifications</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About MIYO</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link" style={{color: 'var(--accent-red)'}}>Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
