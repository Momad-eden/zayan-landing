/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: isGitHubPages ? "/zayan-landing" : "",
  assetPrefix: isGitHubPages ? "/zayan-landing/" : "",
};

export default nextConfig;