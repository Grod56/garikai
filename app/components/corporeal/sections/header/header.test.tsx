import headerModelDefault, {
	HeaderModelInstance,
	HeaderModelInstanceIncarnation,
	HeaderModelInstantiator,
	HeaderModelInstantiatorIncarnation,
} from "./HeaderModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import {
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "../../CorporealComponentModel";

const instantiatorTestInput = {
	id: "test-id",
	headerTitle: "Test title",
	headerSubtitle: "Test subtitle",
};

describe("Header Model", () => {
	describe("HeaderModel default export", () => {
		const modelInstantiator = headerModelDefault;

		it("is instance of ModelInstantiator", () => {
			const mockModelInstantiator: CorporealComponentModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of HeaderModelInstantiator", () => {
			const mockHeaderModelInstantiator: HeaderModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockHeaderModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockHeaderModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
			);
		});
		it("is instance of HeaderModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				HeaderModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: HeaderModelInstance =
				modelInstantiator.instantiate({ ...instantiatorTestInput });
			it("is instance of ModelInstance", () => {
				const mockModelInstance: CorporealComponentModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockModelInstance
				).map((key) => key as keyof CorporealComponentModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of HeaderModelInstance", () => {
				const mockHeaderModelInstance: HeaderModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					headerTitle: "Title",
					headerSubtitle: "Subtitle",
				};
				const mockModelInstanceProperties = Object.keys(
					mockHeaderModelInstance
				).map((key) => key as keyof HeaderModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockHeaderModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
			});
			it("is instance of HeaderModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					HeaderModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
				expect(modelInstance.headerTitle).toEqual(
					instantiatorTestInput.headerTitle
				);
				expect(modelInstance.headerSubtitle).toEqual(
					instantiatorTestInput.headerSubtitle
				);
			});
		});
	});
});

describe("Header Component", () => {
	const modelInstance: HeaderModelInstance = headerModelDefault.instantiate({
		...instantiatorTestInput,
	});
	render(<Header headerModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);
	const headerTitleElement = screen.getByTestId("headerTitle");
	const headerSubtitleElement = screen.getByTestId("headerSubtitle");

	it("renders header element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("header");
	});
	it("renders child elements within component element", () => {
		expect(componentElement).toContainElement(headerTitleElement);
		expect(componentElement).toContainElement(headerSubtitleElement);
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});

	it("maps all properties for header title element", () => {
		expect(headerTitleElement).toBeInstanceOf(HTMLHeadingElement);
		expect(headerTitleElement.textContent).toEqual(
			modelInstance.headerTitle
		);
	});
	it("maps all properties for header subtitle element", () => {
		expect(headerSubtitleElement).toBeInstanceOf(HTMLHeadingElement);
		expect(headerSubtitleElement.textContent).toEqual(
			modelInstance.headerSubtitle
		);
	});
});
