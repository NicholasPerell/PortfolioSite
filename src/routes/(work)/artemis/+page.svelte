<script lang="ts">

</script>

<div class="bg-[url(/imgs/card-banner.jpg)] bg-contain bg-no-repeat bg-[#375634] bg-center flex justify-center">
    <div class="max-w-screen-lg w-full p-16 items-center flex flex-col gap-5">
        <img src="\imgs\artemis-title.png" alt="Archer Icon and Moon Icon on the left and right of the name Artemis">
        <p class="text-white font-bold text-2xl">An Ongoing Narrative Programming Project</p>
    </div>
</div>

<div id="929394437811801072" style="width: 100%; overflow-y: hidden;" class="wcustomhtml"><iframe id="ghcard-nicholas-hoy-champain-1" frameborder="0" scrolling="0" src="//cdn.jsdelivr.net/github-cards/1.0.2/cards/default.html?user=NicholasPerell&amp;identity=ghcard-nicholas-hoy-champain-1&amp;repo=Artemis" width="400" height="152"></iframe>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script></div>

<p><i>May your aim be true.</i></p>

<p>
    Artemis is an ongoing narrative programming project by myself. After working on the narrative implementation on the game Project Nautilus, I wanted to turn the system I made into something more robust that other developers could use. For games where the order of who you talk to or what you do is variable, Artemis accesses rules and world state data to give the most appropriate and important delivery. It’s not about the means of delivery, like Ink or Yarn Spinner, but instead about deciding what should be delivered.
</p>
<p>

    As discussed in this microtalk @ The Loaf, Project Nautilus took heavy inspiration from Hades's priority queues and Firewatch's Delilah brain. However, not every game has nearly as much written content as Hades; Project Nautilus used a priority stack for there to be recency bias (which Artemis allows you to choose between), and Artemis also takes inspiration from Left 4 Dead 2's Dynamic Dialog.
</p>
<p>

    Check out the repository and read the documentation here!
</p>

<p>
    A more in-depth exploration of Artemis
</p>

<img src="/imgs/artemis-fade-thumbnail.png" alt="" >

<p>On the main branch of the public repo is version 0.2.5. The way it all interconnects is as follows:</p>
<p>

The logic of Artemis is handled by Archers, who decide what "arrow" (narrative data point) to deliver to her bow. Archers will send items with a higher priority closer to the front. It also allows the option for “recency bias,” where instead of putting the newest X-priority item behind the X-priority items that are already there, it can put that item in front. It can also pick the equal priority arrows at random. Depending on the genre of a game, that can be an important distinction, and it can be changed at will by the narrative designers in the custom editors. The priority value of an arrow can also be determined by other means than a flat number, like the number of flags it needs to be met.
</p>

<p>
Artemis also checks arrows for criteria saved in flags. If the requirements aren’t met, an Archer will skip it. When compiling narrative items, Artemis tracks what flags are supposed to be set values. Enum IDs for these flags are made as they come up, and deleted when they’re not used by any arrows. That means multiple ways to deliver the narrative (i.e. NPC dialogue or letters) can still reference the same pool of flags. Being in the same pool also means developers can also look through everything and make sure no one made two different flags IDs for what are essentially the same thing.
</p>

<p>
The compilation of these narrative items and their flags use .CSV files.There are template classes for Fletchers (which turn the files into arrow assets)  and Bows (which are game objects that take a fletcher's data and execute the in-scene delivery of a fired arrow). This means the developers have control over how to convert the strings into unique structs for a game’s needs, as well as how to deliver the narrative in-scene using these structs.
</p>

<p>
I’m currently working on an example game utilizing version 0.2.5 in the rituals branch as a proof of concept.
</p>

<img src="/imgs/artemis-rituals-title-screen.png" alt="">

<p>
In the works...
</p>

<p>
Technical information
</p>

<p>
Example custom Fletcher for debug messages.
</p>

<p>
Example custom Bow for the same.
</p>

<p>
The sorted dictionaries in version 0.2 mean we can simply skip anything that's already been looked at so long as we send back the index the next search should start at.
</p>

<p>
Linear Search
</p>
<code>
<!-- public bool LinearSearch(K key, ref int startAt, out V foundValue)
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
} -->
</code>

<p>
The reason why some of the structures used (i.e. tuple, sorted list, priority queue, and sorted dictionary) are custom-written is for two reasons:
</p>

<ol>
<li>

    Their equivalents aren't serializable. Saving/loading the state of a game's narrative may be deeply important to a game. It's something I'd like to implement down the line, or at least make possible for developers using Artemis.
</li>
<li>

    Some things need to be able to easily change how it works. Take the "Narrative Priority Queues" from version 0.1 turning into "archers," allowing for more options. It changed what determined the priority value (number of necessary conditions? flat value? the sum of both?) and if it has a sense of recency bias (stack? queue? random of whichever appropriate arrows have the highest value?). A C# priority queue has nearly none of those variations, let alone the ability to re-sort itself when those changes are made.
</li>
</ol>

<p>
    All criterion checks on flags can be handled all with the same "a >= x && b >= x" function so long as some math is done to convert a value's requirement into a range. The use of float.Epsilon is for changing the >= into a > check.
</p>

<p>
    Criterion Constructor
</p>
    <!--public Criterion(FlagID _stateChecked, CriterionComparisonType _comparisonType, float a, float b = 0)
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
}-->

<p>
The flag's IDs are a recompiling enum instead of strings! Internal symbols will save space and process much smoother, and other parts of the system are planned to use internal symbols through similar means. You can see this in the Goddess, which tracks what flags are being used or not. Flags that are created/deleted are added/removed from the newly written FlagID.cs file, and then that enum script is recompiled.
</p>

<p>
Internal String Compiler
</p>

<!--using System;
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
}-->