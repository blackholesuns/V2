<script lang="ts">
	import { UserLoginUrl } from "$lib/routes";
	import Icon from "@iconify/svelte";

	const isLoggedIn = false;

	const profilePictureUrl = "";
</script>

<div class="block h-full aspect-square bg-gray-400 rounded-full overflow-hidden">
	{#if !isLoggedIn}
		<a href={UserLoginUrl}>
			<Icon class="p-2 w-full h-full" icon="teenyicons:user-solid" width=24/>
		</a>
	{:else}
		<div class="w-full h-full" style={`background-image:url("${profilePictureUrl}");`}/>
	{/if}
</div>