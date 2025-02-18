import Home from "./ui/sections/main/views/Home";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
    return (
      <Home />
    );
}
