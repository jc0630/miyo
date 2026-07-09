const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace("import BlogPost1 from './pages/BlogPost1';", "import BlogPost1 from './pages/BlogPost1';\nimport Search from './pages/Search';");
code = code.replace('<Route path="*" element={<Home />} />', '<Route path="/search" element={<Search />} />\n            <Route path="*" element={<Home />} />');
fs.writeFileSync('src/App.tsx', code);
