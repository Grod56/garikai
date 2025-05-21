import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../../../content-apis/ArtImagePreviewAPI";

export const testRecords: ArtImagePreviewRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		imageSource: "/resources/dackanask/acs",
		imageAlt: "kacmklla",
		imagePlaceholder:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
	},
	{
		id: "askcnuiuiq8922212",
		title: "Another title",
		imageSource: "/resources/acs",
		imageAlt: "asdadasdasdas",
		imagePlaceholder:
			"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
	},
];

export const testRepositoryInstantiatorAPI: ArtImagePreviewAPI = {
	retrieveRecords: jest.fn(() => {
		return Promise.resolve(testRecords);
	}),
};

export function faultyRepositoryInstantiatorAPI(
	errorMessage: string
): ArtImagePreviewAPI {
	return {
		retrieveRecords: jest.fn(() => {
			return Promise.reject(errorMessage);
		}),
	};
}
