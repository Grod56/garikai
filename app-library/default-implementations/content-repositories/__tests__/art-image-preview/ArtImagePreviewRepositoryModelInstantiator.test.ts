import { waitFor } from "@testing-library/react";
import { instantiateArtImagePreviewRepositoryModel } from "../../ArtImagePreviewRepositoryModelInstantiator";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";

describe("instantiateArtImagePreviewRepositoryModel", () => {
	describe("Model returned when called", () => {
		it("matches interact output with viewInteractionInterface output", async () => {
			const model = instantiateArtImagePreviewRepositoryModel(
				testRepositoryInstantiatorAPI
			);
			model.interact({
				type: RepositoryInteractionType.RETRIEVE,
				input: null,
			});
			const newModelView = await waitFor(() =>
				model.viewInteractionInterface.produceModelView({
					type: RepositoryInteractionType.RETRIEVE,
					input: null,
				})
			);
			await waitFor(() => {
				expect(model.modelView).toEqual(newModelView);
			});
		});
		it("reports error when api call returns an error", async () => {
			const consoleErrorSpy = jest.spyOn(console, "error");
			consoleErrorSpy.mockImplementation();
			const errorMessage = "What an error";
			const model = instantiateArtImagePreviewRepositoryModel(
				faultyRepositoryInstantiatorAPI(errorMessage)
			);
			model.interact({
				type: RepositoryInteractionType.RETRIEVE,
				input: null,
			});
			await waitFor(() => {
				expect(consoleErrorSpy.mock.calls[0][0]).toEqual(
					expect.stringContaining(errorMessage)
				);
			}).finally(consoleErrorSpy.mockRestore);
		});
	});
});
