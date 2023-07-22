<script lang="ts">
	import Ship from "./Ship.svelte";

	export let data: Record<string, unknown>;
	let component: any = null;
	switch(data.type) {
		case "Ship":
			component = Ship
		break;
	}
</script>

<svelte:component this={component} {data}/>