import re

with open('src/pages/PIHeaters.tsx', 'r') as f:
    content = f.read()

# Update banner to have blue tint and default image (heating pad)
content = content.replace('style={{ backgroundImage: "url(\'/KAI05150.jpg\')" }}', 'style={{ backgroundImage: "linear-gradient(rgba(22, 33, 122, 0.8), rgba(22, 33, 122, 0.8)), url(\'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80\')" }}')

# Update image to have height constraint
content = content.replace('<img src="/KAI05150.jpg" alt="Engineered Thin-Film Solutions" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />', '<img src="/KAI05150.jpg" alt="Engineered Thin-Film Solutions" style={{ width: "100%", height: "350px", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />')

with open('src/pages/PIHeaters.tsx', 'w') as f:
    f.write(content)

with open('src/pages/Home.tsx', 'r') as f:
    content = f.read()

# Update about-img with youtube video
video_html = """<div className="about-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <iframe 
                            src="https://www.youtube.com/embed/C9aLEOCsRsM" 
                            title="MIYO Technology Introduction"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        ></iframe>
                    </div>
                </div>"""

content = content.replace('<div className="about-img"></div>', video_html)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(content)
