import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = "grid-container";

export interface GridContainerModelInstance extends ModelInstance {
	readonly maxXorY: number;
	readonly orientation: "horizontal" | "vertical";
	readonly overflow: "true" | "false";
}

export interface GridContainerModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		maxXorY,
		orientation,
		isOverflow,
	}: {
		id: string;
		maxXorY: number;
		orientation: "horizontal" | "vertical";
		isOverflow: boolean;
	}): GridContainerModelInstance;
}

export abstract class GridContainerModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements GridContainerModelInstance
{
	constructor(
		id: string,
		readonly maxXorY: number,
		readonly orientation: "horizontal" | "vertical",
		private readonly isOverflow: boolean
	) {
		super(id);
		this.gridContainerModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly gridContainerModelInstanceClassName: ClassName<typeof CLASS_NAME>;

	get overflow(): "true" | "false" {
		return `${this.isOverflow}`;
	}
}

export abstract class GridContainerModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements GridContainerModelInstantiator
{
	abstract instantiate({
		id,
		maxXorY,
		orientation,
		isOverflow,
	}: {
		id: string;
		maxXorY: number;
		orientation: "horizontal" | "vertical";
		isOverflow: boolean;
	}): GridContainerModelInstanceIncarnation;
}

class _GridContainerModelInstanceIncarnationImplementation extends GridContainerModelInstanceIncarnation {
	constructor(
		id: string,
		maxXorY: number,
		orientation: "horizontal" | "vertical",
		isOverflow: boolean
	) {
		super(id, maxXorY, orientation, isOverflow);
	}
}

class _GridContainerModelInstantiatorIncarnationImplementation extends GridContainerModelInstantiatorIncarnation {
	instantiate({
		id,
		maxXorY,
		orientation,
		isOverflow,
	}: {
		id: string;
		maxXorY: number;
		orientation: "horizontal" | "vertical";
		isOverflow: boolean;
	}): GridContainerModelInstanceIncarnation {
		return new _GridContainerModelInstanceIncarnationImplementation(
			id,
			maxXorY,
			orientation,
			isOverflow
		);
	}
}

export default new _GridContainerModelInstantiatorIncarnationImplementation() as GridContainerModelInstantiator;
