import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselModelInstance } from "./CarouselModel";

export default function Carousel({
    carouselModelInstance,
    children
} : {
    carouselModelInstance: CarouselModelInstance,
    children: React.ReactNode
}) {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        //TODO: Sloppy
        <div className={carouselModelInstance.compositeClassNameString} ref={emblaRef} id={carouselModelInstance.id}>
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