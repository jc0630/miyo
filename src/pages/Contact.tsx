export default function Contact() {
  return (
    <main>
        <section className="contact-hero">
            <div className="custom-container">
                <h1>Contact Us</h1>
                <p>Our engineering team is ready to provide you with expert thermal consultation and customized solutions.</p>
            </div>
        </section>

        <div className="custom-container contact-wrapper">
            <div className="contact-form">
                <h2>Technical Inquiry Form</h2>
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label>Full Name *</label>
                        <input type="text" className="form-control" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <label>Company Name *</label>
                        <input type="text" className="form-control" placeholder="Your organization" required />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label>Email Address *</label>
                            <input type="email" className="form-control" placeholder="email@company.com" required />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" className="form-control" placeholder="+000 000-000" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Inquiry Type *</label>
                        <select className="form-control" required>
                            <option value="">-- Please Select --</option>
                            <option value="Product Inquiry">Product Inquiry (PI / Silicone Heaters)</option>
                            <option value="Technical Support">Technical Support & Design-in</option>
                            <option value="Request a Quote">Request a Quote</option>
                            <option value="Sample Request">Sample Request</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message / Technical Requirements *</label>
                        <textarea className="form-control" placeholder="Please describe your application, dimensions, temperature requirements, or power distribution needs..."></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Submit Inquiry</button>
                </form>
            </div>

            <div className="contact-info">
                <h2>Headquarters</h2>
                
                <div className="info-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                        <h4>Our Location</h4>
                        <p>5F, No. 82-2, Dongshun St., Shulin Dist.,<br/>New Taipei City 238, Taiwan</p>
                    </div>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                        <h4>Call Us</h4>
                        <p>+886-2-8686-6888</p>
                    </div>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-fax"></i>
                    <div>
                        <h4>Fax</h4>
                        <p>+886-2-8686-9399</p>
                    </div>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                        <h4>Email Support</h4>
                        <p>miyo@miyo.com.tw</p>
                    </div>
                </div>

                <div className="info-item">
                    <i className="fa-solid fa-clock"></i>
                    <div>
                        <h4>Business Hours</h4>
                        <p>Monday - Friday: 08:30 - 17:30 (GMT+8)</p>
                    </div>
                </div>

                <div className="map-placeholder">
                    <i className="fa-solid fa-map-location-dot" style={{ marginRight: '10px' }}></i>
                    INTERACTIVE MAP PLACEHOLDER
                </div>
            </div>
        </div>
    </main>
  );
}
