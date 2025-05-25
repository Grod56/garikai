import { ArtImagePreviewModel } from "../../art-image-preview";

export const testModel: ArtImagePreviewModel = {
	modelView: {
		id: "test-id",
		image: {
			source: "https://localhost",
			alt: "This is an image",
			placeholder:
				"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
		},
		title: "test title",
	},
};
