<script lang="ts">
</script>

<svelte:head>
	<title>Project Nautilus</title>
</svelte:head>

<div
	class="flex justify-center bg-[#02001A] bg-[url(/imgs/pn-trailer-title-backdrop.gif)] bg-cover bg-center bg-no-repeat"
>
	<div class="flex w-full max-w-screen-lg flex-col items-center gap-5 p-16">
		<img src="\imgs\pn-title.png" alt="Project Nautilus" />
	</div>
</div>

<div class="flex w-full justify-center bg-gray-100 p-6 text-black">
	<div class="flex w-full max-w-screen-lg flex-col gap-5">
		<div class="grid w-full grid-cols-2 gap-5 leading-7">
			<p>
				<i>Project Nautilus</i> is a first-person, exploration game set in the not-so-distant future.
				Remote operate a drone to explore this newly discovered cave system. Use tools to break away
				obstacles and propel your way down to find what lies below these long forgotten depths below.
			</p>
			<div class="flex w-full flex-col gap-0">
				<p class="italic">Technical & Narrative Director</p>
				<p>Team Size: 24</p>
				<p>Scale: Small Game</p>
				<p>Development Period: August 2021–May 2022</p>
				<p>Tools Used: Unity, Git, C#, Ink, Google Cloud Text-to-Speech</p>
			</div>
		</div>

		<iframe
			src="https://store.steampowered.com/widget/1953870/"
			frameborder="0"
			width="100%"
			height="190"
			title="Steam Embed"
		></iframe>

		<div class="grid w-full grid-cols-2 gap-5 leading-7">
			<img src="\imgs\pn-first-angler.jpg" alt="Project Nautilus" />
			<div class="flex w-full flex-col gap-0">
				<p class="text-lg font-bold">Features</p>
				<ul class="list-disc pl-5">
					<li>Work terminal UI, immersing the player in the role of a drone operator.</li>
					<li>
						Environmental factors such as light and temperature affect the behavior of enemies and
						the player’s drone.
					</li>
					<li>
						Complex narrative communicated through in-game systems such as an AI narrator and a mock
						email inbox.
					</li>
					<li>Underwater cave system with multiple layers to explore through.</li>
				</ul>
			</div>
		</div>
		<div class="grid w-full grid-cols-2 gap-5 leading-7">
			<div class="flex w-full flex-col gap-0">
				<p class="text-lg font-bold">Contributions</p>
				<ul class="list-disc pl-5">
					<li>
						Programmed Sparse Voxel Octrees for our game’s enemy AI to navigate 3D underwater space.
					</li>
					<li>Designed, programmed, and implemented the game’s narrative pipeline.</li>
					<li>
						Created customizable subtitle UI for the game to make the narrative more accessible.
					</li>
					<li>
						Worked with clarity of vision to bridge the gaps for all the team’s disciplines
						throughout development.
					</li>
					<li>
						Coordinated and stitched together <a
							href="https://youtu.be/mJUcYHv2lTo"
							class="text-gray-900 underline hover:text-gray-800 hover:no-underline active:text-gray-700"
							>the game’s ending sequence</a
						>, working with teammates across all disciplines.
					</li>
					<li>
						Directed the programmers and outlined the requirements for the game’s backend to support
						the world’s size.
					</li>
					<li>
						Ran writer’s rooms of writers and designers to structure the narrative arc, did
						developmental editing, and project managed the writing team.
					</li>
				</ul>
			</div>
			<img src="\imgs\pn-god-thing.png" alt="Project Nautilus" />
		</div>

		<div class="my-1 h-px w-full bg-black"></div>
	</div>
</div>
