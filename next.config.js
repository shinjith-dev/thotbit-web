/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placecats.com",
        protocol: "https",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
