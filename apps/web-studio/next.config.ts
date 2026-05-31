import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compile the shared component library straight from its TypeScript source.
  transpilePackages: ["@gaaia/ui"],
};

// Local-only workaround: this repo lives under ~/Desktop, which iCloud Drive
// syncs. iCloud removes Next's build/manifest files mid-compile, so locally we
// point dev/build at `.nosync` dirs that iCloud ignores. On Vercel / CI there
// is no iCloud — use the default `.next` so the platform finds the build output.
if (!process.env.VERCEL && !process.env.CI) {
  nextConfig.distDir =
    process.env.NODE_ENV === "development"
      ? ".next.nosync"
      : ".next-build.nosync";
}

export default nextConfig;
