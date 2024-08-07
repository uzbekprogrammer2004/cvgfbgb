module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-path/:slug*',
        destination: '/new-path/:slug*',
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['media.go-clothes.uz'],
    },
  };
  
  export default nextConfig;
  