/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["w7.pngwing.com", "cdn.sanity.io", "upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
