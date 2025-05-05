import { render, screen } from "@testing-library/react";
import FeaturedPostPreview, { ELEMENT_NAME } from "../FeaturedPostPreview";
import { featuredPostPreviewTestModel } from "./data";

describe("FeaturedPostPreview", () => {
	const { id, title, snippet, byline, thumbnail, postLink } =
		featuredPostPreviewTestModel.modelView;

	let componentElement: HTMLElement;
	beforeEach(() => {
		render(<FeaturedPostPreview model={featuredPostPreviewTestModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps title property to corresponding node", () => {
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
	});
	it("maps snippet property to corresponding node", () => {
		const snippetElement = screen.getByText(snippet);
		expect(snippetElement).toBeInTheDocument();
	});
	it("maps byline property to corresponding node", () => {
		const bylineElement = screen.getByText(byline);
		expect(bylineElement).toBeInTheDocument();
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
