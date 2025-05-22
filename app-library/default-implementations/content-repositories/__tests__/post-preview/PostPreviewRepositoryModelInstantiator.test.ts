import { waitFor } from "@testing-library/react";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";
import { newPostPreviewRepositoryModel } from "../../PostPreviewRepositoryModelInstantiator";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";

describe("newArtImagePreviewRepositoryModel", () => {
	describe("Model returned when called", () => {
		it("matches interact output with viewInteractionInterface output", async () => {
			const model = newPostPreviewRepositoryModel(
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
		it("throws error when api call returns an error", async () => {
			const consoleErrorSpy = jest.spyOn(console, "error");
			consoleErrorSpy.mockImplementation();
			const errorMessage = "What an error";
			const model = newPostPreviewRepositoryModel(
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
