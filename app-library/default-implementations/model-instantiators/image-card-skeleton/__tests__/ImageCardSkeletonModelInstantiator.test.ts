import { instantiateImageCardSkeletonModel } from "../ImageCardSkeletonModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateImageCardSkeletonModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateImageCardSkeletonModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.orientation).toEqual(
				modelInstantiatorTestInput.orientation
			);
		});
	});
});
