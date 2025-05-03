import { act, renderHook, RenderHookResult } from "@testing-library/react";
import {
	useStatefulInteractiveModel,
	useStatefulReadonlyModel,
} from "../../model-transformer";
import {
	statifiableReadonlyModelTestObject,
	statifiableInteractiveModelTestObject,
	testInstanceInteractionInterface,
	TestModelInstance,
	TestModelInteraction,
} from "./data";
import { InteractiveModel } from "@/app-library/custom-types/model/InteractiveModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

describe("useStatefulReadonlyModel", () => {
	// Potential tidying re. generics needed
	let renderedHook: RenderHookResult<
		ReadonlyModel<TestModelInstance>,
		unknown
	>;
	let model: ReadonlyModel<TestModelInstance>;

	beforeEach(() => {
		renderedHook = renderHook(() =>
			useStatefulReadonlyModel(statifiableReadonlyModelTestObject)
		);
		model = renderedHook.result.current;
	});
	afterEach(() => {
		renderedHook.unmount();
	});

	it("returns equivalent model", () => {
		expect(model).toEqual(statifiableReadonlyModelTestObject);
	});
	it("returns identical model instance on rerender", () => {
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelInstance).toBe(modelOnRerender.modelInstance);
	});
});

describe("useStatefulInteractiveModel", () => {
	// Again
	let renderedHook: RenderHookResult<
		InteractiveModel<TestModelInstance, TestModelInteraction>,
		unknown
	>;
	let model: InteractiveModel<TestModelInstance, TestModelInteraction>;

	beforeEach(() => {
		renderedHook = renderHook(() =>
			useStatefulInteractiveModel(statifiableInteractiveModelTestObject)
		);
		model = renderedHook.result.current;
	});
	afterEach(() => {
		renderedHook.unmount();
	});

	it("returns equivalent model", () => {
		expect(model).toEqual({
			modelInstance: statifiableInteractiveModelTestObject.modelInstance,
			interact: expect.any(Function),
		});
	});
	it("returns identical model properties on rerender", () => {
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(modelOnRerender.modelInstance).toBe(model.modelInstance);
		expect(modelOnRerender.interact).toBe(model.interact);
	});
	it("changes model instance to expected value after interaction", async () => {
		await act(() => model.interact({ interactionName: "CHANGE_DISPLAY" }));
		const expectedModelInstance =
			await testInstanceInteractionInterface.getModelInstance({
				interactionName: "CHANGE_DISPLAY",
			});
		const currentModelInstance = renderedHook.result.current.modelInstance;
		expect(currentModelInstance).toEqual(expectedModelInstance);
	});
});
