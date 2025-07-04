<script lang="ts">
	import AddagramsTile from "$lib/comps/AddagramsTile.svelte";
	import HeadTitle from "$lib/comps/HeadTitle.svelte";
	import ImgListSplit from "$lib/comps/ImgListSplit.svelte";
	import SectionHeader from "$lib/comps/SectionHeader.svelte";
	import ToolIconImage from "$lib/comps/ToolIconImage.svelte";
	import { ALink, Formattable } from "$lib/services/datatypes";
</script>

<HeadTitle name="Addagrams" />

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

<div class="flex w-full justify-center bg-gray-100 p-6 dark:bg-stone-900 dark:text-white text-black">
	<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
		<div class="flex flex-col md:grid w-full grid-cols-2 gap-3 md:gap-5 leading-7">
			<p>
				<span class="italic">Addagrams</span> is a tile-based word game on mobile focused on giving players the creative freedom to rearrange the letters into the words they can come up with in their own vocabulary.
                I was contracted by 1Ton Games to get the game to a releasable state. I refactored existing architecture, and implemented new features in collaboration with Design.
                <span class="italic">Addagrams</span> launched May 2023 on both Android and iOS, garnering 5K downloads in the 1st month.
			</p>
			<div class="flex w-full flex-col gap-0">
				<p class="italic">Freelance Game Programmer</p>
				<p>Team Size: 2</p>
				<p>Scale: Mobile Game</p>
				<p>Development Period: March 2023–August 2023</p>
				<p>Tools Used: </p>
                <div class="w-full flex flex-row gap-0.5 pt-3 md:pt-5">
                    {#each ['C#', 'Unity', 'Git', 'Firebase', 'Atlassian'] as tool}
                    <div class="w-full flex flex-col items-center justify-start gap-1">  
                        <ToolIconImage {tool} />  
                    <p class="text-center leading-normal">{tool}</p>
                    </div>
                    {/each}
                </div>
			</div>
		</div>
    </div>
</div>

<div>
    "Chat with Nicholas Perell for an hour and you'll find he's a bright, dedicated, and empathetic team member willing to jump in head first to get the job done. After working with him ... my only regret is that I couldn't keep him for longer. You'd be wise to scoop him up."
   ~ Noah Rosenfield, CEO of 1Ton Games
</div>