import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

export interface Image {
	readonly source: string;
	readonly alt: string;
	readonly placeholder: PlaceholderValue;
}
