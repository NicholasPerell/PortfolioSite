<script lang="ts">
	import FullBodyBg from "$lib/comps/FullBodyBg.svelte";
	import Link from "$lib/comps/Link.svelte";
</script>

<img 
	class="w-full object-cover aspect-[3/1]"
	src="/imgs/nick/green-light-2021.jpg"
	alt="Nick in businesswear with his teammates from the first half of development on Project Nautilus."
	/>

<FullBodyBg>
	<div class="w-full bg-gray-100 dark:bg-neutral-950 p-6 flex flex-col items-center text-black dark:text-white">
		<div class="max-w-screen-lg w-full flex flex-col gap-6 justify-center">
			<div class="text-center text-2xl font-semibold">See you soon!</div>
			<div class="flex gap-5">
				<Link href="mailto:nicholasperell@gmail.com" cls="w-full text-center text-white text-xl font-semibold bg-[#543219] dark:bg-[#382110] py-2 px-3">Email</Link>
				<Link href="https://www.linkedin.com/in/nicholasperell/" cls="w-full text-center text-white text-xl font-semibold bg-[#543219] dark:bg-[#382110] py-2 px-3">LinkedIn</Link>
			</div>
		</div>
	</div>
</FullBodyBg>