import { PortfolioItemRecord } from "@/app-library/content-apis/portfolio-item";

export const testRecords: PortfolioItemRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		description: "An fmosfnosdnfajf akjf safnk",
		category: "engineering",
		link: "https://localhost:8768",
		thumbnailSource: "/resources/dackanask/acs",
		thumbnailAlt: "kacmklla",
		thumbnailPlaceholder:
			"data:thumbnail/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
	},
	{
		id: "askcnuiuiq8922212",
		title: "Another title",
		description: "Jane",
		category: "insane",
		link: "https://my.link/768",
		thumbnailSource: "/resources/acs",
		thumbnailAlt: "asdadasdasdas",
		thumbnailPlaceholder:
			"data:thumbnail/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
	},
];

export const supabaseSpySelectMockImplementation = () => ({
	select: (_: string) => ({ data: [...testRecords] }),
});

export const faultySupabaseSpySelectMockImplementation = () => ({
	select: (_: string) => ({ data: null }),
});
