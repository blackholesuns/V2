<script lang="ts">
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    export let data: any;
    const {exists} = data;

    const {Photo, Name, System, Type} = data.data || {};

	
    
    $:imageUrl = `https://cdn.nmsce.com/nmsce/orig/${Photo}`;
    $:title = `NMSCE: ${Name}`
    $:description = `A ${Type} in the ${System} System called ${Name}`
	
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
    
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:image" content="{imageUrl}">

    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{description}">
    <meta name="twitter:image:src" content="{imageUrl}">
</svelte:head>

<body>
    {#if !exists}
        <h1>Sorry The Specified Entry does not exist</h1>
    {:else}
		<div>
        	<img loading="lazy" src="{imageUrl}" alt="{imageUrl}">
			<Table>
				<caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
					{Name || "Unnamed"}
				<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">in the {System || "Undefined"} System</p>
				</caption>
				<TableHead>
				<TableHeadCell>Property</TableHeadCell>
				<TableHeadCell>Value</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each Object.entries(data.data) as [key, value]}
						<TableBodyRow>
							<TableBodyCell>{key}</TableBodyCell>
							<TableBodyCell>{value}</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</Table>
		</div>		  
    {/if}
</body>