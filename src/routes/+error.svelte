<script lang="ts">
	import { page } from '$app/stores';

	const ErrorCode = $page.status

	const ErrorMessage = $page.error?.message || "An unknown error occurred."

</script>

<h1 class="text-center mt-8 font-bold text-6xl">Error {ErrorCode}</h1>
<h1 class="mt-2 font-semibold text-center">{ErrorMessage}</h1>