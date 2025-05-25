<script lang="ts">
	import type { ImgAttributes, Tools } from '$lib/services/datatypes';

	let { length = 40, tool = 'Unity' } = $props();

	const iconDict: { [name: string]: ImgAttributes } = {
		['Unity']: {
			src: 'https://cdn.sanity.io/images/fuvbjjlp/production/2495ab2daae11fd3ed5d6b84477d513869f9a1b4-89x100.png',
			alt: 'Unity'
		},
		['Git']: {
			src: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg',
			alt: 'Git'
		},
		['C#']: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg',
			alt: 'C#'
		},
		['C++']: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png',
			alt: 'C++'
		},
		['Ink']: {
			src: 'https://www.inklestudios.com/ink/img/inky-icon.png',
			alt: 'Ink'
		},
		['Yarnspinner']: {
			src: 'https://camo.githubusercontent.com/d928ff77c57ff582c4ed8da2b3d13a6ff2b7b21ac780ea01e83ea31e2199551f/68747470733a2f2f646f776e6c6f6164732e7961726e7370696e6e65722e6465762f6765742f5961726e5370696e6e65724c6f676f2e706e67',
			alt: 'Yarnspinner'
		},
		['Google Cloud TTS']: {
			src: './imgs/text-to-speech.svg',
			alt: 'Google Cloud TTS'
		},
		['Firestore']: {
			src: './imgs/firestore.svg',
			alt: 'Firestore'
		},
		['Bitbucket']: {
			src: 'https://dam-cdn.atl.orangelogic.com/AssetLink/np0j8d765ebc4a778s3tdr6bc7avc301/fl_keep_metadata/logo-light_Bitbucket_mark-tile_inverse_RGB.svg',
			alt: 'Bitbucket'
		},
		['TypeScript']: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png',
			alt: 'TypeScript'
		},
		['Svelte']: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/747px-Svelte_Logo.svg.png',
			alt: 'Svelte'
		},
		['TailwindCSS']: {
			src: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg',
			alt: 'TailwindCSS'
		},
		['InDesign']: {
			src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/768px-Adobe_InDesign_CC_icon.svg.png',
			alt: 'InDesign'
		}
	};

	let src = iconDict[tool].src;
	let alt = iconDict[tool].alt;
</script>

<img
	{src}
	{alt}
	style:width={`${length}px`}
	style:height={`${length}px`}
	class="object-contain object-center"
/>
