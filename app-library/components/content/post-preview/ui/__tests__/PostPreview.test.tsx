import { render, screen } from "@testing-library/react";
import PostPreview, { ELEMENT_NAME } from "../PostPreview";
import { postPreviewTestModel } from "./data";

describe("PostPreview", () => {
	const { id, title, byline, thumbnail, postLink } =
		postPreviewTestModel.modelView;

	let componentElement: HTMLElement;
	beforeEach(() => {
		render(<PostPreview model={postPreviewTestModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps title property to corresponding node", () => {
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
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
