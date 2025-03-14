import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = "coming-soon-banner";

export interface ComingSoonBannerModelInstance extends ModelInstance {
    readonly comingSoonBannerModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly bannerText: string;
}

export interface ComingSoonBannerModelInstantiator extends ModelInstantiator {
    instantiate(id: string, bannerText: string): ComingSoonBannerModelInstance;
}

export abstract class ComingSoonBannerModelInstanceIncarnation extends ModelInstanceIncarnation implements ComingSoonBannerModelInstance {
    constructor(id: string, readonly bannerText: string) {
        super(id);
        this.comingSoonBannerModelInstanceClassName = { getClassNameString: CLASS_NAME };
    }
    readonly comingSoonBannerModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class ComingSoonBannerModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements ComingSoonBannerModelInstantiator {
    abstract instantiate(id: string, bannerText: string): ComingSoonBannerModelInstanceIncarnation;
}

class _ComingSoonBannerModelInstanceIncarnationImplementation extends ComingSoonBannerModelInstanceIncarnation {
    constructor(id: string, bannerText: string){ super(id, bannerText) }
}

export class ComingSoonBannerModelInstantiatorIncarnationImplementation extends ComingSoonBannerModelInstantiatorIncarnation {
    instantiate(id: string, bannerText: string): ComingSoonBannerModelInstanceIncarnation {
        return new _ComingSoonBannerModelInstanceIncarnationImplementation(id, bannerText);
    }
}