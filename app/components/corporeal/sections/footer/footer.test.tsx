import footerModelDefault, {
	FooterModelInstance,
	FooterModelInstanceIncarnation,
	FooterModelInstantiator,
	FooterModelInstantiatorIncarnation,
} from "./FooterModel";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../../ModelIncarnation";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { ModelInstance, ModelInstantiator } from "../../../Model";

const instantiatorTestInput = {
	id: "test-id",
	copyrightText: "All rights reserved.",
};

describe("Footer Model", () => {
	describe("FooterModel default export", () => {
		const modelInstantiator = footerModelDefault;

		it("is instance of ModelInstantiator", () => {
			const mockModelInstantiator: ModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of FooterModelInstantiator", () => {
			const mockFooterModelInstantiator: FooterModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockFooterModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockFooterModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of FooterModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				FooterModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: FooterModelInstance =
				modelInstantiator.instantiate({ ...instantiatorTestInput });
			it("is instance of ModelInstance", () => {
				const mockModelInstance: ModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockModelInstance
				).map((key) => key as keyof ModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of FooterModelInstance", () => {
				const mockFooterModelInstance: FooterModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					copyright: "All rights reserved",
				};
				const mockModelInstanceProperties = Object.keys(
					mockFooterModelInstance
				).map((key) => key as keyof FooterModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockFooterModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of FooterModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					FooterModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
				expect(modelInstance.copyright).toContain(
					instantiatorTestInput.copyrightText
				);
			});
		});
	});
});

describe("Footer Component", () => {
	const modelInstance: FooterModelInstance = footerModelDefault.instantiate({
		...instantiatorTestInput,
	});
	render(<Footer footerModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);
	const copyrightElement = screen.getByTestId("copyright");

	it("renders footer as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("footer");
	});
	//TODO: May be unnecessary. Review later
	it("renders child elements within component element", () => {
		expect(componentElement).toContainElement(copyrightElement);
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps all properties for copyright element", () => {
		expect(copyrightElement.textContent).toEqual(modelInstance.copyright);
	});
});
