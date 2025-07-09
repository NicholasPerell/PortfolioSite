<script lang="ts">
	import ExperienceItem from "$lib/comps/ExperienceItem.svelte";
	import FullBodyBg from "$lib/comps/FullBodyBg.svelte";
    import { works } from "$lib/services/work";

	const tools = works.flatMap(w => w.tools).filter((tool, i, arr) => arr.indexOf(tool) === i).sort();
	let include : string[] = $state([]);
	let exclude : string[] = $state([]);
	let free : string[] = $derived(tools.filter(t => !include.includes(t) && !exclude.includes(t)));
	let worksShown = $derived(works.filter(w => include.every(t => w.tools.includes(t)) && !exclude.some(t => w.tools.includes(t))));
</script>

<FullBodyBg></FullBodyBg><FullBodyBg>
	<div class="flex justify-center p-6">
		<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
			<div class="font-bold text-4xl">Experience</div>
			{#each worksShown as work, i}
				{#if i > 0}
					<div class="bg-black dark:bg-white w-full h-0.5"></div>
				{/if}
				<ExperienceItem props={work}/>
			{/each}
		</div>
	</div>
</FullBodyBg>