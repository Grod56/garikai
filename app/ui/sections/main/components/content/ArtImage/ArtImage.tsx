import { ArtImageModelInstance } from "./ArtImageModel";

export default function ArtImage({
    artImageModelInstance
} : {
    artImageModelInstance: ArtImageModelInstance
}) {
    return <img
        className={artImageModelInstance.compositeClassNameString}
        id={artImageModelInstance.id}
        src={artImageModelInstance.imageSourceURL}
        title={artImageModelInstance.imageTitle}
    />
}