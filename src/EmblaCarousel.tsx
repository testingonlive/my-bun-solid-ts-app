import createEmblaCarousel from "embla-carousel-solid";
import AutoPlay from "embla-carousel-autoplay";

import EmblaCarouselCSS from "./EmblaCarousel.css?inline";

export function EmblaCarousel() {
  const [emblaRef] = createEmblaCarousel(
    () => ({ loop: true }),
    () => [AutoPlay()]
  );

  return (
    <>
      <style>{EmblaCarouselCSS}</style>

      <div class="embla" ref={emblaRef}>
        <div class="embla__container">
          <div class="embla__slide">Slide 1</div>
          <div class="embla__slide">Slide 2</div>
          <div class="embla__slide">Slide 3</div>
        </div>
      </div>
    </>
  );
}

export default EmblaCarousel;
