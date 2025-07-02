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
				'pn': {
					'green-1': '#00E90D',
					'green-2': '#09A611',
					'green-3': '#006F06',
					'green-4': '#002105',
					'green-5': '#000E02',
					'red': '#950000',
					'yellow-1': '#E29C00',
					'yellow-2': '#A16F00',
					'yellow-3': '#291C00'
				},
				'copy': {
					DEFAULT: 'var(--np-copy-text-color)'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
