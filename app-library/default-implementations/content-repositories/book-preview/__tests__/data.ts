import {
	BookPreviewRecord,
	BookPreviewAPI,
} from "../../../../content-repositories/book-preview/BookPreviewAPI";

const testRecords: BookPreviewRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		author: "An author",
		bookLink: "https://localhost:8768",
		coverSource: "/resources/dackanask/acs",
		coverAlt: "kacmklla",
		coverPlaceholder:
			"data:cover/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
	},
	{
		id: "askcnuiuiq8922212",
		title: "Another title",
		author: "Jane",
		bookLink: "https://my.link/768",
		coverSource: "/resources/acs",
		coverAlt: "asdadasdasdas",
		coverPlaceholder:
			"data:cover/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
	},
];

export const repositoryInstantiatorAPI: BookPreviewAPI = {
	retrieveRecords: jest.fn(async () => {
		return testRecords;
	}),
};

export const faultyRepositoryInstantiatorAPI: BookPreviewAPI = {
	retrieveRecords: jest.fn(async () => {
		throw new Error("This is an error");
	}),
};

export const supabaseSpySelectMockImplementation = () => ({
	select: (_: string) => ({
		order: (_: string) => ({ data: [...testRecords] }),
	}),
});

export const faultySupabaseSpySelectMockImplementation = () => ({
	select: (_: string) => ({ order: (_: string) => ({ data: null }) }),
});
