import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import { Model } from "@/app-library/custom-types/model/Model";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { CarouselModel } from "../CarouselModel";
import "./carousel.scss";

export const ELEMENT_NAME = "carousel";

//TODO: Unit test
function Carousel<M extends Model<V>, V extends object = object>({
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
						model={{
							modelView: {
								componentModels: componentModels,
								Component: ({ model }) => (
									<div className="embla__slide">
										<Component model={model} />
									</div>
								),
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
