'use client'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";

export default function Caurosel({
    children
} : {
    children: React.ReactNode
}) {

    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
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