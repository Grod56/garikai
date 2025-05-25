import { Model, ModelView, newReadonlyModel } from "@mvc-react/mvc";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselModel } from "../carousel";
import { ComponentList, ComponentListModelView } from "@mvc-react/components";
import "./carousel.scss";

export const ELEMENT_NAME = "carousel";

//TODO: Unit test
function Carousel<M extends Model<V>, V extends ModelView = ModelView>({
	model,
}: {
	model: CarouselModel<M>;
}) {
	const { componentListModel } = model.modelView;
	const { componentModels, Component } = componentListModel.modelView;
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					<ComponentList
						model={newReadonlyModel<ComponentListModelView<M>>({
							componentModels: componentModels,
							Component: ({ model }) => (
								<div className="embla__slide">
									<Component model={model} />
								</div>
							),
						})}
					/>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
