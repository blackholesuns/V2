<script lang="ts">
	import { page } from '$app/stores';
	import { Alert } from 'flowbite-svelte';

	const ErrorCode = $page.status

	const ErrorMessage = $page.error?.message || "An unknown error occurred."

</script>

<h1 class="text-center mt-8 font-bold text-6xl">Error {ErrorCode}</h1>
<h1 class="mt-2 font-semibold text-center">{ErrorMessage}</h1>
<Alert>
	<span class="font-medium">Info alert!</span>
	Change a few things up and try submitting again.
</Alert>