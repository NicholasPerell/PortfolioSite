<script lang="ts">
	let { text }: { text: string } = $props();

	let letters = $derived(text.length);

	let a = $derived(letters >= 1 ? text.substring(0, 1) : undefined);
	let b = $derived(letters >= 2 ? text.substring(1, 2) : undefined);
	let c = $derived(letters >= 3 ? text.substring(2, 3) : undefined);
	let d = $derived(letters >= 4 ? text.substring(3, 4) : undefined);

	let tileInner: HTMLElement | undefined = $state();
	let padding = $derived((tileInner?.scrollHeight ?? 0) * 0.0078125);
	let letter: HTMLElement | undefined = $state();
	let size = $derived(
		(letter?.scrollHeight ?? 0) * (letters > 4 ? 2 / letters : letters > 1 ? 1 : 1)
	);
	let translateY = $derived(size * (letters > 1 ? 0.0625 : 0.0625));
</script>

<div class="aspect-square h-full rounded-2xl bg-adda-edge">
	<div
		bind:this={tileInner}
		style:padding={`${padding}px`}
		class:grid={letters >= 2}
		class:grid-cols-2={letters >= 2 && letters <= 4}
		class:grid-rows-2={letters >= 2 && letters <= 4}
		class="h-[88.88%] w-full rounded-2xl bg-adda-tile font-semibold"
	>
		<div
			bind:this={letter}
			style:font-size={`${size}px`}
			style:transform={`translateY(${translateY}px)`}
			class="flex h-full w-full items-center justify-center font-adda text-adda-letter"
		>
			{letters > 4 ? text : a}
		</div>
		<div
			class:hidden={letters < 2 || letters > 4}
			style:font-size={`${size}px`}
			style:transform={`translateY(${translateY}px)`}
			class="flex h-full w-full items-center justify-center font-adda text-adda-letter"
		>
			{letters == 2 ? d : b}
		</div>
		<div
			class:hidden={letters < 2 || letters > 4}
			style:font-size={`${size}px`}
			style:transform={`translateY(${translateY}px)`}
			class="flex h-full w-full items-center justify-center font-adda text-adda-letter"
		>
			{c}
		</div>
		<div
			class:hidden={letters < 2 || letters > 4}
			style:font-size={`${size}px`}
			style:transform={`translateY(${translateY}px)`}
			class="flex h-full w-full items-center justify-center font-adda text-adda-letter"
		>
			{letters == 2 ? b : d}
		</div>
	</div>
</div>
