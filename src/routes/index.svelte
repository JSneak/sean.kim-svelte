<script lang="ts">
	import GridItem from '../components/GridItem.svelte';
	import { content } from '../data/content';
</script>

<div class="flex flex-col h-full overflow-hidden">
	<h1 class="text-9xl font-eb-garamond pb-5">Sean J. Kim - Svelte Demo</h1>
	<div class="grid grid-cols-1 flex-1 grow">
		<GridItem {...content} />
	</div>
</div>
