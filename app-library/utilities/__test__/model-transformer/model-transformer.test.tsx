import { act, renderHook } from "@testing-library/react";
import { InteractiveModel } from "../../../custom-types/model/InteractiveModel";
import { Model } from "../../../custom-types/model/Model";
import {
	memoizableInteractiveModelTestObject,
	memoizableReadonlyModelTestObject,
	testInstanceInteractionInterface,
	TestInteraction,
	TestModelInstance,
} from "./data";
import {
	useMemoizedInteractiveModel,
	useMemoizedReadonlyModel,
} from "../../model-transformer";

describe("useMemoizedReadonlyModel", () => {
	it("returns equivalent model", () => {
		const renderedHook = renderHook(() =>
			useMemoizedReadonlyModel(memoizableReadonlyModelTestObject)
		);
		const memoizedModel: Model<TestModelInstance> =
			renderedHook.result.current;
		expect(memoizedModel).toEqual(memoizableReadonlyModelTestObject);
	});
	it("returns identical model instance on rerender", () => {
		const renderedHook = renderHook(() =>
			useMemoizedReadonlyModel(memoizableReadonlyModelTestObject)
		);
		const memoizedModel: Model<TestModelInstance> =
			renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender: Model<TestModelInstance> =
			renderedHook.result.current;
		expect(memoizedModel.modelInstance).toBe(modelOnRerender.modelInstance);
	});
});

describe("useMemoizedInteractiveModel", () => {
	it("returns equivalent model", () => {
		const renderedHook = renderHook(() =>
			useMemoizedInteractiveModel(memoizableInteractiveModelTestObject)
		);
		const memoizedModel: InteractiveModel<
			TestModelInstance,
			TestInteraction
		> = renderedHook.result.current;
		expect(memoizedModel).toEqual({
			modelInstance: memoizableInteractiveModelTestObject.modelInstance,
			interact: expect.any(Function),
		});
	});
	it("returns identical model instance on rerender", () => {
		const renderedHook = renderHook(() =>
			useMemoizedInteractiveModel(memoizableInteractiveModelTestObject)
		);
		const memoizedModel: InteractiveModel<
			TestModelInstance,
			TestInteraction
		> = renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender: InteractiveModel<
			TestModelInstance,
			TestInteraction
		> = renderedHook.result.current;
		expect(memoizedModel.modelInstance).toBe(modelOnRerender.modelInstance);
	});
	it("changes model instance to expected value after interaction", async () => {
		const renderedHook = renderHook(() =>
			useMemoizedInteractiveModel(memoizableInteractiveModelTestObject)
		);
		const memoizedModel: InteractiveModel<
			TestModelInstance,
			TestInteraction
		> = renderedHook.result.current;
		await act(() =>
			memoizedModel.interact({ interactionName: "CHANGE_DISPLAY" })
		);
		const expectedModelInstance =
			await testInstanceInteractionInterface.getModelInstance({
				interactionName: "CHANGE_DISPLAY",
			});
		const modelOnRerender: InteractiveModel<
			TestModelInstance,
			TestInteraction
		> = renderedHook.result.current;
		expect(modelOnRerender.modelInstance).toEqual(expectedModelInstance);
	});
});
