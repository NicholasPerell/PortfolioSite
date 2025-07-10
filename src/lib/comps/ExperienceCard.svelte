<script>
	import ToolIconImage from './ToolIconImage.svelte';

	let { props } = $props();
</script>

<a href={props.uri}>
	<div class="group flex flex-col sm:flex-row">
		<div class="relative aspect-[4/3] overflow-hidden w-full sm:w-2/3 sm:h-full">
				<img
					class="absolute h-full w-full object-cover object-center"
					src={props.thumbnail.src}
					alt={props.thumbnail.alt}
				/>
				<img
					class="absolute h-full w-full object-cover object-center opacity-0 duration-500 group-hover:opacity-100 group-hover:delay-500"
					src={props.hoverPreview.src}
					alt={props.hoverPreview.alt}
				/>
		</div>
		<div
			class="flex w-full"
		>
			<div class="flex h-full w-full flex-col items-center"
				class:py-4={!props.logline}
			>
				<div class="flex flex-col w-full items-start justify-start sm:pl-4 lg:pl-8"
					class:pt-2={props.logline}
					class:lg:pt-4={props.logline}
					class:pb-3={props.logline}
				>
					<p class="text-3xl font-bold">{props.title}</p>
					<p class="text-xl italic">{props.role}</p>
					<p class="text-lg">{props.hoverText}</p>
				</div>
				{#if props.logline}
					<div class="flex sm:hidden lg:flex w-full h-full items-center justify-center sm:px-8">
						<p>{props.logline}</p>
					</div>
				{/if}
				<div class="my-6 sm:my-0 flex w-full h-full items-center justify-center gap-3">
					{#each props.tools as tool}
						<ToolIconImage length={40} {tool} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</a>
{#if props.logline}
	<div class="hidden lg:hidden sm:flex w-full h-full items-center justify-center text-justify mb-4">
		{props.logline}
	</div>
{/if}