import { render, screen } from "@testing-library/react";
import BodyLayout from "../BodyLayout";

describe("BodyLayout", () => {
	it("lays out elements in their proper sequence", () => {
		const rendered = render(
			<BodyLayout>
				<></>
			</BodyLayout>
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
