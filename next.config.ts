import type { NextConfig } from "next";
import withNextBundleAnalyzer from "next-bundle-analyzer";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextBundleAnalyzer({
  enabled: !!process.env.VERCEL,
  format: "json",
})(nextConfig);
