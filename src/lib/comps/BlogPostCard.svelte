<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let { props } = $props();

	let offset = tweened(100, {
		duration: 1000,
		easing: cubicOut
	});
</script>

<div class="group w-96 overflow-hidden" style:transform={`translateX(${$offset}vw)`}>
	<a href={`/posts/${props.uri}`}>
		<img
			src={props.thumbnail}
			alt={props.thumbnail}
			class="h-80 w-96 object-cover object-center"
			onload={() => {
				offset.set(0);
			}}
		/>
		<div class="h-42 flex w-96 flex-col gap-0.5 pt-2">
			<p class="font-serif text-xl font-bold group-hover:underline">{props.title}</p>
			<p class="mb-1 text-ellipsis font-serif text-lg">
				{props.blurb}
			</p>
			<p
				class="text-md w-fit rounded-full bg-gray-400 px-2 py-0.5 text-sm text-white dark:bg-gray-100 dark:text-black"
			>
				{props.tags[0]}
			</p>
		</div>
	</a>
</div>
