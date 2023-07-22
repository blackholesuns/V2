import type { SvelteComponent } from "svelte";
import Ship from "./ship.svelte";

// Mappings from lowercase DB entity types to Svelte components
export const mapping: Map<string, typeof SvelteComponent> = new Map([
	["ship", Ship]
]);