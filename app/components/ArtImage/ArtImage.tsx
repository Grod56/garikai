import { ArtImageModel } from "./ArtImageModel";

export default function ArtImage({
    artImageModel
} : {
    artImageModel: ArtImageModel
}) {
    return <img
        className={artImageModel.nameOfClass} 
        src={artImageModel.imageSourceURL} 
        alt={artImageModel.imageTitle}
    />
}