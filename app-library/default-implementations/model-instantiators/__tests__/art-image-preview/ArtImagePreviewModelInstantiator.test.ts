import { instantiateArtImagePreviewModel } from "../../ArtImagePreviewModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateArtImagePreviewModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateArtImagePreviewModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.title).toEqual(modelInstantiatorTestInput.title);
			expect(modelView.image).toEqual(modelInstantiatorTestInput.image);
		});
	});
});
