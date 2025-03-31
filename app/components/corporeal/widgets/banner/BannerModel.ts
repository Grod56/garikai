import {
	ClassName,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "coming-soon-banner";

export interface BannerModelInstance extends ModelInstance {
	readonly bannerText: string;
}

export interface BannerModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		bannerText,
	}: {
		id: string;
		bannerText: string;
	}): BannerModelInstance;
}

export abstract class BannerModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements BannerModelInstance
{
	constructor(
		id: string,
		readonly bannerText: string
	) {
		super(id);
		this.comingSoonBannerModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly comingSoonBannerModelInstanceClassName: ClassName<
		typeof CLASS_NAME
	>;
}

export abstract class BannerModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements BannerModelInstantiator
{
	abstract instantiate({
		id,
		bannerText,
	}: {
		id: string;
		bannerText: string;
	}): BannerModelInstanceIncarnation;
}

class _BannerModelInstanceIncarnationImplementation extends BannerModelInstanceIncarnation {
	constructor(id: string, bannerText: string) {
		super(id, bannerText);
	}
}

class _BannerModelInstantiatorIncarnationImplementation extends BannerModelInstantiatorIncarnation {
	instantiate({
		id,
		bannerText,
	}: {
		id: string;
		bannerText: string;
	}): BannerModelInstanceIncarnation {
		return new _BannerModelInstanceIncarnationImplementation(
			id,
			bannerText
		);
	}
}

export default new _BannerModelInstantiatorIncarnationImplementation() as BannerModelInstantiator;
