(function (Prism) {
    Prism.languages.yarnspinner = {
        'comment': Prism.languages.clike.comment,
        'todo': {
            pattern: /(\s*)(TODO\b)(.*)(?=\r?\n|$)/,
        },
        'tag': {
            pattern: /#[^\[\]$]+/
        },
        'choice': {
            pattern: /(\s*)((?:[\*\+]\s?)+)(\s*)(?:(\(\s*)(\w+)(\s*\)))?/,
            alias: 'operator'
        },
        'escapes': {
            pattern: /\\[\[\]()\\~{}\/#*+-]/
        },
        'divert': [
            {
                pattern: /(->|<-)(\s*)(DONE|END)(\s*)/,
                alias: 'function'
            }, {
                pattern: /(->|<-)(\s*)(\w[\w\.\s]*?)(\s*)(\()/,
                greedy: true,
                alias: 'function'
            }, {
                pattern: /-> *(\w[\w\.]*?)( *)(?=\r?\n|$)/,
                inside: {
                    'divert': {
                        pattern: /->/,
                        alias: 'function'
                    },
                    'url': /\w[\w\.]*?/
                }
            }, {
                pattern: /->/,
                alias: 'function'
            }
        ],
        'include': {
            pattern: /INCLUDE *(\w[\w\.\/]*?)( *)(?=\r?\n|$)/,
            inside: {
                'divert': {
                    pattern: /INCLUDE/,
                    alias: 'function'
                },
                'url': /\w[\w\.\/]*/
            }
        },
        'variables-and-logic': [{
            pattern: /{[^{}]*}/,
            greedy: true,
            alias: 'string'
        }, {
            pattern: /(^|\r?\n)\s*~[^\r\n]*/,
            greedy: true,
            alias: 'string'
        }, {
            pattern: /(^|\r?\n)\s*VAR [^\r\n]*/,
            greedy: true,
            alias: 'string'
        }],
        'knot': {
            pattern: /(^|\r?\n)\s*===\s*\w*\s*===\s*(?=\r?\n|$)/,
            alias: 'function'
        },
        'function': {
            pattern: /(^|\r?\n)\s*===\s*function\s+\w*\(\s*((\w*\s*,\s*)*\w*)?\s*\)\s*===\s*(?=\r?\n|$)/,
        },
        'operator': /\[|\]/
    };
}(Prism));