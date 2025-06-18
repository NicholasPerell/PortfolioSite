// import pMap from "p-map"
// import { basename } from "path";
import { error } from '@sveltejs/kit';
import { convertDate } from '$lib/utils';
import type { PageServerLoad } from './$types';

interface PostMetadata {
	date: string;
	[key: string]: any;
}

interface PostModule {
	metadata: PostMetadata;
	default?: any; // SVX/Markdown component (not used here)
}

export async function get() {
	// Import all .svx files in the directory
	const allPostFiles: Record<string, PostModule> = import.meta.glob('./*.{svx,md}', {
		eager: true
	});

	const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
		// Extract slug from file path (more robust method)
		const slug = path
			.replace(/^\.\//, '')    // Remove leading './'
			.replace(/\.(svx|md)$/, ''); // Remove file extension

		return {
			...post.metadata,
			slug,
			title: slug,
			published: convertDate(post.metadata.date)
		};
	});

	// Sort posts by date (descending)
	const posts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	if (!posts.length) {
		throw error(404, 'No posts found');
	}

	// Return data for page (no need for 'body' wrapper)
	return { body: { posts } };
}