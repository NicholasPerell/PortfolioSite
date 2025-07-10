<script lang="ts">
	import CodeSample from '$lib/comps/CodeSample.svelte';
    import HeadTitle from '$lib/comps/HeadTitle.svelte';
	import ImgListSplit from '$lib/comps/ImgListSplit.svelte';
	import SectionHeader from '$lib/comps/SectionHeader.svelte';
	import SectionSecondHeader from '$lib/comps/SectionSecondHeader.svelte';
	import ToolIconImage from '$lib/comps/ToolIconImage.svelte';
	import { ALink, Formattable } from '$lib/services/datatypes';
	import { type Tools } from '$lib/services/datatypes';
	
	const tools: Tools[] = ['Unity', 'Git', 'C#', 'Ink', 'Google Cloud TTS'];
</script>

<HeadTitle name="Project Nautilus" />

<div
	class="flex justify-center bg-[#02001A] bg-[url(/imgs/pn-trailer-title-backdrop.gif)] bg-cover bg-center bg-no-repeat"
>
	<div class="flex w-2/3 sm:w-full h-full max-w-screen-lg flex-col items-center gap-5 py-8 sm:p-16">
		<img src="\imgs\pn-title.png" alt="Project Nautilus" />
	</div>
</div>

<div class="flex w-full justify-center bg-gray-100 p-6 dark:bg-pn-green-5 dark:text-pn-green-1 text-black dark:font-mono">
	<div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
		<div class="flex flex-col md:grid w-full grid-cols-2 gap-3 md:gap-5 leading-7">
			<p>
				<span class="italic">Project Nautilus</span> is a first-person, exploration game set in the not-so-distant future.
				Remote operate a drone to explore this newly discovered cave system. Use tools to break away
				obstacles and propel your way down to find what lies below these long forgotten depths below.
			</p>
			<div class="flex w-full flex-col gap-0">
				<p class="italic">Technical & Narrative Director</p>
				<p>Team Size: 24</p>
				<p>Scale: Small Game</p>
				<p>Development Period: August 2021–May 2022</p>
				<p>Tools Used: </p>
                <div class="w-full flex flex-row gap-0.5 pt-3 md:pt-5">
                    {#each tools as tool}
                    <div class="w-full flex flex-col items-center justify-start gap-1">  
                        <ToolIconImage length={40} {tool} />  
                    <p class="text-center leading-normal">{tool}</p>
                    </div>
                    {/each}
                </div>
			</div>
		</div>

		<iframe
			src="https://store.steampowered.com/widget/1953870/"
			frameborder="0"
			width="100%"
			height="190"
			title="Steam Embed"
		></iframe>

		<ImgListSplit src="\imgs\pn-first-angler.jpg" alt="Project Nautilus" imgRight={false} header="Features" items={[
			'Work terminal UI, immersing the player in the role of a drone operator.',
			'Environmental factors such as light and temperature affect the behavior of enemies and the player’s drone.',
			'Complex narrative communicated through in-game systems such as an AI narrator and a mock email inbox.',
			'Underwater cave system with multiple layers to explore through.',
		]}/>

		<ImgListSplit src="\imgs\pn-god-thing.png" alt="Project Nautilus" imgRight={true} header="Contributions" items={[
			'Programmed Sparse Voxel Octrees for our game’s enemy AI to navigate 3D underwater space.',
			'Designed, programmed, and implemented the game’s narrative pipeline.',
			'Created customizable subtitle UI for the game to make the narrative more accessible.',
			'Worked with clarity of vision to bridge the gaps for all the team’s disciplines throughout development.',
			new Formattable(
                'Coordinated and stitched together %s, working with teammates across all disciplines.',
                [new ALink(
                    'the game’s ending sequence', 
                    'dark:text-pn-yellow-1 dark:hover:text-pn-yellow-2 dark:active:text-pn-red text-gray-900 underline hover:text-gray-800 hover:no-underline active:text-gray-700', 
                    'https://youtu.be/mJUcYHv2lTo', 
                    '_blank'
                )]
            ),
			'Directed the programmers and outlined the requirements for the game’s backend to support the world’s size.',
			'Ran writer’s rooms of writers and designers to structure the narrative arc, did developmental editing, and project managed the writing team.',
		]}/>

		<div class="my-1 h-px w-full bg-black dark:bg-pn-green-1"></div>

        <SectionHeader header="Development of Project Nautilus"/>

        <div>
            Initially, <span class="italic">Project Nautilus</span> was my senior capstone project in fall 2021, with a team of 9 and myself as the game's AI programmer. The game was made in Unity. I researched then implemented <span class="italic">Warframe</span>'s usage of sparse voxel octrees for our game’s AI to navigate 3D underwater space, and set up customizable subtitle UI for the game to make the narrative more accessible. I also used my experience writing and running the college's literary magazine to both flesh out the world in documentation then network to find a narrative writer to join our team.
        </div>
        <div>
            We pitched for our game to be green lit and continue development in the 2022 spring semester, which you can watch us present below.
        </div>

        <iframe class="aspect-[928/552] w-full" src="https://www.youtube.com/embed/P5C7UkeZAKM" title="ProjectNautilus 2021 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	
        <div>We successfully presented, and were green lit to keep developing. In the spring, our team was 24 strong. As technical and narrative director, I worked with 4 programmers, 3 narrative writers, and 1 copy editor for that duration of the project. I kicked off the research for our game's back end, which led to optimizations using multi-scene loading and LODs. I ran writer's rooms involving Design and Narrative to create the story, then programmed and implemented our entire narrative pipeline.</div>

        <div>For some insight into how we at Isthmus Studios approached development with narrative included as its own discipline, check out the microtalk I gave at The Loaf in March 2022.</div>
    
        <iframe class="aspect-[928/552] w-full" src="https://www.youtube.com/embed/iQEwtDx63fw" title="Narrative Inspirations for Project Nautilus — Microtalk @ The Loaf, March 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div>The game was finished in May 2022 for the Game Studio's Senior Showcase. I was one of the three people asked to present and discuss the game while it was played. Watch <span class="italic">Project Nautilus</span>'s part in the Senior Show here!</div>

        <iframe class="aspect-[1024/575] w-full" title="Project Nautilus Game Studio Senior Show Segment" src="https://player.vimeo.com/video/709690636?h=3b5a760967&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479#t=143m19s" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

		<div class="my-1 h-px w-full bg-black dark:bg-pn-green-1"></div>
		<SectionHeader header="Technical Information"/>
		<SectionSecondHeader header="Sparse Voxel Octree & Pathfinding" />
        <img class="w-full" src="./imgs/pn-fade-thumbnail.png" alt="Project Nautilus SVO Gizmos">
		<div>SVODataSets.cs</div>
		<CodeSample language="csharp" source=
	{`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// script below created by Nicholas Perell, standard copyright and usage applies.

/// <summary>
/// 32-bit encoded value that is a way to turn 3D coords 
/// into a 1D pattern with easy traversibility.
/// </summary>
[System.Serializable]
public class SVOMortonCode
{
    [SerializeField]
    private int mCode;

    public SVOMortonCode(int code)
    {
        mCode = code;
    }

    public SVOMortonCode(Vector3Int pos)
    {
        mCode = EncodeMorton(pos);
    }

    public int GetCode()
    {
        return mCode;
    }

    public Vector3Int GetPos()
    {
        return DecodeMorton(mCode);
    }

    static public int EncodeMorton(Vector3Int pos)
    {
        int[] rtn = new int[1];

        BitArray start = new BitArray(new int[] { pos.x, pos.y, pos.z });

        BitArray shuffled = new BitArray(start.Length);

        for (int i = 0; i < 32; i++)
        {
            shuffled.Set(i * 3, start.Get(i));
            shuffled.Set(i * 3 + 1, start.Get(i + 32));
            shuffled.Set(i * 3 + 2, start.Get(i + 64));
        }

        BitArray clipped = new BitArray(32);
        for (int i = 0; i < 32; i++)
        {
            clipped.Set(i, shuffled.Get(i));
        }

        clipped.CopyTo(rtn, 0);

        return rtn[0];
    }

    static public Vector3Int DecodeMorton(int morton)
    {
        Vector3Int rtn = new Vector3Int();
        int[] arr = new int[3];

        BitArray start = new BitArray(new int[] { morton });

        BitArray unshuffled = new BitArray(32 * 3);

        for (int i = 0; i < 11; i++)
        {
            unshuffled.Set(i, start.Get(i * 3));
            unshuffled.Set(i + 32, start.Get(i * 3 + 1));
            if (i * 3 + 2 < 32)
            {
                unshuffled.Set(i + 64, start.Get(i * 3 + 2));
            }
        }

        unshuffled.CopyTo(arr, 0);

        rtn.x = arr[0];
        rtn.y = arr[1];
        rtn.z = arr[2];

        return rtn;
    }

    string BitString(BitArray b)
    {
        string rtn = "";

        foreach (bool e in b)
        {
            rtn += e ? "1" : "0";
        }

        return rtn;
    }

}

/// <summary>
/// 32-bit value that holds the data about how to travel 
/// to a neighboring node or subnode. Data includes the 
/// layer, index in a node array, and (possibly when 
/// regarding leaf nodes) the subnode index. 
/// </summary>
[System.Serializable]
public struct SVOLink
{
    private const int LAYER_SIZE = 4;
    private const int NODE_SIZE = 22;
    private const int SUBNODE_SIZE = 6;
    private const int SUBNODE_LAYER_MARKER = 15;

    [SerializeField]
    private int mLink;

    public void Invalidate()
    {
        mLink = SparseVoxelOctree.INVALID;
    }

    public SVOLink(int layerIndex, int nodeIndex, int subnodeIndex)
    {
        BitArray lay = new BitArray(new int[] { layerIndex });
        BitArray node = new BitArray(new int[] { nodeIndex });
        BitArray subnode = new BitArray(new int[] { subnodeIndex });

        BitArray linkBitsArr = new BitArray(32);

        for (int i = 0; i < LAYER_SIZE; i++)
        {
            linkBitsArr.Set(i, lay.Get(i));
        }
        for (int i = 0; i < NODE_SIZE; i++)
        {
            linkBitsArr.Set(i + 4, node.Get(i));
        }
        for (int i = 0; i < SUBNODE_SIZE; i++)
        {
            linkBitsArr.Set(i + 26, subnode.Get(i));
        }

        int[] temp = new int[1];

        linkBitsArr.CopyTo(temp, 0);

        mLink = temp[0];
    }

    public int GetLayerIndex()
    {
        int index = GetIndex(LAYER_SIZE, 0);

        if(index == SUBNODE_LAYER_MARKER)
        {
            index = -1;
        }

        return index;
    }

    public int GetNodeIndex()
    {
        return GetIndex(NODE_SIZE, LAYER_SIZE);
    }

    public int GetSubnodeIndex()
    {
        return GetIndex(SUBNODE_SIZE, LAYER_SIZE + NODE_SIZE);
    }

    private int GetIndex(int size, int offset)
    {
        BitArray linkBitsArr = new BitArray(new int[] { mLink });

        BitArray arr = new BitArray(size);
        for (int i = 0; i < size; i++)
        {
            arr.Set(i, linkBitsArr.Get(offset + i));
        }

        int[] rtn = new int[1];
        arr.CopyTo(rtn, 0);

        return rtn[0];
    }

    public bool IsValid()
    {
        return mLink != SparseVoxelOctree.INVALID;
    }

    public override bool Equals(object obj)
    {
        return obj is SVOLink link &&
               mLink == link.mLink;
    }

    public override int GetHashCode()
    {
        return 1674397736 + mLink.GetHashCode();
    }

    public static bool operator == (SVOLink a, SVOLink b)
    {
        return a.mLink == b.mLink;
    }
    public static bool operator !=(SVOLink a, SVOLink b)
    {
        return a.mLink != b.mLink;
    }

    public static bool operator >(SVOLink a, SVOLink b)
    {
        return a.mLink > b.mLink;
    }
    public static bool operator <(SVOLink a, SVOLink b)
    {
        return a.mLink < b.mLink;
    }
}

[System.Serializable]
public class SVOLinkComparer : IComparer<SVOLink>
{
    public int Compare(SVOLink x, SVOLink y)
    {
        if (x == y) return 0;
        else if (x > y) return 1;
        else return -1;
    }
}

[System.Serializable]
public class SVONode
{
    public SVOMortonCode mPosition;
    public SVOLink mParentLink;
    public SVOLink mChildLink;
    public SVOLink[] mNeighborLinks;
    public bool mIsFilled;

    public SVONode()
    {
        mParentLink.Invalidate();
        mChildLink.Invalidate();
        mNeighborLinks = new SVOLink[6];
        foreach (SVOLink link in mNeighborLinks) link.Invalidate();
        mIsFilled = false;
        mPosition = new SVOMortonCode(-1);
    }

    public bool IsChildless()
    {
        return !mChildLink.IsValid();
    }
}

[System.Serializable]
public class SVOLeafNode
{
    public SVOMortonCode mPosition;

    public SVOLink mParentLink;
    public SVOLink[] mNeighborLinks;

    //Each of the 64 bits is for if the 4x4 griding of voxel subnodes are filled by something
    public System.UInt64 mSubnodesStatus;

    public SVOLeafNode()
    {
        mParentLink.Invalidate();
        mNeighborLinks = new SVOLink[6];
        foreach (SVOLink link in mNeighborLinks) link.Invalidate();
        mSubnodesStatus = System.UInt64.MinValue;
        mPosition = new SVOMortonCode(-1);
    }

    //Means the entire leaf node is filled up by something
    public bool mIsFilled { get { return mSubnodesStatus == System.UInt64.MaxValue; } }
    public bool mIsEmpty { get { return mSubnodesStatus == System.UInt64.MinValue; } }
}

[System.Serializable]
public struct SVOLayer
{
    public SVONode[] mNodes;
}

[System.Serializable]
public class SVOData
{
    public SVOLayer[] mLayers;
    public SVOLeafNode[] mLeaves;

    public enum AccessResult
    {
        FAILURE,
        INVALID,
        NODE,
        LEAFNODE,
        SUBNODE
    }

    public AccessResult AccessWithLink(SVOLink link, out SVONode node, out SVOLeafNode leafNode)
    {
        node = new SVONode();
        leafNode = new SVOLeafNode();

        if (!link.IsValid())
        {
            return AccessResult.INVALID;
        }

        int layerIndex = link.GetLayerIndex();
        int nodeIndex = link.GetNodeIndex();
        int subnodeIndex = link.GetSubnodeIndex();

        if(layerIndex < 1 && nodeIndex >= 0 && nodeIndex < mLeaves.Length)
        {
            leafNode = mLeaves[nodeIndex];
            return layerIndex == 0 ? AccessResult.LEAFNODE : AccessResult.SUBNODE;
        }
        else if(layerIndex - 1 < mLayers.Length && nodeIndex >= 0 && nodeIndex < mLayers[layerIndex-1].mNodes.Length)
        {
            node = mLayers[layerIndex - 1].mNodes[nodeIndex];
            return AccessResult.NODE;
        }

        return AccessResult.FAILURE;
    }

    public AccessResult AccessNodeWithLink(SVOLink link, out SVONode node)
    {
        node = new SVONode();

        if (!link.IsValid())
        {
            return AccessResult.INVALID;
        }

        int layerIndex = link.GetLayerIndex();
        int nodeIndex = link.GetNodeIndex();
        int subnodeIndex = link.GetSubnodeIndex();

        if (layerIndex - 1 < mLayers.Length && nodeIndex >= 0 && nodeIndex < mLayers[layerIndex - 1].mNodes.Length)
        {
            node = mLayers[layerIndex - 1].mNodes[nodeIndex];
            return AccessResult.NODE;
        }

        return AccessResult.FAILURE;
    }

    public AccessResult AccessLeafNodeWithLink(SVOLink link, out SVOLeafNode leafNode)
    {
        leafNode = new SVOLeafNode();

        if (!link.IsValid())
        {
            return AccessResult.INVALID;
        }

        int layerIndex = link.GetLayerIndex();
        int nodeIndex = link.GetNodeIndex();

        if (layerIndex < 1 && nodeIndex >= 0 && nodeIndex < mLeaves.Length)
        {
            leafNode = mLeaves[nodeIndex];
            return layerIndex == 0 ? AccessResult.LEAFNODE : AccessResult.SUBNODE;
        }

        return AccessResult.FAILURE;
    }
}

[System.Serializable]
public struct SVOSystem
{
    public SVOData mData;
    public Vector3 mOrigin;
    public float mLeafNodeSize { get { return mLeafSubnodeSize * 4; } }
    public float mLeafSubnodeSize;
    public int mLayersUsed;

    public SVOSystem(SVOData data, Vector3 origin, float subnodeSize, int layersUsed)
    {
        mData = data;
        mOrigin = origin;
        mLeafSubnodeSize = subnodeSize;
        mLayersUsed = layersUsed;
    }

    public SVOLink FindNodeHoldingPosition(Vector3 pos)
    {
        int layerIndex, nodeIndex, subnodeIndex;
        SVOLink rtn = new SVOLink();
        rtn.Invalidate();

        Vector3 offset = pos - mOrigin;

        //Layer
        layerIndex = mLayersUsed - 1;

        //Node
        float size = mLeafNodeSize * Mathf.Pow(2, layerIndex);
        Vector3Int coord = new Vector3Int((int)(offset.x / size), (int)(offset.y / size), (int)(offset.z / size));
        nodeIndex = SVOMortonCode.EncodeMorton(coord);

        //Subnode
        subnodeIndex = 0;

        Vector3 linkCenter;

        if (mData == null ||mData.mLayers == null || layerIndex - 1 < 0 || layerIndex - 1 >= mData.mLayers.Length || nodeIndex < 0 || nodeIndex >= mData.mLayers[layerIndex - 1].mNodes.Length)
        {
           return rtn;
        }

        SVONode tempNode = mData.mLayers[layerIndex - 1].mNodes[nodeIndex];
        rtn = new SVOLink(layerIndex, nodeIndex, subnodeIndex);
        while (layerIndex > 0 && !tempNode.IsChildless())
        {
            linkCenter = GetPositionOfCenterOfLink(rtn);
            layerIndex = tempNode.mChildLink.GetLayerIndex();
            nodeIndex = tempNode.mChildLink.GetNodeIndex();
            nodeIndex |= Convert.ToInt32(pos.x > linkCenter.x) << 0;
            nodeIndex |= Convert.ToInt32(pos.y > linkCenter.y) << 1;
            nodeIndex |= Convert.ToInt32(pos.z > linkCenter.z) << 2;
            if (layerIndex > 0)
            {
                tempNode = mData.mLayers[layerIndex - 1].mNodes[nodeIndex];
                rtn = new SVOLink(layerIndex, nodeIndex, subnodeIndex);
            }
        }

        if (layerIndex == 0)
        {
            SVOLeafNode tempLeafNode = mData.mLeaves[nodeIndex];
            rtn = new SVOLink(layerIndex, nodeIndex, 0);
            if (!tempLeafNode.mIsEmpty) //SUBNODES TIME! FINALLY!
            {
                layerIndex = -1;
                linkCenter = GetPositionOfCenterOfLink(rtn) - (Vector3.one * mLeafSubnodeSize * 2);
                offset = pos - linkCenter;

                coord = new Vector3Int((int)(offset.x / mLeafSubnodeSize), (int)(offset.y / mLeafSubnodeSize), (int)(offset.z / mLeafSubnodeSize));
                subnodeIndex = SVOMortonCode.EncodeMorton(coord);

                rtn = new SVOLink(layerIndex, nodeIndex, subnodeIndex);
            }
        }

        return rtn;
    }

    public Vector3 GetPositionOfCenterOfLink(SVOLink link)
    {
        Vector3 rtn = -Vector3.one;

        if (link.IsValid())
        {
            int layerIndex = link.GetLayerIndex();
            int nodeIndex = link.GetNodeIndex();
            int subnodeIndex = link.GetSubnodeIndex();
            Vector3 offsetToCenter = Vector3.one * mLeafNodeSize / 2 * Mathf.Pow(2, layerIndex);
            float size = mLeafNodeSize * Mathf.Pow(2, layerIndex);

            if (layerIndex == -1) //Subnode!
            {
                if (nodeIndex < mData.mLeaves.Length && nodeIndex > -1)
                {
                    rtn = (Vector3)mData.mLeaves[nodeIndex].mPosition.GetPos() * mLeafNodeSize + mOrigin;
                    rtn += (Vector3)SVOMortonCode.DecodeMorton(subnodeIndex) * mLeafSubnodeSize + Vector3.one * mLeafSubnodeSize / 2;
                }
            }
            else if (layerIndex == 0) //Leaf!
            {
                if (nodeIndex < mData.mLeaves.Length && nodeIndex > -1)
                {
                    rtn = (Vector3)mData.mLeaves[nodeIndex].mPosition.GetPos() * size + mOrigin + offsetToCenter;
                }
            }
            else if (layerIndex < mData.mLayers.Length + 1) //Node!
            {
                layerIndex--;
                if (mData.mLayers != null)
                {
                    if (mData.mLayers[layerIndex].mNodes != null)
                    {
                        if (nodeIndex < mData.mLayers[layerIndex].mNodes.Length && nodeIndex > -1)
                        {
                            if (mData.mLayers[layerIndex].mNodes[nodeIndex] != null)
                            {
                                if (mData.mLayers[layerIndex].mNodes[nodeIndex].mPosition != null)
                                {
                                    Vector3 coords = (Vector3)mData.mLayers[layerIndex].mNodes[nodeIndex].mPosition.GetPos();
                                    rtn = coords * size + mOrigin + offsetToCenter;
                                }
                            }
                        }
                    }
                }
            }
        }

        return rtn;
    }
}`}></CodeSample>
		<div>SparseVoxelOctree.cs</div>
		<CodeSample language="csharp" source=
	{`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

// script below created by Nicholas Perell, standard copyright and usage applies.
public class SparseVoxelOctree : MonoBehaviour
{
    public const int MAX_LAYERS = 13;
    public const int MAX_NODES_PER_LAYER = 4194304;

    public const int INVALID = -1;

    private static Vector3Int[] DIRECTIONS = 
            new Vector3Int[6] { new Vector3Int(1,0,0), new Vector3Int(-1,0,0),
                                new Vector3Int(0,1,0), new Vector3Int(0,-1,0),
                                new Vector3Int(0,0,1), new Vector3Int(0,0,-1) };

    [Header("Data Storage")]
    [Space]
    [SerializeField]
    private SVOBaked dataFile;
    [Space]
    [Header("Level Space")]
    [Space]
    [SerializeField]
    [Tooltip("Volume of the cube that encompasses the level's world space.")]
    [Min(0.01f)]
    private float desiredWorldSize = 196.0f;
    [SerializeField]
    [Tooltip("The smallest volume cube the SVO will check for collisions.")]
    [Min(0.01f)]
    private float leafSubnodeSize = 0.36f;
    [SerializeField]
    private LayerMask layersConsideredCollisions;

    //World sizing and layers
    private float leafNodeSize;
    private float actualWorldSize;
    private int layersUsed;

    //Node amounts
    private int layerMaxFits;
    private int layer0Fits;
    private int leafNodesNum;

    [HideInInspector]
    public SVOData mData;

    private void OnValidate()
    {

        if ((leafSubnodeSize * 4) / desiredWorldSize < 1.0f / 160.0f)
        {
            Debug.LogWarning("The smallest resolution is small enough that if the game were to make a leaf node on every layer, the memory could run out of space. This might be fine, but be careful.");
        }

        if (desiredWorldSize < leafSubnodeSize * 64)
        {
            Debug.LogError("Layer 1's nodes would be bigger than the world area.");
        }
    }

    public SVOLink FindNodeHoldingPosition(Vector3 pos)
    {
        int layerIndex, nodeIndex, subnodeIndex;
        SVOLink rtn = new SVOLink();
        rtn.Invalidate();

        Vector3 offset = pos - transform.position;

        //Layer
        layerIndex = layersUsed - 1;

        //Node
        float size = leafNodeSize * Mathf.Pow(2, layerIndex);
        Vector3Int coord = new Vector3Int((int)(offset.x / size), (int)(offset.y / size), (int)(offset.z / size));
        nodeIndex = SVOMortonCode.EncodeMorton(coord);

        //Subnode
        subnodeIndex = 0;

        Vector3 linkCenter;
        SVONode tempNode = mData.mLayers[layerIndex - 1].mNodes[nodeIndex];
        rtn = new SVOLink(layerIndex, nodeIndex, subnodeIndex);
        while (layerIndex > 0 && !tempNode.IsChildless())
        {
            linkCenter = GetPositionOfCenterOfLink(rtn);
            layerIndex = tempNode.mChildLink.GetLayerIndex();
            nodeIndex = tempNode.mChildLink.GetNodeIndex();
            nodeIndex |= Convert.ToInt32(pos.x > linkCenter.x) << 0;
            nodeIndex |= Convert.ToInt32(pos.y > linkCenter.y) << 1;
            nodeIndex |= Convert.ToInt32(pos.z > linkCenter.z) << 2;
            if(layerIndex > 0)
            {
                tempNode = mData.mLayers[layerIndex - 1].mNodes[nodeIndex];
                rtn = new SVOLink(layerIndex, nodeIndex, subnodeIndex);
            }
        }

        if(layerIndex == 0)
        {
            SVOLeafNode tempLeafNode = mData.mLeaves[nodeIndex];
            rtn = new SVOLink(layerIndex, nodeIndex, 0);
            if (!tempLeafNode.mIsEmpty) //SUBNODES TIME! FINALLY!
            {
                layerIndex = -1;
                linkCenter = GetPositionOfCenterOfLink(rtn) - (Vector3.one * leafSubnodeSize * 2);
                offset = pos - linkCenter;

                coord = new Vector3Int((int)(offset.x / leafSubnodeSize), (int)(offset.y / leafSubnodeSize), (int)(offset.z / leafSubnodeSize));
                subnodeIndex = SVOMortonCode.EncodeMorton(coord);

                rtn = new SVOLink(layerIndex, nodeIndex, subnodeIndex);
            }
        }

        return rtn;
    }

    public Vector3 GetPositionOfCenterOfLink(SVOLink link)
    {
        Vector3 rtn = -Vector3.one;

        if (link.IsValid())
        {
            int layerIndex = link.GetLayerIndex();
            int nodeIndex = link.GetNodeIndex();
            int subnodeIndex = link.GetSubnodeIndex();
            Vector3 offsetToCenter = Vector3.one * leafNodeSize / 2 * Mathf.Pow(2, layerIndex);
            float size = leafNodeSize * Mathf.Pow(2, layerIndex);

            if (layerIndex == -1) //Subnode!
            {
                if (nodeIndex < mData.mLeaves.Length && nodeIndex > -1)
                {
                    rtn = (Vector3)mData.mLeaves[nodeIndex].mPosition.GetPos() * leafNodeSize + transform.position;
                    rtn += (Vector3)SVOMortonCode.DecodeMorton(subnodeIndex) * leafSubnodeSize;
                }
            }
            else if (layerIndex == 0) //Leaf!
            {
                if (nodeIndex < mData.mLeaves.Length && nodeIndex > -1)
                {
                    rtn = (Vector3)mData.mLeaves[nodeIndex].mPosition.GetPos() * size + transform.position + offsetToCenter;
                }
            }
            else if (layerIndex < mData.mLayers.Length + 1) //Node!
            {
                layerIndex--;
                if (mData.mLayers != null)
                {
                    if (mData.mLayers[layerIndex].mNodes != null)
                    {
                        if (nodeIndex < mData.mLayers[layerIndex].mNodes.Length && nodeIndex > -1)
                        {
                            if (mData.mLayers[layerIndex].mNodes[nodeIndex] != null)
                            {
                                if (mData.mLayers[layerIndex].mNodes[nodeIndex].mPosition != null)
                                {
                                    Vector3 coords = (Vector3)mData.mLayers[layerIndex].mNodes[nodeIndex].mPosition.GetPos();
                                    rtn = coords * size + transform.position + offsetToCenter;
                                }
                                else
                                {
                                    Debug.LogError("mLayers[" + layerIndex + "][" + nodeIndex + "].mPosition is null");
                                }
                            }
                            else
                            {
                                Debug.LogError("mLayers[" + layerIndex + "][" + nodeIndex + "] is null");
                            }
                        }
                    }
                    else
                    {
                        Debug.LogError("mLayers[" + layerIndex + "] is null");
                    }
                }
                else
                {
                    Debug.LogError("mLayers is null");
                }
            }
        }

        return rtn;
    }

    [ContextMenu("Generate SVO")]
    public void GenerateSVO()
    {
        mData = new SVOData();
        CalculateSizingValues();

        //Initialize the rows to be the number of non-leaf layers
        mData.mLayers = new SVOLayer[layersUsed - 1];

        LowResRasterize();

        CreateChildlessNodes();

        DetermineNeighborLinks();

        RasterizeLeafNodes();

        Debug.Log("Built!");
        WriteToScriptableObject();
    }

    private void CalculateSizingValues()
    {
        layersUsed = 0;

        //Size of layer 0, the leaf nodes.
        leafNodeSize = 4 * leafSubnodeSize;

        float layerSizing = leafNodeSize * 2;
        actualWorldSize = layerSizing;

        while (layerSizing < desiredWorldSize && layersUsed != MAX_LAYERS - 1)
        {
            layersUsed++;
            actualWorldSize = layerSizing;
            layerSizing *= 2;
        }

        if (layersUsed != MAX_LAYERS - 1)
        {
            //Node size at this layer doesn't support there being anymore 
            //than 1 of them in the world space; go down one layer.
            actualWorldSize /= 2;
            layersUsed--;
        }

        float maxNodeSize = actualWorldSize;
        layerMaxFits = Mathf.FloorToInt(desiredWorldSize / maxNodeSize);

        actualWorldSize = maxNodeSize * layerMaxFits;
        layer0Fits = Mathf.FloorToInt(actualWorldSize / leafNodeSize);

        layerMaxFits = (int)Mathf.Pow(layerMaxFits * 2, 3);

    }

    /// <summary>
    /// Looks at the layer 1 nodes to see where there needs to 
    /// be leaf (layer 0) nodes, then stores a listing of all 
    /// the "active" nodes in each layer. Connects the active
    /// parent and children nodes together.
    /// </summary>
    private void LowResRasterize()
    {
        List<int>[] filledListing = new List<int>[layersUsed - 1];
        for (int i = 0; i < filledListing.Length; i++)
        {
            filledListing[i] = new List<int>();
        }

        leafNodesNum = 0;

        int layer1Fits = layer0Fits / 2; //Half as many fit...
        float layer1Size = leafNodeSize * 2; //Because it's twice the size

        //Find how many layer 1 nodes have a collision in order to determine how many leaf (layer 0) nodes there have to be
        bool isFilled;
        Vector3 offset = layer1Size / 2 * Vector3.one;
        for (int i = 0; i < layer1Fits * layer1Fits * layer1Fits; i++)
        {
            //Test for collision in node
            Vector3Int pos = SVOMortonCode.DecodeMorton(i);

            Vector3 center = transform.position + ((Vector3)pos) * layer1Size + offset;

            isFilled = Physics.CheckBox(center, offset, Quaternion.identity, layersConsideredCollisions);

            if (isFilled)
            {
                filledListing[0].Add(SVOMortonCode.EncodeMorton(pos));
            }
        }

        //Calculate and make array for the planned number of leaf nodes
        int layer1FilledNum = filledListing[0].Count;
        leafNodesNum = 8 * layer1FilledNum;
        mData.mLeaves = new SVOLeafNode[leafNodesNum];

        //Go through and get the filled node positions of every layer above layer 1
        for (int i = 0; i < filledListing.Length - 1; i++)
        {
            foreach(int code in filledListing[i])
            {
                //Since we're using the Morton Codes, all we have to do is 
                //bit-shift 3 to the right to find the new Morton Code for 
                //the parent!
                int parentCode = code >> 3;
                if (!filledListing[i + 1].Contains(parentCode))
                {
                    filledListing[i + 1].Add(parentCode);
                }
            }

            //Based off the number of filled parent nodes, 
            //we can determine the number of total nodes 
            //saved for this layer.
            mData.mLayers[i].mNodes = new SVONode[filledListing[i + 1].Count * 8];
        }

        //Handle the uppermost layer's sizing
        mData.mLayers[layersUsed - 2].mNodes = new SVONode[layerMaxFits];

        //key: mortoncode
        //x-value: index in their mLayers
        //y-value: index in their mFilled
        SortedDictionary<int, Vector2Int>[] codeLayerIndexPairs = new SortedDictionary<int, Vector2Int>[layersUsed-1];

        codeLayerIndexPairs[layersUsed-2] = new SortedDictionary<int, Vector2Int>();
        for (int filledIndex = 0; filledIndex < filledListing[layersUsed - 2].Count; filledIndex++)
        {
            SVONode node = new SVONode();
            int nodeCode = filledListing[layersUsed - 2][filledIndex];

            node.mChildLink = new SVOLink(layersUsed - 2, (filledIndex << 3), 0);
            node.mParentLink.Invalidate();
            node.mPosition = new SVOMortonCode(nodeCode);
            node.mIsFilled = true;

            mData.mLayers[layersUsed - 2].mNodes[nodeCode] = node;
            codeLayerIndexPairs[layersUsed-2].Add(nodeCode, new Vector2Int(nodeCode, filledIndex));
        }

        for (int layerIndex = layersUsed - 3; layerIndex >= 0; layerIndex--)
        {
            codeLayerIndexPairs[layerIndex] = new SortedDictionary<int, Vector2Int>();
            for (int filledIndex = 0; filledIndex < filledListing[layerIndex].Count; filledIndex++)
            {
                SVONode node = new SVONode();
                int nodeCode = filledListing[layerIndex][filledIndex];
                int parentNodeCodeInt = nodeCode >> 3;
                Vector2Int parentIndex = codeLayerIndexPairs[layerIndex + 1][parentNodeCodeInt];

                node.mChildLink = new SVOLink(layerIndex, (filledIndex << 3), 0);
                node.mParentLink = new SVOLink(layerIndex+2, parentIndex.x, 0);
                node.mPosition = new SVOMortonCode(nodeCode);
                node.mIsFilled = true;

                int nodeIndex = (parentIndex.y << 3) + (nodeCode % 8);

                mData.mLayers[layerIndex].mNodes[nodeIndex] = node;
                codeLayerIndexPairs[layerIndex].Add(nodeCode, new Vector2Int(nodeIndex, filledIndex));
            }
        }

        //Create leafnodes
        for (int filledIndex = 0; filledIndex < filledListing[0].Count; filledIndex++)
        {
            int parentNodeCodeInt = filledListing[0][filledIndex];
            int leafCode = parentNodeCodeInt << 3;
            for (int leafIndex = 0; leafIndex < 8; leafIndex++)
            {
                SVOLeafNode leafNode = new SVOLeafNode();
                leafNode.mParentLink = new SVOLink(1, codeLayerIndexPairs[0][parentNodeCodeInt].x, 0);
                
                //Position
                leafNode.mPosition = new SVOMortonCode(leafCode + leafIndex);

                mData.mLeaves[(filledIndex << 3) + leafIndex] = leafNode;
            }
        }
    }

    /// <summary>
    /// Creates the inactive, empty, childless nodes and connects the neighbor links
    /// </summary>
    private void CreateChildlessNodes()
    {
        for (int i = layersUsed - 2; i >= 0; i--)
        {
            for (int j = 0; j < mData.mLayers[i].mNodes.Length; j++)
            {
                if (i > 0 && mData.mLayers[i].mNodes[j] != null && !mData.mLayers[i].mNodes[j].IsChildless()) //Node is active, may have child nodes that are childless
                {
                    int childIndex = mData.mLayers[i].mNodes[j].mChildLink.GetNodeIndex();
                    for (int k = 0; k < 8; k++)
                    {
                        if (mData.mLayers[i - 1].mNodes[childIndex + k] == null)
                        {
                            SVONode node = new SVONode();
                            node.mChildLink.Invalidate();
                            node.mParentLink = new SVOLink(i + 1, j, 0);
                            node.mPosition = new SVOMortonCode((mData.mLayers[i].mNodes[j].mPosition.GetCode() << 3) + k);

                            mData.mLayers[i - 1].mNodes[childIndex + k] = node;
                        }
                    }
                }
                else if (mData.mLayers[i].mNodes[j] == null)
                {
                    SVONode node = new SVONode();
                    node.mPosition = new SVOMortonCode(j);

                    mData.mLayers[i].mNodes[j] = node;
                }
            }
        }


    }

    private void DetermineNeighborLinks()
    {
        //Above-leaf nodes
        int layer = INVALID;
        int index = INVALID;

        //reused data points
        int i, s, layerIndex, tempLayer, tempIndex;
        bool valid;

        //Start with top level nodes
        int topLayerIndex = mData.mLayers.Length - 1;
        int totalNodes = mData.mLayers[topLayerIndex].mNodes.Length;
        for (i = 0; i < totalNodes; i++) //For each node in the layer
        {
            ref SVONode node = ref mData.mLayers[topLayerIndex].mNodes[i];
            for (s = 0; s < 6; s++) //For each neighbor link of the node
            {
                layer = topLayerIndex + 1;
                index = SVOMortonCode.EncodeMorton(node.mPosition.GetPos() + DIRECTIONS[s]);

                if(index >= 0 && index < totalNodes)
                {
                    node.mNeighborLinks[s] = new SVOLink(layer, index, 0);
                }
                else
                {
                    node.mNeighborLinks[s].Invalidate();
                }
            }
        }

        //Onto the in-between nodes...
        for (layerIndex = topLayerIndex - 1; layerIndex >= 0; layerIndex--)
        {
            totalNodes = mData.mLayers[layerIndex].mNodes.Length;
            for (i = 0; i < totalNodes; i++) //For each node in the layer
            {
                ref SVONode node = ref mData.mLayers[layerIndex].mNodes[i];
                for (s = 0; s < 6; s++) //For each neighbor link of the node
                {
                    layer = layerIndex + 1;
                    index = SVOMortonCode.EncodeMorton(node.mPosition.GetPos() + DIRECTIONS[s]);
                    valid = false;

                    tempLayer = topLayerIndex;
                    tempIndex = index >> (3 * (tempLayer - layerIndex));

                    while(!valid //valid hasn't been found
                        && (tempIndex >= 0 && tempIndex < mData.mLayers[tempLayer].mNodes.Length) //index is in bounds
                        && mData.mLayers[tempLayer].mNodes[tempIndex] != null //target node exists
                        && !mData.mLayers[tempLayer].mNodes[tempIndex].IsChildless()) //node has children
                    {
                        ref SVONode tempParent = ref mData.mLayers[tempLayer].mNodes[tempIndex];
                        ref SVOLink tempChild = ref tempParent.mChildLink;
                        tempLayer = tempChild.GetLayerIndex() - 1;
                        tempIndex = tempChild.GetNodeIndex() + ((index >> (3 * (tempLayer - layerIndex))) % 8);

                        if(tempLayer == layerIndex //same layer as the node
                            && (tempIndex >= 0 && tempIndex < totalNodes) //index is in bounds
                            && mData.mLayers[tempLayer].mNodes[tempIndex] != null) //target node exists
                        {
                            index = tempIndex;
                            valid = true;
                        }
                    }

                    if (valid)
                    {
                        node.mNeighborLinks[s] = new SVOLink(layer, index, 0);
                    }
                    else
                    {
                        node.mNeighborLinks[s] = mData.mLayers[layer].mNodes[node.mParentLink.GetNodeIndex()].mNeighborLinks[s];
                    }
                }
            }
        }

        //And finally, the lead nodes!
        totalNodes = mData.mLeaves.Length;
        layerIndex = -1;
        for (i = 0; i < totalNodes; i++)
        {
            ref SVOLeafNode leafNode = ref mData.mLeaves[i];
            for (s = 0; s < 6; s++) //For each neighbor link of the node
            {
                layer = layerIndex + 1;
                index = SVOMortonCode.EncodeMorton(leafNode.mPosition.GetPos() + DIRECTIONS[s]);
                valid = false;

                tempLayer = topLayerIndex;
                tempIndex = index >> (3 * (tempLayer - layerIndex));

                while (!valid //valid hasn't been found
                    && (tempIndex >= 0 && tempIndex < mData.mLayers[tempLayer].mNodes.Length) //index is in bounds
                    && mData.mLayers[tempLayer].mNodes[tempIndex] != null //target node exists
                    && !mData.mLayers[tempLayer].mNodes[tempIndex].IsChildless()) //node has children
                {
                    ref SVONode tempParent = ref mData.mLayers[tempLayer].mNodes[tempIndex];
                    ref SVOLink tempChild = ref tempParent.mChildLink;
                    tempLayer = tempChild.GetLayerIndex() - 1;
                    tempIndex = tempChild.GetNodeIndex() + ((index >> (3 * (tempLayer - layerIndex))) % 8);

                    if (tempLayer == layerIndex //same layer as the node
                        && (tempIndex >= 0 && tempIndex < totalNodes) //index is in bounds
                        && mData.mLeaves[tempIndex] != null) //target node exists
                    {
                        index = tempIndex;
                        valid = true;
                    }
                }

                if (valid)
                {
                    leafNode.mNeighborLinks[s] = new SVOLink(layer, index, 0);
                }
                else
                {
                    leafNode.mNeighborLinks[s] = mData.mLayers[layer].mNodes[leafNode.mParentLink.GetNodeIndex()].mNeighborLinks[s];
                }
            }
        }
    }

    private void RasterizeLeafNodes()
    {
        bool isFilled;
        SVOLeafNode tempLeaf;
        Vector3 offsetToCenter, offsetToNode, leafCornerPos, leafCenterPos, subnodeOffsetToCenter, offsetToSubnode, subnodeCenterPos;

        offsetToCenter = Vector3.one * leafNodeSize / 2;
        for (int i = 0; i < mData.mLeaves.Length; i++)
        {
            tempLeaf = mData.mLeaves[i];
            tempLeaf.mSubnodesStatus = ulong.MinValue;
            offsetToNode = (Vector3)tempLeaf.mPosition.GetPos() * leafNodeSize;
            leafCornerPos = transform.position + offsetToNode;
            leafCenterPos = leafCornerPos + offsetToCenter;
            isFilled = Physics.CheckBox(leafCenterPos, offsetToCenter, Quaternion.identity, layersConsideredCollisions);
            if (isFilled)
            {
                subnodeOffsetToCenter = Vector3.one * leafSubnodeSize / 2;
                for (int j = 0; j < 64; j++)
                {
                    offsetToSubnode = (Vector3)SVOMortonCode.DecodeMorton(j) * leafSubnodeSize;
                    subnodeCenterPos = leafCornerPos + offsetToSubnode + subnodeOffsetToCenter;
                    tempLeaf.mSubnodesStatus |= Physics.CheckBox(subnodeCenterPos, subnodeOffsetToCenter, Quaternion.identity, layersConsideredCollisions) ? (ulong)1 : (ulong)0;
                    if (j != 63)
                    {
                        tempLeaf.mSubnodesStatus = tempLeaf.mSubnodesStatus << 1;
                    }
                }
            }
        }
    }

    private void WriteToScriptableObject()
    {
#if (UNITY_EDITOR)
        dataFile.data = new SVOSystem(mData, transform.position, leafSubnodeSize, layersUsed);
        Debug.Log("SVO put onto stucture. Now making dirty!");
        EditorUtility.SetDirty(dataFile);
        AssetDatabase.SaveAssets();
        AssetDatabase.Refresh();
		Debug.Log("SVO Baked!");
#endif
    }

    [ContextMenu("Load current SVO Bake")]
    private void ReadFromScriptableObject()
    {
        mData = dataFile.data.mData;
        transform.position = dataFile.data.mOrigin;
        leafNodeSize = dataFile.data.mLeafNodeSize;
        leafSubnodeSize = dataFile.data.mLeafSubnodeSize;
        layersUsed = dataFile.data.mLayersUsed;
        Debug.Log("Loaded SVO");
    }
}`}></CodeSample>

		<div>PathfinderFrameByFrameDrawer.cs</div>
		<CodeSample language="csharp" source=
	{`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// script below created by Nicholas Perell, standard copyright and usage applies.
public struct PathPoint
{
    public SVOLink cameFrom;

    public SVOLink nodeLink;

    public float gcost;

    public float hcost;

    public float fcost { get { return gcost + hcost; } }

    public PathPoint(SVOLink link)
    {
        cameFrom = new SVOLink();
        cameFrom.Invalidate();
        nodeLink = link;
        gcost = 0;
        hcost = 0;
    }

    public PathPoint(SVOLink link, SVOLink previous)
    {
        cameFrom = previous;
        nodeLink = link;
        gcost = 0;
        hcost = 0;
    }
}

[System.Serializable]
public class PriorityQueue<Value>
{
    [SerializeField]
    private bool mRecencyBias;

    [System.Serializable]
    private struct PairingVP
    {
        [SerializeField]
        private Value mValue;

        [SerializeField]
        private float mPriority;

        public PairingVP(Value v, float p)
        {
            this.mValue = v;
            this.mPriority = p;
        }

        public Value GetValue()
        {
            return mValue;
        }

        public static bool operator <(PairingVP a, PairingVP b)
        {
            return a.mPriority < b.mPriority;
        }

        public static bool operator >(PairingVP a, PairingVP b)
        {
            return a.mPriority > b.mPriority;
        }

        public static bool operator ==(PairingVP a, PairingVP b)
        {
            return a.mPriority == b.mPriority;
        }

        public static bool operator !=(PairingVP a, PairingVP b)
        {
            return a.mPriority != b.mPriority;
        }
    }

    [SerializeField]
    private List<PairingVP> mList;

    public PriorityQueue()
    {
        mRecencyBias = false;
        mList = new List<PairingVP>();
    }

    public PriorityQueue(bool isThereRecencyBias)
    {
        mRecencyBias = isThereRecencyBias;
        mList = new List<PairingVP>();
    }

    public bool Enqueue(Value v, float p)
    {
        PairingVP pair = new PairingVP(v, p);

        if (mList.Exists(x => x.GetValue().Equals(v)))
        {
            PairingVP temp = mList.Find(x => x.GetValue().Equals(v));

            if (temp > pair)
            {
                mList.Remove(temp);
            }
            else
            {
                return false;
            }
        }

        int index = mList.Count;

        while (index > 0 && mList[index - 1] > pair)
        {
            index--;
        }

        while (mRecencyBias && index > 0 && mList[index - 1] == pair)
        {
            index--;
        }

        mList.Insert(index, pair);
        return true;
    }

    public Value Dequeue()
    {
        if (mList.Count == 0)
            return default(Value);

        Value rtn = mList[0].GetValue();
        mList.RemoveAt(0);
        return rtn;
    }

    public bool IsEmpty()
    {
        return mList.Count == 0;
    }
}

public class PathfinderFrameByFrameDrawer : MonoBehaviour
{
    //public bool drawSVOLoaded;
    public Vector3 target;

    public SVOBaked navData;

    private SVOLink targetLink;
    private SVOLink startingLink;

    private PriorityQueue<SVOLink> open;
    private SortedSet<SVOLink> closed;
    private SortedDictionary<SVOLink, PathPoint> pathPoints;

    private List<SVOLink> debugOpen;
    private List<SVOLink> debugClosed;
    private List<SVOLink> debugJustAdded;
    private SVOLink debugBeingSearched;

    [SerializeField]
    public List<SVOLink> path;

    [SerializeField]
    public bool calc = false;

    private void Update()
    {
        for (int i = 0; i < 100; i++)
        if(calc)
        {
            CalculatePath();
        }
    }

    private void BeginCalculatePath()
    {
        debugJustAdded = new List<SVOLink>();
        debugOpen = new List<SVOLink>();
        debugClosed = new List<SVOLink>();

        //Find the node that encapsulates the target
        targetLink = navData.data.FindNodeHoldingPosition(target);
        startingLink = navData.data.FindNodeHoldingPosition(transform.position);

        if (!startingLink.IsValid())
        {
            //Debug.Log("start link not found");
        }
        else if(!IsEmptySpace(startingLink))
        {
            //Debug.Log("start link is not in an accessible space");
        }
        if (!targetLink.IsValid())
        {
            //Debug.Log("target link not found");
        }
        else if(!IsEmptySpace(targetLink))
        {
            //Debug.Log("target link is not in an accessible space");
        }

        if (!startingLink.IsValid() || !targetLink.IsValid() ||
            !IsEmptySpace(startingLink) || !IsEmptySpace(targetLink))
        {
            return;
        }

        open = new PriorityQueue<SVOLink>();
        closed = new SortedSet<SVOLink>(new SVOLinkComparer());
        pathPoints = new SortedDictionary<SVOLink, PathPoint>(new SVOLinkComparer());

        PathPoint pathPoint = new PathPoint(startingLink);
        InitializePathPoint(ref pathPoint);
        open.Enqueue(startingLink, pathPoint.fcost);
        pathPoints.Add(startingLink, pathPoint);
        debugBeingSearched = startingLink;
        calc = true;
    }

    [ContextMenu("Find Path")]
    private void CalculatePath()
    {
        debugJustAdded.Clear();

        SVOLink tempLink;
        SVONode tempNode;
        SVOLeafNode tempLeafNode;
        if (!open.IsEmpty())
        {
            tempLink = open.Dequeue();
            debugBeingSearched = tempLink;
            if (tempLink == targetLink)
            {
                path = new List<SVOLink>();

                SVOLink a = tempLink;
                while (a.IsValid())
                {
                    path.Add(a);
                    a = pathPoints[a].cameFrom;
                }

                path.Reverse();
                //Debug.Log("path found");
                calc = false;

                return;
            }

            SVOData.AccessResult result = navData.data.mData.AccessWithLink(tempLink, out tempNode, out tempLeafNode);
            switch (result)
            {
                case SVOData.AccessResult.NODE:
                    for (int i = 0; i < 6; i++) AttemptToAddLinkToOpen(tempNode.mNeighborLinks[i], tempLink);
                    break;
                case SVOData.AccessResult.LEAFNODE:
                    for (int i = 0; i < 6; i++) AttemptToAddLinkToOpen(tempLeafNode.mNeighborLinks[i], tempLink);
                    break;
                case SVOData.AccessResult.SUBNODE:
                    Vector3Int dir;
                    for (int i = 0; i < 6; i++)
                    {
                        dir = Vector3Int.zero;
                        dir[i / 2] = i % 2 == 0 ? 1 : -1;
                        dir += SVOMortonCode.DecodeMorton(tempLink.GetSubnodeIndex());
                        if (dir[i / 2] >= 0 && dir[i / 2] < 4)
                        {
                            AttemptToAddLinkToOpen(new SVOLink(tempLink.GetLayerIndex(), tempLink.GetNodeIndex(), SVOMortonCode.EncodeMorton(dir)), tempLink);
                        }
                        else //Exiting leafnode!
                        {

                            SVOLink neighborLink = tempLeafNode.mNeighborLinks[i];

                            if (neighborLink.GetLayerIndex() == 0)
                            {
                                SVOLeafNode neighborLeafNode;
                                navData.data.mData.AccessLeafNodeWithLink(neighborLink, out neighborLeafNode);
                                if (!neighborLeafNode.mIsFilled && !neighborLeafNode.mIsEmpty) //Neighboring leaf isn't consistent!
                                {
                                    if (dir[i / 2] == -1)
                                    {
                                        dir[i / 2] = 3;
                                    }
                                    else //dir[i / 2] == 4
                                    {
                                        dir[i / 2] = dir[i / 2] % 4;
                                    }

                                    AttemptToAddLinkToOpen(new SVOLink(tempLink.GetLayerIndex(), neighborLink.GetNodeIndex(), SVOMortonCode.EncodeMorton(dir)), tempLink);
                                    continue;
                                }
                            }

                            AttemptToAddLinkToOpen(neighborLink, tempLink);
                        }
                    }
                    //TO DO
                    break;
                default:
                    break;
            }
            closed.Add(tempLink);
            debugClosed.Add(tempLink);
        }
        else
        {
            //Debug.Log("path not found");
            calc = false;
        }
    }

    private void AttemptToAddLinkToOpen(SVOLink link, SVOLink oldLink)
    {
        if (link.IsValid() && !closed.Contains(link))
        {
            if (pathPoints.ContainsKey(link))
            {
                if (pathPoints[pathPoints[link].cameFrom].gcost > pathPoints[oldLink].gcost) //A faster path to this node has been found.
                {
                    pathPoints.Remove(link);
                }
                else
                {
                    return;
                }
            }
            else
            {
                SVONode tempNode;
                SVOLeafNode tempLeafNode;
                SVOData.AccessResult result = navData.data.mData.AccessWithLink(link, out tempNode, out tempLeafNode);

                switch (result)
                {
                    case SVOData.AccessResult.NODE:
                        if (tempNode.mIsFilled)
                        {
                            SVONode oldNode;
                            navData.data.mData.AccessNodeWithLink(oldLink, out oldNode);

                            SVOLink newLink = tempNode.mChildLink;
                            int newLayerIndex = newLink.GetLayerIndex();
                            int newNodeIndex = newLink.GetNodeIndex();
                            int newSubnodeIndex = newLink.GetSubnodeIndex();
                            int[] newNodeIndexOffsets;

                            int oldCode = oldNode.mPosition.GetCode();
                            int tempCode = tempNode.mPosition.GetCode();
                            int layerGap = oldLink.GetLayerIndex() - link.GetLayerIndex();
                            if (layerGap > 0)
                            {
                                tempCode >>= layerGap * 3;
                            }
                            else if (layerGap < 0)
                            {
                                oldCode >>= layerGap * -3;
                            }

                            Vector3Int coordsDifference = SVOMortonCode.DecodeMorton(oldCode) - SVOMortonCode.DecodeMorton(tempCode);

                            if (coordsDifference.z > 0)
                            {
                                newNodeIndexOffsets = new int[] { 4, 5, 6, 7 };
                            }
                            else if (coordsDifference.z < 0)
                            {
                                newNodeIndexOffsets = new int[] { 0, 1, 2, 3 };
                            }
                            else if (coordsDifference.y > 0)
                            {
                                newNodeIndexOffsets = new int[] { 2, 3, 6, 7 };
                            }
                            else if (coordsDifference.y < 0)
                            {
                                newNodeIndexOffsets = new int[] { 0, 1, 4, 5 };
                            }
                            else if (coordsDifference.x > 0)
                            {
                                newNodeIndexOffsets = new int[] { 1, 3, 5, 7 };
                            }
                            else //if (coordsDifference.x < 0)
                            {
                                newNodeIndexOffsets = new int[] { 0, 2, 4, 6 };
                            }

                            for (int i = 0; i < 4; i++)
                            {

                                AttemptToAddLinkToOpen(new SVOLink(newLayerIndex, newNodeIndex + newNodeIndexOffsets[i], newSubnodeIndex), oldLink);
                            }
                            return;
                        }
                        break;
                    case SVOData.AccessResult.LEAFNODE:
                        if (tempLeafNode.mIsFilled)
                        {
                            closed.Add(link);
                            debugClosed.Add(link);
                            return;
                        }
                        else if (!tempLeafNode.mIsEmpty)
                        {
                            SVONode oldNode;
                            SVOLeafNode oldLeafNode;
                            result = navData.data.mData.AccessWithLink(oldLink, out oldNode, out oldLeafNode);

                            int newLayerIndex = -1;
                            int newNodeIndex = link.GetNodeIndex();
                            int[] newNodeIndexOffsets;

                            int oldCode = 0;
                            switch (result)
                            {
                                case SVOData.AccessResult.NODE:
                                    oldCode = oldNode.mPosition.GetCode();
                                    break;
                                case SVOData.AccessResult.LEAFNODE:
                                    oldCode = oldLeafNode.mPosition.GetCode();
                                    break;
                                case SVOData.AccessResult.SUBNODE:
                                    oldCode = oldLeafNode.mPosition.GetCode() >> 3;
                                    break;
                            }
                            int tempCode = tempLeafNode.mPosition.GetCode();
                            int layerGap = oldLink.GetLayerIndex() - link.GetLayerIndex();

                            if (layerGap > 0)
                            {
                                tempCode >>= layerGap * 3;
                            }
                            else if (layerGap < 0)
                            {
                                oldCode >>= layerGap * -3;
                            }

                            Vector3Int coordsDifference = SVOMortonCode.DecodeMorton(oldCode) - SVOMortonCode.DecodeMorton(tempCode);


                            if (coordsDifference.z > 0)
                            {
                                newNodeIndexOffsets = new int[] { 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63 };
                            }
                            else if (coordsDifference.z < 0)
                            {
                                newNodeIndexOffsets = new int[] { 0, 1, 2, 3, 8, 9, 10, 11, 16, 17, 18, 19, 24, 25, 26, 27 };
                            }
                            else if (coordsDifference.y > 0)
                            {
                                newNodeIndexOffsets = new int[] { 18, 19, 22, 23, 26, 27, 30, 31, 50, 51, 54, 55, 58, 59, 62, 63 };
                            }
                            else if (coordsDifference.y < 0)
                            {
                                newNodeIndexOffsets = new int[] { 0, 1, 4, 5, 8, 9, 12, 13, 32, 33, 36, 37, 40, 41, 44, 45 };
                            }
                            else if (coordsDifference.x > 0)
                            {
                                newNodeIndexOffsets = new int[] { 9, 11, 13, 15, 25, 27, 29, 31, 41, 43, 45, 47, 57, 59, 61, 63 };
                            }
                            else //if (coordsDifference.x < 0)
                            {
                                newNodeIndexOffsets = new int[] { 0, 2, 4, 6, 16, 18, 20, 22, 32, 34, 36, 38, 48, 50, 52, 54 };
                            }

                            for (int i = 0; i < 16; i++)
                            {
                                AttemptToAddLinkToOpen(new SVOLink(newLayerIndex, newNodeIndex, newNodeIndexOffsets[i]), oldLink);
                            }
                            return;
                        }
                        break;
                    case SVOData.AccessResult.SUBNODE:
                        if ((tempLeafNode.mSubnodesStatus & (((ulong)1) << (63 - link.GetSubnodeIndex()))) > 0) //blocked off
                        {
                            closed.Add(link);
                            debugClosed.Add(link);
                            return;
                        }
                        break;
                }
            }

            PathPoint pathPoint = new PathPoint(link, oldLink);
            InitializePathPoint(ref pathPoint);
            open.Enqueue(link, pathPoint.fcost);
            debugOpen.Add(link);
            debugJustAdded.Add(link);
            pathPoints.Add(link, pathPoint);
        }
    }

    private void InitializePathPoint(ref PathPoint pathPoint)
    {
        Vector3 nodePos = navData.data.GetPositionOfCenterOfLink(pathPoint.nodeLink);

        if (pathPoint.cameFrom.IsValid())
        {
            Vector3 fromPos = navData.data.GetPositionOfCenterOfLink(pathPoint.cameFrom);
            pathPoint.gcost = Vector3.Distance(fromPos, nodePos) + pathPoints[pathPoint.cameFrom].gcost;
        }

        pathPoint.hcost = ManhattanDistance(nodePos, target);
    }

    private float ManhattanDistance(Vector3 a, Vector3 b)
    {
        return Mathf.Abs(a.x - b.x) + Mathf.Abs(a.y - b.y) + Mathf.Abs(a.z - b.z);
    }

    private void OnDrawGizmos()
    {
        if (path != null)
        {
            Vector3 size;
            Gizmos.color = Color.blue;
            for (int i = 0; i < path.Count; i++)
            {
                if (i < path.Count - 1) Gizmos.DrawLine(navData.data.GetPositionOfCenterOfLink(path[i]), navData.data.GetPositionOfCenterOfLink(path[i + 1]));
                size = Vector3.one * navData.data.mLeafSubnodeSize * (path[i].GetLayerIndex() == -1 ? 1 : 4 * Mathf.Pow(2, path[i].GetLayerIndex()));
                Gizmos.DrawWireCube(navData.data.GetPositionOfCenterOfLink(path[i]), size);
                if (path[i].GetLayerIndex() == -1)
                {
                    Gizmos.color = Color.white;
                    Gizmos.DrawWireCube(navData.data.GetPositionOfCenterOfLink(new SVOLink(0, path[i].GetNodeIndex(), 0)), Vector3.one * navData.data.mLeafSubnodeSize * 4);
                    Gizmos.color = Color.blue;
                }
            }
        }

        if(calc)
        {
            Vector3 size;

            Gizmos.color = Color.green;
            for (int i = 0; i < debugOpen.Count; i++)
            {
                size = Vector3.one * navData.data.mLeafSubnodeSize * (debugOpen[i].GetLayerIndex() == -1 ? 1 : 4 * Mathf.Pow(2, debugOpen[i].GetLayerIndex()));
                Gizmos.DrawWireCube(navData.data.GetPositionOfCenterOfLink(debugOpen[i]), size);
            }

            Gizmos.color = Color.white;
            for (int i = 0; i < debugJustAdded.Count; i++)
            {
                size = Vector3.one * navData.data.mLeafSubnodeSize * (debugJustAdded[i].GetLayerIndex() == -1 ? 1 : 4 * Mathf.Pow(2, debugJustAdded[i].GetLayerIndex()));
                Gizmos.DrawWireCube(navData.data.GetPositionOfCenterOfLink(debugJustAdded[i]), size);
            }


            Gizmos.color = Color.red;
            for (int i = 0; i < debugClosed.Count; i++)
            {
                size = Vector3.one * navData.data.mLeafSubnodeSize * (debugClosed[i].GetLayerIndex() == -1 ? 1 : 4 * Mathf.Pow(2, debugClosed[i].GetLayerIndex()));
                Gizmos.DrawWireCube(navData.data.GetPositionOfCenterOfLink(debugClosed[i]), size);
            }

            Gizmos.color = Color.cyan;
            size = Vector3.one * navData.data.mLeafSubnodeSize * (debugBeingSearched.GetLayerIndex() == -1 ? 1 : 4 * Mathf.Pow(2, debugBeingSearched.GetLayerIndex()));
            Gizmos.DrawWireCube(navData.data.GetPositionOfCenterOfLink(debugBeingSearched), size);
        }
    }

    public Vector3 GetNextPosition()
    {
        if(path.Count > 0)
        {
            SVOLink newest = path[0];
            path.RemoveAt(0);
            if (newest.IsValid())
            {
                return navData.data.GetPositionOfCenterOfLink(newest);
            }
        }
        return -Vector3.one;
    }

    public void PathTo(Vector3 pos)
    {
        target = pos;
        BeginCalculatePath();
    }

    bool IsEmptySpace(SVOLink link)
    {
        bool result = false;

        if(link.IsValid())
        {
            SVONode tempNode;
            SVOLeafNode tempLeafNode;
            SVOData.AccessResult accessResult = navData.data.mData.AccessWithLink(link, out tempNode, out tempLeafNode);

            switch (accessResult)
            {
                case SVOData.AccessResult.NODE:
                    if (tempNode.IsChildless())
                    {
                        result = true;
                    }
                    break;
                case SVOData.AccessResult.LEAFNODE:
                    if (tempLeafNode.mIsEmpty)
                    {
                        result = true;
                    }
                    break;
                case SVOData.AccessResult.SUBNODE:
                    if (!((tempLeafNode.mSubnodesStatus & (((ulong)1) << (63 - link.GetSubnodeIndex()))) > 0))
                    {
                        result = true;
                    }
                    break;
            }
        }

        return result;
    }
}`}></CodeSample>
	<SectionSecondHeader header="Narrative System" />

	<div>If you're interested in the narrative programming I did for Project Nautilus, I encourage you check out my page on Artemis! After working on the narrative implementation and systems for the game, I realized more could be done with it to empower writers and designers. I turned it into its own, ongoing narrative programming project.</div>

    </div>
</div>
