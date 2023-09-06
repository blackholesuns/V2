<script lang="ts">
	import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { UserLoginUrl, UserSettingsUrl, UserUrl } from "$lib/routes";
	import Icon from "@iconify/svelte";

	const isLoggedIn = false;

	const username = "";
	const profilePictureUrl = "";
</script>

<div class="block h-full aspect-square bg-gray-400 rounded-full overflow-hidden">
	<Avatar id="user-drop" class="cursor-pointer"/>
	<Dropdown triggeredBy="#user-drop">
		{#if isLoggedIn}
			<DropdownHeader>
				<span class="block text-lg">{username}</span>
			</DropdownHeader>
			<a href={UserUrl}>
				<DropdownItem>Profile</DropdownItem>
			</a>
			<a href={UserSettingsUrl}>
				<DropdownItem>Settings</DropdownItem>
			</a>
			<DropdownDivider />
			<a href={UserLoginUrl}>
				<DropdownItem>Sign out</DropdownItem>
			</a>
		{:else}
			<a href={UserLoginUrl}>
				<DropdownItem>Sign In</DropdownItem>
			</a>
		{/if}

	</Dropdown>
</div>