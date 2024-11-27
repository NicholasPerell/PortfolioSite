(function (Prism) {
    Prism.languages.ink = {
        'comment': {
            pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: true
        },
        'todo': {
            pattern: /(\s*)(TODO\b)(.*)/,
            alias: 'comment'
        },
        'tag': {
            pattern: /#[^\[\]$]+/
        },
        'keyword': {
            pattern: /^(\s*)((?:[\*\+]\s?)+)(\s*)(?:(\(\s*)(\w+)(\s*\)))?/,
            alias: 'tag'
        }
    };
}(Prism));