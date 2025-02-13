import React from "react";
import MobileCard from "./MobileCard";
import firstImage from "../assets/images/app_scholarship.jpg";
import secondImage from "../assets/images/app_school.png";
import thirdImage from "../assets/images/app_graduation.png";
import Image from "next/image";
import appleStore from "../assets/icons/appstore_small.svg";
import googleStore from "../assets/icons/playstore_small.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const UberScholarship = () => {
  return (
    <section className="bg-gradient-to-t from-[#fafafa] from-0% via-transparent via-20% to-transparent to-90% ">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between items-center px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl font-bold text-center mt-10">
          The Uber for Scholarships
        </h1>
        <p className="mt-4 text-center max-w-xl">
          A platform connecting the world with financially struggling students
          in Government Primary Schools of Bangladesh
        </p>

        <div className="flex flex-row justify-center sm:justify-between gap-5 mt-5 flex-wrap">
          <div className="w-full sm:w-auto">
            <Image
              src={appleStore}
              alt="Apple Store"
              className="w-full h-auto object-cover"
              width={150}
              height={50}
              priority
            />
          </div>
          <div className="w-full sm:w-auto">
            <Image
              src={googleStore}
              alt="Google Play Store"
              className="w-full h-auto object-cover"
              width={150}
              height={50}
              priority
            />
          </div>
        </div>

        {/* Swiper for Mobile View */}
        <div className="w-full mt-5 sm:hidden pb-8">
          <Swiper spaceBetween={10} slidesPerView={1.4} loop>
            <SwiperSlide>
              <MobileCard
                image={firstImage}
                title="Transfer directly"
                description="Your scholarship is transferred directly to your student's family on their mobile bank account."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MobileCard
                image={secondImage}
                title="Get school reports"
                description="View attendance data and report cards from your student's school, until completion of Class 5."
              />
            </SwiperSlide>
            <SwiperSlide>
              <MobileCard
                image={thirdImage}
                title="Ensure a literate citizen"
                description="Your scholarship continues until completion of class 5, when your student achieves literacy."
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop/Flexbox Layout */}
        <div className="hidden sm:flex gap-5 mt-10 pb-8">
          <MobileCard
            image={firstImage}
            title="Transfer directly"
            description="Your scholarship is transferred directly to your student's family on their mobile bank account."
          />
          <MobileCard
            image={secondImage}
            title="Get school reports"
            description="View attendance data and report cards from your student's school, until completion of Class 5."
          />
          <MobileCard
            image={thirdImage}
            title="Ensure a literate citizen"
            description="Your scholarship continues until completion of class 5, when your student achieves literacy."
          />
        </div>
      </div>
    </section>
  );
};

export default UberScholarship;
