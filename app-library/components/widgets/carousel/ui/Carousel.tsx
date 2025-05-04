import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselModel } from "../CarouselModel";
import "./carousel.scss";
import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";

export const ELEMENT_NAME = "carousel";

const Carousel = function ({ children }) {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					{Children.map(children, (child) => {
						return <div className="embla__slide">{child}</div>;
					})}
				</div>
			</div>
		</div>
	);
} as ModeledContainerComponent<CarouselModel>;

export default Carousel;
