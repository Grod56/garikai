import { openExternalSite } from "../../../../../utilities/ui";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkedComponent, { ELEMENT_NAME } from "../LinkedComponent";
import { testModel } from "./data";
jest.mock("../../../../../utilities/ui");

describe("LinkedComponent", () => {
	const { link } = testModel.modelView;
	let componentElement: HTMLElement;
	const user = userEvent.setup();

	beforeEach(() => {
		render(
			<LinkedComponent model={testModel}>
				<></>
			</LinkedComponent>,
		);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps link property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("data-href", link.href);
	});

	// UI related ----------------
	it("navigates to link when clicked", async () => {
		await user.click(componentElement);
		expect(openExternalSite).toHaveBeenCalledWith(link);
	});
});
