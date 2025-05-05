import { render, screen } from "@testing-library/react";
import BookPreview, { ELEMENT_NAME } from "../BookPreview";
import { testModel } from "./data";

describe("BookPreview", () => {
	const { id, title, author, cover, bookLink } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<BookPreview model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps title property to corresponding node", () => {
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
	});
	it("maps author property to corresponding node", () => {
		const authorElement = screen.getByText(author);
		expect(authorElement).toBeDefined();
	});
	it("maps cover property to corresponding node", () => {
		const coverElement = screen.getByAltText(cover.alt);
		expect(coverElement).toContainHTML(cover.source);
		expect(coverElement).toContainHTML(cover.alt);
		expect(coverElement).toContainHTML(cover.placeholder);
	});
	it("maps link property to corresponding node", () => {
		expect(componentElement).toContainHTML(bookLink.href);
	});
});
