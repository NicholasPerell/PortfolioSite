<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="w-full h-full p-4 flex flex-row flex-nowrap bg-artemis-card items-center justify-center gap-12">
	<a class="text-xl font-semibold text-white align-middle" href="./">Experience</a>
	<a class="text-xl font-semibold text-white align-middle" href="./">Resume</a>
	<a class="flex flex-row flex-nowrap items-center gap-5" href="./">
		<img class="h-16" src="./imgs/goddess-icon.png" alt="Artemis Icon"/>
		<p class="text-5xl font-bold text-white align-middle">Nicholas Perell</p>
	</a>
	<a class="text-xl font-semibold text-white align-middle" href="./">Blog</a>
	<a class="text-xl font-semibold text-white align-middle" href="./">Contact</a>
</div>

{@render children()}
