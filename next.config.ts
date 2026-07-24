import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Sentinel_App",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
