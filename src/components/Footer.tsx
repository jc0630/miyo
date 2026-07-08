import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="custom-container footer-grid">
            <div>
                <Link to="/" style={{ height: '40px', display: 'inline-block', marginBottom: '15px' }}>
                    <Logo className="logo-svg" />
                </Link>
                <p>Leading the standard of precision flexible heating. Certified ISO 9001:2015.</p>
                <div className="social-links">
                    <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                    <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                </div>
            </div>
            <div>
                <h4>Headquarters</h4>
                <p>Taiwan HQ</p>
                <p>info@miyo-tech.com</p>
            </div>
            <div style={{ gridColumn: 'span 2', textAlign: 'right' }}>
                <p>© {new Date().getFullYear()} MIYO Technology Co., Ltd. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
}
