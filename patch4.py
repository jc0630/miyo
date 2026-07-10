import re

# 1. Update Navbar.tsx logo size
with open('src/components/Navbar.tsx', 'r') as f:
    navbar_content = f.read()

navbar_content = navbar_content.replace(
    "style={{ height: '40px', display: 'flex', alignItems: 'center', flexShrink: 0 }}",
    "style={{ height: '28px', display: 'flex', alignItems: 'center', flexShrink: 0 }}"
)

with open('src/components/Navbar.tsx', 'w') as f:
    f.write(navbar_content)

# 2. Update Quality.tsx image extensions
with open('src/pages/Quality.tsx', 'r') as f:
    quality_content = f.read()

quality_content = quality_content.replace("url('/品質認證.jpg')", "url('/品質認證.png')")
quality_content = quality_content.replace("url('/品質認證2.jpg')", "url('/品質認證2.png')")

with open('src/pages/Quality.tsx', 'w') as f:
    f.write(quality_content)

# 3. Update index.css
with open('src/index.css', 'r') as f:
    css_content = f.read()

# Fix about-img
css_content = re.sub(
    r"\.about-img \{ flex: 0\.8; height: 350px; background: url\('[^']+'\) center/cover; border-radius: 4px; \}",
    ".about-img { flex: 0.8; border-radius: 4px; }",
    css_content
)

# Fix desc-text
css_content = css_content.replace(
    ".desc-text { flex: 1.2; }",
    ".desc-text { flex: 1; }"
)

with open('src/index.css', 'w') as f:
    f.write(css_content)

# 4. Update PIHeaters.tsx
with open('src/pages/PIHeaters.tsx', 'r') as f:
    pi_content = f.read()

pi_content = pi_content.replace(
    '<img src="/KAI05150.jpg" alt="Engineered Thin-Film Solutions" style={{ width: "100%", height: "350px", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />',
    '<img src="/KAI05150.jpg" alt="Engineered Thin-Film Solutions" style={{ flex: 1, width: "100%", height: "350px", borderRadius: "8px", objectFit: "cover", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }} />'
)

with open('src/pages/PIHeaters.tsx', 'w') as f:
    f.write(pi_content)
