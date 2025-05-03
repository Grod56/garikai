import { waitFor } from "@testing-library/react";
import blogger from "@/app-library/external-apis/blogger";
import {
	faultyBloggerSpySelectMockImplementation,
	bloggerSpySelectMockImplementation,
} from "./data";
import { instantiateBloggerPostPreviewAPI } from "../PostPreviewAPIInstantiator";
describe("getBloggerPostPreviewPreviewAPI", () => {
	describe("retrieveRecords", () => {
		let bloggerSpy: jest.SpyInstance;

		beforeEach(() => {
			bloggerSpy = jest.spyOn(blogger, "fetchBlogPosts");
		});
		afterEach(() => {
			bloggerSpy.mockRestore();
		});

		it("requests records from appropriate table when called", async () => {
			bloggerSpy.mockImplementation(bloggerSpySelectMockImplementation);
			const api = instantiateBloggerPostPreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(bloggerSpy).toHaveBeenCalled();
		});
		it("throws error when blogger communicates an error", async () => {
			bloggerSpy.mockImplementation(
				faultyBloggerSpySelectMockImplementation
			);
			const api = instantiateBloggerPostPreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});
