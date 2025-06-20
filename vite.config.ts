import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    Icons({ autoInstall: true, compiler: "jsx", jsx: "react" }),
  ],
});
