import Link from "next/link";
import ImageCard from "../ImageCard";
import { LinkedImageCardModelInstance } from "./LinkedImageCardModel";

export default function LinkedImageCard({
    linkedImageCardModelInstance,
    children
}:{
    linkedImageCardModelInstance: LinkedImageCardModelInstance,
    children: React.ReactNode
}) {
    // TODO: Fix this weirdness
    return (
        <Link href={linkedImageCardModelInstance.linkURLString}>
            <ImageCard imageCardModelInstance={linkedImageCardModelInstance}>
                {children}
            </ImageCard>
        </Link>
    )
}