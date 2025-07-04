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
			</p>
			<div class="flex w-full flex-col gap-0">
				<p class="italic">Game Programmer</p>
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

        <div class="flex flex-wrap md:flex-nowrap gap-5 md:gap-10 p-5 items-center justify-center w-full">
            <a href="https://play.google.com/store/apps/details?id=com.nosenfield.addagrams" class="m-px flex items-center justify-center md:w-full" target="_blank">
                <img src="./imgs/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get It On Google Play">
            </a>
            <a href="https://apps.apple.com/us/app/addagrams-word-puzzle-games/id1426783573" class="h-[82px] md:h-full flex items-center justify-center md:w-full" target="_blank">
                <img class="h-full" src="./imgs/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Get It On Google Play">
            </a>
        </div>

		<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>

        <SectionHeader header="Development of Addagrams"/>

        <div class="flex gap-5">
            <div class="flex flex-col gap-5">
                <div class="bg-adda-backdrop p-5 rounded font-adda text-xl font-semibold">
                    <span class="text-2xl font-black">&ldquo;</span>Chat with Nicholas Perell for an hour and you'll find he's a bright, dedicated,
                    and empathetic team member willing to jump in head first to get the job done. After working with him ... my only regret is that
                    I couldn't keep him for longer. You'd be wise to scoop him up.<span class="text-2xl font-black">&rdquo;</span>
                </div>
                <div class="flex gap-3 items-center px-5">
                    <div class="bg-black dark:bg-white h-px w-5"></div>
                    <div class="text-xl font-bold">Noah Rosenfield, CEO of 1Ton Games</div>
                </div>
            </div>
            <div class="relative h-full w-full m-5 mt-0 aspect-square">
                <img 
                    src="\imgs\NoahRosenfield-headshot.jpg" 
                    alt="Noad Rosenfield with a blue baseball cap that cheekily have letter tiles velcroed to the two rows spelling out the phrase &quot;Wordle Sucks&quot;" 
                    class="border-4 border-adda-rackline rounded-full aspect-square"
                />
                <img
                    src="\imgs\noah-addagrams-profile-tile.png"
                    alt="Noah's tile avatar that appears on the leaderboard from time to time when he ranks on the daily. It's a squared Grapefruit slice with the letters for &quot;Noah&quot; on the four quadrants."
                    class="absolute right-0 bottom-0 w-1/3 h-1/3 object-contain"
                />
            </div>
        </div>

        <div>
            I was contracted by 1Ton Games to get the game to a releasable state. I refactored existing architecture, and implemented new features
            in collaboration with Design. <span class="italic">Addagrams</span> launched May 2023 on both Android and iOS, garnering 5K downloads
            in the 1st month.
        </div>
    </div>
</div>
