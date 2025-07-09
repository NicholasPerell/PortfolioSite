<script lang="ts">
	import '../app.css';
	let { children } = $props();

	let slideIn = $state(false);
</script>

<div class="fixed z-10 sm:z-auto sm:relative w-full h-10 sm:h-full p-1 sm:p-4 flex flex-row flex-nowrap bg-artemis-card dark:bg-[#314F2E] items-center justify-between sm:justify-center sm:gap-6 md:gap-12 overflow-hidden">
	<div class="block sm:hidden invisible">
		<img class="h-8" src="/imgs/goddess-icon.png" alt="Artemis Icon"/>
	</div>
	<a class="hidden sm:block text-lg md:text-xl font-semibold text-white align-middle" href="/work">Experience</a>
	<a class="hidden sm:block text-lg md:text-xl font-semibold text-white align-middle" href="/resume">Resume</a>
	<a class="flex flex-row flex-nowrap items-center gap-1 lg:gap-5" href="/">
		<img class="hidden h-8 md:h-12 sm:block lg:h-16" src="/imgs/goddess-icon.png" alt="Artemis Icon"/>
		<p class="text-xl md:text-2xl lg:text-5xl font-bold text-white align-middle">Nicholas Perell</p>
	</a>
	<a class="hidden sm:block text-lg md:text-xl font-semibold text-white align-middle" href="/posts">Blog</a>
	<a class="hidden sm:block text-lg md:text-xl font-semibold text-white align-middle" href="/contact">Contact</a>
	<button class="sm:hidden block self-end"
		onclick={() => slideIn = !slideIn}>
		<img class="h-8" src="/imgs/goddess-icon.png" alt="Artemis Icon"/>
	</button>
</div>

<div 
	class="fixed bg-artemis-card dark:bg-[#314F2E] sm:hidden top-10 z-30 p-2 min-w-[34%] w-fit h-full flex flex-col flex-nowrap transition-all duration-500"
	class:right-0={slideIn}
	class:-right-full={!slideIn}
>
	<a class="text-lg text-white" href="/work">Experience</a>
	<a class="text-lg text-white" href="/resume">Resume</a>
	<a class="text-lg text-white" href="/posts">Blog</a>
	<a class="text-lg text-white" href="/contact">Contact</a>
</div>

<div class="bg-artemis-card dark:bg-[#314F2E] sm:hidden h-10"></div>

{@render children()}
