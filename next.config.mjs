/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site under /<repo>. The repo is "ElCroco",
// so production assets live under /ElCroco. Local dev uses the root path.
// Override with NEXT_PUBLIC_BASE_PATH if the repo is ever renamed or hosted
// at a custom domain (set it to "" for a root/apex domain).
const isProd = process.env.NODE_ENV === "production";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/ElCroco" : "");

const nextConfig = {
  output: "export", // static HTML export for GitHub Pages
  images: { unoptimized: true }, // no server = no on-the-fly image optimization
  basePath,
  trailingSlash: true, // GitHub Pages serves /path/ as /path/index.html
  reactStrictMode: true,
};

export default nextConfig;
