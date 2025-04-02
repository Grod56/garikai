import artImageModelDefault, {
	ArtImageModelInstance,
	ArtImageModelInstanceIncarnation,
	ArtImageModelInstantiator,
	ArtImageModelInstantiatorIncarnation,
} from "./ArtImageModel";
import { render, screen } from "@testing-library/react";
import ArtImage from "./ArtImage";
import {
	CorporealComponentModelInstantiator,
	CorporealComponentModelInstance,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstantiatorIncarnation,
	CorporealComponentModelInstanceIncarnation,
} from "../../CorporealComponentModel";

const instantiatorTestInput = {
	id: "test-id",
	image: {
		source: "https://localhost",
		alt: "This is an image",
		placeholder: "empty" as "empty",
	},
	title: "test title",
};

describe("ArtImage Model", () => {
	describe("ArtImageModel default export", () => {
		const modelInstantiator = artImageModelDefault;

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
		it("is instance of ArtImageModelInstantiator", () => {
			const mockArtImageModelInstantiator: ArtImageModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockArtImageModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockArtImageModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
			);
		});
		it("is instance of ArtImageModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ArtImageModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: ArtImageModelInstance =
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
			it("is instance of ArtImageModelInstance", () => {
				const mockArtImageModelInstance: ArtImageModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					image: {
						source: "https://mock2000.com",
						alt: "An image",
						placeholder: "empty" as "empty",
					},
					title: "Title sample",
				};
				const mockModelInstanceProperties = Object.keys(
					mockArtImageModelInstance
				).map((key) => key as keyof ArtImageModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockArtImageModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
			});
			it("is instance of ArtImageModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					ArtImageModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("ArtImage Component", () => {
	const modelInstance: ArtImageModelInstance =
		artImageModelDefault.instantiate({
			...instantiatorTestInput,
		});
	render(<ArtImage artImageModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);

	it("renders img as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("img");
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
		expect(componentElement).toHaveAttribute(
			"src",
			modelInstance.image.source
		);
		expect(componentElement).toHaveAttribute("title", modelInstance.title);
	});
});
