import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

export const CLASS_NAME = "art-image-skeleton";

export interface ArtImageSkeletonModelInstance
	extends CorporealComponentModelInstance {}

export interface ArtImageSkeletonModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({ id }: { id: string }): ArtImageSkeletonModelInstance;
}

export abstract class ArtImageSkeletonModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
	implements ArtImageSkeletonModelInstance
{
	constructor(id: string) {
		super(id);
		this.artImageSkeletonModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly artImageSkeletonModelInstanceClassName: ClassName<
		typeof CLASS_NAME
	>;
}

export abstract class ArtImageSkeletonModelInstantiatorIncarnation
	extends CorporealComponentModelInstantiatorIncarnation
	implements ArtImageSkeletonModelInstantiator
{
	abstract instantiate({
		id,
	}: {
		id: string;
	}): ArtImageSkeletonModelInstanceIncarnation;
}

class _ArtImageSkeletonModelInstanceIncarnationImplementation extends ArtImageSkeletonModelInstanceIncarnation {
	constructor(id: string) {
		super(id);
	}
}

class _ArtImageSkeletonModelInstantiatorIncarnationImplementation extends ArtImageSkeletonModelInstantiatorIncarnation {
	instantiate({
		id,
	}: {
		id: string;
	}): ArtImageSkeletonModelInstanceIncarnation {
		return new _ArtImageSkeletonModelInstanceIncarnationImplementation(id);
	}
}

export default new _ArtImageSkeletonModelInstantiatorIncarnationImplementation() as ArtImageSkeletonModelInstantiator;
