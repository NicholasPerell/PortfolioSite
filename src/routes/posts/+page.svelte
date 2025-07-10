<script lang="ts">
	import BlogPostCard from '$lib/comps/BlogPostCard.svelte';
	import FullBodyBg from '$lib/comps/FullBodyBg.svelte';
    import type { PageServerData } from './$types';

    let page:  PageServerData = $props();
    const { posts } = page.data;
</script>

<FullBodyBg>
    <div class="w-fit max-w-screen-lg flex flex-col self-center content-center">
        <div class="flex flex-row flex-nowrap gap-2 items-center px-2 pt-4 pb-6">
            <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
            <p class="font-serif font-bold text-3xl text-black dark:text-white">Posts</p>
            <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
        </div>
        <div class="px-2 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-2">
            {#each posts as post}
                <BlogPostCard 
                    slug={post.slug} 
                    title={post.title}
                    blurb={post.blurb}
                    written={post.written}
                    thumbnail={post.thumbnail}
                    tags={post.tags ?? []}
                    tools={post.tools ?? []}
                />
            {/each}
        </div>
    </div>
</FullBodyBg>