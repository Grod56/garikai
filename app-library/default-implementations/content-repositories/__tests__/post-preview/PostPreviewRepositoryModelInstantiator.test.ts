import { waitFor } from "@testing-library/react";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";
import { instantiatePostPreviewRepositoryModel } from "../../PostPreviewRepositoryModelInstantiator";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";

describe("instantiateArtImagePreviewRepositoryModel", () => {
	describe("Model returned when called", () => {
		it("has initial null model view", () => {
			const model = instantiatePostPreviewRepositoryModel(
				testRepositoryInstantiatorAPI
			);
			expect(model.modelView).toBeNull();
		});
		it("matches interact output with viewInteractionInterface output", async () => {
			const model = instantiatePostPreviewRepositoryModel(
				testRepositoryInstantiatorAPI
			);
			await waitFor(() =>
				model.interact({ type: RepositoryInteractionType.RETRIEVE })
			);
			const newModelView = await waitFor(() =>
				model.viewInteractionInterface.getModelView({
					type: RepositoryInteractionType.RETRIEVE,
				})
			);
			expect(model.modelView).toEqual(newModelView);
		});
		it("throws error when api call returns an error", async () => {
			const model = instantiatePostPreviewRepositoryModel(
				faultyRepositoryInstantiatorAPI
			);
			await expect(
				model.interact({ type: RepositoryInteractionType.RETRIEVE })
			).rejects.toThrow();
		});
	});
});
