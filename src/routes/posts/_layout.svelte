<script lang="ts">
  import ShareArticleRow from './ShareArticleRow.svelte';

	import ToolIconImage from "$lib/comps/ToolIconImage.svelte";

	export let title;
	export let written: string;
	export let tags: string[];
	export let tools: string[];

	let writtenArr = written.split('-').map((str) => parseInt(str));
	let writtenDate = new Date(writtenArr[0], writtenArr[1] - 1, writtenArr[2]);
	let writtenCopy = writtenDate.toLocaleDateString();

	const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
</script>
<div class="w-full p-6 flex justify-center text-black">
    <div class="max-w-screen-lg w-full grid grid-cols-[3fr,1fr] gap-y-2">
		<h1 class="text-3xl font-bold lining-nums">{title}</h1>
		<ShareArticleRow {title} />
		<p class="text-neutral-700">Written {writtenCopy}</p>
		<div></div>
		<div class="article">
			<slot />
		</div>
		<div class="pl-5 pt-3 flex flex-col gap-3">
			{#if !!tags && tags.length > 0}
				<p class="font-bold text-xl">Tags</p>
				<div class="flex items-start justify-enter gap-3 flex-wrap">
					{#each tags as tag}
						<p
						class="w-fit rounded-full bg-gray-400 px-2 py-0.5 text-xs text-white dark:bg-gray-100 dark:text-black"
						>
							{tag}
						</p>
					{/each}
				</div>
			{/if}
			{#if !!tools && tools.length > 0}
				<p class="font-bold text-xl">Tools</p>
				<div class="flex items-center justify-start gap-2 flex-wrap">
					{#each tools as tool}
						<ToolIconImage length={40} tool={tool} />
					{/each}
				</div>
			{/if}
		</div>
		<ShareArticleRow {title} />
	</div>
</div>

<style>
	.article {
		@apply flex flex-col gap-3 py-3 w-full max-w-screen-md border-b-2 border-b-neutral-500;
	}

	:global(.article h1) {
		@apply text-3xl font-bold lining-nums;
	}

	:global(.article h2) {
		@apply text-2xl font-bold;
	}

	:global(.article h3) {
		@apply text-xl font-bold;
	}

	:global(.article h4) {
		@apply text-lg font-bold;
	}

	:global(.article h5) {
		@apply text-lg font-semibold;
	}

	:global(.article h6) {
		@apply text-lg font-semibold text-neutral-800;
	}

	:global(.article p) {
		@apply text-justify;
	}

	:global(.article > p > img) {
		@apply mx-auto max-h-[32rem];
	}

	:global(.article blockquote) {
		@apply border-l-gray-200 border-l-4 p-2 bg-gray-100
	}

	:global(.article blockquote > p) {
		@apply text-left;
	}

	:global(.article pre) {
	}

	:global(.article em) {
	}

	:global(.article strong) {
	}

	:global(.article strong > em) {
	}

	:global(.article pre > code) {
		@apply font-mono;
	}

	:global(.article a) {
		@apply underline opacity-50 hover:opacity-100 active:opacity-80;
	}

	:global(.article ul) {
	}

	:global(.article ol) {
	}

	:global(.article ul > li) {
		@apply ml-5 list-disc;
	}
	:global(.article ol > li) {
		@apply ml-5 list-decimal;
	}
</style>
