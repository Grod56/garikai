import { instantiateImageCardSkeletonModel } from "../../ImageCardSkeletonModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateImageCardSkeletonModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateImageCardSkeletonModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.orientation).toEqual(
				modelInstantiatorTestInput.orientation
			);
		});
	});
});
