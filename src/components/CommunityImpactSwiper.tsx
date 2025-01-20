import React from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
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
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CommunityImpactSwiper: React.FC = () => {
  const [swipe, setSwipe] = useState<SwiperType | null>(null);

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

  return (
    <div className="w-full relative mt-16">
      {/* Custom Prev Button */}
      <button
        className="hidden md:flex absolute left-14 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg items-center justify-center z-10"
        onClick={() => swipe?.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 3 },
          820: { slidesPerView: 5 },
        }}
        onBeforeInit={(swipper) => setSwipe(swipper)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Community impact ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Next Button */}
      <button
        className="hidden md:flex absolute right-14 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg items-center justify-center z-10"
        onClick={() => swipe?.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="text-gray-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default CommunityImpactSwiper;
