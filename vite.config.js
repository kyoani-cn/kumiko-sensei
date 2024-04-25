import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	base : '/',
	outDir: 'dist',
	// resolve: {
	// 	alias: {
	// 		'@': './src'
	// 	}
	// },
	plugins: [svelte()],
	server: {
		open: true,
		host: '192.168.31.2',
		port: 5176,
	},
})
