<script lang="ts">
	import BlogPostCard from '$lib/comps/BlogPostCard.svelte';
    import type { PageServerData } from './$types';

    let page:  PageServerData = $props();
    const { data } = page;
    const { posts } = data;
    let innerHeight = $state(0);
    let pageBody : HTMLDivElement | undefined = $state();
    let pageBodyMinHeight = $derived(innerHeight - (pageBody?.offsetTop ?? 0));
</script>

<svelte:window bind:innerHeight={innerHeight}/>

<div bind:this={pageBody} class="w-full h-full flex grow flex-col shrink-0 bg-white dark:bg-black" style:min-height={`${pageBodyMinHeight}px`}>
<div class="flex flex-row flex-nowrap gap-2 items-center">
    <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
    <p class="font-serif font-bold text-3xl text-black dark:text-white">Posts</p>
    <div class="h-0.5 w-7 bg-black dark:bg-white"></div>
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
</div>