import { render, screen } from "@testing-library/react";
import { feauturedPostPreviewModelTestObject } from "./data";
import FeaturedPostPreview from "../FeaturedPostPreview";

describe("FeaturedPostPreview", () => {
	render(<FeaturedPostPreview model={feauturedPostPreviewModelTestObject} />);

	const { modelInstance } = feauturedPostPreviewModelTestObject;
	const componentElement = screen.getByTestId("post-preview");
	const titleElement = screen.getByText(modelInstance.title);
	const bylineElement = screen.getByText(modelInstance.byline);
	const thumbnailElement = screen.getByAltText(modelInstance.thumbnail.alt);
	const snippetElement = screen.getByText(modelInstance.snippet);

	afterAll(() => {
		expect(componentElement).toContainElement(titleElement);
		expect(componentElement).toContainElement(bylineElement);
		expect(componentElement).toContainElement(thumbnailElement);
		expect(componentElement).toContainElement(snippetElement);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps title property to corresponding node", () => {
		expect(titleElement).toBeDefined();
	});
	it("maps snippet property to corresponding node", () => {
		expect(snippetElement).toBeDefined();
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
