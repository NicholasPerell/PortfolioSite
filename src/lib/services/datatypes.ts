export type Tools =
    'Unity' |
    'Git' |
    'C#' |
    'C++' |
    'Ink' |
    'Yarn Spinner' |
    'Google Cloud TTS' |
    'Firestore' |
    'Firebase' |
    'Bitbucket' |
    'Atlassian' |
    'UI Toolkit' |
    'uGUI' |
    'Svelte' |
    'TypeScript';

export interface ImgAttributes {
    src: string;
    alt: string;
}

export class Formattable {
    msg: string;
    inserts: Array<Span | ALink>

    constructor(msg: string, inserts: Array<Span | ALink>) {
        this.msg = msg;
        this.inserts = inserts;
    }
}

export class Span {
    msg: string;
    cls: string;

    constructor(msg: string, cls: string) {
        this.msg = msg;
        this.cls = cls;
    }
}

export class ALink {
    msg: string;
    cls: string;
    href: string;
    target: string;

    constructor(msg: string, cls: string, href: string, target: string) {
        this.msg = msg;
        this.cls = cls;
        this.href = href;
        this.target = target;
    }
}