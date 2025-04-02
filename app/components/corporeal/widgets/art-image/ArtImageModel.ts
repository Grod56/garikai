import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";
import { Image } from "@/app/types/Image";

export const CLASS_NAME = "art-image";

export interface ArtImageModelInstance extends CorporealComponentModelInstance {
	readonly image: Image;
	readonly title: string;
}

export interface ArtImageModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({
		id,
		image,
		title,
	}: {
		id: string;
		image: Image;
		title: string;
	}): ArtImageModelInstance;
}

export abstract class ArtImageModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
	implements ArtImageModelInstance
{
	constructor(
		id: string,
		readonly image: Image,
		readonly title: string
	) {
		super(id);
		this.artImageModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}

	readonly artImageModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class ArtImageModelInstantiatorIncarnation
	extends CorporealComponentModelInstantiatorIncarnation
	implements ArtImageModelInstantiator
{
	abstract instantiate({
		id,
		image,
		title,
	}: {
		id: string;
		image: Image;
		title: string;
	}): ArtImageModelInstanceIncarnation;
}

class _ArtImageModelInstanceIncarnationImplementation extends ArtImageModelInstanceIncarnation {
	constructor(id: string, image: Image, title: string) {
		super(id, image, title);
	}
}

class _ArtImageModelInstantiatorIncarnationImplementation extends ArtImageModelInstantiatorIncarnation {
	instantiate({
		id,
		image,
		title,
	}: {
		id: string;
		image: Image;
		title: string;
	}): ArtImageModelInstanceIncarnation {
		return new _ArtImageModelInstanceIncarnationImplementation(
			id,
			image,
			title
		);
	}
}

export default new _ArtImageModelInstantiatorIncarnationImplementation() as ArtImageModelInstantiator;
