import { render, screen } from "@testing-library/react";
import PostPreview, { ELEMENT_NAME } from "../PostPreview";
import { postPreviewModelTestObject } from "./data";

describe("PostPreview", () => {
	render(<PostPreview model={postPreviewModelTestObject} />);

	const { modelInstance } = postPreviewModelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
	const titleElement = screen.getByText(modelInstance.title);
	const bylineElement = screen.getByText(modelInstance.byline);
	const thumbnailElement = screen.getByAltText(modelInstance.thumbnail.alt);

	afterAll(() => {
		expect(componentElement).toContainElement(titleElement);
		expect(componentElement).toContainElement(bylineElement);
		expect(componentElement).toContainElement(thumbnailElement);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps title property to corresponding node", () => {
		expect(titleElement).toBeDefined();
	});
	it("maps byline property to corresponding node", () => {
		expect(bylineElement).toBeDefined();
	});
	it("maps link property to corresponding node", () => {
		expect(componentElement).toContainHTML(modelInstance.postLink.href);
	});
	it("maps cover property to corresponding node", () => {
		expect(thumbnailElement).toBeDefined();
	});
});
