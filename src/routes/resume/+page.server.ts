import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(308, '/docs/Nicholas%20Perell%20-%20Resume%20SWE.pdf');
}