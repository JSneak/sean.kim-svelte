<script lang="ts">
	import GridItem from '../components/GridItem.svelte';
	import { content } from '../data/content';
</script>

<div class="flex flex-col h-full">
	<h1 class="text-9xl font-eb-garamond pb-5">Sean J. Kim</h1>
	<div class="grid grid-cols-2 flex-1 grow">
		<GridItem {...content} />
		<GridItem {...content} />
		<GridItem {...content} />
		<GridItem {...content} />
	</div>
</div>
