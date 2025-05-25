import {
	BookPreviewRecord,
	BookPreviewAPI,
} from "../../../../content-apis/book-preview";

export const testRecords: BookPreviewRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		author: "An author",
		bookLink: "https://localhost:8768/3436363",
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

export const testRepositoryInstantiatorAPI: BookPreviewAPI = {
	retrieveRecords: jest.fn(() => {
		return Promise.resolve(testRecords);
	}),
};

export function faultyRepositoryInstantiatorAPI(
	errorMessage: string
): BookPreviewAPI {
	return {
		retrieveRecords: jest.fn(() => {
			return Promise.reject(errorMessage);
		}),
	};
}
