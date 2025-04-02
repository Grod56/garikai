import comingSoonBannerModelDefault, {
	BannerModelInstance,
	BannerModelInstanceIncarnation,
	BannerModelInstantiator,
	BannerModelInstantiatorIncarnation,
} from "./BannerModel";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
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
	bannerText: "Banner Text test",
};

describe("ComingSoonBanner Model", () => {
	describe("ComingSoonBannerModel default export", () => {
		const modelInstantiator = comingSoonBannerModelDefault;

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
		it("is instance of ComingSoonBannerModelInstantiator", () => {
			const mockComingSoonBannerModelInstantiator: BannerModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockComingSoonBannerModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockComingSoonBannerModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
			);
		});
		it("is instance of ComingSoonBannerModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				BannerModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: BannerModelInstance =
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
			it("is instance of ComingSoonBannerModelInstance", () => {
				const mockComingSoonBannerModelInstance: BannerModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					bannerText: "Banner text",
				};
				const mockModelInstanceProperties = Object.keys(
					mockComingSoonBannerModelInstance
				).map((key) => key as keyof BannerModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockComingSoonBannerModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
			});
			it("is instance of ComingSoonBannerModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					BannerModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("ComingSoonBanner Component", () => {
	const modelInstance: BannerModelInstance =
		comingSoonBannerModelDefault.instantiate({ ...instantiatorTestInput });
	render(<Banner bannerModelInstance={modelInstance} />);
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
