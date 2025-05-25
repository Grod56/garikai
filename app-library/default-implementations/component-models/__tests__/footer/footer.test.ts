import { newFooterModel } from "../../footer";
import { modelInstantiatorTestInput } from "./data";

describe("newFooterModel", () => {
	describe("Model returned when called", () => {
		const model = newFooterModel({ ...modelInstantiatorTestInput });
		const { id, copyright, socialLinkModels } = model.modelView!;

		it("corresponds with input parameters", () => {
			expect(id).toEqual(modelInstantiatorTestInput.id);
			expect(copyright).toContain(
				modelInstantiatorTestInput.copyrightText
			);
			socialLinkModels.forEach((socialLinkModel) =>
				expect(
					modelInstantiatorTestInput.socialLinkModelViews
				).toContain(socialLinkModel.modelView)
			);
		});
	});
});
