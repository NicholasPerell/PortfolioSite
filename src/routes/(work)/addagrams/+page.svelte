<script lang="ts">
	import AddagramsTile from "$lib/comps/AddagramsTile.svelte";
	import HeadTitle from "$lib/comps/HeadTitle.svelte";
	import ImgListSplit from "$lib/comps/ImgListSplit.svelte";
	import SectionHeader from "$lib/comps/SectionHeader.svelte";
	import ToolIconImage from "$lib/comps/ToolIconImage.svelte";
	import { ALink, Formattable } from "$lib/services/datatypes";
</script>

<HeadTitle name="Addagrams" />

<div class="bg-adda-backdrop w-full flex items-center justify-center ">
     <div class="flex items-center justify-center max-w-screen-lg py-40">
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="A" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="D" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="D" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="A" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="G" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="R" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="A" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="M" />
        </div>
        <div class="border-adda-rackline bg-adda-rack h-48 border-y-8 border-r-8 p-2 first:border-l-8 first:rounded-l-2xl last:rounded-r-2xl">
            <AddagramsTile text="S" />
        </div>
     </div>
</div>

<div class="flex w-full justify-center bg-gray-100 p-6 dark:bg-stone-900 dark:text-white text-black">
	<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
		<div class="flex flex-col md:grid w-full grid-cols-2 gap-3 md:gap-5 leading-7">
			<p>
				<span class="italic">Addagrams</span> is a tile-based word game on mobile focused on giving players the creative freedom to rearrange the letters into the words they can come up with in their own vocabulary.
			</p>
			<div class="flex w-full flex-col gap-0">
				<p class="italic">Game Programmer</p>
				<p>Team Size: 2</p>
				<p>Scale: Mobile Game</p>
				<p>Development Period: March 2023–August 2023</p>
				<p>Tools Used: </p>
                <div class="w-full flex flex-row gap-0.5 pt-3 md:pt-5">
                    {#each ['C#', 'Unity', 'Git', 'Firebase', 'Atlassian'] as tool}
                    <div class="w-full flex flex-col items-center justify-start gap-1">  
                        <ToolIconImage {tool} />  
                    <p class="text-center leading-normal">{tool}</p>
                    </div>
                    {/each}
                </div>
			</div>
		</div>

        <div class="flex flex-wrap md:flex-nowrap gap-5 md:gap-10 p-5 items-center justify-center w-full">
            <a href="https://play.google.com/store/apps/details?id=com.nosenfield.addagrams" class="m-px flex items-center justify-center md:w-full" target="_blank">
                <img src="./imgs/GetItOnGooglePlay_Badge_Web_color_English.png" alt="Get It On Google Play">
            </a>
            <a href="https://apps.apple.com/us/app/addagrams-word-puzzle-games/id1426783573" class="h-[82px] md:h-full flex items-center justify-center md:w-full" target="_blank">
                <img class="h-full" src="./imgs/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Get It On Google Play">
            </a>
        </div>

		<ImgListSplit src="\vids\Adda-Gameplay-Extended-50.mp4" alt="Addagrams Gameplay Preview" imgRight={false} header="Features" items={[
			'Word tile gameplay that allows the player to solve anagrams with their own vocabulary.',
            'Procedurally generated puzzle library.',
            'Powerups to give hints help players spot word pairs.',
            'Customizable avatar tiles to represent oneself.',
            'Leaderboard where players can show off their smarts and personality, and pin favorites/friends to the top to compare faster.',
            'Multiple difficulty levels keep pace with players\' progress.'
		]}/>

		<ImgListSplit src="\imgs\a3_GameSummary.jpg" alt="Game Summary Image" imgRight={true} header="Contributions" items={[
            'Rearchitected the tutorial system and instructions to close down on iteration time.',
            'Remote Config for Ad graceperiods and chances pre and post game.',
            'Halved file sizes and decreased read time of puzzle data by converting from JSON to binary.',
            'Integrated packages for In-App Purchases and sharing.',
            'Rebuilt the pop up system to use a stack so popups wouldn\'t overlap or break an information flow.',
            'Deeplinks for possible friendlies leaderboard & friending.',
        ]}/>

		<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>

        <SectionHeader header="Development of Addagrams"/>

        <div class="flex gap-5">
            <div class="flex flex-col gap-5">
                <div class="bg-adda-backdrop p-5 rounded font-adda text-xl font-semibold">
                    <span class="text-2xl font-black">&ldquo;</span>Chat with Nicholas Perell for an hour and you'll find he's a bright, dedicated,
                    and empathetic team member willing to jump in head first to get the job done. After working with him ... my only regret is that
                    I couldn't keep him for longer. You'd be wise to scoop him up.<span class="text-2xl font-black">&rdquo;</span>
                </div>
                <div class="flex gap-3 items-center px-5">
                    <div class="bg-black dark:bg-white h-px w-5"></div>
                    <div class="text-xl font-bold">Noah Rosenfield, CEO of 1Ton Games</div>
                </div>
            </div>
            <div class="relative h-full w-full m-5 mt-0 aspect-square">
                <img 
                    src="\imgs\NoahRosenfield-headshot.jpg" 
                    alt="Noad Rosenfield with a blue baseball cap that cheekily have letter tiles velcroed to the two rows spelling out the phrase &quot;Wordle Sucks&quot;" 
                    class="border-4 border-adda-rackline rounded-full aspect-square"
                />
                <img
                    src="\imgs\noah-addagrams-profile-tile.png"
                    alt="Noah's tile avatar that appears on the leaderboard from time to time when he ranks on the daily. It's a squared Grapefruit slice with the letters for &quot;Noah&quot; on the four quadrants."
                    class="absolute right-0 bottom-0 w-1/3 h-1/3 object-contain"
                />
            </div>
        </div>

        <div class="text-lg">
            I was contracted by 1Ton Games to get the game ready for release. I refactored existing architecture, and implemented new features in 
            collaboration with Design. <span class="italic">Addagrams</span> launched May 2023 on both Android and iOS, garnering 5K downloads in
            the 1st month.
        </div>
        <div>
            Noah and I first met at my first
            <a href="https://jesshaskins.notion.site/NYC-Indie-Games-2b3dacbfc2aa438f96e8fb8ec9f2e6e7" target="_blank" class="underline hover:no-underline text-stone-900 hover:text-stone-800 active:text-stone-700 dark:text-gray-200 dark:hover:text-gray-300 dark:active:text-gray-400">NYC Indie Games Social</a>
            back in 2023. We hit it off pretty well and we enjoyed hearing eachothers' little "war stories" and lessons from past endevors in game
            development. It turned out Noah's latest endevor at the time, <span class="italic">Addagrams</span>, had been cooking for a while. The
            game loop was figured out, and the demo I and others played at the social was awesome. There was just a lot to the "meta game" on the 
            phone in terms of menus, popups, game modes, and IAPs that he was still struggling to get over the hill of.
        </div>
        <div>
            We kept in touch and reconviened the once-a-month at the socials to ask how projects were going on both our ends. I guess I was personable
            enough, because (to my delight and fortune) Noah took a chance on me; contracted me to work with him from the programming end so he
            could focus more on the design.
        </div>
        <div>
            Our first sizeable undertaking was the game's tutorial. Noah had ideas for how to improve the tutorial significantly, but he wanted an 
            approach that'd avoid any sort of almost-copy scripts for tutorial-versions of the gameplay systems nor needing to jump into the code
            for every tweak to the tutorial flow.
        </div>
        <div class="text-center italic">Mocks ups Noah provided:</div>
        <div class="flex flex-wrap">
            <img src="\imgs\adda-tutorial-mockup-p1.png" alt="Tutorial flow annotated mockup steps 1 through 5."/>
        </div>
        <div>
            Looking through his mockups for the new iteration and discussing with him some future tweaks we could forsee, I broke all the parts down
            into the categories of "requests" which the tutorial would apply to the base game and "reports" coming from the base game that might cause
            the tutorial to go onto the next step.
        </div>
        <div>
            By structuring each step as a list of requests and a list of reports, the tutorial steps became easily reoderable and adjustable. 
            Extra programming would only be needed for new reports or requests unused elsewhere. We iterated on the tutorial many times, and the
            approach minimized additional programming for the feature.
        </div>
        <div>
            There also were parts to the base game I had a hand in. The "reveal" power-up, the "NEW LETTER" pop-ups, and the chance to offramp
            after round five by framing the four afterwards as bonus.
        </div>
        <div class="flex flex-nowrap">
            <img class="w-full" src="\imgs\addagrams-round-5-offramp.png" alt="Puzzle won. Score: 45/45. Perfection! Show Game Summary or Play Bonus Rounds?"/>
            <img class="w-full" src="\imgs\addagrams-new-letter.png" alt="New Letter: D."/>
            <img class="w-full" src="\imgs\addagrams-reveal-choose.png" alt="Tap a rack to reveal a word. Tap the button again to cancel."/>
        </div>
        <div>
            I integrated packages and APIs to achieve the "meta game" features. For having a classic mode for the users to play a game of
            <span class="italic">Addagrams</span>, I recreated the algorithms initially made using TypeScript in C#. I halved file sizes and 
            decreased read time of puzzle data by converting from JSON to binary, and created an algorithm for traversing the data to generate a
            puzzle when players pick classic mode.
        </div>
        <div class="flex flex-nowrap">
            <img class="w-full" src="\imgs\addagrams-share-text.png" alt="Sharing text."/>
            <img class="w-full" src="\imgs\addagrams-upgrades.png" alt="Upgrades. No Ads. All Puzzles."/>
            <img class="w-full" src="\imgs\addagrams-classics-menu.png" alt="Classic Mode. Choose a difficulty."/>
        </div>
        <div>
            After the launch in May, I worked on some further refactoring so Noah could possibly use some of these systems in future mobile games.
            Upgraded the codebase's means of reporting events and requesting actions. Implemented and taught the client about C#'s built-in event
            syntax for reporting. Adapted the service locator and command design patterns for where there was requesting (i.e. pop-ups and analytics).
        </div>
        <div>
            The game had a table at 2023's PlayNYC, showing off the newly released app. I said hi to Noah, we caught up, and I subbed in to run the game's
            booth a little near the end so he had a chance to walk around himself.
        </div>
        <div class="flex">
            <blockquote class="instagram-media min-h-full" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/CvmllgVu-Ea/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CvmllgVu-Ea/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CvmllgVu-Ea/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by @playaddagrams</a></p></div></blockquote>
            <blockquote class="instagram-media min-h-full" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/CvxbN6ZNrvi/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/CvxbN6ZNrvi/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/CvxbN6ZNrvi/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Noah Rosenfield (@almost_infamous)</a></p></div></blockquote>
            <script async src="//www.instagram.com/embed.js"></script>
        </div>
    </div>
</div>
