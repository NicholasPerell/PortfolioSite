import type { ImgAttributes } from "./datatypes";

export interface WorkCardData {
    title: string;
    thumbnail: ImgAttributes;
    hoverPreview: ImgAttributes;
    role: string;
    hoverText: string;
    logline?: string;
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
        // logline: `"Chat with Nicholas Perell for an hour and you'll find he's a bright, dedicated, and empathetic team member willing to jump in head first to get the job done. After working with him ... my only regret is that I couldn't keep him for longer." — Noah Rosenfield, CEO of 1Ton Games`,
        logline: `Refactored existing architecture (e.g. event systems, popups, analytics, & puzzle generation)
and coded new features (e.g. “reveal” power, friend leaderboard, & tutorial system) for the word
game to launch in May 2023 on both Android and iOS. 5K downloads in 1st month.`,
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
        logline: 'For games where the order of who you talk to or what you do is variable, Artemis accesses rules and world state data to give the most appropriate and important delivery. It’s not about the means of delivery, like Ink or Yarn Spinner, but instead about deciding what should be delivered.',
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
        logline: 'First-person, exploration-based game built in Unity where the player takes the role of a remote drone operator working for Isthmus, a mega corporation, piloting into the unknown depths below.',
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
        logline: 'Third-person, 3D platformer and stealth game built in Unity where the player plays as the titular character, a hat person who is trying to explore a hat store to break out her hat friends—all while keeping out of sight (or running away!) from the Tall One.',
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
        logline: 'First-person, action-based, 5v5 PvP game. Get across the map to capture enemy portals in order to score points, all while your abilities change as you traverse to different sections of the map. Defend, fight, evade, and capture.',
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
        logline: '2D Metroidvania built in Unity where the player uses magic sand powers solve puzzles and fight enemies exploring the sunken depths of the past in search of a lost family heirloom.',
        hoverText: 'May–July 2022',
        tools: ['Unity', 'C#', 'Git', 'Yarnspinner'],
        uri: 'high-tide'
    }
];