<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="fixed z-10 sm:z-auto sm:relative w-full h-10 sm:h-full p-1 sm:p-4 flex flex-row flex-nowrap bg-artemis-card dark:bg-[#314F2E] items-center justify-between sm:justify-center sm:gap-12 overflow-hidden">
	<div class="block sm:hidden invisible">
		<img class="h-8" src="/imgs/goddess-icon.png" alt="Artemis Icon"/>
	</div>
	<a class="hidden sm:block text-xl font-semibold text-white align-middle" href="/work">Experience</a>
	<a class="hidden sm:block text-xl font-semibold text-white align-middle" href="/resume">Resume</a>
	<a class="flex flex-row flex-nowrap items-center gap-5" href="/">
		<img class="hidden sm:block h-16" src="/imgs/goddess-icon.png" alt="Artemis Icon"/>
		<p class="text-2xl sm:text-5xl font-bold text-white align-middle">Nicholas Perell</p>
	</a>
	<a class="hidden sm:block text-xl font-semibold text-white align-middle" href="/posts">Blog</a>
	<a class="hidden sm:block text-xl font-semibold text-white align-middle" href="/contact">Contact</a>
	<button class="sm:hidden block self-end">
		<img class="h-8" src="/imgs/goddess-icon.png" alt="Artemis Icon"/>
	</button>
</div>

<div class="bg-artemis-card dark:bg-[#314F2E] sm:hidden h-10"></div>

{@render children()}
