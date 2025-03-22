import {
	ClassName,
	Model,
	ModelInstance,
	ModelInstantiator,
} from "@/app/ui/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = "art-image";

export interface ArtImageModelInstance extends ModelInstance {
	readonly imageSource: string;
	readonly imageTitle: string;
}

export interface ArtImageModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		imageSource,
		imageTitle,
	}: {
		id: string;
		imageSource: string;
		imageTitle: string;
	}): ArtImageModelInstance;
}

export abstract class ArtImageModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements ArtImageModelInstance
{
	constructor(
		id: string,
		readonly imageSource: string,
		readonly imageTitle: string
	) {
		super(id);
		this.artImageModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}

	readonly artImageModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class ArtImageModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements ArtImageModelInstantiator
{
	abstract instantiate({
		id,
		imageSource,
		imageTitle,
	}: {
		id: string;
		imageSource: string;
		imageTitle: string;
	}): ArtImageModelInstanceIncarnation;
}

class _ArtImageModelInstanceIncarnationImplementation extends ArtImageModelInstanceIncarnation {
	constructor(id: string, imageSource: string, imageTitle: string) {
		super(id, imageSource, imageTitle);
	}
}

class _ArtImageModelInstantiatorIncarnationImplementation extends ArtImageModelInstantiatorIncarnation {
	instantiate({
		id,
		imageSource,
		imageTitle,
	}: {
		id: string;
		imageSource: string;
		imageTitle: string;
	}): ArtImageModelInstanceIncarnation {
		return new _ArtImageModelInstanceIncarnationImplementation(
			id,
			imageSource,
			imageTitle
		);
	}
}

export default new _ArtImageModelInstantiatorIncarnationImplementation() as ArtImageModelInstantiator;
