import { ArtImageModelInstance } from "./ArtImageModel";

export default function ArtImage({
	artImageModelInstance,
}: {
	artImageModelInstance: ArtImageModelInstance;
}) {
	return (
		<img
			className={artImageModelInstance.compositeClassNameString}
			id={artImageModelInstance.id}
			src={artImageModelInstance.imageSource}
			title={artImageModelInstance.imageTitle}
			data-testid={artImageModelInstance.id}
		/>
	);
}
