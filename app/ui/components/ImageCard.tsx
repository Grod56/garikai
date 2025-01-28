export default function ImageCard({
    imageSource,
    cardDetails,
    isFlexible,
    ...props
} : {
    imageSource: string,
    cardDetails: React.ReactNode,
    isFlexible: boolean,
    [key: string]: any
}) {
    return (
        <div {...props} className={
            `image-card ${
                    isFlexible ? 'flexible' : ''
                } ${
                    props.className ? props.className : ''
                }`
            }>
            <img src={imageSource} className="card-thumbnail" />
            <div className="card-details">
                {cardDetails}
            </div>
        </div>
    )
}