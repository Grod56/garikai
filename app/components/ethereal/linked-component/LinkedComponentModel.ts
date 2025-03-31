import { ModelInstance } from "@/app/components/Model";

export interface LinkedComponentModelInstance extends ModelInstance {
	readonly link: URL;
}
