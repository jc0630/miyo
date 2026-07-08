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
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: '1.8' }}>
                    <li><strong>Address:</strong> 5F, No. 82-2, Dongshun St., Shulin Dist., New Taipei City 238, Taiwan</li>
                    <li><strong>TEL:</strong> 886-2-8686-6888</li>
                    <li><strong>FAX:</strong> 886-2-8686-9399</li>
                    <li><strong>E-mail:</strong> miyo@miyo.com.tw</li>
                </ul>
            </div>
        </div>
        <div className="custom-container" style={{ borderTop: '1px solid #eee', marginTop: '40px', paddingTop: '20px', textAlign: 'center' }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} MIYO Technology Co., Ltd. All Rights Reserved.</p>
        </div>
    </footer>
  );
}
