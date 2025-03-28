import linkedImageCardDefault, {
	LinkedImageCardModelInstance,
	LinkedImageCardModelInstanceIncarnation,
	LinkedImageCardModelInstantiator,
	LinkedImageCardModelInstantiatorIncarnation,
} from "./LinkedImageCardModel";
import { render, screen } from "@testing-library/react";
import LinkedImageCard from "./LinkedImageCard";
import { ModelInstantiator, ModelInstance } from "@/app/components/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/components/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	thumbnail: "thumbnailSourceTest",
	orientation: "horizontal" as "horizontal",
	link: new URL("https://localhost"),
};

describe("LinkedImageCard Model", () => {
	describe("LinkedImageCardModel default export", () => {
		const modelInstantiator = linkedImageCardDefault;

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
		it("is instance of LinkedImageCardModelInstantiator", () => {
			const mockLinkedImageCardModelInstantiator: LinkedImageCardModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockLinkedImageCardModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockLinkedImageCardModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of LinkedImageCardModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				LinkedImageCardModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: LinkedImageCardModelInstance =
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
			it("is instance of LinkedImageCardModelInstance", () => {
				const mockLinkedImageCardModelInstance: LinkedImageCardModelInstance =
					{
						id: "id",
						compositeClassNameString: "compositeClassNameString",
						thumbnail: "thumbnailSource",
						orientation: "flexible",
						link: new URL("http://localhost"),
					};
				const mockModelInstanceProperties = Object.keys(
					mockLinkedImageCardModelInstance
				).map((key) => key as keyof LinkedImageCardModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockLinkedImageCardModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of LinkedImageCardModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					LinkedImageCardModelInstanceIncarnation
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

describe("LinkedImageCard Component", () => {
	const modelInstance: LinkedImageCardModelInstance =
		linkedImageCardDefault.instantiate({ ...instantiatorTestInput });
	render(
		<LinkedImageCard linkedImageCardModelInstance={modelInstance}>
			<></>
		</LinkedImageCard>
	);
	const componentElement = screen.getByTestId(modelInstance.id);
	const thumbnailElement = screen.getByTestId("thumbnail");
	const linkElement = screen.getByTestId("link");

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
	it("maps all properties for link element", () => {
		expect(linkElement).toHaveAttribute("href", modelInstance.link.href);
	});
});
