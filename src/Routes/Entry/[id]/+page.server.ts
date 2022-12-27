
import { error } from '@sveltejs/kit';
import { GetAPIEntry } from '$lib/Firebase/Api';

export const ssr = false;
// export const hydrate = false;
// export const router = false;

//@ts-ignore
export async function load({ params, fetch, url }) {
    const galaxy = url.searchParams.get('galaxy') || 'euclid';
    const type = url.searchParams.get('type') || 'euclid';

    const { id } = params;
	
    // const record = await GetEntry(type, id, galaxy);
    const record = await GetAPIEntry(type, id, galaxy);

	if(!record.exists) {
		throw error(404, "Cannot find entry")
	}

    return {
        galaxy,
        ...record
    };
}