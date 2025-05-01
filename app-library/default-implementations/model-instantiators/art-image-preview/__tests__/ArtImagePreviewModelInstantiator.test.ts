import { instantiateArtImagePreviewModel } from "../ArtImagePreviewModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateArtImagePreviewModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateArtImagePreviewModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.title).toEqual(
				modelInstantiatorTestInput.title
			);
			expect(modelInstance.image).toEqual(
				modelInstantiatorTestInput.image
			);
		});
	});
});
