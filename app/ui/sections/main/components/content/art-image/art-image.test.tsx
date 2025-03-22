import artImageModelDefault, {
	ArtImageModelInstance,
	ArtImageModelInstanceIncarnation,
	ArtImageModelInstantiator,
	ArtImageModelInstantiatorIncarnation,
} from "./ArtImageModel";
import { render, screen } from "@testing-library/react";
import ArtImage from "./ArtImage";
import { ModelInstantiator, ModelInstance } from "@/app/ui/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/ui/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	imageSource: "https://localhost",
	imageTitle: "test title",
};

describe("ArtImage Model", () => {
	describe("ArtImageModel default export", () => {
		const modelInstantiator = artImageModelDefault;

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
		it("is instance of ArtImageModelInstantiator", () => {
			const mockArtImageModelInstantiator: ArtImageModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockArtImageModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockArtImageModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
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
			it("is instance of ArtImageModelInstance", () => {
				const mockArtImageModelInstance: ArtImageModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					imageSource: "whatsapp",
					imageTitle: "Title",
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
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
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
			modelInstance.imageSource
		);
		expect(componentElement).toHaveAttribute(
			"title",
			modelInstance.imageTitle
		);
	});
});
