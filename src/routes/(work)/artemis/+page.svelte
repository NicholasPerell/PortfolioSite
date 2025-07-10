<script lang="ts">
	import CodeSample from "$lib/comps/CodeSample.svelte";
	import LinkSpan from "$lib/comps/LinkSpan.svelte";
    import FullBodyBg from "$lib/comps/FullBodyBg.svelte";
	import ImgListSplit from "$lib/comps/ImgListSplit.svelte";
	import SectionHeader from "$lib/comps/SectionHeader.svelte";
	import ToolIconImage from "$lib/comps/ToolIconImage.svelte";
	import SectionSecondHeader from "$lib/comps/SectionSecondHeader.svelte";
	import HeadTitle from "$lib/comps/HeadTitle.svelte";
	import { type Tools } from '$lib/services/datatypes';
	
	const tools: Tools[] = ['C#', 'Unity', 'Git', 'Ink', 'Yarn Spinner'];
</script>

<HeadTitle name="Artemis" />

<div class="bg-[url(/imgs/card-banner.jpg)] bg-contain bg-no-repeat bg-[#375634] bg-center flex justify-center">
    <div class="max-w-screen-lg w-full px-4 sm:px-8 py-12 md:p-16 items-center flex flex-col gap-1 sm:gap-5">
        <img src="\imgs\artemis-title.png" alt="Archer Icon and Moon Icon on the left and right of the name Artemis">
        <p class="text-white font-bold text-2xl">A Narrative Tool for Unity</p>
    </div>
</div>


<FullBodyBg>
    <div class="flex justify-center p-6">
        <div class="flex w-full max-w-screen-lg flex-col gap-3 md:gap-5">
            <div class="flex flex-col md:grid w-full grid-cols-2 gap-3 md:gap-5 leading-7">
                <p>
                    For games where the order of who you talk to or what you do is variable, <span class="italic">Artemis</span> accesses rules and world state data to give the most appropriate and important delivery. It’s not about the means of delivery, like <span class="italic">Ink</span> or <span class="italic">Yarn Spinner</span>, but instead about deciding what should be delivered.
                </p>
                <div class="flex w-full flex-col gap-0">
                    <p class="italic">Developer</p>
                    <p>Team Size: Primarily Solo</p>
                    <p>Scale: Unity Package/Tool</p>
                    <p>Development Period: Since May 2022</p>
                    <p>Tools Used: </p>
                    <div class="w-full flex flex-row gap-0.5 pt-8 sm:pt-3 md:pt-5">
                        {#each tools as tool}
                        <div class="w-full flex flex-col items-center justify-start gap-1">  
                            <ToolIconImage length={40} {tool} />  
                        <p class="text-center leading-normal">{tool}</p>
                        </div>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center gap-3 md:gap-5 w-full">
                <iframe class="w-full sm:w-auto" title="Artemis GH Card" id="ghcard-nicholas-hoy-champain-1" frameborder="0" scrolling="0" src="//cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=NicholasPerell&amp;identity=ghcard-nicholas-hoy-champain-1&amp;repo=Artemis" width="400" height="152"></iframe>
                <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
                <p><i>May your aim be true.</i></p>
            </div>
            <ImgListSplit src="/imgs/artemis-fade-thumbnail.png" alt="Rituals prototype with a fletcher showing the different dialogue arrows that store their lines, flag changes, and the archers that will require changes to be made to it." imgRight={false} header="Features" items={[
                'Unique scriptable objects responsible for flags, narrative logic, and asset creation.',
                'Customizable Archers that will determine which narrative beat it has access to (AKA Arrow) is highest priority and most relevant.',
                'Saving & Loading using the Constellation asset.',
                'Goddess singleton to track internal symbols and IDs.',
                'User documentation.'
            ]}/>
            <ImgListSplit src="\imgs\artemis-constellation-editor.png" alt="Game Summary Image" imgRight={true} header="Contributions" items={[
                'Implemented code samples, enumerator script compilation, saving/loading capabilities, custom editors',
                'Code samples for getting Artemis to work in tandem with popular narrative tools.',
                'Wrote extensive user documentation that also dives into and explains some samples.',
                'Built custom editors for each asset.',
                'Template classes for Fletcher and Bow to be more versatile and give developers freedom to choose what the narrative data being delivered is and how.',
                'Programmed enum compiler for internal symbols & IDs in place of strings.',
                'Added an self-indenting debugging system for Archer decision making.'
            ]}/>
            <div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>
            <SectionHeader header="Development of Artemis"></SectionHeader>
            <p>
                <span class="italic">Artemis</span> is an ongoing narrative programming project by myself. After working on the narrative implementation on the game
                <LinkSpan appendCls="italic" href="/project-nautilus">Project Nautilus</LinkSpan>, I wanted to turn the system I made into something more robust that other
                developers could use. For games where the order of who you talk to or what you do is variable, <span class="italic">Artemis</span> accesses rules and world 
                state data to give the most appropriate and important delivery. It’s not about the means of delivery, like <span class="italic">Ink</span> or <span class="italic">Yarn Spinner</span>, but
                instead about deciding what should be delivered.
            </p>
            <p>
                As discussed in
                <LinkSpan href="https://www.youtube.com/watch?v=iQEwtDx63fw">this microtalk @ The Loaf</LinkSpan>,
                <span class="italic">Project Nautilus</span> took heavy inspiration from <span class="italic">Hades</span>'s priority queues and <span class="italic">Firewatch</span>'s Delilah brain. However, not every game has
                nearly as much written content as <span class="italic">Hades</span>; <span class="italic">Project Nautilus</span> used a priority stack for there to be recency bias (which Artemis allows
                you to choose between), and <span class="italic">Artemis</span> also takes inspiration from <span class="italic">Left 4 Dead 2</span>'s Dynamic Dialog.
            </p>
            <p>
                On the main branch of the <LinkSpan href="https://github.com/nicholas-hoy-champain/Artemis">public repo</LinkSpan> is version 0.2.5. The way it all interconnects is as follows:
            </p>
            <p class="italic p-4 opacity-80">
                &OpenCurlyDoubleQuote;The <span class="italic">fletcher</span> makes and stockpiles the <span class="italic">arrows</span>, and the <span class="italic">archer</span> decides which arrow to shoot. The archer can get more arrows from (or throw away some in) a <span class="italic">bundle</span>, and she uses her <span class="italic">bow</span> to fire them.&CloseCurlyDoubleQuote;
            </p>
            <p>
                Archers will send items with a higher priority closer to the front. It also allows the option for “recency bias,” where instead of putting the newest X-priority item behind the X-priority items that are already there, it can put that item in front. It can also pick the equal priority arrows at random. Depending on the genre of a game, that can be an important distinction, and it can be changed at will by the narrative designers in the custom editors. The priority value of an arrow can also be determined by other means than a flat number, like the number of flags it needs to be met.
            </p>
            <p>
                Archers also check arrows for criteria saved in flags. If the requirements aren’t met, an Archer will skip it. When compiling narrative items, Artemis tracks what flags are supposed to be set values. Enum IDs for these flags are made as they come up, and deleted when they’re not used by any arrows. That means multiple ways to deliver the narrative (i.e. NPC dialogue or letters) can still reference the same pool of flags. Being in the same pool also means developers can also look through everything and make sure no one made two different flags IDs for what are essentially the same thing.
            </p>
            <p>
                The compilation of these narrative items and their flags use .CSV files.There are template classes for Fletchers (which turn the files into arrow assets) and Bows (which are game objects that take a fletcher's data and execute the in-scene delivery of a fired arrow). This means the developers have control over how to convert the strings into unique structs for a game’s needs, as well as how to deliver the narrative in-scene using these structs.
            </p>
	    	<div class="my-1 h-0.5 w-full bg-black dark:bg-white"></div>
            <SectionHeader header="Technical information"></SectionHeader>
            <SectionSecondHeader header="Debug Console Sample" />
            <img src="/imgs/artemis-example-csv-top.png" alt="ID Priority Values Flags"/>
            <p>
                <LinkSpan href={'https://github.com/NicholasPerell/Artemis/tree/v0.2.5/Samples~/Debug%20Console/Scripts/Fletcher%20%26%20Bow'}>Example custom Fletcher & Bow for debug messages in the editor console.</LinkSpan>
            </p>
            <SectionSecondHeader header="Data Structures" />
            <p>
                The sorted dictionaries in version 0.2 mean we can simply skip anything that's already been looked at so long as we send back the index the next search should start at.
            </p>
            <CodeSample language="csharp" source={
`public bool LinearSearch(K key, ref int startAt, out V foundValue)
{
  foundValue = default(V);
  bool result = false;

  //Validate the startAt value is an index in the list
  if (startAt >= list.Count || startAt < 0)
  {
    startAt = -1;
  }
  else
  {
    int i;
    int tmp;
    for (i = startAt; i < list.Count; i++)
    {
      tmp = key.CompareTo(list[i].Key);
      if (tmp == 0)
      {
        startAt = i + 1;
        foundValue = list[i].Value;
        result = true;
        break;
      }
      else if (tmp < 0)
      {
        startAt = i;
        break;
      }
    }

    if (i == list.Count)
    {
      startAt = -1;
    }
  }

  return result;
}`
            }></CodeSample>
            <p>
                The reason why some of the structures used (i.e. tuple, sorted list, priority queue, and sorted dictionary) are custom-written is for two reasons:
            </p>
            <ol class="list-decimal pl-4 flex flex-col gap-4">
            <li>
                Their equivalents aren't serializable. Saving/loading the state of a game's narrative may be deeply important to a game. It's something I'd like to implement down the line, or at least make possible for developers using Artemis.
            </li>
            <li>
                Some things need to be able to easily change how it works. Take the "Narrative Priority Queues" from version 0.1 turning into "archers," allowing for more options. It changed what determined the priority value (number of necessary conditions? flat value? the sum of both?) and if it has a sense of recency bias (stack? queue? random of whichever appropriate arrows have the highest value?). A C# priority queue has nearly none of those variations, let alone the ability to re-sort itself when those changes are made.
            </li>
            </ol>

            <SectionSecondHeader header="Criterion Constructor" />
            <p>
                All criterion checks on flags can be handled all with the same "a >= x && b >= x" function so long as some math is done to convert a value's requirement into a range. The use of float.Epsilon is for changing the >= into a > check.
            </p>


            <CodeSample language="csharp" source={
`public Criterion(FlagID _stateChecked, CriterionComparisonType _comparisonType, float a, float b = 0)
{
    flagIDChecked = _stateChecked;
    comparisonType = _comparisonType;

    lhs = 0;
    rhs = 0;

    switch (comparisonType)
    {
        case CriterionComparisonType.EQUALS:
            lhs = a;
            rhs = a;
            break;
        case CriterionComparisonType.LESS_EQUAL:
            lhs = a;
            rhs = float.NegativeInfinity;
            break;
        case CriterionComparisonType.GREATER_EQUAL:
            lhs = float.PositiveInfinity;
            rhs = a;
            break;
        case CriterionComparisonType.GREATER:
            lhs = float.PositiveInfinity;
            rhs = a + float.Epsilon;
            break;
        case CriterionComparisonType.LESS:
            lhs = a - float.Epsilon;
            rhs = float.NegativeInfinity;
            break;
        case CriterionComparisonType.RANGE_OPEN:
            lhs = a - float.Epsilon;
            rhs = b + float.Epsilon;
            break;
        case CriterionComparisonType.RANGE_CLOSED:
            lhs = a;
            rhs = b;
            break;
        case CriterionComparisonType.RANGE_OPEN_CLOSED:
            lhs = a - float.Epsilon;
            rhs = b;
            break;
        case CriterionComparisonType.RANGE_CLOSED_OPEN:
            lhs = a;
            rhs = b + float.Epsilon;
            break;
    }
}`
            }></CodeSample>

            <SectionSecondHeader header="Internal String Compiler" />
            <p>
                The flag's IDs are a recompiling enum instead of strings! Internal symbols will save space and process much smoother, and other parts of the system are planned to use internal symbols through similar means. You can see this in the Goddess, which tracks what flags are being used or not. Flags that are created/deleted are added/removed from the newly written FlagID.cs file, and then that enum script is recompiled.
            </p>
            <CodeSample language="csharp" source={
`using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;

#if UNITY_EDITOR
using UnityEditor;
#endif

namespace Perell.Artemis
{
    [System.Serializable]
    public class InternalSymbolCompiler
    {
        //For managing internal symbols
        [SerializeField]
        private SortedStrictList<int> idsUsed;
        [SerializeField]
        private SortedStrictDictionary<string, int> toAdd;
        [SerializeField]
        private SortedStrictList<int> intsReadyToConvert;
        [SerializeField]
        private List<int> toRemove;

        [SerializeField]
        private string fileLocation;
        [SerializeField]
        private string enumName;
        [SerializeField]
        private System.Type enumType = null;

        private const int INVALID = -1;

        public InternalSymbolCompiler(string _fileLocation, string _enumPrefix)
        {
            fileLocation = _fileLocation;
            enumName = _enumPrefix.ElementAt(0) + _enumPrefix.Substring(1).ToLower() + "ID";

            idsUsed = new SortedStrictList<int>();
            toAdd = new SortedStrictDictionary<string, int>();
            intsReadyToConvert = new SortedStrictList<int>();
            toRemove = new List<int>();

            CheckForCompiledScript();
        }

        ~InternalSymbolCompiler()
        {
            enumType = null;
        }

        public void SetLocation(string _fileLocation, string _enumPrefix)
        {
            fileLocation = _fileLocation;
            enumName = _enumPrefix.ElementAt(0) + _enumPrefix.Substring(1).ToLower() + "ID";
            CheckForCompiledScript();

        }

        void CheckForCompiledScript()
        {
            enumType = System.Type.GetType("Perell.Artemis.Generated." + enumName + ", Perell.Artemis.Generated");
        }

        public void WriteFlagEnumScript()
        {
#if UNITY_EDITOR
            string elementName;
            int elementInt;

            CheckForCompiledScript();

            if(enumType != null)
            {
                idsUsed.Clear();
                foreach (int e in Enum.GetValues(enumType))
                {
                    if (e != INVALID)
                    {
                        idsUsed.Add(e);
                    }
                }
            }

            //Remove unused enums
            for (int i = 0; i < toRemove.Count; i++)
            {
                idsUsed.Remove(toRemove[i]);
            }

            //Build new enum script
            System.Text.StringBuilder stringBuilder = new System.Text.StringBuilder("");
            stringBuilder.Append("namespace Perell.Artemis.Generated\n{\n\tpublic enum " + enumName + "\n\t{\n\t\tINVALID = -1");
            if (enumType != null)
            {
                for (int i = 0; i < idsUsed.Count; i++)
                {
                    elementInt = idsUsed[i];
                    stringBuilder.Append(",\n\t\t" + System.Enum.GetName(enumType, elementInt) + " = " + elementInt);
                }
            }

            for (int i = 0; i < toAdd.Count; i++)
            {
                elementName = toAdd.GetTupleAtIndex(i).Key; //TODO: Consider a GetKey or GetValue method instead?
                elementInt = toAdd.GetTupleAtIndex(i).Value;

                idsUsed.Add(elementInt);

                stringBuilder.Append(",\n\t\t" + elementName + " = " + elementInt);
            }

            stringBuilder.Append("\n\t}\n}");


            //Determine File Path
            string relativePath = fileLocation + enumName + ".cs";
            string path;
            path = Application.dataPath;
            path = path.Substring(0, path.Length - 6); //removes the "Assets"
            path += relativePath;

            if (!Directory.Exists(path.Substring(0, path.LastIndexOf('/'))))
            {
                Directory.CreateDirectory(path.Substring(0, path.LastIndexOf('/')));
            }

            if (!File.Exists(path))
            {
                File.Create(path).Close();
            }

            File.WriteAllText(path, stringBuilder.ToString());


            //Reset toAdd/Remove
            toAdd.Clear();
            toRemove.Clear();
            intsReadyToConvert.Clear();

            AssetDatabase.ImportAsset(relativePath);
            CheckForCompiledScript();
#endif
        }

        public void DeleteFlagEnumScript()
        {
#if UNITY_EDITOR
            //Determine File Path
            string relativePath = fileLocation + enumName + ".cs";
            string path = "";

            path = Application.dataPath;
            path = path.Substring(0, path.Length - 6); //removes the "Assets"
            path += relativePath;

            //Delete unused script
            AssetDatabase.DeleteAsset(relativePath);
            enumType = null;
#endif
        }

        private int FindValidIDNumber()
        {
            int rtn;
            int start;

            if (intsReadyToConvert.Count == 0)
            {
                if (idsUsed.Count != 0)
                {
                    rtn = (int)idsUsed[idsUsed.Count - 1] + 1;
                }
                else
                {
                    rtn = 0;
                }
            }
            else
            {
                rtn = intsReadyToConvert[intsReadyToConvert.Count - 1] + 1;
            }

            if (rtn == int.MaxValue)
            {
                rtn = int.MinValue;
            }

            start = rtn;

            while (rtn == INVALID || idsUsed.Has(rtn) || intsReadyToConvert.Has(rtn))
            {
                rtn++;
                if (rtn == int.MaxValue)
                {
                    rtn = int.MinValue;
                }

                if (rtn == start)
                {
                    //Looped the whole way around and had no luck!
                    UnityEngine.Debug.LogError("You've run out of space for flags to be tracked. That's over (2^32)-1 flags!");
                    rtn = INVALID;
                    break;
                }
            }

            if (rtn != INVALID)
            {
                intsReadyToConvert.Add(rtn);
            }

            return rtn;
        }

        public int FindValueOfString(string id)
        {
            object symbol = null;
            CheckForCompiledScript();
            if (enumType != null && System.Enum.TryParse(enumType, id, true, out symbol))
            {
                return (int)symbol;
            }
            else if (toAdd.HasKey(id))
            {
                return toAdd[id];
            }
            else
            {
                int newIDValue = FindValidIDNumber();

                if (newIDValue != -1)
                {
                    toAdd.Add(id, newIDValue);
                }

                return newIDValue;
            }
        }

        public void SetToRemove(string id)
        {
            object symbol = null;
            CheckForCompiledScript();
            if (enumType != null && System.Enum.TryParse(enumType, id, true, out symbol))
            {
                SetToRemove((int)symbol);
            }
        }

        public void SetToRemove(int id)
        {
            toRemove.Add(id);
        }

        public string FindNameOfValue(int id)
        {
            string result = id + "";

            CheckForCompiledScript();
            if (enumType != null)
            {
                result = Enum.GetName(enumType, id);
            }

            if(result == id + "")
            {
                int index = toAdd.IndexOfValue(id);
                if (index > -1)
                {
                    result = toAdd.GetTupleAtIndex(index).Key;
                }
            }

            return result;
        }

        public System.Type GetEnumType()
        {
            CheckForCompiledScript();
            return enumType;
        }
    }
}`
            }></CodeSample>
        </div>
    </div>
</FullBodyBg>