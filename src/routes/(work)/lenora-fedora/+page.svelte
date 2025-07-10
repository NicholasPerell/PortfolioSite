<script lang="ts">
	import LinkSpan from '$lib/comps/LinkSpan.svelte';
	import FullBodyBg from '$lib/comps/FullBodyBg.svelte';
	import ImgListSplit from '$lib/comps/ImgListSplit.svelte';
	import SectionHeader from '$lib/comps/SectionHeader.svelte';
	import ToolIconImage from '$lib/comps/ToolIconImage.svelte';
	import HeadTitle from '$lib/comps/HeadTitle.svelte';
	import { type Tools } from '$lib/services/datatypes';
	
	const tools: Tools[] = ['C#', 'Unity', 'Git'];
</script>

<HeadTitle name="Lenora Fedora" />

<div
	class="flex justify-center bg-[url(/imgs/lenora-fedora-fade-thumbnail.png)] bg-cover bg-top bg-no-repeat"
>
	<div class="flex w-full max-w-screen-lg flex-col items-center gap-5 md:py-16">
		<img
			src="\imgs\lenora-fedora-title.png"
			alt="Archer Icon and Moon Icon on the left and right of the name Artemis"
		/>
	</div>
</div>

<FullBodyBg>
	<div class="flex justify-center p-6">
		<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
			<div class="flex w-full grid-cols-2 flex-col gap-3 leading-7 md:grid md:gap-5">
				<p>
					<span class="italic">Lenora Fedora</span> is a third-person, 3D platformer and stealth game
					built in Unity where the player plays as the titular character, a hat person who is trying
					to explore a hat store to break out her hat friends—all while keeping out of sight (or running
					away!) from the Tall One.
				</p>
				<div class="flex w-full flex-col gap-0">
					<p class="italic">AI Programmer</p>
					<p>Team Size: 8</p>
					<p>Scale: Small Game</p>
					<p>Development Period: January–May 2021</p>
					<p>Tools Used:</p>
					<div class="flex w-full flex-row gap-0.5 pt-3 md:pt-5">
						{#each tools as tool}
							<div class="flex w-full flex-col items-center justify-start gap-1">
								<ToolIconImage length={40} {tool} />
								<p class="text-center leading-normal">{tool}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div
				id="876756821733982930"
				style="width: 100%; overflow-y: hidden;"
				class="wcustomhtml my-3"
			>
				<iframe
					title="Lenora Fedora Itch.io"
					src="https://itch.io/embed/925790?bg_color=dbdbdb&amp;fg_color=171635&amp;link_color=484688&amp;border_color=6b6b6b"
					width="100%"
					height="167"
					frameborder="0"
					><a href="https://donovangb.itch.io/lenora-fedora"
						>Lenora Fedora by Donovan Garcia-Buckler, liclarkk, Allyson Lee, Evan John Hay Barker,
						NicholasPerell, Vurglesplat</a
					></iframe
				>
			</div>

			<ImgListSplit
				src="/imgs/lenora-fedora-lockpicking.png"
				alt="Rituals prototype with a fletcher showing the different dialogue arrows that store their lines, flag changes, and the archers that will require changes to be made to it."
				imgRight={false}
				header="Features"
				items={[
					'Explorable level that can be traversed in different ways by using player’s hat to adjust their height and width.',
					'Enemy known as the Tall One who will patrol the shop and try to capture you if he spots you.',
					'Hat friends to free by picking their locks while the Tall One’s not looking.',
					'A decorated environment with little pieces of art and decor around the hat shop.',
					'Stealth options around hat racks to blend in without being spotted.'
				]}
			/>
			<ImgListSplit
				src="\imgs\lenora-fedora-tall-one-ai-gizmos.png"
				alt="Game Summary Image"
				imgRight={true}
				header="Contributions"
				items={[
					'Programmed AI vision cone and peripheral vision.',
					'Programmed the AI behavior states.',
					'Programming a search map for the AI to seek out the player once they’ve lost them.',
					'Created the main menu scene and world space UI.',
					'Hooked up imported Animations to the Unity Animator.'
				]}
			/>
			<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>
			<SectionHeader header="Development of Lenora Fedora"></SectionHeader>

			<div>
				I was the eight-person team's AI programmer, working on the searching and behaviors of the
				Tall One. It uses similar patterns to the ones I describe in <LinkSpan
					href="/posts/tlou-ai-study">this Game AI blog post</LinkSpan
				>.
			</div>

			<iframe
				class="aspect-[928/552] w-full"
				src="https://www.youtube.com/embed/JlEORrPx7CE"
				title="Lenora Fedora Trailer"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
</FullBodyBg>
