<script lang="ts">
	import { mapping } from "./entrytypes";
	import Ship from "./ship.svelte";

	export let data: Record<string, unknown>;

	const component = mapping.get((data?.type as string)?.toLowerCase());

	if(!component) {
		console.warn(`Unable to retrieve Component for DB type ${data?.type}`);
	}
</script>

<!-- Meta component to substitute DB entities with their respective UI class -->
<svelte:component this={component} {data}/>