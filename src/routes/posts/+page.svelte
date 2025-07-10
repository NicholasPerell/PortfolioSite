<script lang="ts">
	import BlogPostCard from '$lib/comps/BlogPostCard.svelte';
	import FullBodyBg from '$lib/comps/FullBodyBg.svelte';
    import type { PageServerData } from './$types';

    let page:  PageServerData = $props();
    const { posts } = page.data;
</script>

<FullBodyBg>
    <div class="flex flex-row flex-nowrap gap-2 items-center px-2 pt-4 pb-6">
        <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
        <p class="font-serif font-bold text-3xl text-black dark:text-white">Posts</p>
        <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
    </div>
    <div class="w-full px-2 flex flex-row flex-wrap gap-6 pb-2">
        {#each posts as post}
            <div class="sm:w-1/3 md:w-1/4 lg:w-1/5">
                <BlogPostCard 
                    slug={post.slug} 
                    title={post.title}
                    blurb={post.blurb}
                    written={post.written}
                    thumbnail={post.thumbnail}
                    tags={post.tags ?? []}
                    tools={post.tools ?? []}
                />
            </div>
        {/each}
    </div>
</FullBodyBg>