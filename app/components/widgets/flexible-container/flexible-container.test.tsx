import flexibleContainerDefault, {
	FlexibleContainerModelInstance,
	FlexibleContainerModelInstanceIncarnation,
	FlexibleContainerModelInstantiator,
	FlexibleContainerModelInstantiatorIncarnation,
} from "./FlexibleContainerModel";
import { render, screen } from "@testing-library/react";
import FlexibleContainer from "./FlexibleContainer";
import {
	CorporealComponentModelInstantiator,
	ContentComponentModelInstance,
} from "@/app/components/content/ContentComponentModel";
import {
	CorporealComponentModelInstantiatorIncarnation,
	CorporealComponentModelInstanceIncarnation,
} from "../../content/ContentComponentModel";

const instantiatorTestInput = {
	id: "test-id",
};

describe("FlexibleContainer Model", () => {
	describe("FlexibleContainerModel default export", () => {
		const modelInstantiator = flexibleContainerDefault;

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
		it("is instance of FlexibleContainerModelInstantiator", () => {
			const mockFlexibleContainerModelInstantiator: FlexibleContainerModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockFlexibleContainerModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockFlexibleContainerModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
			);
		});
		it("is instance of FlexibleContainerModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				FlexibleContainerModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: FlexibleContainerModelInstance =
				modelInstantiator.instantiate({ ...instantiatorTestInput });
			it("is instance of ModelInstance", () => {
				const mockModelInstance: ContentComponentModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockModelInstance
				).map((key) => key as keyof ContentComponentModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of FlexibleContainerModelInstance", () => {
				const mockFlexibleContainerModelInstance: FlexibleContainerModelInstance =
					{
						id: "id",
						compositeClassNameString: "compositeClassNameString",
					};
				const mockModelInstanceProperties = Object.keys(
					mockFlexibleContainerModelInstance
				).map((key) => key as keyof FlexibleContainerModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockFlexibleContainerModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
			});
			it("is instance of FlexibleContainerModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					FlexibleContainerModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("FlexibleContainer Component", () => {
	const modelInstance: FlexibleContainerModelInstance =
		flexibleContainerDefault.instantiate({ ...instantiatorTestInput });
	render(
		<FlexibleContainer flexibleContainerModelInstance={modelInstance}>
			<></>
		</FlexibleContainer>
	);
	const componentElement = screen.getByTestId(modelInstance.id);

	it("renders div element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("div");
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
});
