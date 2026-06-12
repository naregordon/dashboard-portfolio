import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/about", destination: "/" },
      { source: "/experiences", destination: "/" },
      { source: "/skills", destination: "/" },
    ];
  },
};

export default nextConfig;
