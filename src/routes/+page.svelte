<script lang="ts">
	import BlogPostCard from "$lib/comps/BlogPostCard.svelte";
	import ExperienceCard from "$lib/comps/ExperienceCard.svelte";
	import HeadTitle from "$lib/comps/HeadTitle.svelte";
	import Link from "$lib/comps/Link.svelte";
    import { works } from "$lib/services/work";
    import type { PageServerData } from './$types';
    export let data: PageServerData;
    const {posts} = data;
    let featurePosts = posts.filter(p => p.written).slice(0, 4);
    let featureWorks = works.slice(0, 4);
</script>

<HeadTitle name="Nicholas Perell" />

{#snippet callToAction(cls?: string)}
    <div class={'flex flex-nowrap gap-5 w-full justify-center grow items-center ' + cls}>
        <Link href="/contact"
            cls="text-white text-xl font-semibold bg-[#543219] dark:bg-[#382110] py-2 px-3"
        >
            Contact
        </Link>
        <Link href="/resume"
            cls="text-white text-xl font-semibold bg-[#543219] dark:bg-[#382110] py-2 px-3"
        >
            Resume
        </Link>
        <Link href="https://github.com/NicholasPerell"
            cls="text-white text-xl font-semibold bg-[#543219] dark:bg-[#382110] py-2 px-3"
        >
            GitHub
        </Link>
    </div>
{/snippet}

<div class="w-full bg-gray-100 dark:bg-neutral-950 p-6 flex justify-center text-black dark:text-white">
    <div class="max-w-screen-lg w-full">
        <div class="flex flex-col gap-5">
        <div class="flex gap-5">
        <div class="flex flex-col gap-4 sm:gap-2">
            <p class="text-lg font-semibold"><span class="hover:text-xl active:text-xl hover:font-bold active:font-bold duration-300">Ahoy!</span> My name is Nicholas Perell.</p>
            <img class="block self-center sm:hidden aspect-square w-2/3 h-2/3" src=".\imgs\nick\seattle-falls-shot.jpg" alt="Nicholas Perell" />
            <p class="text-start sm:text-justify md:text-start">
                I'm a game programmer & software engineer who excels in communication, technical research, and planning. I collaborate intentionally
                with my clients to give users an experience that communicates a sense of care was put behind it. Focus on (behavioral) AI, systems,
                narrative, UI, & gameplay programming. Well-versed in narrative structure, management, and writing.
            </p>
            {@render callToAction('hidden lg:flex')}
        </div>
        <img class="hidden sm:block aspect-square max-w-[33%] md:max-w-full md:w-full h-full" src=".\imgs\nick\seattle-falls-shot.jpg" alt="Nicholas Perell" />
        </div>
            {@render callToAction('flex lg:hidden')}
        </div>
    </div>
</div>
<div class="w-full p-6 flex justify-center overflow-hidden bg-white dark:bg-black">
    <div class="max-w-screen-lg w-full flex flex-col gap-5">
        <div class="flex flex-row flex-nowrap gap-2 items-center">
            <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
            <p class="font-serif font-bold text-3xl text-black dark:text-white">Posts</p>
            <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
        </div>
        <div class="w-full flex justify-center">
            <div class="w-full flex flex-col sm:flex-row flex-nowrap gap-6 sm:gap-3 lg:gap-6">
                {#each featurePosts as post, i}
                    <div 
                        class="w-full"
                        class:hidden={i > 1}
                        class:block={i <= 1}
                        class:sm:block={i > 1 && i <= 2}
                        class:lg:block={i > 2}
                    >
                        <BlogPostCard 
                            slug={post.slug} 
                            title={post.title}
                            blurb={post.blurb}
                            written={post.written}
                            thumbnail={post.thumbnail}
                            alt={post.alt}
                            tags={post.tags}
                            tools={post.tools}
                        />
                    </div>
                {/each}
            </div>
        </div>
        <div class="w-full flex flex-row justify-end">
            <a class="text-right text-lg underline w-fit hover:no-underline text-neutral-700 dark:text-gray-300" href="/posts">
                More →
            </a>
        </div>
    </div>
</div>
<div class="w-full bg-gray-100 p-6 flex justify-center dark:bg-neutral-950 text-black dark:text-white">
    <div class="max-w-screen-lg w-full flex flex-col gap-8">
        <p class="font-bold text-3xl text-black dark:text-white">
            Experience
        </p>
        <div class="max-w-screen-lg w-full flex items-center">
            <div class="flex flex-col w-full gap-2 sm:mx-4">
                {#each featureWorks as work}
                    <ExperienceCard props={work}/>
                {/each}
            </div>
        </div>
        <div class="w-full flex flex-row justify-center">
            <a class="text-center text-xl underline w-fit hover:no-underline text-neutral-700 dark:text-gray-300" href="/work">
                See More →
            </a>
        </div>
    </div>
</div>
<div class="w-full bg-gray-200 dark:bg-black p-8 flex justify-center">
    <div class="max-w-screen-lg w-full flex flex-col gap-6">
        <p class="font-bold text-2xl text-center text-black dark:text-white">Let's Work Together</p>
        {@render callToAction()}
    </div>
</div>