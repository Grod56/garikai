import { instantiateImageCardModel } from "../ImageCardModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateImageCardModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateImageCardModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.thumbnail).toEqual(
				modelInstantiatorTestInput.thumbnail
			);
			expect(modelInstance.orientation).toEqual(
				modelInstantiatorTestInput.orientation
			);
		});
	});
});
