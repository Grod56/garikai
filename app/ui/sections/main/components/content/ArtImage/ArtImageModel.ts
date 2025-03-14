import { ClassName, Model, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = "art-image";

export interface ArtImageModelInstance extends ModelInstance {
    readonly artImageModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly imageSourceURL: string;
    readonly imageTitle: string;
}

export interface ArtImageModelInstantiator extends ModelInstantiator {
    instantiate(id: string, imageSourceURL: string, imageTitle: string): ArtImageModelInstance;
}

export abstract class ArtImageModelInstanceIncarnation extends ModelInstanceIncarnation implements ArtImageModelInstance {
    constructor(id: string, readonly imageSourceURL: string, readonly imageTitle: string) { 
        super(id);
        this.artImageModelInstanceClassName = { getClassNameString: CLASS_NAME };

    }

    readonly artImageModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class ArtImageModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements ArtImageModelInstantiator {
    abstract instantiate(id: string, imageSourceURL: string, imageTitle: string): ArtImageModelInstanceIncarnation;
}

class _ArtImageModelInstanceIncarnationImplementation extends ArtImageModelInstanceIncarnation {
    constructor(id: string, imageSourceURL: string, imageTitle: string){ super(id, imageSourceURL, imageTitle) }
}

export class ArtImageModelInstantiatorIncarnationImplementation extends ArtImageModelInstantiatorIncarnation {
    instantiate(id: string, imageSourceURL: string, imageTitle: string): ArtImageModelInstance {
        return new _ArtImageModelInstanceIncarnationImplementation(id, imageSourceURL, imageTitle);
    }
}