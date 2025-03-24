import carouselModelDefault, {
	CarouselModelInstance,
	CarouselModelInstanceIncarnation,
	CarouselModelInstantiator,
	CarouselModelInstantiatorIncarnation,
} from "./CarouselModel";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import { ModelInstantiator, ModelInstance } from "@/app/components/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/components/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
};

describe("Carousel Model", () => {
	describe("CarouselModel default export", () => {
		const modelInstantiator = carouselModelDefault;

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
		it("is instance of CarouselModelInstantiator", () => {
			const mockCarouselModelInstantiator: CarouselModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockCarouselModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockCarouselModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of CarouselModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CarouselModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: CarouselModelInstance =
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
			it("is instance of CarouselModelInstance", () => {
				const mockCarouselModelInstance: CarouselModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockCarouselModelInstance
				).map((key) => key as keyof CarouselModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockCarouselModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of CarouselModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CarouselModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

//TODO: Download relevant mocks (smh...)
describe("Carousel Component", () => {
	// const modelInstance: CarouselModelInstance = carouselModelDefault.instantiate(
	//     {...instantiatorTestInput}
	// );
	// const sampleChild = <span>Test</span>;
	// render(<Carousel carouselModelInstance={modelInstance}>{sampleChild}</Carousel>);
	// const componentElement = screen.getByTestId(
	//     modelInstance.carouselModelInstanceClassName.getClassNameString
	// );
	// const emblaContainer = componentElement.getElementsByClassName('embla__container')[0];
	// it('renders div as component element', () => {
	//     expect(componentElement.tagName.toLowerCase()).toEqual('div');
	// });
	// it('renders an embla container within component element', () => {
	//     expect(emblaContainer).not.toBeNull();
	// });
	// it('only renders embla slides as direct children to embla container', () => {
	//     const emblaSlides = Array.from(componentElement.getElementsByClassName('embla__slides'));
	//     emblaSlides.forEach((emblaSlide) => {
	//         expect(emblaSlide.parentElement).toEqual(emblaContainer);
	//     })
	// });
	// it('maps all properties for component element', () => {
	//     expect(componentElement.className).toEqual(modelInstance.compositeClassNameString);
	//     expect(componentElement.id).toEqual(modelInstance.id);
	// });
});
