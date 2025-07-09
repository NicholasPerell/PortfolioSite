<script>
	import Link from './Link.svelte';
    import ToolIconImage from './ToolIconImage.svelte';

	let { props } = $props();
</script>

<div class="mx-1 flex w-full">
    <Link href={props.uri} cls="group relative aspect-[4/3] h-full shrink-0 overflow-hidden">
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
    </Link>
	<div class="flex w-full flex-col items-start justify-start py-1 pl-4">
		<Link href={props.uri} cls="whitespace-nowrap text-2xl">{props.title}</Link>
		<p class="whitespace-nowrap text-xl italic">{props.role}</p>
		<p class="whitespace-nowrap text-lg" class:opacity-0={!props.hoverText}>
			{props.hoverText ? props.hoverText : '_'}
		</p>
	</div>
	<div class="hidden md:flex w-full items-center justify-center gap-3">
		{#each props.tools as tool}
			<ToolIconImage length={40} {tool} />
		{/each}
	</div>
</div>
