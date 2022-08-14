interface GridItemType {
	text: string;
	color: string;
	layerClass: string;
	children: GridItemType[];
}

const content: GridItemType = {
	text: 'Parent',
	color: 'bg-green-500',
	layerClass: 'grid flex-1 h-full w-full grid-rows-2',
	children: [
		{
			text: 'Child 1 Layer 1',
			color: 'bg-purple-500',
			layerClass: 'grid flex-1 h-full w-full grid-cols-2',
			children: [
				{
					text: 'Child 1 Layer 2',
					color: 'bg-orange-500',
					layerClass: 'grid flex-1 h-full w-full grid-rows-2',
					children: []
				},
				{
					text: 'Child 2 Layer 2',
					color: 'bg-yellow-500',
					layerClass: 'grid flex-1 h-full w-full grid-rows-2',
					children: []
				}
			]
		},
		{
			text: 'Child 2 Layer 1',
			color: 'bg-red-500',
			layerClass: 'grid flex-1 h-full w-full grid-cols-2',
			children: []
		}
	]
};

export { content };
export type { GridItemType };
