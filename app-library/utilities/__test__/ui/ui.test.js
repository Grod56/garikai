/* eslint-disable no-undef */
import { openExternalSite } from "../../ui";
import { openExternalSiteTestInput } from "./data";

describe("openExternalSite", () => {
	let windowOpenSpy;

	beforeEach(() => {
		windowOpenSpy = jest.spyOn(window, "open");
	});

	afterEach(() => {
		windowOpenSpy.mockRestore();
	});

	it("opens provided url", () => {
		windowOpenSpy.mockImplementation(() => ({}));
		openExternalSite(openExternalSiteTestInput);
		expect(window.open).toHaveBeenCalledWith(
			openExternalSiteTestInput,
			"_blank"
		); //TODO: To be refined
	});
});
