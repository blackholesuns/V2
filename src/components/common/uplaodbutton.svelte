<script lang="ts">
	import { UploadUrl } from '$lib/routes';
	import Icon from '@iconify/svelte';
</script>

<a class="block bg-green-400 hover:[filter:brightness(0.95)] h-full rounded-xl shadow-md hover:shadow-lg transition-all" href={UploadUrl}>
	<div class="flex justify-center items-center">
		<Icon class="m-2" width=24 icon="tabler:upload"/>
		<p class="font-bold align-middle mr-2 inline-block justify-center">
			Upload
		</p>
	</div>
</a>