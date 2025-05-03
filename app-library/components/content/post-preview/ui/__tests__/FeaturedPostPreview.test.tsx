import { render, screen } from "@testing-library/react";
import FeaturedPostPreview, { ELEMENT_NAME } from "../FeaturedPostPreview";
import { featuredPostPreviewModelTestObject } from "./data";

describe("FeaturedPostPreview", () => {
	const { id, title, snippet, byline, thumbnail, postLink } =
		featuredPostPreviewModelTestObject.modelInstance;

	let componentElement: HTMLElement;
	beforeEach(() => {
		render(
			<FeaturedPostPreview model={featuredPostPreviewModelTestObject} />
		);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps title property to corresponding node", () => {
		const titleElement = screen.getByText(title);
		expect(titleElement).toHaveTextContent(title);
	});
	it("maps snippet property to corresponding node", () => {
		const snippetElement = screen.getByText(snippet);
		expect(snippetElement).toHaveTextContent(snippet);
	});
	it("maps byline property to corresponding node", () => {
		const bylineElement = screen.getByText(byline);
		expect(bylineElement).toHaveTextContent(byline);
	});
	it("maps cover property to corresponding node", () => {
		const thumbnailElement = screen.getByAltText(thumbnail.alt);
		expect(thumbnailElement).toContainHTML(thumbnail.source);
		expect(thumbnailElement).toContainHTML(thumbnail.alt);
		expect(thumbnailElement).toContainHTML(thumbnail.placeholder);
	});
	it("maps link property to corresponding node", () => {
		expect(componentElement).toContainHTML(postLink.href);
	});
});
