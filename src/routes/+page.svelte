<script lang="ts">
	import BlogPostCard from "$lib/comps/BlogPostCard.svelte";
	import ExperienceCard from "$lib/comps/ExperienceCard.svelte";

    import { works } from "$lib/services/work";


    import type { PageServerData } from './$types';

    export let data: PageServerData;
    const {posts} = data;

    let featurePosts = posts.filter(p => p.written).slice(0, 3);
    let featureWorks = works.slice(0, 4);

</script>
<div class="w-full bg-gray-100 p-6 flex justify-center text-black">
    <div class="max-w-screen-lg w-full flex gap-5">
        <div class="flex flex-col gap-2">
            <p class="text-lg font-semibold"><span class="hover:text-xl hover:font-bold duration-300">Ahoy!</span> My name is Nicholas Perell.</p>
            <p>I'm a game programmer & software engineer who excels in communication, technical research, and planning. I collaborate intentionally with my clients to give users an experience that communicates a sense of care was put behind it. Focus on (behavioral) AI, systems, narrative, UI, & gameplay programming. Well-versed in narrative structure, management, and writing.</p>
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
            <div class="flex flex-nowrap gap-5 w-full justify-center grow items-center">
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
                <BlogPostCard 
                    slug={post.slug} 
                    title={post.title}
                    blurb={post.blurb}
                    written={post.written}
                    thumbnail={post.thumbnail}
                    tags={post.tags}
                    tools={post.tools}
                />
            {/each}
        </div>
        <div class="w-full flex flex-row justify-end">
            <a class="text-right text-lg underline w-fit hover:no-underline text-neutral-700" href="/posts">
                More →
            </a>
        </div>
    </div>
</div>
<div class="w-full bg-gray-100 p-6 flex justify-center">
    <div class="max-w-screen-lg w-full flex flex-col gap-8">
        <p class="font-bold text-3xl text-black">
            Experience
        </p>
        <div class="max-w-screen-lg w-full flex items-center">
            <div class="flex flex-col w-full gap-2 mx-4">
                {#each featureWorks as work}
                    <ExperienceCard props={work}/>
                {/each}
            </div>
        </div>
        <div class="w-full flex flex-row justify-center">
            <a class="text-center text-xl font-bold underline w-fit hover:no-underline text-neutral-700" href="/work">
                See More →
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