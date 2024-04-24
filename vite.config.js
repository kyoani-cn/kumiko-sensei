import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    base : '/kumiko-sensei/',
	outDir: 'dist',
    resolve: {
        alias: {
            '@': './src'
        }
    },
	plugins: [svelte()],
	server: {
		open: true,
		port: 5176,
	},
})
