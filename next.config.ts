import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],

    // 🔥 FIX PENTING UNTUK ERROR "resolved to private ip"
    unoptimized: true,
  },
};

export default nextConfig;