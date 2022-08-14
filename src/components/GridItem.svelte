<script lang="ts">
	import { onMount } from 'svelte';
	import type { GridItemType } from '../data/content';

	export let text: string;
	export let color: string;
	export let layer: number;
	export let children: GridItemType[];

	let active: boolean = false;
	let hovered: boolean = false;

	const hover = () => {
		if (active && children.length !== 0) hovered = true;
	};

	onMount(() => {
		setTimeout(() => {
			active = true;
		}, 1000);
	});
</script>

{#if hovered}
	<div class={`grid flex-1 h-full w-full ${layer % 2 ? 'grid-cols-2' : 'grid-rows-2'}`}>
		{#each children as child (child)}
			<svelte:self {...child} />
		{/each}
	</div>
{/if}

{#if !hovered}
	<div class={color} on:mouseover={hover} on:focus={hover}>
		{text}
	</div>
{/if}
