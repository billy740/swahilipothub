import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disables ESLint errors during deployment
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com", // ✅ Allows YouTube thumbnails
      },
    ],
  },
};

export default nextConfig;
