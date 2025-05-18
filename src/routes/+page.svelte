<script lang="ts">
	import BlogPostCard from "$lib/comp/BlogPostCard.svelte";
	import ExperienceCard from "$lib/comp/ExperienceCard.svelte";

    import { posts } from "$lib/services/posts";
    import { works } from "$lib/services/work";

    let featurePosts = posts.slice(0, 3);

</script>
<div class="w-full bg-gray-100 p-6 flex justify-center text-black">
    <div class="max-w-screen-lg w-full flex gap-5">
        <div class="flex flex-col gap-2">
            <p class="text-lg font-semibold"><span class="hover:text-xl hover:font-bold duration-300">Ahoy!</span> My name is Nicholas Perell.</p>
            <p>I'm a game programmer & software engineer who excels in communication, technical research, and planning. I collaborate intentionally with my clients to give users an experience that communicates a sense of care was put behind it. Focus on (behavioral) AI, systems, narrative, UI, & gameplay programming. Well-versed in narrative structure, management, and writing.</p>
            <div class="flex gap-3">
                <div class="aspect-square w-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://cdn.sanity.io/images/fuvbjjlp/production/2495ab2daae11fd3ed5d6b84477d513869f9a1b4-89x100.png')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/747px-Svelte_Logo.svg.png')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/768px-Adobe_InDesign_CC_icon.svg.png')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://camo.githubusercontent.com/d928ff77c57ff582c4ed8da2b3d13a6ff2b7b21ac780ea01e83ea31e2199551f/68747470733a2f2f646f776e6c6f6164732e7961726e7370696e6e65722e6465762f6765742f5961726e5370696e6e65724c6f676f2e706e67')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('https://www.inklestudios.com/ink/img/inky-icon.png')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('')] bg-contain bg-no-repeat bg-center"></div>
                <div class="aspect-square w-10 bg-[url('')] bg-contain bg-no-repeat bg-center"></div>
            </div>
        </div>
        <img class="aspect-square w-full" src=".\imgs\ahoy-orig.jpg" alt="Nicholas Perell" />
    </div>
</div>
<div class="w-full p-6 flex justify-center overflow-hidden">
    <div class="max-w-screen-lg w-full flex flex-col gap-5">
        <div class="flex flex-row flex-nowrap gap-2 items-center">
            <div class="h-0.5 w-7 bg-black"></div>
            <p class="font-serif font-bold text-3xl text-black">Posts</p>
            <div class="h-0.5 w-7 bg-black"></div>
        </div>
        <div class="w-fit flex flex-row flex-nowrap gap-10 ">
            {#each featurePosts as po}
            <!-- <p>{JSON.stringify(po)}</p> -->
            <BlogPostCard props={po}/>
            {/each}
        </div>
    </div>
</div>
<div class="w-full bg-gray-100 p-6 flex justify-center">
    <div class="max-w-screen-lg w-full flex flex-col gap-5">
        <p class="font-bold text-3xl text-black">
            Experience
        </p>
        <div class="max-w-screen-lg w-full flex items-center gap-5">
            <div class="grid grid-cols-2 w-full gap-5">
                {#each works as po}
            <!-- <p>{JSON.stringify(po)}</p> -->
            <ExperienceCard props={po}/>
            {/each}
            </div>
            <div class="w-10 h-10 bg-blue-500">

            </div>
            <!-- <img class="aspect-square w-full" src=".\imgs\ahoy-orig.jpg" alt="Nicholas Perell" /> -->
        </div>
    </div>
</div>

