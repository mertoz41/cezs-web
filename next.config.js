// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2auj675mabcgp.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      // Add more domains as needed
    ],
  },
};
