import imageCardDefault, {
	ImageCardModelInstance,
	ImageCardModelInstanceIncarnation,
	ImageCardModelInstantiator,
	ImageCardModelInstantiatorIncarnation,
} from "./ImageCardModel";
import { render, screen } from "@testing-library/react";
import ImageCard from "./ImageCard";
import { ModelInstantiator, ModelInstance } from "@/app/ui/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/ui/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	thumbnail: "thumbnailSourceTest",
	isFlexible: false,
};

describe("ImageCard Model", () => {
	describe("ImageCardModel default export", () => {
		const modelInstantiator = imageCardDefault;

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
		it("is instance of ImageCardModelInstantiator", () => {
			const mockImageCardModelInstantiator: ImageCardModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockImageCardModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockImageCardModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of ImageCardModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ImageCardModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: ImageCardModelInstance =
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
			it("is instance of ImageCardModelInstance", () => {
				const mockImageCardModelInstance: ImageCardModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					thumbnail: "thumbnailSource",
					flexible: "true",
				};
				const mockModelInstanceProperties = Object.keys(
					mockImageCardModelInstance
				).map((key) => key as keyof ImageCardModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockImageCardModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of ImageCardModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					ImageCardModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
				expect(modelInstance.thumbnail).toEqual(
					instantiatorTestInput.thumbnail
				);
				expect(modelInstance.flexible).toEqual(
					`${instantiatorTestInput.isFlexible}`
				);
			});
		});
	});
});

describe("ImageCard Component", () => {
	const modelInstance: ImageCardModelInstance = imageCardDefault.instantiate({
		...instantiatorTestInput,
	});
	render(
		<ImageCard imageCardModelInstance={modelInstance}>
			<></>
		</ImageCard>
	);
	const componentElement = screen.getByTestId(modelInstance.id);
	const thumbnailElement = screen.getByTestId("thumbnail");

	it("renders div element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("div");
	});
	it("renders img element as thumbnail element", () => {
		expect(thumbnailElement.tagName.toLowerCase()).toEqual("img");
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps all properties for thumbnail element", () => {
		expect(thumbnailElement).toHaveAttribute(
			"src",
			modelInstance.thumbnail
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
});
