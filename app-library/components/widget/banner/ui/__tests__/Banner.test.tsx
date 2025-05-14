import { render, screen } from "@testing-library/react";

import Banner from "../Banner";
import { testModel } from "./data";

describe("Banner", () => {
	const { bannerText } = testModel.modelView;

	beforeEach(() => {
		render(<Banner model={testModel} />);
	});

	it("maps bannerText property to corresponding node", () => {
		const bannerTextElement = screen.getByText(bannerText);
		expect(bannerTextElement).toBeInTheDocument();
	});
});
