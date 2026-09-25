/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/zayan-landing",
  assetPrefix: "/zayan-landing/",
};

export default nextConfig;