import { GeneralComponent } from "@/app-library/custom-types/Miscellaneous";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface ConditionalComponentModelView<C> {
	condition: C;
	components: Map<C, GeneralComponent>;
	FallBackComponent: GeneralComponent;
}

export type ConditionalComponentModel<C> = ReadonlyModel<
	ConditionalComponentModelView<C>
>;
