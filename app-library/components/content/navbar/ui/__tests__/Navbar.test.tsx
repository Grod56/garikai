import { render, screen } from "@testing-library/react";
import Navbar, { ELEMENT_NAME } from "../Navbar";
import { testModel } from "./data";

describe("Navbar", () => {
	const { id, navlinkModels } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Navbar model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps navlinkModels property to corresponding nodes", () => {
		navlinkModels.forEach((navlinkModel) => {
			const { link, linkText } = navlinkModel.modelView;
			const linkElement = screen.getByText(linkText);
			expect(linkElement).toContainHTML(link);
		});
	});
	it("renders nav component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("nav");
	});
});
