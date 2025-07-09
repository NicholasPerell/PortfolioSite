<script lang="ts">
	import FullBodyBg from '$lib/comps/FullBodyBg.svelte';
	import ImgListSplit from '$lib/comps/ImgListSplit.svelte';
	import SectionHeader from '$lib/comps/SectionHeader.svelte';
	import ToolIconImage from '$lib/comps/ToolIconImage.svelte';
	import HeadTitle from '$lib/comps/HeadTitle.svelte';
</script>

<HeadTitle name="High Tide" />

<div
	class="flex justify-center bg-[url(/imgs/high-tide-above-water-setting.png)] bg-cover bg-no-repeat"
>
	<div class="flex w-full max-w-screen-lg flex-col items-center gap-5 py-16">
		<img
			src="\imgs\high-tide-title.png"
			alt="Archer Icon and Moon Icon on the left and right of the name Artemis"
		/>
	</div>
</div>

<FullBodyBg>
	<div class="flex justify-center p-6">
		<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
			<div class="flex w-full grid-cols-2 flex-col gap-3 leading-7 md:grid md:gap-5">
				<p>
					<span class="italic">High Tide</span> is a 2D Metroidvania built in Unity where the player
					uses magic sand powers solve puzzles and fight enemies exploring the sunken depths of the past
					in search of a lost family heirloom.
				</p>
				<div class="flex w-full flex-col gap-0">
					<p class="italic">Product Owner & Lead Programmer</p>
					<p>Team Size: 9</p>
					<p>Scale: Demo</p>
					<p>Development Period: May 2021–July 2021</p>
					<p>Tools Used:</p>
					<div class="flex w-full flex-row gap-0.5 pt-3 md:pt-5">
						{#each ['C#', 'Unity', 'Git', 'Yarn Spinner'] as tool}
							<div class="flex w-full flex-col items-center justify-start gap-1">
								<ToolIconImage {tool} />
								<p class="text-center leading-normal">{tool}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<iframe
				title="High Tide Itch.io"
				src="https://itch.io/embed/1098949?bg_color=adcdeb&amp;fg_color=222222&amp;link_color=258be5&amp;border_color=8facd3"
				width="100%"
				height="167"
				frameborder="0"
				><a href="https://chortling-chickadee.itch.io/high-tide">High Tide by Chortling Chickadee</a
				></iframe
			>

			<ImgListSplit
				src="/imgs/high-tide-shield-and-parkour.png"
				alt="Rituals prototype with a fletcher showing the different dialogue arrows that store their lines, flag changes, and the archers that will require changes to be made to it."
				imgRight={false}
				header="Features"
				items={[
					'Mysterious sand powers to vanquish foes, shield the player, and solve puzzles.',
					'Music that changes its layering dynamically.',
					'Sunken depths full of flora and old structures.',
					'Player character that swims, runs, and jumps around.'
				]}
			/>
			<ImgListSplit
				src="\imgs\high-tide-truth-of-this-world.png"
				alt="Game Summary Image"
				imgRight={true}
				header="Contributions"
				items={[
					'Programmed the player movement and sand mechanics.',
					'Created a level editor that let the designers and artist save & load the contents for each room, and programmed a system to connect the rooms together in-game.',
					'Incorporated Yarnspinner for all of the dialogue.',
					'Coded a system that let the sound designers customize what music layers will fade in or out entering a room by changing the FMOD values.'
				]}
			/>
			<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>
			<SectionHeader header="Development of High Tide"></SectionHeader>

			<div>
				Attending Rad Studio 2021, I worked with a remote team of nine people for eight weeks as
				both Product Owner & Lead Programmer. I managed pipelines; programmed the gameplay and level
				systems; and taught some of the team Unity, Git, and level building tools I made for them.
			</div>

			<iframe
				class="aspect-[928/552] w-full"
				src="https://www.youtube.com/embed/fzV9XK8E0gM"
				title="Rad Studio 2021: High Tide"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>
</FullBodyBg>
