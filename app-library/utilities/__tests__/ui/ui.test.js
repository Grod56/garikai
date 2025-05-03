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
		expect(windowOpenSpy.mock.calls[0][0]).toEqual(
			openExternalSiteTestInput
		);
	});
});
