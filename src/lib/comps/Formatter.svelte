<script lang="ts">
	import { ALink, Span, type Formattable } from '$lib/services/datatypes';

	let { data }: { data: Formattable } = $props();

	const msgParts = data.msg.split(/%[s]/);
</script>

{#each msgParts as part, i}{part}{#if i < data.inserts.length}{#if data.inserts[i] instanceof Span}<span
				class={data.inserts[i].cls}>{data.inserts[i].msg}</span
			>{:else if data.inserts[i] instanceof ALink}<a
				class={data.inserts[i].cls}
				href={data.inserts[i].href}
				target={data.inserts[i].target}>{data.inserts[i].msg}</a
			>{/if}{/if}{/each}
