/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/kids-education",
  assetPrefix: "/kids-education/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
