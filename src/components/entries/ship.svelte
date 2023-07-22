<script lang="ts">
	import { GetOriginalImageUrl } from "$lib/cdn/images";
	import { GetEntryUrl } from "$lib/util";

	export let data: any;

	const date = (data.created.toDate() as Date);
</script>


<div class="w-full lg:w-[calc(50%-1rem)] h-[500px] m-1 p-2 bg-slate-300 rounded-md shadow-md">
	<a class="flex flex-col" href="{GetEntryUrl(data)}">
		
		<h1 class="text-2xl font-semibold mx-3 mt-3">{data.Name}</h1>
		<h1 class="text-lg font-semibold m-2">found by {data._name}</h1>
		<h1 class="text-md text-zinc-600 font-semibold">{date.toLocaleString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h1>
		<img class="" src="{GetOriginalImageUrl(data.Photo)}" alt="">
	</a>
</div>