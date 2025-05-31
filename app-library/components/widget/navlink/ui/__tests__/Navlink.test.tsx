import { render, screen } from "@testing-library/react";
import Navlink from "../Navlink";
import { testModel } from "./data";

describe("Navlink", () => {
	const { link, linkText } = testModel.modelView;
	let linkElement: HTMLElement;

	beforeEach(() => {
		render(<Navlink model={testModel} />);
		linkElement = screen.getByText(linkText);
	});

	it("maps link property to corresponding node", () => {
		expect(linkElement).toHaveAttribute("href", link);
	});

	it("maps linkText property to corresponding node", () => {
		expect(linkElement).toHaveTextContent(linkText);
	});

	it("renders link for component element", () => {
		expect(linkElement).toHaveRole("link");
	});
});
