<script lang="ts">
	import type { ImgAttributes } from '$lib/services/datatypes';
	import SectionHeader from './SectionHeader.svelte';

	interface ImgListSplitData extends ImgAttributes {
		header: string;
		items: string[];
		imgRight: boolean;
	}

	let data: ImgListSplitData = $props();
</script>

<div class="flex w-full grid-cols-2 flex-col gap-3 leading-7 md:gap-5 lg:grid">
	<img src={data.src} alt={data.alt} class:lg:order-last={data.imgRight} />
	<div class="mb-2 flex w-full flex-col gap-0 lg:mb-0">
		<SectionHeader header={data.header} />
		<ul class="list-disc pl-8">
			{#each data.items as item}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</div>
