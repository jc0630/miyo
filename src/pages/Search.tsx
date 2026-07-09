import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
  const [query, setQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate search action
  };

  return (
    <main>
      <section className="search-banner" style={{ background: 'var(--bg-light)', padding: '60px 0', borderBottom: '1px solid #eaeaea' }}>
        <div className="custom-container">
          <h1 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--text-dark)' }}>Search</h1>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', maxWidth: '600px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
                <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}></i>
                <input 
                  type="text" 
                  placeholder="Search products, models, solutions..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '15px 15px 15px 45px', 
                    fontSize: '16px', 
                    borderRadius: '8px', 
                    border: '1px solid #ccc',
                    outline: 'none'
                  }} 
                />
            </div>
            <button type="submit" className="btn-primary" style={{ padding: '0 30px', border: 'none', cursor: 'pointer', borderRadius: '8px' }}>
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="search-results custom-container" style={{ padding: '60px 0', minHeight: '50vh' }}>
        {query && (
            <div>
                <p style={{ marginBottom: '30px', fontSize: '18px', color: 'var(--text-gray)' }}>Showing results for <strong>"{query}"</strong></p>
                
                <div className="search-result-item" style={{ padding: '20px', borderBottom: '1px solid #eaeaea', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '12px', padding: '4px 8px', background: '#e6f0fa', color: 'var(--primary-blue)', borderRadius: '4px', fontWeight: 'bold' }}>Product Model</span>
                        <h3 style={{ margin: 0 }}><Link to="/pi-heaters" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>PI-1002 Polyimide Heater</Link></h3>
                    </div>
                    <p style={{ color: 'var(--text-gray)', margin: '0 0 10px 0' }}>Ultra-thin polyimide heater for medical diagnostics. Dimensions: 50x50mm. Watt density: 1.5W/cm².</p>
                </div>

                <div className="search-result-item" style={{ padding: '20px', borderBottom: '1px solid #eaeaea', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '12px', padding: '4px 8px', background: '#f5f5f5', color: '#666', borderRadius: '4px', fontWeight: 'bold' }}>Solution</span>
                        <h3 style={{ margin: 0 }}><Link to="/auto-ev" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>Automotive & EV Heating Solutions</Link></h3>
                    </div>
                    <p style={{ color: 'var(--text-gray)', margin: '0 0 10px 0' }}>Comprehensive thermal management solutions for electric vehicles, including battery pack heating and ADAS sensor defogging.</p>
                </div>

                <div className="search-result-item" style={{ padding: '20px', borderBottom: '1px solid #eaeaea', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ fontSize: '12px', padding: '4px 8px', background: '#fff0f0', color: 'var(--accent-red)', borderRadius: '4px', fontWeight: 'bold' }}>Blog / Article</span>
                        <h3 style={{ margin: 0 }}><Link to="/blog/understanding-flexible-heaters" style={{ color: 'var(--primary-blue)', textDecoration: 'none' }}>Understanding Flexible Heaters: A Comprehensive Guide</Link></h3>
                    </div>
                    <p style={{ color: 'var(--text-gray)', margin: '0 0 10px 0' }}>A deep dive into the technology, materials, and applications of modern flexible heating elements. Learn how to choose the right heater for your needs.</p>
                </div>
            </div>
        )}
      </section>
    </main>
  );
}
