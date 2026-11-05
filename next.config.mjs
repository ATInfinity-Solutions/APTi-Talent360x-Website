/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/` for upload to Hostinger public_html.
  output: "export",
  // Emits /path/index.html so Apache on Hostinger serves clean URLs without rewrite rules.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
