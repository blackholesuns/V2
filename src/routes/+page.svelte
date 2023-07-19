<script>
	import Entry from '$component/Entries/Entry.svelte';
	import { GetLatestEntries } from '$lib/Firebase/Firestore';

	import('$lib/Environment').then(console.log);

	// // console.log("Querying Documents")
	const promise = GetLatestEntries();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="No Mans Sky Coordinate Exchange App" />
</svelte:head>

<div class="mt-12 text-center">
	<h1 class="text-3xl font-bold underline">NMSCE App V2</h1>
	<p>The latest Iteration</p>
	<a
		class="text-indigo-600"
		href="/Entry/c28cfcaf-a8b0-47c0-8a8f-ba3609da332a">Example Entry</a
	>

	<div class="flex flex-row flex-wrap w-screen">
		{#await promise}
			<p>...waiting</p>
		{:then entries}
			{#each entries.data as entry}
				<Entry data={entry} />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>
