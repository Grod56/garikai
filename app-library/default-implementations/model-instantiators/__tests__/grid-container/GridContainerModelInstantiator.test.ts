import { instantiateGridContainerModel } from "../../GridContainerModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateGridContainerModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateGridContainerModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.maxXorY).toEqual(
				modelInstantiatorTestInput.maxXorY
			);
			expect(modelView.orientation).toEqual(
				modelInstantiatorTestInput.orientation
			);
			expect(modelView.overflow).toEqual(
				modelInstantiatorTestInput.overflow
			);
		});
	});
});
