// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wanderfruit.com',
	integrations: [
		starlight({
			title: 'WanderFruit',
			logo: {
				src: './src/assets/logo.png',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: [],
			sidebar: [
				{
					label: 'Overview',
					slug: 'overview',
				},
				{
					label: 'Strategy',
					autogenerate: { directory: 'strategy' },
				},
				{
					label: 'Brand',
					autogenerate: { directory: 'brand' },
				},
				{
					label: 'Marketing',
					autogenerate: { directory: 'marketing' },
				},
				{
					label: 'Properties',
					slug: 'properties',
				},
				{
					label: 'Assets',
					autogenerate: { directory: 'assets' },
				},
			],
		}),
	],
});
