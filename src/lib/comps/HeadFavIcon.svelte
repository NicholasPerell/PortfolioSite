<script lang="ts">
	let { href }: { href: string } = $props();
</script>

<svelte:head>
	<link rel="icon" {href} />
</svelte:head>
