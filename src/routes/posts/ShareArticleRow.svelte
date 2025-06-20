<script lang="ts">
	export let title;
	const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
</script>

<div class="flex items-center justify-center gap-1">
	<p class="text-xl">Share</p>
	<button
		aria-label="Copy Link to Clipboard"
		onclick={() => {
			navigator.clipboard.writeText(window.location.href);
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
			/>
		</svg>
	</button>
	<button
		onclick={() => {
			window.open(`https://bsky.app/intent/compose?text=${title} ${window.location.href}`);
		}}
	>
		<img
			class="h-6 w-6"
			src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg"
			alt="BluSky Logo"
		/>
	</button>
	<button
		aria-label="LinkedIn Icon"
		onclick={() => {
			window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`);
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			data-supported-dps="24x24"
			fill="currentColor"
			class="mercado-match fill-[#0073b1]"
			width="24"
			height="24"
			focusable="false"
		>
			<path
				d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
			></path>
		</svg>
	</button>
	{#if !isFirefox}
		<button
			aria-label="Share"
			onclick={() => {
				navigator.share({ url: window.location.href });
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="size-6"
			>
				<path
					fill-rule="evenodd"
					d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	{/if}
</div>
