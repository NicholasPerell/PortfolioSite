<script lang="ts">
	import BlogPostCard from "$lib/comps/BlogPostCard.svelte";
	import ExperienceCard from "$lib/comps/ExperienceCard.svelte";
	import ToolIconImage from "$lib/comps/ToolIconImage.svelte";

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
                <ToolIconImage length={40} tool={'C#'} />
                <ToolIconImage length={40} tool={'Unity'} />
                <ToolIconImage length={40} tool={'Git'} />
                <ToolIconImage length={40} tool={'Svelte'} />
                <ToolIconImage length={40} tool={'TypeScript'} />
                <ToolIconImage length={40} tool={'TailwindCSS'} />
                <ToolIconImage length={40} tool={'C++'} />
                <ToolIconImage length={40} tool={'InDesign'} />
                <ToolIconImage length={40} tool={'Yarnspinner'} />
                <ToolIconImage length={40} tool={'Ink'} />
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

