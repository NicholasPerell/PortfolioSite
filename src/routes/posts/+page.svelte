<script lang="ts">
	import BlogPostCard from '$lib/comps/BlogPostCard.svelte';
    import type { PageServerData } from './$types';

    export let data: PageServerData;
    const {posts} = data;
</script>

<div class="flex flex-row flex-nowrap gap-2 items-center">
    <div class="h-0.5 w-7 bg-black"></div>
    <p class="font-serif font-bold text-3xl text-black">Posts</p>
    <div class="h-0.5 w-7 bg-black"></div>
</div>
<div class="w-full flex flex-row flex-wrap gap-6">
    {#each posts as post}
        <div class="w-1/5">
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