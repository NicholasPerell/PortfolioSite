<script lang="ts">
	let { children = $bindable() } = $props();
	let innerHeight = $state(0);
	let pageBody: HTMLDivElement | undefined = $state();
	let pageBodyMinHeight = $derived(innerHeight - (pageBody?.offsetTop ?? 0));
</script>

<svelte:window bind:innerHeight />

<div
	bind:this={pageBody}
	class="flex h-full w-full shrink-0 grow flex-col bg-white dark:bg-black text-black dark:text-white"
	style:min-height={`${pageBodyMinHeight}px`}
>
	{@render children?.()}
</div>
