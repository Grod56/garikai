import { instantiatePostPreviewModel } from "../../PostPreviewModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiatePostPreviewModel", () => {
	describe("Model returned when called", () => {
		const model = instantiatePostPreviewModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.title).toEqual(modelInstantiatorTestInput.title);
			expect(modelView.postLink).toEqual(
				modelInstantiatorTestInput.postLink
			);
			expect(modelView.byline).toContain(
				modelInstantiatorTestInput.author
			);
			//TODO: Homogenize app date locale maybe?
			expect(modelView.byline).toContain(
				modelInstantiatorTestInput.publishedDate.toLocaleDateString(
					"en-US",
					{ year: "numeric", month: "long", day: "numeric" }
				)
			);
			expect(modelView.thumbnail).toEqual(
				modelInstantiatorTestInput.thumbnail
			);
		});
	});
});
