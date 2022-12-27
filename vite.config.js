import { sveltekit } from '@sveltejs/kit/vite';
import {resolve} from 'path'

/** @type {import('vite').UserConfig} */
export default {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'$component': resolve(__dirname, './src/components/'),
			'$lib': resolve(__dirname, './src/library/'),
			'$stores': resolve(__dirname, './src/stores/'),
			'$assets': resolve(__dirname, './src/assets/'),
		}
	}
};
