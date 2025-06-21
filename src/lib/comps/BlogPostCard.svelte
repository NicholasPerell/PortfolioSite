<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	interface Post {
		title: string;
		blurb: string;
		written: Date;
		thumbnail: string;
		tags: string[];
		tools: string[];
		slug: string;
	}

	let props: Post = $props();

	let offset = tweened(1, {
		duration: 1000,
		easing: cubicOut
	});
</script>

<div class="group w-full overflow-hidden" style:transform={`translateX(${$offset * 25}%)`} style:opacity={`${(1-$offset)*100}%`}>
	<a href={`/posts/${props.slug}`}>
		<img
			src={props.thumbnail}
			alt={props.thumbnail}
			class="w-full aspect-[7/5] object-cover object-center"
			onload={() => {
				offset.set(0);
			}}
		/>
		<div class="flex w-full flex-col gap-0.5 pt-2">
			<p class="font-serif text-lg font-bold lining-nums group-hover:underline">{props.title}</p>
			<p class="mb-1 text-ellipsis font-serif text-base">
				{props.blurb}
			</p>
			{#if props.tags && props.tags.length}
				<p
					class="w-fit rounded-full bg-gray-400 px-2 py-0.5 text-xs text-white dark:bg-gray-100 dark:text-black"
				>
					{props.tags[0]}
				</p>
			{/if}
		</div>
	</a>
</div>
