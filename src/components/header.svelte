<script>
	import Account from "./common/account.svelte";
	import UploadButton from "./common/uplaodbutton.svelte";

</script>

<div id="header" class="h-[64px] w-full acryllic top-0 left-0 sticky shadow-xl flex flex-row">
	<a class="aspect-square" href="/">
		<img class="p-2 h-[64px]" src="/app-logo.png" alt="">
	</a>

	<div class="ml-auto p-3 h-[64px] flex flex-row">
		<UploadButton/>
		<div class="mr-2"/>
		<Account/>
	</div>
</div>