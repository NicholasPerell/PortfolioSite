<script lang="ts">
	import HeadTitle from '$lib/comps/HeadTitle.svelte';
	import ImgListSplit from '$lib/comps/ImgListSplit.svelte';
	import SectionHeader from '$lib/comps/SectionHeader.svelte';
	import ToolIconImage from '$lib/comps/ToolIconImage.svelte';
	import { ALink, Formattable, type Tools } from '$lib/services/datatypes';

	const tools: Tools[] = ['C#', 'Unity', 'Git', 'Yarn Spinner', 'UI Toolkit', 'Ink'];
</script>

<HeadTitle name="FOOTSLOG" />

<div
	class="flex justify-center bg-[url(/imgs/footslog-steam-library-header.png)] bg-cover bg-center bg-no-repeat"
>
	<div class="relative flex w-full max-w-screen-lg flex-col items-center py-20 lg:p-32">
		<img src="/imgs/footslog-title.png" alt="FOOTSLOG" />
	</div>
</div>

<div class="flex w-full justify-center bg-white p-6 text-black dark:bg-black dark:text-white">
	<div class="flex w-full max-w-screen-lg list-disc flex-col gap-3 md:gap-5">
		<div class="flex w-full grid-cols-2 flex-col gap-3 leading-7 md:grid md:gap-5">
			<p>
				<span class="italic">FOOTSLOG</span> is a retro-inspired FPS equipped with fast-paced action
				and a unique interactive reloading mechanic. Take control of Subject 25 as you fight through
				a twisted experiment that will stop at nothing to see you perfected. Can you truly walk away
				from what this facility has made you become?
			</p>
			<div class="flex w-full flex-col gap-0">
				<p class="italic">Lead Programmer</p>
				<p>Team Size: 6</p>
				<p>Scale: PC Game</p>
				<p>Development Period: August 2025–April 2026</p>
				<p>Tools Used:</p>
				<div class="flex w-full flex-row gap-0.5 pt-8 sm:pt-3 md:pt-5">
					{#each tools as tool}
						<div class="flex w-full flex-col items-center justify-start gap-1">
							<ToolIconImage length={40} {tool} />
							<p class="text-center leading-normal">{tool}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<iframe
			src="https://store.steampowered.com/widget/4387810/"
			frameborder="0"
			width="100%"
			height="190"
			title="Steam Embed"
		></iframe>

		<ImgListSplit
			src="/vids/footslog-features.mp4"
			alt="Addagrams Gameplay Preview"
			imgRight={false}
			header="Features"
			items={[
				'Fast-paced gameplay centered around spinning the gun to reload and parry.',
				'Distinct style and art direction to capture the gritty essence of the game.',
				'Radiant dialogue when downed and when taking reprieve in the dream world.',
				'Levels to fight through a rehearsal of violence and explore.'
			]}
		/>

		<ImgListSplit
			src="/imgs/footslog-section-1-slicing.gif"
			alt="Level-slice streaming tool working as a player goes through section 1 of the game."
			imgRight={true}
			header="Contributions"
			items={[
				new Formattable(
					'%s to adhere to Single Entry Point while using Editor Initializers in non-base scenes to ensure developers could still click play from other scenes.',
					[
						new ALink(
							'Architected project',
							'underline opacity-50 hover:opacity-100 active:opacity-80',
							'/posts/foot-slog-architecture',
							'_blank'
						)
					]
				),
				'Built tool to slice levels into zones for optimal chunking as the player progressed to each room, allowing the level designer to still work in one scene with clear gizmos and simple hierarchy rules.',
				'Designed and implemented the game\'s HUD and UI using UI Toolkit aided by custom frameworks like a "TailwindUSS" tool.',
				"Coded the enemy AI's state machine and behaviors. Multiple ways for the enemies to become aware of the player to avoid breaking immersion. Enemies can aim directly at player or aim based on where they’ll be; forcing the player to use the sprint, parry, and/or slide mechanic(s) to survive encounters.",
				'Narrative system with an updated version of Artemis. Uses Yarn Spinner nodes as a basis then uses world state data to generate a query and use that to find an appropriate and high priority narrative beat attuned to what the player has experienced.'
			]}
		/>

		<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>

		<SectionHeader header="Development of FOOTSLOG" />

		<div class="text-lg">
			Having found something with legs via a vertical slice over the course of August 2025, I
			dedicated much of my time to developing <span class="italic">FOOTSLOG</span> for the next
			eight months. As
			<span class="italic">thee</span> programmer on the team, I oversaw the game architecture, level
			tools, settings, underlying systems, narrative logic, enemy AI, UI, and a portion of the player
			controller. The game released on Steam Early Access on April 2026 for PC.
		</div>
	</div>
</div>
