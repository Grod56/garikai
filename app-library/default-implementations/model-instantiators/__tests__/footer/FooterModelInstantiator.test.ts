import { instantiateFooterModel } from "../../FooterModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateFooterModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateFooterModel({ ...modelInstantiatorTestInput });
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.copyright).toContain(
				modelInstantiatorTestInput.copyrightText
			);
		});
	});
});
