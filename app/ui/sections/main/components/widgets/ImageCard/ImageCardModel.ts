import { ClassName, Model, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = 'image-card';

export interface ImageCardModelInstance extends ModelInstance {
    readonly imageCardModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly imageSource: string;
    readonly flexible: 'true' | 'false';
}

export interface ImageCardModelInstantiator extends ModelInstantiator {
    instantiate(id: string, imageSource: string, isFlexible: boolean,  ...args: any[]): ImageCardModelInstance;
}

export abstract class ImageCardModelInstanceIncarnation extends ModelInstanceIncarnation implements ImageCardModelInstance {
    
    constructor(id: string, readonly imageSource: string, private readonly isFlexible: boolean) {
        super(id);
        
        this.imageCardModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    
    readonly imageCardModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    get flexible(): 'true' | 'false' {
        return `${this.isFlexible}`;
    }
}

export abstract class ImageCardModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements ImageCardModelInstantiator {
    abstract instantiate(id: string, imageSource: string, isFlexible: boolean,  ...args: any[]): ImageCardModelInstanceIncarnation;
}

class _ImageCardModelInstanceIncarnationImplementation extends ImageCardModelInstanceIncarnation {
    constructor(id: string, imageSource: string, isFlexible: boolean){ 
        super(id, imageSource, isFlexible)
    }
}

export class ImageCardModelInstantiatorImplementation extends ImageCardModelInstantiatorIncarnation {
    instantiate(id: string, imageSource: string, isFlexible: boolean): ImageCardModelInstanceIncarnation {
        return new _ImageCardModelInstanceIncarnationImplementation(id, imageSource, isFlexible);
    }
}