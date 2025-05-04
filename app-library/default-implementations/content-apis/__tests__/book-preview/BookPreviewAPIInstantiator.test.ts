import { waitFor } from "@testing-library/react";
import supabase from "@/app-library/external-apis/supabase";
import {
	faultySupabaseSpySelectMockImplementation,
	supabaseSpySelectMockImplementation,
} from "./data";
import { instantiateSupabaseBookPreviewAPI } from "../../BookPreviewAPIInstantiator";
describe("getSupabaseBookPreviewPreviewAPI", () => {
	describe("retrieveRecords", () => {
		let supabaseSpy: jest.SpyInstance;

		beforeEach(() => {
			supabaseSpy = jest.spyOn(supabase, "from");
		});
		afterEach(() => {
			supabaseSpy.mockRestore();
		});

		it("requests records from appropriate table when called", async () => {
			supabaseSpy.mockImplementation(supabaseSpySelectMockImplementation);
			const api = instantiateSupabaseBookPreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(supabaseSpy).toHaveBeenCalledWith("BookPreviewView");
		});
		it("throws error when supabase communicates an error", async () => {
			supabaseSpy.mockImplementation(
				faultySupabaseSpySelectMockImplementation
			);
			const api = instantiateSupabaseBookPreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});
