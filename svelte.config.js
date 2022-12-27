import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// vite: {
		// 	resolve: {
		// 		alias: {
        //             // these are the aliases and paths to them
		// 			'@components': path.resolve('./src/lib/components'),
		// 			'@lib': path.resolve('./src/library')
		// 		}
		// 	}
		// }
	}
};
