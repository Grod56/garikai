import { render, screen } from "@testing-library/react";
import BookPreview, { ELEMENT_NAME } from "../BookPreview";
import { modelTestObject } from "./data";

describe("BookPreview", () => {
	render(<BookPreview model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
	const titleElement = screen.getByText(modelInstance.title);
	const authorElement = screen.getByText(modelInstance.author);
	const coverElement = screen.getByAltText(modelInstance.cover.alt);

	afterAll(() => {
		expect(componentElement).toContainElement(titleElement);
		expect(componentElement).toContainElement(authorElement);
		expect(componentElement).toContainElement(coverElement);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps title property to corresponding node", () => {
		expect(titleElement).toBeDefined();
	});
	it("maps author property to corresponding node", () => {
		expect(authorElement).toBeDefined();
	});
	it("maps link property to corresponding node", () => {
		expect(componentElement).toContainHTML(modelInstance.bookLink.href);
	});
	it("maps cover property to corresponding node", () => {
		expect(coverElement).toBeDefined();
	});
});
