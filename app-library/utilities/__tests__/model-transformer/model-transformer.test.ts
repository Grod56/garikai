import { act, renderHook } from "@testing-library/react";
import {
	useStatefulInteractiveModel,
	useStatefulReadonlyModel,
} from "../../model-transformer";
import {
	statifiableReadonlyModelTestObject,
	statifiableInteractiveModelTestObject,
	testInstanceInteractionInterface,
} from "./data";

describe("useStatefulReadonlyModel", () => {
	it("returns equivalent model", () => {
		const renderedHook = renderHook(() =>
			useStatefulReadonlyModel(statifiableReadonlyModelTestObject)
		);
		const model = renderedHook.result.current;
		expect(model).toEqual(statifiableReadonlyModelTestObject);
	});
	it("returns identical model instance on rerender", () => {
		const renderedHook = renderHook(() =>
			useStatefulReadonlyModel(statifiableReadonlyModelTestObject)
		);
		const model = renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelInstance).toBe(modelOnRerender.modelInstance);
	});
});

describe("useStatefulInteractiveModel", () => {
	it("returns equivalent model", () => {
		const renderedHook = renderHook(() =>
			useStatefulInteractiveModel(statifiableInteractiveModelTestObject)
		);
		const model = renderedHook.result.current;
		expect(model).toEqual({
			modelInstance: statifiableInteractiveModelTestObject.modelInstance,
			interact: expect.any(Function),
		});
	});
	it("returns identical model properties on rerender", () => {
		const renderedHook = renderHook(() =>
			useStatefulInteractiveModel(statifiableInteractiveModelTestObject)
		);
		const model = renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelInstance).toBe(modelOnRerender.modelInstance);
		expect(model.interact).toBe(modelOnRerender.interact);
	});
	it("changes model instance to expected value after interaction", async () => {
		const renderedHook = renderHook(() =>
			useStatefulInteractiveModel(statifiableInteractiveModelTestObject)
		);
		const model = renderedHook.result.current;
		await act(() => model.interact({ interactionName: "CHANGE_DISPLAY" }));
		const expectedModelInstance =
			await testInstanceInteractionInterface.getModelInstance({
				interactionName: "CHANGE_DISPLAY",
			});
		const modelOnRerender = renderedHook.result.current;
		expect(modelOnRerender.modelInstance).toEqual(expectedModelInstance);
	});
});
