import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site → export to /out and serve from Cloudflare's CDN.
  output: "export",
  images: {
    // No server at runtime for a static export; serve images as-is.
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
