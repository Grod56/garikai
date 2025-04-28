import { instantiateGridContainerModel } from "../GridContainerModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateGridContainerModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateGridContainerModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.maxXorY).toEqual(
				modelInstantiatorTestInput.maxXorY
			);
			expect(modelInstance.orientation).toEqual(
				modelInstantiatorTestInput.orientation
			);
			expect(modelInstance.overflow).toEqual(
				modelInstantiatorTestInput.overflow
			);
		});
	});
});
