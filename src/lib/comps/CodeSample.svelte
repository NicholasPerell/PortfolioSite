<script lang="ts">
	// import { onMount } from 'svelte';
	// import Prism from 'svelte-prism';
	// import 'prismjs/components/prism-csharp.min.js';

	let { language, source } = $props();

	// let ready = false;

	// onMount(async () => {
	// 	// Dynamically import Prism on the client
	// 	const Prism = await import('prismjs');
	// 	window.Prism = Prism;

	// 	// Load languages if needed
	// 	await import('prismjs/components/prism-javascript');

	// 	ready = true;
	// });
</script>

<!-- <Prism {language} {source}></Prism> -->

<pre>
{language}

<code>{source}</code>
</pre>
