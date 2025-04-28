import { instantiateBookPreviewModel } from "../BookPreviewModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateBookPreviewModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateBookPreviewModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.title).toEqual(
				modelInstantiatorTestInput.title
			);
			expect(modelInstance.author).toEqual(
				modelInstantiatorTestInput.author
			);
			expect(modelInstance.bookLink).toEqual(
				modelInstantiatorTestInput.bookLink
			);
			expect(modelInstance.cover).toEqual(
				modelInstantiatorTestInput.cover
			);
		});
	});
});
