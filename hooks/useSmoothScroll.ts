import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({ duration: 3 });

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
}
