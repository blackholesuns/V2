<script>
	import { dev } from '$app/environment';
	import Entry from '$component/entries/entry.svelte';
	import { GetLatestEntries } from '$lib/firebase/firestore';
	import Icon from '@iconify/svelte';

	const promise = GetLatestEntries();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="No Mans Sky Coordinate Exchange App" />
</svelte:head>

<div class="mt-12 text-center">
	<div class="mb-4">
		<h1 class="text-3xl font-bold underline">NMSCE App V2</h1>
		<p>The latest Iteration</p>
	</div>

	<div class="flex flex-row flex-wrap w-screen">
		{#await promise}
			<Icon class="mx-auto text-gray-600" width="32" icon="svg-spinners:3-dots-bounce"/>
		{:then entries}
			{#each entries.data as entry}
				<Entry data={entry} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>
