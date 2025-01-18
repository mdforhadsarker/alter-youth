import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SchoolCard from "./SchoolCard";
import image1 from "../assets/images/school1.jpeg";
import image2 from "../assets/images/school2.jpeg";
import image3 from "../assets/images/school3.jpeg";
import image4 from "../assets/images/school4.jpeg";
import image5 from "../assets/images/school5.jpeg";
import image6 from "../assets/images/school6.jpeg";
import image7 from "../assets/images/school7.jpeg";
import { Navigation, Pagination } from "swiper/modules";

const schoolData = [
  {
    id: 1,
    image: image1,
    ht_quote: "There is no alternate way to success other than education",
    school_name: "Agla Government Primary School",
    location: "Kayetpara",
  },
  {
    id: 2,
    image: image2,
    ht_quote:
      "Be a wonderful role model because you will be the window through which many children will see their future",
    school_name: "Kanchan Government Primary School",
    location: "Kanchan",
  },
  {
    id: 3,
    image: image3,
    ht_quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    school_name: "Daudpur Government Primary School",
    location: "Daudpur",
  },
  {
    id: 4,
    image: image4,
    ht_quote: "Education is the best weapon you can use to change the world",
    school_name: "Kendua Government Primary School",
    location: "Golakandail",
  },
  {
    id: 5,
    image: image5,
    ht_quote: "The pen is mightier than the sword",
    school_name: "Bhulta Government Primary School",
    location: "Daudpur",
  },

  {
    id: 6,
    image: image6,
    ht_quote:
      "A teacher's influnce never stops, it goes on till the day you die",
    school_name: "Deboi Government Primary School",
    location: "Rupganj",
  },
  {
    id: 7,
    image: image7,
    ht_quote:
      "A good education can change anyone. A good teacher can change everything.",
    school_name: "Daudpur Government Primary School",
    location: "Bholabo",
  },
];

const SchoolSwiper: React.FC = () => {
  return (
    <div className="w-full mt-16">
      <h2 className="max-w-7xl text-2xl font-bold text-center mb-6">
        Students from Government Primary Schools Nationwide
      </h2>
      <Swiper
        modules={[]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          820: { slidesPerView: 5 },
        
        }}
      >
        {schoolData.map((school, index) =>
          school ? (
            <SwiperSlide key={index}>
              <SchoolCard
                image={school.image}
                ht_quote={school.ht_quote}
                school_name={school.school_name}
                location={school.location}
              />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default SchoolSwiper;
