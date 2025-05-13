import { render, screen } from "@testing-library/react";
import { testModel } from "./data";
import BodyLayout from "../BodyLayout";

describe("BodyLayout", () => {
	const { headerModel, navbarModel, footerModel } = testModel.modelView;

	let baseElement: Element;
	beforeEach(() => {
		const renderedElement = render(
			<BodyLayout model={testModel}>
				<></>
			</BodyLayout>
		);
		baseElement = renderedElement.baseElement.firstElementChild as Element;
	});

	it("maps headerModel property to appropriate node", () => {
		const headerElement = screen.getByRole("banner");
		const { id, headerTitle, headerSubtitle } = headerModel.modelView;
		expect(headerElement).toContainHTML(id);
		expect(headerElement).toContainHTML(headerTitle);
		expect(headerElement).toContainHTML(headerSubtitle);
	});
	it("maps navbarModel property to appropriate node", () => {
		const navbarElement = screen.getByRole("navigation");
		const { id } = navbarModel.modelView;
		expect(navbarElement).toContainHTML(id);
	});
	it("maps footerModel property to appropriate node", () => {
		const footerElement = screen.getByRole("contentinfo");
		const { id, copyright } = footerModel.modelView;
		expect(footerElement).toContainHTML(id);
		expect(footerElement).toContainHTML(copyright);
	});
	it("lays out elements in their proper sequence", () => {
		const headerElement = screen.getByRole("banner");
		const navbarElement = screen.getByRole("navigation");
		const footerElement = screen.getByRole("contentinfo");

		expect(baseElement.firstElementChild).toEqual(headerElement);
		expect(baseElement.children[1]).toEqual(navbarElement);
		expect(baseElement.lastElementChild).toEqual(footerElement);
	});
});
