import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselModel } from "./CarouselModel";

export default function Carousel({
    carouselModel,
    children
} : {
    carouselModel: CarouselModel,
    children: React.ReactNode
}) {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        //TODO: Sloppy
        <div className={carouselModel.nameOfClass} ref={emblaRef} id={carouselModel.id}>
            <div className="embla__container">
                {
                    Children.map(children, (child) => {
                        return <div className="embla__slide">{child}</div>
                    })
                }
            </div>
        </div>
    )
}