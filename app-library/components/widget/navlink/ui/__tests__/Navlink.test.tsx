import { render, screen } from "@testing-library/react";
import Navlink, { ELEMENT_NAME } from "../Navlink";
import { testModel } from "./data";

describe("Navlink", () => {
	const { link, linkText } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Navlink model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps link property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("href", link);
	});

	it("maps linkText property to corresponding node", () => {
		expect(componentElement).toHaveTextContent(linkText);
	});

	it("renders link for component element", () => {
		expect(componentElement).toHaveRole("link");
	});
});
