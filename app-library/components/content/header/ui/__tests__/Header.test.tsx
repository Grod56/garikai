import { render, screen } from "@testing-library/react";
import Header, { ELEMENT_NAME } from "../Header";
import { testModel } from "./data";

describe("Header", () => {
	const { id, headerTitle, headerSubtitle } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Header model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps headerTitle property to corresponding node", () => {
		const headerTitleElement = screen.getByText(headerTitle);
		expect(headerTitleElement).toBeInTheDocument();
	});
	it("maps headerSubtitle property to corresponding node", () => {
		const headerSubtitleElement = screen.getByText(headerSubtitle);
		expect(headerSubtitleElement).toBeInTheDocument();
	});
	it("renders header component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("header");
	});
});
