import { instantiateBookPreviewModel } from "../../BookPreviewModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateBookPreviewModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateBookPreviewModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.title).toEqual(modelInstantiatorTestInput.title);
			expect(modelView.author).toEqual(modelInstantiatorTestInput.author);
			expect(modelView.bookLink).toEqual(
				modelInstantiatorTestInput.bookLink
			);
			expect(modelView.cover).toEqual(modelInstantiatorTestInput.cover);
		});
	});
});
