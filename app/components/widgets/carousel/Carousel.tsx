import "./carousel.scss";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselModel, CarouselModelInstance } from "./CarouselModel";

export default function Carousel({
	children,
}: {
	model: CarouselModel;
	children: React.ReactNode;
}) {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		//TODO: Sloppy
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{children ? (
					Children.map(children, (child) => {
						return <div className="embla__slide">{child}</div>;
					})
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
