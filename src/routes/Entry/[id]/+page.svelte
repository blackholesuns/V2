<script lang="ts">
    import { page } from '$app/stores';
    // const { type, id } = $page.params;
    
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
        <img src="{imageUrl}" alt="{imageUrl}">
    {/if}
</body>