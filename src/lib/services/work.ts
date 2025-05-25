import type { ImgAttributes } from "./datatypes";

export interface WorkCardData {
    title: string;
    thumbnail: ImgAttributes;
    hoverPreview: ImgAttributes;
    role: string;
    hoverText: string;
    tools: string[];
    uri: string;
    //Add icons for tools the project utilized to entice people
}

export const works: WorkCardData[] = [
    {
        title: 'Addagrams',
        thumbnail: {
            src: './imgs/addagrams-thumbnail.jpg',
            alt: 'Addagrams'
        },
        hoverPreview: {
            src: './imgs/c4_BigFun.gif',
            alt: 'BIG FUN'
        },
        role: 'Game Programmer (Freelance)',
        hoverText: 'March–August 2023',
        tools: ['Unity', 'C#', 'Git', 'Firestore', 'Bitbucket'],
        uri: 'addagrams'
    },
    {
        title: 'Artemis',
        thumbnail: {
            src: './imgs/artemis-thumbnail.png',
            alt: 'Artemis'
        },
        hoverPreview: {
            src: './imgs/artemis-fade-thumbnail.png',
            alt: 'Addagrams'
        },
        role: 'Open-Source Narrative Tool for Unity',
        hoverText: '',
        tools: ['Unity', 'C#', 'Git', 'Ink', 'Yarnspinner'],
        uri: 'artemis'
    },
    {
        title: 'Project Nautilus',
        thumbnail: {
            src: '/imgs/pn-thumbnail.png',
            alt: 'Addagrams'
        },
        hoverPreview: {
            src: '/imgs/pn-fade-thumbnail.png',
            alt: 'Addagrams'
        },
        role: 'Technical & Narrative Director',
        hoverText: 'August 2021–May 2022',
        tools: ['Unity', 'C#', 'Git', 'Ink', 'Google Cloud TTS'],
        uri: 'project-nautilus'
    },
    {
        title: 'Lenora Fedora',
        thumbnail: {
            src: '/imgs/lenora-fedora-thumbnail.png',
            alt: 'Lenora Fedora'
        },
        hoverPreview: {
            src: '/imgs/lenora-fedora-fade-thumbnail.png',
            alt: 'The Tall One looks around with Lenora hidding inside her hat to not be spotted.'
        },
        role: 'Game AI Programmer',
        hoverText: 'January–May 2021',
        tools: ['Unity', 'C#', 'Git'],
        uri: 'lenora-fedora'
    },
    {
        title: 'Black White Red',
        thumbnail: {
            src: '/imgs/bwr-thumbnail.png',
            alt: 'Black White Red'
        },
        hoverPreview: {
            src: '/imgs/bwr-fade-thumbnail.png',
            alt: 'The Tall One looks around with Lenora hidding inside her hat to not be spotted.'
        },
        role: 'Product Owner & Systems Programmer',
        hoverText: 'June–August 2022',
        tools: ['Unity', 'C#', 'Git'],
        uri: 'bwr'
    },
    {
        title: 'High Tide',
        thumbnail: {
            src: '/imgs/high-tide-thumbnail.png',
            alt: 'High Tide'
        },
        hoverPreview: {
            src: '/imgs/high-tide-fade-thumbnail.jpg',
            alt: 'The Tall One looks around with Lenora hidding inside her hat to not be spotted.'
        },
        role: 'Product Owner & Lead Programmer',
        hoverText: 'May–July 2022',
        tools: ['Unity', 'C#', 'Git', 'Yarnspinner'],
        uri: 'high-tide'
    }
];