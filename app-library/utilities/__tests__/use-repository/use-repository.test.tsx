import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useStatefulRepository } from "../../use-repository";
import {
	faultyTestRepositoryModelInstantiator,
	testRepositoryModelInstantiator,
} from "./data";

describe("useStatefulRepository", () => {
	it("automatically initializes repository", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testRepositoryModelInstantiator)
		);
		// Would've preferred interact toHaveBeenCalled, but not possible
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
	});
	it("only automatically updates repository initially", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testRepositoryModelInstantiator)
		);
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
		const model = renderedHook.result.current;
		const interactSpy = jest.spyOn(model, "interact");
		act(() => {
			renderedHook.rerender();
		});
		expect(
			waitFor(() => {
				expect(interactSpy).toHaveBeenCalled();
			})
		)
			.rejects.toThrow()
			.finally(interactSpy.mockRestore);
	});
	it("returns equivalent model to that provided by repository model instantiator", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testRepositoryModelInstantiator)
		);
		const expectedModelView =
			await testRepositoryModelInstantiator().viewInteractionInterface.produceModelView(
				{ type: RepositoryInteractionType.RETRIEVE, input: null }
			);
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
		const model = renderedHook.result.current;
		expect(model).toEqual({
			modelView: expectedModelView,
			interact: expect.any(Function),
		});
	});
	it("returns stateful repository model", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testRepositoryModelInstantiator)
		);
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
		const model = renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelView).toBe(modelOnRerender.modelView);
		expect(model.interact).toBe(modelOnRerender.interact);
	});
	it("logs any errors on initialization", async () => {
		const consoleErrorSpy = jest.spyOn(console, "error");
		consoleErrorSpy.mockImplementation();
		const errorMessage = "Error error reached critical levels";

		// Jest warning still not clearing
		act(() =>
			renderHook(() => {
				useStatefulRepository(() =>
					faultyTestRepositoryModelInstantiator(errorMessage)
				);
			})
		);
		await waitFor(() => {
			expect(consoleErrorSpy.mock.calls[0][0]).toEqual(
				expect.stringContaining(errorMessage)
			);
		}).finally(consoleErrorSpy.mockRestore);
	});
});
