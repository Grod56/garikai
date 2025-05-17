/**
 * @jest-environment node
 */

import blogger from "@/app-library/third-party/apis/blogger";
import { successfulRequestPayload } from "./data";

describe("blogger", () => {
	describe("fetchBlogPosts", () => {
		let fetchSpy;

		beforeEach(() => {
			// eslint-disable-next-line no-undef
			fetchSpy = jest.spyOn(global, "fetch");
		});
		afterEach(() => {
			fetchSpy.mockRestore();
		});

		it("returns items data object when request is successful", async () => {
			fetchSpy.mockImplementation(() =>
				Promise.resolve({
					ok: true,
					json: () => Promise.resolve(successfulRequestPayload),
				})
			);
			// Can't use waitFors due to testing environment
			await expect(blogger.fetchBlogPosts()).resolves.toEqual({
				data: successfulRequestPayload.items,
			});
		});
		it("returns null data object when request fails", async () => {
			fetchSpy.mockImplementation(() => Promise.reject());
			await expect(blogger.fetchBlogPosts()).resolves.toEqual({
				data: null,
			});
			fetchSpy.mockImplementation(() => Promise.resolve({ ok: false }));
			await expect(blogger.fetchBlogPosts()).resolves.toEqual({
				data: null,
			});
		});
	});
});
