export interface PostCardData {
    title: string;
    blurb: string;
    thumbnail: string;
    tags: string[];
    tools: string[];
    written?: Date;
    lastEdited?: Date;
    uri: string;
}

export const posts: PostCardData[] = [
    {
        title: "A Case for UI Toolkit",
        blurb: "UI Toolkit is close to the web standard. It just needs the frameworks that makes web development useable.",
        thumbnail: './imgs/unity-6-0-loading.png',
        tags: ['UI Programming'],
        tools: ['Unity', 'TailwindCSS', 'UIToolkit', 'TypeScript', 'CSharp'],
        uri: 'ui-toolkit-frameworks'
    },
    {
        title: 'Artemis v0.2.5',
        blurb: 'Artemis Version 0.2.5 is out now!',
        thumbnail: './imgs/artermis-v0-2-5.jpg',
        tags: ['Narrative Programming'],
        tools: ['Unity', 'CSharp', 'Ink', 'Yarnspinnner'],
        uri: 'artemis-0-2-5',
        written: new Date(2023, 10, 3)
    },
    {
        title: "Missing Those Places",
        blurb: "A little essay about identity, singing to Joel, Spidey, & not knowing when you'll be home.",
        thumbnail: "./imgs/aaron-home-pizza.jpg",
        tags: ['Creative Writing'],
        tools: [],
        uri: 'missing-places'
    },
];