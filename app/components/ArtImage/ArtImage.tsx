import Image from "next/image";
import { ArtImageModel } from "./ArtImageModel";

export default function ArtImage({
    artImageModel
} : {
    artImageModel: ArtImageModel
}) {
    return <Image 
        className={artImageModel.nameOfClass} 
        src={artImageModel.imageSource} 
        alt={artImageModel.imageTitle}
    />
}