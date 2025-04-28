import { waitFor } from "@testing-library/react";
import supabase from "external-apis/supabase";
import { getSupabaseArtImagePreviewAPI } from "../ArtImagePreviewAPIInstantiator";
import {
	faultySupabaseSpySelectMockImplementation,
	supabaseSpySelectMockImplementation,
} from "./data";
describe("getSupabaseArtImagePreviewAPI", () => {
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
			const api = getSupabaseArtImagePreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(supabaseSpy).toHaveBeenCalledWith("ArtImagePreviewView");
		});
		it("throws error when supabase communicates an error", async () => {
			supabaseSpy.mockImplementation(
				faultySupabaseSpySelectMockImplementation
			);
			const api = getSupabaseArtImagePreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});
