import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: process.env.NEXT_ASSET_PREFIX,
};

export default nextConfig;
