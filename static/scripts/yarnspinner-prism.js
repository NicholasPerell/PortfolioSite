(function (Prism) {
    Prism.languages.yarnspinner = {
        // Define base patterns first
        'variable': /\$\w+/,
        'keyword': /\b(if|set|endif|else|elseif|is|to|not|ne|eq|le|ge|gt|lt|and|or)\b/,
        'operator': /[+\-*/!<>=]=?|>=?|<=?|==|!=/,
        'string': {
            pattern: /"(?:\\.|[^\\"])*"/,
            inside: { 'escape': /\\./ }
        },
        'number': /\b[+-]?(?:\d+\.?\d*|\.\d+)\b/,
        'inline-expression': {
            pattern: /\{[^{}]*\}/,
            inside: {
                'keyword': null, // Will reference below
                'operator': null,
                'variable': null,
                'string': null,
                'number': null
            }
        },

        // Then complex patterns that reference the base ones
        'node-header': {
            pattern: /^\w+:/m,
            alias: 'keyword'
        },

        'node-body': {
            pattern: /^---[\s\S]*?^===/m,
            inside: {
                'comment': /\/\/.*/,
                'command': {
                    pattern: /<<.*?>>/,
                    inside: {
                        'command-keyword': {
                            pattern: /\w+/,
                            greedy: true,
                        },
                        'keyword': null, // Reference will be set later
                        'operator': null,
                        'string': null,
                        'variable': null,
                        'number': null,
                        'function': /\b\w+\b/,
                    }
                },
                'option': {
                    pattern: /\[\[.*?\]\]/,
            inside: {
                'punctuation': /\|/,
                'expression': null,
                'text': /[^|[\]{}]+/
            }
        },
                'inline-expression': null,
                'hashtag': /#\S+/,
                'shortcut-option': /^\s*->/,
                'format-function': {
                    pattern: /\[(?!\[).*?\]/,
                    inside: {
                        'string': null,
                        'placeholder': /%/,
                        'expression': null
                    }
                }
            }
        }
    };

    // Resolve circular references after initial definition
    Prism.languages.yarnspinner['inline-expression'].inside.keyword = Prism.languages.yarnspinner.keyword;
    Prism.languages.yarnspinner['inline-expression'].inside.operator = Prism.languages.yarnspinner.operator;
    Prism.languages.yarnspinner['inline-expression'].inside.variable = Prism.languages.yarnspinner.variable;
    Prism.languages.yarnspinner['inline-expression'].inside.string = Prism.languages.yarnspinner.string;
    Prism.languages.yarnspinner['inline-expression'].inside.number = Prism.languages.yarnspinner.number;

    // Configure node-body dependencies
    const yarnspinner = Prism.languages.yarnspinner;
    yarnspinner['node-body'].inside['command'].inside.keyword = yarnspinner.keyword;
    yarnspinner['node-body'].inside['command'].inside.operator = yarnspinner.operator;
    yarnspinner['node-body'].inside['command'].inside.string = yarnspinner.string;
    yarnspinner['node-body'].inside['command'].inside.variable = yarnspinner.variable;
    yarnspinner['node-body'].inside['command'].inside.number = yarnspinner.number;

    yarnspinner['node-body'].inside['option'].inside.expression = yarnspinner['inline-expression'];
    yarnspinner['node-body'].inside['inline-expression'] = yarnspinner['inline-expression'];
    yarnspinner['node-body'].inside['format-function'].inside.string = yarnspinner.string;
    yarnspinner['node-body'].inside['format-function'].inside.expression = yarnspinner['inline-expression'];

    // Prism.languages.yarnspinner = {
    //     'comment': Prism.languages.clike.comment,
    //     'todo': {
    //         pattern: /(\s*)(TODO\b)(.*)(?=\r?\n|$)/,
    //     },
    //     'tag': {
    //         pattern: /#[^\[\]$]+/
    //     },
    //     'choice': {
    //         pattern: /(\s*)((?:[\*\+]\s?)+)(\s*)(?:(\(\s*)(\w+)(\s*\)))?/,
    //         alias: 'operator'
    //     },
    //     'escapes': {
    //         pattern: /\\[\[\]()\\~{}\/#*+-]/
    //     },
    //     'divert': [
    //         {
    //             pattern: /(->|<-)(\s*)(DONE|END)(\s*)/,
    //             alias: 'function'
    //         }, {
    //             pattern: /(->|<-)(\s*)(\w[\w\.\s]*?)(\s*)(\()/,
    //             greedy: true,
    //             alias: 'function'
    //         }, {
    //             pattern: /-> *(\w[\w\.]*?)( *)(?=\r?\n|$)/,
    //             inside: {
    //                 'divert': {
    //                     pattern: /->/,
    //                     alias: 'function'
    //                 },
    //                 'url': /\w[\w\.]*?/
    //             }
    //         }, {
    //             pattern: /->/,
    //             alias: 'function'
    //         }
    //     ],
    //     'include': {
    //         pattern: /INCLUDE *(\w[\w\.\/]*?)( *)(?=\r?\n|$)/,
    //         inside: {
    //             'divert': {
    //                 pattern: /INCLUDE/,
    //                 alias: 'function'
    //             },
    //             'url': /\w[\w\.\/]*/
    //         }
    //     },
    //     'variables-and-logic': [{
    //         pattern: /{[^{}]*}/,
    //         greedy: true,
    //         alias: 'string'
    //     }, {
    //         pattern: /(^|\r?\n)\s*~[^\r\n]*/,
    //         greedy: true,
    //         alias: 'string'
    //     }, {
    //         pattern: /(^|\r?\n)\s*VAR [^\r\n]*/,
    //         greedy: true,
    //         alias: 'string'
    //     }],
    //     'knot': {
    //         pattern: /(^|\r?\n)\s*===\s*\w*\s*===\s*(?=\r?\n|$)/,
    //         alias: 'function'
    //     },
    //     'function': {
    //         pattern: /(^|\r?\n)\s*===\s*function\s+\w*\(\s*((\w*\s*,\s*)*\w*)?\s*\)\s*===\s*(?=\r?\n|$)/,
    //     },
    //     'operator': /\[|\]/
    // };
}(Prism));