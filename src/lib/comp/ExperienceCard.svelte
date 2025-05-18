<script>
	let { props } = $props();
</script>

<div class="group relative aspect-video w-full overflow-hidden">
	<img
		class="absolute h-full w-full object-cover object-center"
		src={props.thumbnail}
		alt={props.thumbnail}
	/>
	<img
		class="absolute h-full w-full object-cover object-center opacity-0 duration-500 group-hover:opacity-100"
		src={props.hoverThumbnail}
		alt={props.hoverThumbnail}
	/>
	<div
		class="absolute flex h-full w-full translate-x-1/2 justify-end group-hover:translate-x-0 group-hover:delay-500 group-hover:duration-500"
	>
		<div class="w-1/2 bg-white/75"></div>
	</div>
</div>
