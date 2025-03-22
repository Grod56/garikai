import siteSubsectionModelDefault, {
	SiteSubsectionModelInstance,
	SiteSubsectionModelInstanceIncarnation,
	SiteSubsectionModelInstantiator,
	SiteSubsectionModelInstantiatorIncarnation,
} from "./SiteSubsectionModel";
import { render, screen } from "@testing-library/react";
import SiteSubsection from "./SiteSubsection";
import { ModelInstantiator, ModelInstance } from "@/app/ui/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/ui/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	subsectionTitle: "Test title",
};

describe("SiteSubsection Model", () => {
	describe("SiteSubsectionModel default export", () => {
		const modelInstantiator = siteSubsectionModelDefault;

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
		it("is instance of SiteSubsectionModelInstantiator", () => {
			const mockSiteSubsectionModelInstantiator: SiteSubsectionModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockSiteSubsectionModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockSiteSubsectionModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of SiteSubsectionModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				SiteSubsectionModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: SiteSubsectionModelInstance =
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
			it("is instance of SiteSubsectionModelInstance", () => {
				const mockSiteSubsectionModelInstance: SiteSubsectionModelInstance =
					{
						id: "id",
						compositeClassNameString: "compositeClassNameString",
						subsectionTitle: "Title",
					};
				const mockModelInstanceProperties = Object.keys(
					mockSiteSubsectionModelInstance
				).map((key) => key as keyof SiteSubsectionModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockSiteSubsectionModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of SiteSubsectionModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					SiteSubsectionModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
				expect(modelInstance.subsectionTitle).toEqual(
					instantiatorTestInput.subsectionTitle
				);
			});
		});
	});
});

describe("SiteSubsection Component", () => {
	const modelInstance: SiteSubsectionModelInstance =
		siteSubsectionModelDefault.instantiate({ ...instantiatorTestInput });
	const sampleChild = <span>Test</span>;
	render(
		<SiteSubsection siteSubsectionModelInstance={modelInstance}>
			{sampleChild}
		</SiteSubsection>
	);
	const componentElement = screen.getByTestId(modelInstance.id);
	const subsectionTitleElement = screen.getByTestId("subsectionTitle");

	it("renders section element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("section");
	});
	it("renders child elements within component element", () => {
		expect(componentElement).toContainElement(subsectionTitleElement);
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps all properties for site Subsection title element", () => {
		expect(subsectionTitleElement).toBeInstanceOf(HTMLHeadingElement);
		expect(subsectionTitleElement.textContent).toEqual(
			modelInstance.subsectionTitle
		);
	});
});
