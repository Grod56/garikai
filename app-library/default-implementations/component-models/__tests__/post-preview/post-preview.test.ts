import { newPostPreviewModel } from "../../post-preview";
import { modelInstantiatorTestInput } from "./data";

describe("newPostPreviewModel", () => {
	describe("Model returned when called", () => {
		const model = newPostPreviewModel({
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
