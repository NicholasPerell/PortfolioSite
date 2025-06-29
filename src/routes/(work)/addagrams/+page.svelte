<script lang="ts">
	import AddagramsTile from "$lib/comps/AddagramsTile.svelte";

    let tileInner: HTMLElement|undefined = $state();
    let padding = $derived((tileInner?.scrollHeight ?? 0) * .125 / 2);
    let letter: HTMLElement|undefined = $state();
    let size = $derived((letter?.scrollHeight ?? 0) * 1.25);
</script>


<div class="bg-adda-backdrop w-full flex items-center justify-center ">
     <div class="flex items-center justify-center max-w-screen-lg py-40">
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="A" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="D" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="D" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="A" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="G" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="R" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="A" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="M" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="S" />
        </div>
     </div>
</div>

<div>
    "Chat with Nicholas Perell for an hour and you'll find he's a bright, dedicated, and empathetic team member willing to jump in head first to get the job done. After working with him ... my only regret is that I couldn't keep him for longer. You'd be wise to scoop him up."
   ~ Noah Rosenfield, CEO of 1Ton Games
</div>