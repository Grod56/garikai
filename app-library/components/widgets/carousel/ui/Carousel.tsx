import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselModel } from "../CarouselModel";
import "./carousel.scss";

export default function Carousel({
	children,
}: {
	model: CarouselModel;
	children: React.ReactNode;
}) {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		//TODO: Sloppy
		<div className="carousel" data-testid="carousel">
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
		</div>
	);
}
