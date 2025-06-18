type GlobEntry = {
    metadata: Post;
    default?: unknown;
};

export interface Post {
    title: string;
    blurb: string;
    written: string;
    thumbnail: string;
    tags: string[];
    tools: string[];
}

// Get all posts and add metadata
export const posts = Object.entries(
    import.meta.glob('/src/lib/posts/*.svx', { eager: true }) as Record<string, GlobEntry>
)
    .map(([filepath, globEntry]) => {
        const writtenArr = globEntry.metadata.written.split('-').map((str) => parseInt(str));
        const writtenDate = new Date(writtenArr[0], writtenArr[1] - 1, writtenArr[2]);
        return {
            ...globEntry.metadata,
            written: writtenDate,
            // generate the slug from the file path
            slug: filepath.substring(filepath.lastIndexOf('/') + 1).replace(/^\.\//, '').replace(/\.(svx|md)$/, ''),
        };
    })
    // sort by date
    .sort((a, b) => new Date(b.written).getTime() - new Date(a.written).getTime())
    // add references to the next/previous post
    // .map((post, index, allPosts) => ({
    //     ...post,
    //     next: allPosts[index - 1] || 0,
    //     previous: allPosts[index + 1] || 0,
    // }));
    ;

// CMS uses code shared by Ian Sam Mungai in the article "How to Quickly Build and Deploy a Static Markdown Blog with SvelteKit"
// https://www.thisdot.co/blog/how-to-quickly-build-and-deploy-a-static-markdown-blog-with-sveltekit