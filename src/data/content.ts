interface GridItemType {
	text: string;
	color: string;
	layer: number;
	children: GridItemType[];
}

const content: GridItemType = {
	text: 'Parent',
	color: 'bg-green-500',
	layer: 0,
	children: [
		{
			text: 'Child 1 Layer 1',
			color: 'bg-purple-500',
			layer: 1,
			children: [
				{
					text: 'Child 1 Layer 2',
					color: 'bg-orange-500',
					layer: 2,
					children: []
				},
				{
					text: 'Child 2 Layer 2',
					color: 'bg-yellow-500',
					layer: 2,
					children: []
				}
			]
		},
		{
			text: 'Child 2 Layer 1',
			color: 'bg-red-500',
			layer: 1,
			children: []
		}
	]
};

export { content };
export type { GridItemType };
