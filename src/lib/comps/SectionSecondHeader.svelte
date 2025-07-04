<script lang="ts">
	let { header }: { header: string } = $props();
</script>

<p class="mb-3 text-xl font-bold" id={header}>
	{header}
</p>
