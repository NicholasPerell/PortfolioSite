<script lang="ts">
	let {
		href = $bindable(),
		target,
		cls = '',
		children = $bindable()
	}: { href: string; target?: string; cls: string; children: any } = $props();

	const targetDetermined = target ?? determineTarget(href);

	function determineTarget(href: string) {
		if (href.startsWith('http')) {
			return '_blank';
		} else {
			return '_self';
		}
	}

	const stdClass =
		'dark:text-gray-200 dark:hover:text-gray-300 dark:active:text-gray-400 text-neutral-900 underline hover:text-neutral-800 hover:no-underline active:text-neutral-700';
</script>

<a {href} {target} class={cls}>
	{@render children?.()}
</a>
