export interface WorkCardData {
    title: string;
    thumbnail: string;
    hoverThumbnail: string;
    tools: string[];
}

export const works: WorkCardData[] = [
    {
        title: 'Addagrams',
        thumbnail: './imgs/addagrams-thumbnail.jpg',
        hoverThumbnail: './imgs/pn-fade-thumbnail.png',
        tools: ['Unity', 'Git', 'CSharp', 'Firestore', 'Bitbucket']
    },
    {
        title: 'Artemis',
        thumbnail: './imgs/artemis-thumbnail.png',
        hoverThumbnail: './imgs/pn-fade-thumbnail.png',
        tools: ['Unity', 'Git', 'CSharp', 'Ink', 'Yarnspinner']
    },
    {
        title: 'Project Nautilus',
        thumbnail: './imgs/pn-thumbnail.png',
        hoverThumbnail: './imgs/pn-fade-thumbnail.png',
        tools: ['Unity', 'Git', 'CSharp', 'Ink', 'Google Cloud Text-to-Speech']
    },
    {
        title: 'Lenora Fedora',
        thumbnail: './imgs/lenora-fedora-thumbnail.png',
        hoverThumbnail: './imgs/pn-fade-thumbnail.png',
        tools: ['Unity', 'Git', 'CSharp']
    }
];