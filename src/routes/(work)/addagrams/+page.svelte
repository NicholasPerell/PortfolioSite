<script lang="ts">
    let tileInner: HTMLElement|undefined = $state();
    let padding = $derived((tileInner?.scrollHeight ?? 0) * .125);
    let letter: HTMLElement|undefined = $state();
    let size = $derived(letter?.scrollHeight);
</script>

<div class="bg-adda-backdrop w-full">
     <div class="bg-adda-edge aspect-square h-80 rounded-2xl">
        <div bind:this={tileInner} style:padding={`${padding}px`} class="bg-adda-tile w-full h-[88.88%] rounded-2xl">
            <div bind:this={letter} style:font-size={`${size}px`} style:line-height={`${size}px`} class="text-adda-letter font-adda bg-red-300/50 flex justify-center items-center w-full h-full">A</div>
        </div>
     </div>
</div>