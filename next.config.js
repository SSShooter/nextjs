/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `next build` emits a fully static site to ./out,
  // which is what Cloudflare serves (no server runtime required).
  output: 'export',
  images: {
    // The default Image Optimization loader needs a server, which an
    // exported site does not have.
    unoptimized: true,
  },
}

module.exports = nextConfig
