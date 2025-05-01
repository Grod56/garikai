import { waitFor } from "@testing-library/react";
import {
	faultyRepositoryInstantiatorAPI,
	repositoryInstantiatorAPI,
} from "./data";
import { instantiateBookPreviewRepositoryModel } from "../BookPreviewRepositoryModelInstantiator";

describe("instantiateArtImagePreviewRepositoryModel", () => {
	describe("Model returned when called", () => {
		it("has initial null model instance", () => {
			const model = instantiateBookPreviewRepositoryModel(
				repositoryInstantiatorAPI
			);
			expect(model.modelInstance).toBeNull();
		});
		it("matches 'retrieve models' interaction with instanceInteractionInterface output", async () => {
			const model = instantiateBookPreviewRepositoryModel(
				repositoryInstantiatorAPI
			);
			await waitFor(() =>
				model.interact({ interactionName: "RETRIEVE_MODELS" })
			);
			const newModelInstance = await waitFor(() =>
				model.instanceInteractionInterface.getModelInstance({
					interactionName: "RETRIEVE_MODELS",
				})
			);
			expect(model.modelInstance).toEqual(newModelInstance);
		});

		it("throws error when api call returns an error", async () => {
			const model = instantiateBookPreviewRepositoryModel(
				faultyRepositoryInstantiatorAPI
			);
			await expect(
				model.interact({ interactionName: "RETRIEVE_MODELS" })
			).rejects.toThrow();
		});
	});
});
