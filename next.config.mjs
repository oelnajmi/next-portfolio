/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oelnajmi.github.io',
        pathname: '/next-portfolio/**',
      },
    ],
  },
  basePath: "/next-portfolio"
};

export default nextConfig;
