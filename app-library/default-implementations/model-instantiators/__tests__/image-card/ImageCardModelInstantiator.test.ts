import { instantiateImageCardModel } from "../../ImageCardModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateImageCardModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateImageCardModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.thumbnail).toEqual(
				modelInstantiatorTestInput.thumbnail
			);
			expect(modelView.orientation).toEqual(
				modelInstantiatorTestInput.orientation
			);
		});
	});
});
