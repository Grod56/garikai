import { act, renderHook, RenderHookResult } from "@testing-library/react";
import {
	useStatefulInteractiveModel,
	useStatefulReadonlyModel,
} from "../../model-transformer";
import {
	statifiableReadonlyModelTestObject,
	statifiableInteractiveModelTestObject,
	testViewInteractionInterface,
	TestModelView,
	TestModelInteraction,
} from "./data";
import { InteractiveModel } from "@/app-library/custom-types/model/InteractiveModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

describe("useStatefulReadonlyModel", () => {
	// Potential tidying re. generics needed
	let renderedHook: RenderHookResult<ReadonlyModel<TestModelView>, unknown>;
	let model: ReadonlyModel<TestModelView>;

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
	it("returns identical model view on rerender", () => {
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelView).toBe(modelOnRerender.modelView);
	});
});

describe("useStatefulInteractiveModel", () => {
	// Again
	let renderedHook: RenderHookResult<
		InteractiveModel<TestModelView, TestModelInteraction>,
		unknown
	>;
	let model: InteractiveModel<TestModelView, TestModelInteraction>;

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
			modelView: statifiableInteractiveModelTestObject.modelView,
			interact: expect.any(Function),
		});
	});
	it("returns identical model properties on rerender", () => {
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(modelOnRerender.modelView).toBe(model.modelView);
		expect(modelOnRerender.interact).toBe(model.interact);
	});
	it("changes model view to expected value after interaction", async () => {
		await act(() => model.interact({ type: "CHANGE_DISPLAY" }));
		const expectedModelView =
			await testViewInteractionInterface.getModelView({
				type: "CHANGE_DISPLAY",
			});
		const currentModelView = renderedHook.result.current.modelView;
		expect(currentModelView).toEqual(expectedModelView);
	});
});
