import bookPreviewModelDefault, {
	BookPreviewModelInstance,
	BookPreviewModelInstanceIncarnation,
	BookPreviewModelInstantiator,
	BookPreviewModelInstantiatorIncarnation,
} from "./BookPreviewModel";
import { render, screen } from "@testing-library/react";
import BookPreview from "./BookPreview";
import { ModelInstantiator, ModelInstance } from "@/app/ui/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/ui/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	title: "Title",
	author: "Test name",
	thumbnail: "/locationtest",
	link: new URL("https://testsite.com"),
};

describe("BookPreview Model", () => {
	describe("BookPreviewModel default export", () => {
		const modelInstantiator = bookPreviewModelDefault;

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
		it("is instance of BookPreviewModelInstantiator", () => {
			const mockBookPreviewModelInstantiator: BookPreviewModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockBookPreviewModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockBookPreviewModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of BookPreviewModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				BookPreviewModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: BookPreviewModelInstance =
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
			it("is instance of BookPreviewModelInstance", () => {
				const mockBookPreviewModelInstance: BookPreviewModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
					title: "Title",
					author: "Firstname Lastname",
					thumbnail: "/location",
					link: new URL("https://localhost"),
					flexible: "true",
				};
				const mockModelInstanceProperties = Object.keys(
					mockBookPreviewModelInstance
				).map((key) => key as keyof BookPreviewModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockBookPreviewModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of BookPreviewModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					BookPreviewModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("BookPreview Component", () => {
	const modelInstance: BookPreviewModelInstance =
		bookPreviewModelDefault.instantiate({
			...instantiatorTestInput,
		});
	render(<BookPreview bookPreviewModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);
	const titleElement = screen.getByTestId("title");
	const authorElement = screen.getByTestId("author");

	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps all properties for title element", () => {
		expect(titleElement).toHaveTextContent(modelInstance.title);
	});
	it("maps all properties for author element", () => {
		expect(authorElement).toHaveTextContent(modelInstance.author);
	});
});
