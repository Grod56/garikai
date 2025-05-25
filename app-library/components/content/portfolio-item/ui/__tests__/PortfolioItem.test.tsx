import { render, screen } from "@testing-library/react";
import PortfolioItem, { ELEMENT_NAME } from "../PortfolioItem";
import { testModel } from "./data";

describe("PortfolioItem", () => {
	const { id, title, description, thumbnail, link, category } =
		testModel.modelView;

	let componentElement: HTMLElement;
	beforeEach(() => {
		render(<PortfolioItem model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps title property to corresponding node", () => {
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
	});
	it("maps description property to corresponding node", () => {
		const descriptionElement = screen.getByText(description);
		expect(descriptionElement).toBeInTheDocument();
	});
	it("maps category property to corresponding node", () => {
		const categoryElement = screen.getByText(category);
		expect(categoryElement).toBeInTheDocument();
	});
	it("maps thumbnail property to corresponding node", () => {
		const thumbnailElement = screen.getByAltText(thumbnail.alt);
		expect(thumbnailElement).toContainHTML(thumbnail.source);
		expect(thumbnailElement).toContainHTML(thumbnail.alt);
		expect(thumbnailElement).toContainHTML(thumbnail.placeholder);
	});
	it("maps link property to corresponding node", () => {
		expect(componentElement).toContainHTML(link.href);
	});
});
