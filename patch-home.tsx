import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
        <section className="hero-split">
            <Link to="/pi-heaters" className="hero-split-block block-products">
                <div className="hero-split-content">
                    <h2>Products &<br/>Capabilities</h2>
                    <span className="hero-split-btn">Explore Products</span>
                </div>
            </Link>
            <Link to="/cold-start" className="hero-split-block block-solutions">
                <div className="hero-split-content">
                    <h2>Engineered<br/>Solutions</h2>
                    <span className="hero-split-btn">View Solutions</span>
                </div>
            </Link>
            <Link to="/auto-ev" className="hero-split-block block-industries">
                <div className="hero-split-content">
                    <h2>Served<br/>Industries</h2>
                    <span className="hero-split-btn">Discover Industries</span>
                </div>
            </Link>
        </section>
