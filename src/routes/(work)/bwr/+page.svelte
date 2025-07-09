<script lang="ts">
	import CodeSample from '$lib/comps/CodeSample.svelte';
	import LinkSpan from '$lib/comps/LinkSpan.svelte';
	import FullBodyBg from '$lib/comps/FullBodyBg.svelte';
	import ImgListSplit from '$lib/comps/ImgListSplit.svelte';
	import SectionHeader from '$lib/comps/SectionHeader.svelte';
	import ToolIconImage from '$lib/comps/ToolIconImage.svelte';
	import SectionSecondHeader from '$lib/comps/SectionSecondHeader.svelte';
	import HeadTitle from '$lib/comps/HeadTitle.svelte';
</script>

<HeadTitle name="Black White Red" />

<div
	class="flex justify-center bg-[url(/imgs/bwr-beta-fields.png)] bg-contain bg-center bg-no-repeat"
>
	<div class="flex w-full max-w-screen-lg flex-col items-center gap-5 p-16">
		<p class="text-2xl font-bold text-red-800">Black White Red</p>
	</div>
</div>

<FullBodyBg>
	<div class="flex justify-center p-6">
		<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
			<div class="flex w-full grid-cols-2 flex-col gap-3 leading-7 md:grid md:gap-5">
				<p>
					<span class="italic">Black White Red (BWR)</span> is a first-person, action-based, 5v5 PvP
					game. Get across the map to capture enemy portals in order to score points, all while your
					abilities change as you traverse to different sections of the map. Defend, fight, evade, and
					capture.
				</p>
				<div class="flex w-full flex-col gap-0">
					<p class="italic">Product Owner & Systems Programmer</p>
					<p>Team Size: 8</p>
					<p>Scale: Tech Demo</p>
					<p>Development Period: June 2022–August 2022</p>
					<p>Tools Used:</p>
					<div class="flex w-full flex-row gap-0.5 pt-3 md:pt-5">
						{#each ['C#', 'Unity', 'Git'] as tool}
							<div class="flex w-full flex-col items-center justify-start gap-1">
								<ToolIconImage {tool} />
								<p class="text-center leading-normal">{tool}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div
				id="727349919224428840"
				align="center"
				style="width: 100%; overflow-y: hidden;"
				class="wcustomhtml"
			>
				<iframe
					title="BWR Itch.io"
					src="https://itch.io/embed/1636972?bg_color=222222&amp;fg_color=eeeeee&amp;link_color=c00f0f&amp;border_color=363636"
					width="100%"
					height="167"
					frameborder="0"
					><a href="https://larnio.itch.io/blackwhitered"
						>Black White Red by Larnio, NicholasPerell</a
					></iframe
				>
			</div>

			<ImgListSplit
				src="/imgs/bwr-start-screen.png"
				alt="Rituals prototype with a fletcher showing the different dialogue arrows that store their lines, flag changes, and the archers that will require changes to be made to it."
				imgRight={false}
				header="Features"
				items={[
					'Archery for shooting arrow projectiles, and melee combat with swords.',
					"Arena divided into different shades that affect your stats and weapons (strongest near your own portal, most evasive near the other team's portal).",
					"UI and materials that change to reflect a player's shade and team. Additional UI for Game score and kill feed.",
					"Client-side music that changes depending on your shade, rising in intensity as you near capturing the other team's portal.",
					"Spatialized sound that has variations for if the sound is from the player's team or enemy team."
				]}
			/>
			<ImgListSplit
				src="\imgs\bwr-white-home-base.png"
				alt="Game Summary Image"
				imgRight={true}
				header="Contributions"
				items={[
					'Programmed the shade system, and scoring by capturing portals.',
					'Implemented combat and weapon swapping.',
					'Connected the FMOD parameters to the game’s client-side variables, and programmed a system to call the correct FMOD event for ally versus enemy sounds.',
					'Created the UI for player stats and game score.',
					"Manged the project's backlog with producer.",
					'Programmed the third-person and first-person animators receiving the correct parameters.',
					'Created the start and options screen.'
				]}
			/>
			<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>
			<SectionHeader header="Development of Black White Red"></SectionHeader>
			<p>
				<span class="italic">BWR</span> was developed by a small team of 8 over the Summer of 2022.
				Based on a mini-game originally made in <span class="italic">Minecraft</span>, we wanted to
				make this game come to life and see how well it would work as a standalone. It was my first
				foray into a game project involving network programming, and turned out to be a very
				fulfilling experience.
			</p>
			<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>
			<SectionHeader header="Technical information"></SectionHeader>
			<SectionSecondHeader header="Archery" />
			<CodeSample
				language="csharp"
				source={`// ArrowController.cs Initialization
[ClientRpc(Delivery = RpcDelivery.Reliable)]
public void InitClientRpc(Team _team, ulong _shooterId, int _shadeValue, Vector3 startingPosition, Vector3 startDirection, float amountCharged, float timeShot)
{
    Debug.Log("Arrow Inited");

    Vector3 startingVelocity = startDirection * Mathf.Lerp(minimumStartingVelocity, maximumStartingVelocity, amountCharged);
    float timeSinceShot = NetworkManager.Singleton.LocalTime.TimeAsFloat - timeShot;

    gameObject.SetActive(true);
    rb.constraints = RigidbodyConstraints.None;

    team = _team;
    shadeValue = _shadeValue;
    shooterId = _shooterId;
    transform.position = startingPosition + startingVelocity * timeSinceShot + .5f * Physics.gravity * timeSinceShot * timeSinceShot;
    rb.velocity = startingVelocity + Physics.gravity * timeSinceShot;

    timer = timeBeforeDespawn;
    appearance.forward = rb.velocity;
    landed = false;

    //When defaultly enabled in NGO, the collider would accidentally act as not a trigger, causing "flying" glitch caught by the testers
    sphereCollider.enabled = true;

    if (IsServer || IsHost)
    {
        RaycastHit temp;
        Ray ray = new Ray(startingPosition, transform.position);
        RaycastHit[] raycastHits = Physics.SphereCastAll(ray, .25f, Vector3.Distance(startingPosition, transform.position), collisionDetectionMask);
        for(int i = 0; i < raycastHits.Length; i++)
        {
            temp = raycastHits[i];
            Debug.LogWarning("SphereCastAll index "+ i +": "+ temp.collider.name +" "+temp.distance);
            if (
                temp.collider.gameObject.layer != 6 || //Isn't a player
                temp.collider.gameObject.GetComponent<PlayerController>().CurrentTeam != team //Is on the enemy team
                )
            {
                Debug.LogWarning("PROCESSING SphereCastAll index " + i + ": " + temp.collider.name + " " + temp.distance);
                ProcessCollision(temp.collider);
                break;
            }
        }
    }
}`}
			></CodeSample>
			<CodeSample
				language="csharp"
				source={`// ArrowController.cs Processing Collision
private void ProcessCollision(Collider hit)
{

    //Handle ground, bomb, or enemy teammate
    switch (hit.gameObject.layer)
    {
        //Ground
        case 0:
            Debug.Log("Arrow hit ground " + hit.name);
            StickIntoPlaceClientRpc(hit.ClosestPoint(transform.position));
            timer = timeBeforeDespawnOnceLanded;
            landed = true;
            sphereCollider.enabled = false;
            break;
        //Players
        case 6:
            Debug.Log("Arrow hit player " + hit.name);
            PlayerController playerController = hit.GetComponent<PlayerController>();
            if (playerController.CurrentTeam != team)
            {
                //Knockback
                playerController.GetComponent<PlayerKnockbackController>().KnockbackPlayer(rb.velocity, kit.playerStats[shadeValue].bowKnockbackMultiplier);

                //Damage
                playerController.GetComponent<PlayerHealth>().TakeDamage(
                    rb.velocity.magnitude * damageMultiplier * kit.playerStats[shadeValue].bowDamageMultiplier,
                    DamageSource.ARROW,
                    NetworkManager.Singleton.SpawnManager.SpawnedObjects[shooterId].GetComponent<PlayerController>());

                //Unload
                sphereCollider.enabled = false;
                ArrowPool.Instance.UnloadArrow(gameObject);
            }
            break;
        //Bomb
        case 9:
            sphereCollider.enabled = false;
            ArrowPool.Instance.UnloadArrow(gameObject);
            break;
        default:
            break;
    }
}`}
			></CodeSample>
			<SectionSecondHeader header="Music Reacting to the Local Player's Shade" />
			<CodeSample
				language="csharp"
				source={`// MusicShadeController.cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MusicShadeController : MonoBehaviour
{
    public FMODUnity.EventReference musicEventName;
    public FMOD.Studio.EventInstance musicEvent;

    [Space]

    [SerializeField]
    [Tooltip("Parameter name for the shade/layer value")]
    string param;
    [SerializeField]
    int lastSetValue;

    [SerializeField]
    PlayerController localPlayer;

    void Start()
    {
        musicEvent = FMODUnity.RuntimeManager.CreateInstance(musicEventName);
    }

    private void OnEnable()
    {
        MatchManager.onMatchStart += HandleMatchStart;
        ListenToPlayer();
    }

    private void OnDisable()
    {
        MatchManager.onMatchStart -= HandleMatchStart;
        StopListeningToPlayer();
    }

    private void HandleShadeChange(PlayerStats _value)
    {
        musicEvent.setParameterByName(param, localPlayer.ShadeValue);
        lastSetValue = localPlayer.ShadeValue;
    }

    private void ListenToPlayer()
    {
        if (localPlayer != null)
        {
            localPlayer.onShadeChange += HandleShadeChange;
        }
    }

    private void StopListeningToPlayer()
    {
        if(localPlayer != null)
        {
            localPlayer.onShadeChange -= HandleShadeChange;
        }
    }

    private void HandleMatchStart()
    {
        localPlayer = MatchManager.Instance.localPlayerController;

        musicEvent.setParameterByName(param, localPlayer.ShadeValue);
        lastSetValue = localPlayer.ShadeValue;

        musicEvent.start();

        ListenToPlayer();
    }

    private void OnDestroy()
    {
        musicEvent.stop(FMOD.Studio.STOP_MODE.ALLOWFADEOUT);
    }
}`}
			></CodeSample>
		</div>
	</div>
</FullBodyBg>
