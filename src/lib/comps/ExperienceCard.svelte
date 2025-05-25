<script>
	import ToolIconImage from './ToolIconImage.svelte';

	let { props } = $props();
</script>

<div class="group relative aspect-[4/3] w-full overflow-hidden">
	<a href={props.uri}>
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
		<div
			class="absolute flex h-full w-full p-8 opacity-0 group-hover:opacity-100 group-hover:delay-1000 group-hover:duration-500"
		>
			<div class="flex h-full w-full flex-col items-center bg-white/90 p-3">
				<p class="text-xl font-bold">{props.title}</p>
				<p class="text-lg italic">{props.role}</p>
				<p class="">{props.hoverText}</p>
				<div class="flex w-full grow items-center justify-center gap-3">
					{#each props.tools as tool}
						<ToolIconImage length={40} {tool} />
					{/each}
				</div>
			</div>
		</div>
	</a>
</div>
