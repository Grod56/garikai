import { act, renderHook, waitFor } from "@testing-library/react";
import { useRepository } from "../../use-repository";
import {
	faultyTestRepositoryModelInstantiator,
	testRepositoryModelInstantiator,
} from "./data";

describe("useRepository", () => {
	it("automatically initializes repository", async () => {
		const renderedHook = renderHook(() =>
			useRepository(testRepositoryModelInstantiator)
		);
		// Would've preferred toHaveBeenCalled, but not possible
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
		});
	});
	it("only automatically updates repository initially", async () => {
		const renderedHook = renderHook(() =>
			useRepository(testRepositoryModelInstantiator)
		);
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
		});
		const model = renderedHook.result.current;
		const interactSpy = jest.spyOn(model, "interact");
		act(() => {
			renderedHook.rerender();
		});
		// TODO: Ugghh
		expect(
			waitFor(() => {
				expect(interactSpy).toHaveBeenCalled();
			})
		).rejects.toThrow();
	});
	it("returns equivalent model to that provided by repository model instantiator", async () => {
		const renderedHook = renderHook(() =>
			useRepository(testRepositoryModelInstantiator)
		);
		const testModelInstance =
			await testRepositoryModelInstantiator().instanceInteractionInterface.getModelInstance(
				{ interactionName: "RETRIEVE_MODELS" }
			);
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
		});
		const model = renderedHook.result.current;
		expect(model).toEqual({
			modelInstance: testModelInstance,
			interact: expect.any(Function),
		});
	});
	it("returns memoized repository model", async () => {
		const renderedHook = renderHook(() =>
			useRepository(testRepositoryModelInstantiator)
		);
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
		});
		const model = renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelInstance).toBe(modelOnRerender.modelInstance);
		expect(model.interact).toBe(modelOnRerender.interact);
	});
	it("logs any errors on initialization", async () => {
		const consoleErrorSpy = jest.spyOn(console, "error");
		consoleErrorSpy.mockImplementation();
		const errorMessage = "Error error reached critical levels";
		renderHook(() =>
			useRepository(() =>
				faultyTestRepositoryModelInstantiator(errorMessage)
			)
		);
		await waitFor(() => {
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				expect.stringContaining(errorMessage)
			);
		});
		consoleErrorSpy.mockRestore();
	});
});
