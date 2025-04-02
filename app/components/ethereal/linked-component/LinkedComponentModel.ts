import { EtherealComponentModelInstance } from "../EtherealComponentModel";

export interface LinkedComponentModelInstance
	extends EtherealComponentModelInstance {
	readonly link: URL;
}
