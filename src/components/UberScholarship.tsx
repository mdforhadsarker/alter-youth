import React from "react";
import MobileCard from "./MobileCard";
import firstImage from "../assets/images/app_scholarship.jpg";
import secondImage from "../assets/images/app_school.png";
import thirdImage from "../assets/images/app_graduation.png";
import Image from "next/image";
import appleStore from "../assets/icons/appstore_small.svg";
import googleStore from "../assets/icons/playstore_small.svg";

const UberScholarship = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col justify-between items-center ">
      <h1 className="text-3xl font-bold text-center mt-10">
        The Uber for Scholarships
      </h1>
      <p className="mt-4 text-center max-w-xl">
        A platform connecting the world with financially struggling students in
        Government Primary Schools of Bangladesh
      </p>
      <div className="flex flex-row justify-between gap-5 mt-5">
        <Image
          src={appleStore}
          alt="apple logo"
          className="w-full h-full object-cover"
          width={500}
          height={500}
          priority
        />
        <Image
          src={googleStore}
          alt="apple logo"
          className="w-full h-full object-cover"
          width={500}
          height={500}
          priority
        />
      </div> 

      <div className="flex flex-row mt-8 mb-10">
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
    </section>
  );
};

export default UberScholarship;
