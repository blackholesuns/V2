
import { error } from '@sveltejs/kit';
import { GetAPIEntry } from '$lib/Firebase/Api';

// export const ssr = false;
// export const hydrate = false;
// export const router = false;

//@ts-ignore
export async function load({ params, fetch, url }) {
    const { id } = params;
	
    const record = await GetAPIEntry(id);

	if(!record.exists) {
		throw error(404, "Cannot find entry")
	}

    return record;
}