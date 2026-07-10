import re

# 1. Update Home.tsx products images
with open('src/pages/Home.tsx', 'r') as f:
    home_content = f.read()

home_content = home_content.replace(
    "url('https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80')",
    "url('/KAI05150.jpg')"
)
home_content = home_content.replace(
    "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')",
    "url('/1.聚酯薄膜加熱器-1.jpg')"
)
home_content = home_content.replace(
    "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')",
    "url('/KAI05216-2.jpg')"
)

with open('src/pages/Home.tsx', 'w') as f:
    f.write(home_content)

# 2. Update AutoEV.tsx
with open('src/pages/AutoEV.tsx', 'r') as f:
    autoev_content = f.read()

video_html = """<div className="flex-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none' }}>
                <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                    <iframe 
                        src="https://www.youtube.com/embed/JJOo0UyktII" 
                        title="MIYO Mirror De-icing"
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>
            </div>"""

autoev_content = autoev_content.replace(
    '<div className="flex-img" style={{ backgroundImage: "url(\'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80\')" }}></div>',
    video_html
)

autoev_content = autoev_content.replace(
    '<div className="flex-img" style={{ backgroundImage: "url(\'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80\')" }}></div>',
    '<div className="flex-img" style={{ backgroundImage: "url(\'/auto-evpic.png\')" }}></div>'
)

with open('src/pages/AutoEV.tsx', 'w') as f:
    f.write(autoev_content)

# 3. Update Faq.tsx
with open('src/pages/Faq.tsx', 'r') as f:
    faq_content = f.read()

faq_content = faq_content.replace('<h1>Resources</h1>', '<h1>Technical Resources</h1>')

with open('src/pages/Faq.tsx', 'w') as f:
    f.write(faq_content)

# 4. Update Quality.tsx
with open('src/pages/Quality.tsx', 'r') as f:
    quality_content = f.read()

quality_content = quality_content.replace(
    "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')",
    "url('/品質認證.jpg')"
)
quality_content = quality_content.replace(
    "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')",
    "url('/品質認證2.jpg')"
)

with open('src/pages/Quality.tsx', 'w') as f:
    f.write(quality_content)

# 5. Update Navbar.tsx logo size
with open('src/components/Navbar.tsx', 'r') as f:
    navbar_content = f.read()

navbar_content = navbar_content.replace(
    "style={{ height: '50px', display: 'flex', alignItems: 'center' }}",
    "style={{ height: '40px', display: 'flex', alignItems: 'center', flexShrink: 0 }}"
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(navbar_content)
