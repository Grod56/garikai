import { waitFor } from "@testing-library/react";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";
import { newBookPreviewRepositoryModel } from "../../BookPreviewRepositoryModelInstantiator";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";

describe("newArtImagePreviewRepositoryModel", () => {
	describe("Model returned when called", () => {
		it("matches interact output with viewInteractionInterface output", async () => {
			const model = newBookPreviewRepositoryModel(
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
			const model = newBookPreviewRepositoryModel(
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
