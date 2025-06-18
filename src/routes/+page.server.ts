import { posts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    return {
        posts: posts.filter(p => p.written.getTime() <= Date.now()), // make posts available on the client
    };
};