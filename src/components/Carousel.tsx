import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

interface Carousel {
  imageSrc: string;
  listImages?: string[];
}

type IconDirection = "right" | "left";

function Carousel({ imageSrc, listImages }: Carousel) {
  const [currentImage, setCurrentImage] = useState(imageSrc);

  const handleClick = (iconDirection: IconDirection): void => {
    setCurrentImage((currentImage) => {
      if (!listImages || listImages.length === 0) return currentImage;
      const currentIndex = listImages.findIndex(
        (elem) => elem === currentImage
      );
      const nextIndex = (currentIndex + 1) % listImages.length;
      const previousIndex =
        (currentIndex - 1 + listImages.length) % listImages.length;
      const newIndex = iconDirection === "right" ? nextIndex : previousIndex;
      return listImages[newIndex];
    });
  };

  return (
    <>
      <div className="carousel">
        <img src={currentImage} alt="Apartment photo" />
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => handleClick("left")}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => handleClick("right")}
        />
      </div>
    </>
  );
}

export default Carousel;
