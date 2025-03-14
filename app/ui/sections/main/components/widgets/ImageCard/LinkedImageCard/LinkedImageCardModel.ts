import { ClassName } from "@/app/ui/Model";
import { ImageCardModelInstance, ImageCardModelInstanceIncarnation, ImageCardModelInstantiator } from "../ImageCardModel";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

const CLASS_NAME = 'linked-image-card';

export interface LinkedImageCardModelInstance extends ImageCardModelInstance {
    readonly linkedImageCardModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly linkURLString: string;
}

export interface LinkedImageCardModelInstantiator extends ImageCardModelInstantiator {
    instantiate(id: string, imageSource: string, isFlexible: boolean, linkURL: URL): LinkedImageCardModelInstance;
}

export abstract class LinkedImageCardModelInstanceIncarnation extends ImageCardModelInstanceIncarnation {
    constructor(id: string, imageSource: string, isFlexible: boolean, readonly linkURL: URL) {
        super(id, imageSource, isFlexible);
        this.linkedImageCardModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    linkedImageCardModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    get linkURLString(): string {
        return this.linkURL.href;
    }
}

export abstract class LinkedImageCardModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements LinkedImageCardModelInstantiator {
    abstract instantiate(id: string, imageSource: string, isFlexible: boolean, linkURL: URL): LinkedImageCardModelInstanceIncarnation;
}

class _LinkedImageCardModelInstanceIncarnationImplementation extends LinkedImageCardModelInstanceIncarnation {
    constructor(id: string, imageSource: string, isFlexible: boolean, linkURL: URL){ 
        super(id, imageSource, isFlexible, linkURL);
    }
}

export class LinkedImageCardModelInstantiatorImplementation extends LinkedImageCardModelInstantiatorIncarnation {
    instantiate(id: string, imageSource: string, isFlexible: boolean, linkURL: URL): LinkedImageCardModelInstanceIncarnation {
        return new _LinkedImageCardModelInstanceIncarnationImplementation(id, imageSource, isFlexible, linkURL);
    }
    
}