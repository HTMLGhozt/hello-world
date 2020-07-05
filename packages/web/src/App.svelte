<script>
	import { isSvelteComponent } from './utils/isSvelteComponent';
	export let page;

	console.log(isSvelteComponent(page));
</script>

{#if isSvelteComponent(page)}
	<svelte:component this={page} />
{:else}
	<div>hello world</div>
{/if}
