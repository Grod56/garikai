import siteSectionModelDefault, {
	SiteSectionModelInstance,
	SiteSectionModelInstanceIncarnation,
	SiteSectionModelInstantiator,
	SiteSectionModelInstantiatorIncarnation,
} from "./SiteSectionModel";
import { render, screen } from "@testing-library/react";
import SiteSection from "./SiteSection";
import { ModelInstantiator, ModelInstance } from "@/app/components/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/components/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	sectionTitle: "Test title",
	sectionName: "Test name",
};

describe("SiteSection Model", () => {
	describe("SiteSectionModel default export", () => {
		const modelInstantiator = siteSectionModelDefault;

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
		it("is instance of SiteSectionModelInstantiator", () => {
			const mockSiteSectionModelInstantiator: SiteSectionModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockSiteSectionModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockSiteSectionModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of SiteSectionModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				SiteSectionModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: SiteSectionModelInstance =
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
			it("is instance of SiteSectionModelInstance", () => {
				const mockSiteSectionModelInstance: SiteSectionModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					sectionTitle: "Title",
					sectionName: "Subtitle",
				};
				const mockModelInstanceProperties = Object.keys(
					mockSiteSectionModelInstance
				).map((key) => key as keyof SiteSectionModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockSiteSectionModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of SiteSectionModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					SiteSectionModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
				expect(modelInstance.sectionTitle).toEqual(
					instantiatorTestInput.sectionTitle
				);
				expect(modelInstance.sectionName).toEqual(
					instantiatorTestInput.sectionName
				);
			});
		});
	});
});

describe("SiteSection Component", () => {
	const modelInstance: SiteSectionModelInstance =
		siteSectionModelDefault.instantiate({ ...instantiatorTestInput });
	const sampleChild = <span>Test</span>;
	render(
		<SiteSection siteSectionModelInstance={modelInstance}>
			{sampleChild}
		</SiteSection>
	);
	const componentElement = screen.getByTestId(modelInstance.id);
	const sectionTitleElement = screen.getByTestId("sectionTitle");

	it("renders section element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("section");
	});
	it("renders child elements within component element", () => {
		expect(componentElement).toContainElement(sectionTitleElement);
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
		expect(componentElement).toHaveAttribute(
			"data-sectionname",
			modelInstance.sectionName
		);
	});

	it("maps all properties for site section title element", () => {
		expect(sectionTitleElement).toBeInstanceOf(HTMLHeadingElement);
		expect(sectionTitleElement.textContent).toEqual(
			modelInstance.sectionTitle
		);
	});
});
