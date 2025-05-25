<script lang="ts">
	import BlogPostCard from "$lib/comps/BlogPostCard.svelte";
	import ExperienceCard from "$lib/comps/ExperienceCard.svelte";
	import ToolIconImage from "$lib/comps/ToolIconImage.svelte";
	import ChevronDoubleRight from "$lib/icons/ChevronDoubleRight.svelte";

    import { posts } from "$lib/services/posts";
    import { works } from "$lib/services/work";

    let featurePosts = posts.slice(0, 3);
    let featureWorks = works.slice(0, 4);

</script>
<div class="w-full bg-gray-100 p-6 flex justify-center text-black">
    <div class="max-w-screen-lg w-full flex gap-5">
        <div class="flex flex-col gap-2">
            <p class="text-xl font-semibold"><span class="hover:text-2xl hover:font-bold duration-300">Ahoy!</span> My name is Nicholas Perell.</p>
            <p class="text-lg">I'm a game programmer & software engineer who excels in communication, technical research, and planning. I collaborate intentionally with my clients to give users an experience that communicates a sense of care was put behind it. Focus on (behavioral) AI, systems, narrative, UI, & gameplay programming. Well-versed in narrative structure, management, and writing.</p>
            <!-- <div class="flex gap-3">
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
            </div> -->
            <!-- <div class="flex flex-nowrap gap-6 w-full justify-center grow items-center">
                <a href="/contact"
                    class="text-white text-xl font-semibold bg-[#543219] py-2 px-3"
                >
                    Contact
                </a>
                <a href="/resume"
                    class="text-white text-xl font-semibold bg-[#543219] py-2 px-3"
                >
                    Resume
                </a>
            </div> -->
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
        <div class="w-full flex flex-row flex-nowrap gap-6">
            {#each featurePosts as post}
                <BlogPostCard props={post}/>
            {/each}
        </div>
        <div class="w-full flex flex-row justify-end">
            <a class="text-right text-lg underline w-fit hover:no-underline text-neutral-700" href="/posts">
                More →
            </a>
        </div>
    </div>
</div>
<div class="w-full bg-gray-100 p-6 pb-16 flex justify-center">
    <div class="max-w-screen-lg w-full flex flex-col gap-8">
        <p class="font-bold text-3xl text-black">
            Experience
        </p>
        <div class="max-w-screen-lg w-full flex items-center relative">
            <div class="grid grid-cols-2 w-full gap-6 mx-8">
                {#each featureWorks as work}
                    <ExperienceCard props={work}/>
                {/each}
            </div>
            <a class="absolute -right-8 w-12 h-12 bg-neutral-300 hover:bg-neutral-500 hover:active:bg-neutral-600 rounded-md p-1" href="/work">
                <ChevronDoubleRight cls="w-full h-full stroke-white stroke-2"/>
            </a>
        </div>
    </div>
</div>
<div class="w-full bg-gray-200/65 p-8 flex justify-center">
    <div class="max-w-screen-lg w-full flex flex-col gap-6">
        <p class="font-bold text-2xl text-center">Let's Work Together</p>
        <div class="flex flex-nowrap gap-5 w-full justify-center">
            <a href="/contact"
                class="text-white text-xl font-semibold bg-[#543219] py-2 px-3"
            >
                Contact
            </a>
            <a href="/resume"
                class="text-white text-xl font-semibold bg-[#543219] py-2 px-3"
            >
                Resume
            </a>
        </div>
    </div>
</div>