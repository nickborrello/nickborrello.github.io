import { defineConfig } from "vite";

export default defineConfig({
    base: "/nickborrello.github.io",
    build: {
        minify: "terser",
    },
});