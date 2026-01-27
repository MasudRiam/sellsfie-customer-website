/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-add1f5ccf2c942379604177e8cae402f.r2.dev',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
