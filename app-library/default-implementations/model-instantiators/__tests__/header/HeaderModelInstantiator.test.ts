import { instantiateHeaderModel } from "../../HeaderModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateHeaderModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateHeaderModel({ ...modelInstantiatorTestInput });
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.headerTitle).toEqual(
				modelInstantiatorTestInput.headerTitle
			);
			expect(modelView.headerSubtitle).toEqual(
				modelInstantiatorTestInput.headerSubtitle
			);
		});
	});
});
