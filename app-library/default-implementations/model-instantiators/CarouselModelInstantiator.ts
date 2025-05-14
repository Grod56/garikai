import { Model } from "@/app-library/custom-types/model/Model";
import { CarouselModel } from "../../components/widget/carousel/CarouselModel";
import { ComponentListModel } from "@/app-library/components/ethereal/component-list/ComponentListModel";

// TODO: Unit test
type InstantiateCarouselModelParameters<
	M extends Model<V>,
	V extends object = object,
> = ComponentListModel<M>;

export function instantiateCarouselModel<
	M extends Model<V>,
	V extends object = object,
>(componentListModel: InstantiateCarouselModelParameters<M>): CarouselModel<M> {
	return {
		modelView: {
			componentListModel,
		},
	};
}
