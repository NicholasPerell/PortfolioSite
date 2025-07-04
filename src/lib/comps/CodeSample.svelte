<script lang="ts">
    import { browser } from '$app/environment';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-csharp.min.js';

    let { language, source } = $props();

    const escapeHtml = (unsafe: string) => {
        return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    let output = $state(escapeHtml(source));

    $effect(() => {
        if (browser && source && language) {
            try {
                output = Prism.highlight(source, Prism.languages[language], language);
            } catch (err) {
                output = escapeHtml(source);
            }
        }
    });
</script>

<pre class={`language-${language} max-h-[90vh] overflow-hidden`}><code class={`language-${language}`}>{@html output}</code></pre>