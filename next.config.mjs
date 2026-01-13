/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    remotePatterns:[
      {
        hostname: "encrypted-tbn0.gstatic.com",
        protocol: "https",
      },
      {
        hostname: "media.istockphoto.com",
        protocol: "https",
      },
    ]
  }
};

export default nextConfig;
