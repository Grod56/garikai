import { ContentRepositoryModel } from "@/app-library/content-repositories/ContentRepositoryModel";
import {
	act,
	renderHook,
	RenderHookResult,
	waitFor,
} from "@testing-library/react";
import { useRepository } from "../../use-repository";
import {
	faultyTestRepositoryModelInstantiator,
	TestRepositoryModelInstance,
	testRepositoryModelInstantiator,
	TestRepositoryModelInteraction,
} from "./data";

describe("useRepository", () => {
	let renderedHook: RenderHookResult<
		ContentRepositoryModel<
			TestRepositoryModelInstance,
			TestRepositoryModelInteraction
		>,
		unknown
	>;

	beforeEach(() => {
		renderedHook = renderHook(() =>
			useRepository(testRepositoryModelInstantiator)
		);
	});
	afterEach(() => {
		renderedHook.unmount();
	});

	it("automatically initializes repository", async () => {
		// Would've preferred toHaveBeenCalled, but not possible
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
		});
	});
	it("only automatically updates repository initially", async () => {
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
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
		const expectedModelInstance =
			await testRepositoryModelInstantiator().instanceInteractionInterface.getModelInstance(
				{ interactionName: "RETRIEVE_MODELS" }
			);
		await waitFor(() => {
			expect(renderedHook.result.current.modelInstance).toBeTruthy();
		});
		const model = renderedHook.result.current;
		expect(model).toEqual({
			modelInstance: expectedModelInstance,
			interact: expect.any(Function),
		});
	});
	it("returns memoized repository model", async () => {
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
		renderHook(() => {
			useRepository(() =>
				faultyTestRepositoryModelInstantiator(errorMessage)
			);
		});
		await waitFor(() => {
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				expect.any(String),
				expect.stringContaining(errorMessage)
			);
		}).finally(consoleErrorSpy.mockRestore);
	});
});
