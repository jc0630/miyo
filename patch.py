import re

# Update About.tsx
with open('src/pages/About.tsx', 'r') as f:
    content = f.read()

youtube_embed = """<div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', borderRadius: '8px' }}>
                    <iframe 
                        src="https://www.youtube.com/embed/C9aLEOCsRsM" 
                        title="MIYO Technology Introduction"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>"""

# Replace the div inside the section
pattern = r'(<h2[^>]*>Our Clients</h2>)(.*?)(</section>)'
# wait, the title should change? The user said "OUR CLIENTS區塊確定改成嵌入公司介紹的影片"
# Let's change the title as well.
new_section = f'''<h2 style={{{{ fontSize: '32px', textTransform: 'uppercase', marginBottom: '40px', color: 'var(--text-dark)' }}}}>Company Introduction</h2>
                {youtube_embed}
            </div>
        </section>'''

# Let's just use re.sub for the whole section content
content = re.sub(r'<h2[^>]*>Our Clients</h2>.*?</div>\s*</div>\s*</section>', new_section, content, flags=re.DOTALL)

with open('src/pages/About.tsx', 'w') as f:
    f.write(content)

# Update PIHeaters.tsx
with open('src/pages/PIHeaters.tsx', 'r') as f:
    content = f.read()

content = content.replace('className="hero-banner pi-heaters border-left"', 'className="hero-banner pi-heaters border-left" style={{ backgroundImage: "url(\'/KAI05150.jpg\')" }}')
content = content.replace('<div className="product-main-img"></div>', '<img src="/KAI05150.jpg" alt="Engineered Thin-Film Solutions" style={{ width: "100%", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />')

with open('src/pages/PIHeaters.tsx', 'w') as f:
    f.write(content)
