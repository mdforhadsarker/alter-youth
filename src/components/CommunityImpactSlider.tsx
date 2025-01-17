import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/assets/images/community_1.jpg";
import image2 from "@/assets/images/community_2.jpg";
import image3 from "@/assets/images/community_3.jpg";
import image4 from "@/assets/images/community_4.jpg";
import image5 from "@/assets/images/community_5.jpg";
import image6 from "@/assets/images/community_6.jpg";
import image7 from "@/assets/images/community_7.jpg";
import image8 from "@/assets/images/community_8.jpg";
import image9 from "@/assets/images/community_9.jpg";
import image10 from "@/assets/images/community_10.jpg";
import image11 from "@/assets/images/community_11.jpg";
import image12 from "@/assets/images/community_12.jpg";
import image13 from "@/assets/images/community_13.jpg";
import image14 from "@/assets/images/community_14.jpg";
import image15 from "@/assets/images/community_15.jpg";
import image16 from "@/assets/images/community_16.jpg";
import image17 from "@/assets/images/community_17.jpg";
import image18 from "@/assets/images/community_18.jpg";

const CommunityImpactSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative overflow-hidden mx-auto max-w-screen z-10 mt-5">
      <div
        className="relative w-full h-96 z-1 flex transition-transform"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-96 h-full">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority={index === currentSlide}
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full "
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5188 6.19866V3.09286C26.5188 2.82366 26.2095 2.675 26.0005 2.83974L7.88802 16.9866C7.73413 17.1063 7.60961 17.2595 7.52395 17.4347C7.4383 17.6098 7.39377 17.8022 7.39377 17.9971C7.39377 18.1921 7.4383 18.3844 7.52395 18.5595C7.60961 18.7347 7.73413 18.8879 7.88802 19.0076L26.0005 33.1545C26.2135 33.3192 26.5188 33.1705 26.5188 32.9013V29.7955C26.5188 29.5987 26.4264 29.4098 26.2737 29.2893L11.8095 17.9991L26.2737 6.70491C26.4264 6.58438 26.5188 6.39554 26.5188 6.19866Z"
            fill="black"
            fillOpacity="0.85"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white text-white p-2 rounded-full "
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.1933 16.9884L10.0808 2.84154C10.0335 2.80427 9.9766 2.78112 9.9167 2.77473C9.85681 2.76833 9.79632 2.77897 9.7422 2.8054C9.68807 2.83183 9.6425 2.873 9.61071 2.92416C9.57893 2.97533 9.56222 3.03443 9.5625 3.09466V6.20046C9.5625 6.39734 9.65491 6.58618 9.80759 6.70671L24.2719 18.0009L9.80759 29.2951C9.6509 29.4156 9.5625 29.6045 9.5625 29.8014V32.9072C9.5625 33.1764 9.87188 33.325 10.0808 33.1603L28.1933 19.0134C28.3473 18.8933 28.4718 18.7397 28.5574 18.5643C28.6431 18.3888 28.6876 18.1962 28.6876 18.0009C28.6876 17.8057 28.6431 17.613 28.5574 17.4376C28.4718 17.2621 28.3473 17.1085 28.1933 16.9884Z"
            fill="black"
            fillOpacity="0.85"
          />
        </svg>
      </button>
    </div>
  );
};

export default CommunityImpactSlider;
