<script lang="ts">
	import ExperienceItem from "$lib/comps/ExperienceItem.svelte";
	import FullBodyBg from "$lib/comps/FullBodyBg.svelte";
    import { works } from "$lib/services/work";

	const tools = works.flatMap(w => w.tools).filter((tool, i, arr) => arr.indexOf(tool) === i).sort();
	let include : string[] = $state([]);
	let exclude : string[] = $state([]);
	let free : string[] = $derived(tools.filter(t => !include.includes(t) && !exclude.includes(t)));
	let worksShown = $derived(works.filter(w => include.every(t => w.tools.includes(t)) && !exclude.some(t => w.tools.includes(t))));

	let toInclude : string = $state('');
	let toExclude : string = $state('');

	$effect(() => {
		if (toInclude !== '') {
			include.push(toInclude);
			toInclude = '';
		}
	});

	$effect(() => {
		if (toExclude !== '') {
			exclude.push(toExclude);
			toExclude = '';
		}
	});
</script>

<FullBodyBg>
	<div class="flex justify-center p-6">
		<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
			<div class="font-bold text-4xl">Experience</div>
			<div class="flex gap-1">
				<div class="flex w-full flex-row flex-wrap gap-2">
					{#each include as included }
					<div class="rounded shadow-sm shadow-black dark:shadow-white px-2 py-0.5 flex items-center gap-1">
						<div class="text-green-500">{included}</div>
						<button class="p-0.5" onclick={() => include = include.filter(t => t !== included)}>x</button>
					</div>
					{/each}
					{#each exclude as excluded }
					<div class="rounded shadow-sm min-w-16 shadow-black dark:shadow-white px-2 py-0.5 flex items-center gap-1">
						<div class="text-red-500 w-full text-center">{excluded}</div>
						<button class="p-0.5 align-middle" onclick={() => exclude = exclude.filter(t => t !== excluded)}>x</button>
					</div>
					{/each}
				</div>
				<select 
					class="bg-white dark:bg-black border border-black/50  dark:border-white/50 p-1 rounded"
					bind:value={toInclude}
					>
					<option value="">Include...</option>
					{#each free as freed }
						<option value={freed}>{freed}</option>
					{/each}
				</select>
				<select 
					class="bg-white dark:bg-black border border-black/50  dark:border-white/50 p-1 rounded"
					bind:value={toExclude}
					>
					<option value="">Exclude...</option>
					{#each free as freed }
						<option value={freed}>{freed}</option>
					{/each}
				</select>
			</div>

			{#each worksShown as work, i}
				{#if i > 0}
					<div class="bg-black dark:bg-white w-full h-0.5"></div>
				{/if}
				<ExperienceItem props={work}/>
			{:else}
				<div class="text-center text-xl my-10">No items match your filters.</div>
			{/each}
		</div>
	</div>
</FullBodyBg>