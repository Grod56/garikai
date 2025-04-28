import { instantiatePostPreviewModel } from "../PostPreviewModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiatePostPreviewModel", () => {
	describe("Model returned when called", () => {
		const model = instantiatePostPreviewModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.title).toEqual(
				modelInstantiatorTestInput.title
			);
			expect(modelInstance.postLink).toEqual(
				modelInstantiatorTestInput.postLink
			);
			expect(modelInstance.byline).toContain(
				modelInstantiatorTestInput.author
			);
			//TODO: Homogenize app date locale maybe?
			expect(modelInstance.byline).toContain(
				modelInstantiatorTestInput.publishedDate.toLocaleDateString(
					"en-US",
					{ year: "numeric", month: "long", day: "numeric" }
				)
			);
			expect(modelInstance.thumbnail).toEqual(
				modelInstantiatorTestInput.thumbnail
			);
		});
	});
});
