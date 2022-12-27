<script lang="ts">
	import { page } from '$app/stores';

	const ErrorCode = $page.status

	const ErrorMessage = $page.error?.message || "An unknown error occurred."

</script>


<h1>Error {ErrorCode}</h1>
<h1>{ErrorMessage}</h1>