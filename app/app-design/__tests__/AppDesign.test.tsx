import { render, screen } from "@testing-library/react";
import AppDesign from "../AppDesign";

describe("AppDesign", () => {
	it("lays out elements in their proper sequence", () => {
		const rendered = render(
			<AppDesign>
				<></>
			</AppDesign>
		);
		const containerElement = rendered.container;
		const headerElement = screen.getByRole("banner");
		const navbarElement = screen.getByRole("navigation");
		const footerElement = screen.getByRole("contentinfo");

		expect(containerElement.firstChild).toEqual(headerElement);
		expect(containerElement.children[1]).toEqual(navbarElement);
		expect(containerElement.lastChild).toEqual(footerElement);
	});
});
