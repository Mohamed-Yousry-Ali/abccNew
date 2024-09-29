import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IProp {
  slides: { image: string }[];
}

const ImageSlider = ({ slides }: IProp) => {
  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      autoPlay={true} // Enables automatic sliding
      interval={3000} // Time in milliseconds between each slide (e.g., 3000ms = 3 seconds)
      stopOnHover={true} // Stops the slider when the user hovers over it
    >
      {slides.map((slide) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={`Slide showing ${slide.image}`}
          height="500px"
          width={["100%", "800px"]}
          objectFit="fill"
          fallbackSrc="path/to/fallback-image.jpg"
        />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
