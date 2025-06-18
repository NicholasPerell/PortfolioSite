import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

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
				}
			}
		}
	},

	plugins: []
} satisfies Config;
