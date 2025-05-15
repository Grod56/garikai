import { render, screen } from "@testing-library/react";
import { testModel } from "./data";
import SocialLink, { ELEMENT_NAME } from "../SocialLink";

describe("SocialLink", () => {
	const { socialLink } = testModel.modelView;

	it("maps socialLink to corresponding node", () => {
		render(<SocialLink model={testModel} />);
		const componentElement = screen.getByTestId(ELEMENT_NAME);

		expect(componentElement).toHaveAttribute("href", socialLink.link);
		expect(componentElement).toContainHTML(socialLink.type);
	});

	it("renders link as component element", () => {
		render(<SocialLink model={testModel} />);
		const componentElement = screen.getByTestId(ELEMENT_NAME);

		expect(componentElement).toHaveRole("link");
	});
});
