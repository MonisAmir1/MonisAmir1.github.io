// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build only (set GITHUB_PAGES=true). The Lovable build is unchanged.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const pagesBase = "/Muhammad_Monis_Portfolio/";

const staticPages = [
  "/",
  "/projects/cost-to-income-ratio",
  "/projects/strategic-business-transformation",
  "/projects/product-adoption-customer-retention",
  "/projects/compliance-process-optimisation-operational-risk-monitoring",
  "/projects/transportation-network-volume-forecasting-optimisation",
  "/projects/satellite-network-performance-service-reliability",
];

export default defineConfig({
  ...(isGithubPages ? { vite: { base: pagesBase }, nitro: false } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isGithubPages
      ? {
          pages: staticPages.map((path) => ({ path })),
          prerender: { enabled: true, autoStaticPathsDiscovery: false },
        }
      : {}),
  },
});
