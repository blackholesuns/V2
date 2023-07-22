
import { error } from '@sveltejs/kit';
import { GetAPIEntry } from '$lib/firebase/api';

export const prerender = false;
export const ssr = true;

//@ts-ignore
export async function load({ params, fetch, url }) {
    const { id } = params;
	
    const record = await GetAPIEntry(id);

	if(!record.exists) {
		throw error(404, "Cannot find entry")
	}

    return record;
}