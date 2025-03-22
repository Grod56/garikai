import comingSoonBannerModelDefault, {
	ComingSoonBannerModelInstance,
	ComingSoonBannerModelInstanceIncarnation,
	ComingSoonBannerModelInstantiator,
	ComingSoonBannerModelInstantiatorIncarnation,
} from "./ComingSoonBannerModel";
import { render, screen } from "@testing-library/react";
import ComingSoonBanner from "./ComingSoonBanner";
import { ModelInstantiator, ModelInstance } from "@/app/ui/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/ui/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	bannerText: "Banner Text test",
};

describe("ComingSoonBanner Model", () => {
	describe("ComingSoonBannerModel default export", () => {
		const modelInstantiator = comingSoonBannerModelDefault;

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
		it("is instance of ComingSoonBannerModelInstantiator", () => {
			const mockComingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockComingSoonBannerModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockComingSoonBannerModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of ComingSoonBannerModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ComingSoonBannerModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: ComingSoonBannerModelInstance =
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
			it("is instance of ComingSoonBannerModelInstance", () => {
				const mockComingSoonBannerModelInstance: ComingSoonBannerModelInstance =
					{
						id: "id",
						compositeClassNameString: "compositeClassNameString",
						bannerText: "Banner text",
					};
				const mockModelInstanceProperties = Object.keys(
					mockComingSoonBannerModelInstance
				).map((key) => key as keyof ComingSoonBannerModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockComingSoonBannerModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of ComingSoonBannerModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					ComingSoonBannerModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("ComingSoonBanner Component", () => {
	const modelInstance: ComingSoonBannerModelInstance =
		comingSoonBannerModelDefault.instantiate({ ...instantiatorTestInput });
	render(<ComingSoonBanner comingSoonBannerModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);
	const bannerTextElement = screen.getByTestId("bannerText");

	it("renders div element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("div");
	});
	it("renders banner text element within component element", () => {
		expect(componentElement).toContainElement(bannerTextElement);
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps all properties for banner text", () => {
		expect(bannerTextElement).toHaveTextContent(modelInstance.bannerText);
	});
});
