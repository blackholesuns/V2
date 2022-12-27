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
			'$component': resolve(__dirname, './src/Components/'),
			'$lib': resolve(__dirname, './src/Library/'),
			'$stores': resolve(__dirname, './src/Stores/'),
			'$assets': resolve(__dirname, './src/Assets/'),
		}
	}
};
