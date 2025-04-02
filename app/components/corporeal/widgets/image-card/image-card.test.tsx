import imageCardDefault, {
	ImageCardModelInstance,
	ImageCardModelInstanceIncarnation,
	ImageCardModelInstantiator,
	ImageCardModelInstantiatorIncarnation,
} from "./ImageCardModel";
import { render, screen } from "@testing-library/react";
import ImageCard from "./ImageCard";
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
	thumbnail: "thumbnailSourceTest",
	orientation: "horizontal" as "horizontal" | "vertical" | "flexible",
};

describe("ImageCard Model", () => {
	describe("ImageCardModel default export", () => {
		const modelInstantiator = imageCardDefault;

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
		it("is instance of ImageCardModelInstantiator", () => {
			const mockImageCardModelInstantiator: ImageCardModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockImageCardModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockImageCardModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
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
			it("is instance of ImageCardModelInstance", () => {
				const mockImageCardModelInstance: ImageCardModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					thumbnail: "thumbnailSource",
					orientation: "flexible",
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
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
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
				expect(modelInstance.orientation).toEqual(
					instantiatorTestInput.orientation
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
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
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
	});
});
