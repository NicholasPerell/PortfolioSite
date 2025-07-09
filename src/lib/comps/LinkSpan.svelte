<script lang="ts">
	import Link from './Link.svelte';

	let {
		href,
		appendCls,
		children = $bindable()
	}: { href: string; appendCls?: string; children: any } = $props();

	const std =
		'dark:text-gray-200 dark:hover:text-gray-300 dark:active:text-gray-400 text-neutral-900 underline hover:text-neutral-800 hover:no-underline active:text-neutral-700';
</script>

<Link {href} cls={appendCls ? `${std} ${appendCls}` : std}>
	{@render children?.()}
</Link>
