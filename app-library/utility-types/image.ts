export type ImagePlaceholder = `data:image/${string}`;

export interface Image {
	readonly source: string;
	readonly alt: string;
	readonly placeholder: ImagePlaceholder;
}
