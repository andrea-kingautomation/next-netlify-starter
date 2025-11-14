/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: [
      "devserver-preview--postizkingofautomation.netlify.app",
      ".netlify.app",
    ],
  },
};

module.exports = nextConfig;
