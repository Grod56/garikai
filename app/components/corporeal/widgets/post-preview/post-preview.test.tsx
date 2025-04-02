import postPreviewModelDefault, {
	PostPreviewModelInstance,
	PostPreviewModelInstanceIncarnation,
	PostPreviewModelInstantiator,
	PostPreviewModelInstantiatorIncarnation,
} from "./PostPreviewModel";
import { render, screen } from "@testing-library/react";
import PostPreview from "./PostPreview";
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
	title: "Title",
	author: "Test name",
	thumbnail: "/locationtest",
	link: new URL("https://testsite.com"),
	snippet: "sdfsiudbfiusdbniusbf",
	byline: "mlinuihbui | t4h56",
	publishedDate: new Date(),
	orientation: "horizontal" as "horizontal",
};

describe("PostPreview Model", () => {
	describe("PostPreviewModel default export", () => {
		const modelInstantiator = postPreviewModelDefault;

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
		it("is instance of PostPreviewModelInstantiator", () => {
			const mockPostPreviewModelInstantiator: PostPreviewModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockPostPreviewModelInstantiator
			).map((key) => key as keyof CorporealComponentModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockPostPreviewModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of CorporealModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				CorporealComponentModelInstantiatorIncarnation
			);
		});
		it("is instance of PostPreviewModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				PostPreviewModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: PostPreviewModelInstance =
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
			it("is instance of PostPreviewModelInstance", () => {
				const mockPostPreviewModelInstance: PostPreviewModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					title: "Title",
					thumbnail: "/location",
					link: new URL("https://localhost"),
					orientation: "flexible",
					snippet:
						"sdkndfuiiusf sdiubsdfusdihsdifb sdfsiudbfiusdbniusbf",
					byline: "Stuff done | fdjfnakf",
				};
				const mockModelInstanceProperties = Object.keys(
					mockPostPreviewModelInstance
				).map((key) => key as keyof PostPreviewModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockPostPreviewModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of CorporealModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					CorporealComponentModelInstanceIncarnation
				);
			});
			it("is instance of PostPreviewModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					PostPreviewModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("PostPreview Component", () => {
	const modelInstance: PostPreviewModelInstance =
		postPreviewModelDefault.instantiate({
			...instantiatorTestInput,
		});
	render(<PostPreview postPreviewModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);
	const titleElement = screen.getByTestId("title");
	const snippetElement = screen.getByTestId("snippet");
	const bylineElement = screen.getByTestId("byline");

	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps all properties for title element", () => {
		expect(titleElement).toHaveTextContent(modelInstance.title);
		expect(titleElement).toHaveAttribute("title", modelInstance.title);
	});
	it("maps all properties for snippet element", () => {
		expect(snippetElement).toHaveTextContent(modelInstance.snippet);
	});
	it("maps all properties for byline element", () => {
		expect(bylineElement).toHaveTextContent(modelInstance.byline);
	});
});
