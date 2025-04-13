import { render, screen } from "@testing-library/react";
import {
	CorporealComponentModelInstantiator,
	ContentComponentModelInstance,
} from "@/app/components/content/ContentComponentModel";
import {
	CorporealComponentModelInstantiatorIncarnation,
	CorporealComponentModelInstanceIncarnation,
} from "../../content/ContentComponentModel";

import imageCardSkeletonDefault, {
	ImageCardSkeletonModelInstance,
	ImageCardSkeletonModelInstanceIncarnation,
	ImageCardSkeletonModelInstantiator,
	ImageCardSkeletonModelInstantiatorIncarnation,
} from "./ImageCardSkeletonModel";
import ImageCardSkeleton from "./ImageCardSkeleton";

const instantiatorTestInput = {
	id: "test-id",
	orientation: "vertical" as "horizontal" | "vertical" | "flexible",
};

describe("ImageCardSkeleton Model", () => {
	describe("ImageCardSkeletonModel default export", () => {
		const modelInstantiator = imageCardSkeletonDefault;

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
		it("is instance of ImageCardSkeletonModelInstantiator", () => {
			const mockImageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockImageCardSkeletonModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockImageCardSkeletonModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
			);
		});
		it("is instance of ImageCardSkeletonModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ImageCardSkeletonModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: ImageCardSkeletonModelInstance =
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
			it("is instance of ImageCardSkeletonModelInstance", () => {
				const mockImageCardSkeletonModelInstance: ImageCardSkeletonModelInstance =
					{
						id: "id",
						compositeClassNameString: "compositeClassNameString",
						orientation: "flexible",
					};
				const mockModelInstanceProperties = Object.keys(
					mockImageCardSkeletonModelInstance
				).map((key) => key as keyof ImageCardSkeletonModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockImageCardSkeletonModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
			});
			it("is instance of ImageCardSkeletonModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					ImageCardSkeletonModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("ImageCardSkeleton Component", () => {
	const modelInstance: ImageCardSkeletonModelInstance =
		imageCardSkeletonDefault.instantiate({ ...instantiatorTestInput });
	render(
		<ImageCardSkeleton imageCardSkeletonModelInstance={modelInstance} />
	);
	const componentElement = screen.getByTestId(modelInstance.id);
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
	});
});
