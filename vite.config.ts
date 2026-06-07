import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import nitro from "nitro/vite";

// Explicit Vite config for self-hosting on Cloudflare Workers via wrangler.
// Wrangler statically inspects this file and requires a literal `plugins: []` array.
export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Use our SSR error-wrapping entry at src/server.ts
      server: { entry: "server" },
    }),
    viteReact(),
    nitro({
      config: {
        preset: "cloudflare_module",
        compatibilityDate: "2025-01-01",
        compatibilityFlags: ["nodejs_compat"],
      },
    }),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
