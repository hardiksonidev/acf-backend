// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://acf.hardiksoni.dev/</loc>
  </url>
</urlset>`;

const dir = path.resolve("out");
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path.join(dir, "sitemap.xml"), sitemap);

console.log("✅ Sitemap generated.");
