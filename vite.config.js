import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
    base: "/dl-model/",
    plugins: [preact()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            data: path.resolve(__dirname, "./src/data"),
            hook: path.resolve(__dirname, "./src/SceneController/hook"),
            components: path.resolve(
                __dirname,
                "./src/SceneController/components"
            ),
            react: "preact/compat",
            "react-dom": "preact/compat",
        },
    },
    server: {
        port: 3000,
        fs: { allow: ["."] },
    },
    build: {
        chunkSizeWarningLimit: 800,
        rollupOptions: {
            output: {
                manualChunks: { three: ["three"] },
                chunkFileNames: "assets/[hash]-[name].js",
                assetFileNames: "assets/[hash]-[name][extname]",
            },
        },
    },
    esbuild: {
        define: {
            this: "window",
        },
    },
});
