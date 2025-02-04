import { ImageCardModel } from "./ImageCardModel"

export default function ImageCard({
    imageCardModel,
    children,
    ...props
} : {
    imageCardModel: ImageCardModel,
    children: React.ReactNode,
    [key: string]: any
}) {
    return (
        <div {...props} className={
            `${imageCardModel.nameOfClass} ${
                    imageCardModel.isFlexible ? 'flexible' : ''
                } ${
                    props.className ? props.className : ''
                }`
            }>
            <img src={imageCardModel.imageSource} className="card-thumbnail" />
            <div className="card-details">
                {children}
            </div>
        </div>
    )
}