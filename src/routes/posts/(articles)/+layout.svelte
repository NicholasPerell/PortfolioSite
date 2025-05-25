<script lang="ts">
	let { children } = $props();
</script>

<div class="article">
	{@render children()}
</div>

<style>
	:global(.article > *) {
		@apply mb-3;
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
	}

	:global(.article blockquote) {
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
	}

	:global(.article a) {
	}

	:global(.article ul) {
	}

	:global(.article ol) {
	}

	:global(.article ul>li) {
		@apply ml-5 list-disc;
	}
	:global(.article ol>li) {
		@apply ml-5 list-decimal;
	}
</style>
