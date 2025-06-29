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

        <div class="text-lg font-bold">
            Development of Project Nautilus
        </div>

        <p>
            Initially, Project Nautilus was my senior capstone project in fall 2021, with a team of 9 and myself as the game's AI programmer. The game was made in Unity. I researched then implemented Warframe's usage of sparse voxel octrees for our game’s AI to navigate 3D underwater space, and set up customizable subtitle UI for the game to make the narrative more accessible. I also used my experience writing and running the college's literary magazine to both flesh out the world in documentation then network to find a narrative writer to join our team.
        </p>
        <p>
            We pitched for our game to be green lit and continue development in the 2022 spring semester, which you can watch us present below.
        </p>

        <iframe class="aspect-[928/552] w-full" src="https://www.youtube.com/embed/P5C7UkeZAKM" title="ProjectNautilus 2021 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	
        <div>We successfully presented, and were green lit to keep developing. In the spring, our team was 24 strong. As technical and narrative director, I worked with 4 programmers, 3 narrative writers, and 1 copy editor for that duration of the project. I kicked off the research for our game's back end, which led to optimizations using multi-scene loading and LODs. I ran writer's rooms involving Design and Narrative to create the story, then programmed and implemented our entire narrative pipeline.</div>

        <div>For some insight into how we at Isthmus Studios approached development with narrative included as its own discipline, check out the microtalk I gave at The Loaf in March 2022.</div>
    
        <iframe class="aspect-[928/552] w-full" src="https://www.youtube.com/embed/iQEwtDx63fw" title="Narrative Inspirations for Project Nautilus — Microtalk @ The Loaf, March 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div>The game was finished in May 2022 for the Game Studio's Senior Showcase. I was one of the three people asked to present and discuss the game while it was played. Watch Project Nautilus's part in the Senior Show here!</div>

        <iframe class="aspect-[1024/575] w-full" title="Project Nautilus Game Studio Senior Show Segment" src="https://player.vimeo.com/video/709690636?h=3b5a760967&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=143m19s" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>
