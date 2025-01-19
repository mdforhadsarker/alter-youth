import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SchoolCard from "./SchoolCard";
import schoolData from "../assets/data/schoolData.json";
import Modal from "./Modal";
import { School } from '../utils/types'


const SchoolSwiper: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  const openModal = (school: School) => {
    setSelectedSchool(school);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSchool(null);
  };

  return (
    <div className="w-full mt-16">
      <h2 className="max-w-7xl text-2xl font-bold text-center mb-6">
        Students from Government Primary Schools Nationwide
      </h2>
      <Swiper
        modules={[]}
        spaceBetween={15}
        slidesPerView={1.4}
        loop={true}
        pagination={{ clickable: true }}
        centeredSlides={true}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          820: { slidesPerView: 5, spaceBetween: 15 },
        }}
      >
        {schoolData.map((school, index) => (
          <SwiperSlide key={index} onClick={() => openModal(school)}>
            <SchoolCard
              image={school.image}
              ht_quote={school.ht_quote}
              school_name={school.school_name}
              location={school.location}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Use the Modal component */}
      <Modal
        isModalOpen={isModalOpen}
        selectedSchool={selectedSchool}
        closeModal={closeModal}
      />
    </div>
  );
};

export default SchoolSwiper;
