import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

export const CLASS_NAME = "coming-soon-banner";

export interface BannerModelInstance extends CorporealComponentModelInstance {
	readonly bannerText: string;
}

export interface BannerModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({
		id,
		bannerText,
	}: {
		id: string;
		bannerText: string;
	}): BannerModelInstance;
}

export abstract class BannerModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
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
	extends CorporealComponentModelInstantiatorIncarnation
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
