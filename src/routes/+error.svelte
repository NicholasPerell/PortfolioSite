<script lang="ts">
	import { page } from '$app/state';
	import FullBodyBg from '$lib/comps/FullBodyBg.svelte';
</script>

<FullBodyBg>
	<div class="text-center text-lg text-black dark:text-white">
		{page.error?.message ?? 'Error'}
	</div>
</FullBodyBg>
