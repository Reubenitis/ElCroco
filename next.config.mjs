/** @type {import('next').NextConfig} */

// Served from the apex custom domain ElCroco.com, so the site lives at the
// root path — no basePath. (If you ever drop the custom domain and serve from
// the bare GitHub Pages project URL reubenitis.github.io/ElCroco instead,
// set NEXT_PUBLIC_BASE_PATH=/ElCroco for the build.)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  images: { unoptimized: true }, // no server = no on-the-fly image optimization
  basePath,
  trailingSlash: true, // GitHub Pages serves /path/ as /path/index.html
  reactStrictMode: true,
};

export default nextConfig;
