import { waitFor } from "@testing-library/react";
import supabase from "@/app-library/third-party/apis/supabase";
import { instantiateSupabaseArtImagePreviewAPI } from "../../ArtImagePreviewAPIInstantiator";
import {
	faultySupabaseSpySelectMockImplementation,
	supabaseSpySelectMockImplementation,
} from "./data";
describe("instantiateSupabaseArtImagePreviewAPI", () => {
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
			const api = instantiateSupabaseArtImagePreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(supabaseSpy).toHaveBeenCalledWith("ArtImagePreviewView");
		});
		it("throws error when supabase communicates an error", async () => {
			supabaseSpy.mockImplementation(
				faultySupabaseSpySelectMockImplementation
			);
			const api = instantiateSupabaseArtImagePreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});
