import { ImageCardModelInstance } from "./ImageCardModel"

export default function ImageCard({
    imageCardModelInstance,
    children
} : {
    imageCardModelInstance: ImageCardModelInstance,
    children: React.ReactNode
}) {
    return (
        <div 
            className={imageCardModelInstance.compositeClassNameString}
            id={imageCardModelInstance.id}
            data-flexible={imageCardModelInstance.flexible}
        >
            <img src={imageCardModelInstance.imageSource} className="card-thumbnail" />
            <div className="card-details">
                {children}
            </div>
        </div>
    )
}