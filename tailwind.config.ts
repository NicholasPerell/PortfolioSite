import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],

	theme: {
		extend: {
			colors: {
				'artemis': {
					'card': '#477143',
					'primary': '#629463',
					'secondary': '#DEFCB9',
				},
				'copy': {
					DEFAULT: 'var(--np-copy-text-color)'
				},
				'adda': {
					'backdrop': '#1895B2',
					'rack': '#5EB5C9',
					'rackline': '#A3D5E0',
					'tile': '#FFC96E',
					'edge': '#FF9550',
					'letter': '#323232',
				}
			},
			fontFamily: {
				'adda': `'Avenir', 'Avenir Next', 'Comfortaa', sans-serif;`
			}
		}
	},

	plugins: []
} satisfies Config;
