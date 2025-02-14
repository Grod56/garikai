import { ImageCardModel } from "./ImageCardModel"

export default function ImageCard({
    imageCardModel,
    children
} : {
    imageCardModel: ImageCardModel,
    children: React.ReactNode
}) {
    return (
        <div className={
            `${imageCardModel.nameOfClass} ${
                imageCardModel.isFlexible ? 'flexible' : ''
            }`
        }>
            <img src={imageCardModel.imageSource} className="card-thumbnail" />
            <div className="card-details">
                {children}
            </div>
        </div>
    )
}