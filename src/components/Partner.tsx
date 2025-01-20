import React from "react";
import SvgGoogle from "../assets/icons/Google";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="flex flex-col justify-between max-w-screen-xl mx-auto items-center mt-8">
      <h1 className="text-xl font-semibold">In Association With</h1>
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-2 lg:gap-10">
        {/* First Partner */}
        <div className="flex flex-row items-center p-4">
          <Image
            src="/images/undp.jpg"
            alt="Asia Pacific SDG Enterprise Award"
            width={500}
            height={500}
            className="w-24 h-full"
          />
          <h1 className="mt-4 text-md font-semibold text-center">
            Asia Pacific <br />
            SDG Enterprise Award
          </h1>
        </div>

        {/* Divider */}
        <div className="w-full lg:w-auto lg:h-24 border-t lg:border-t-0 lg:border-l border-slate-200"></div>

        {/* Second Partner */}
        <div className="flex flex-row items-center p-4">
          <Image
            src="/images/expo.png"
            alt="Asia Pacific SDG Enterprise Award"
            width={500}
            height={500}
            className="w-24 h-full"
          />
        </div>

        {/* Divider */}
        <div className="w-full lg:w-auto lg:h-24 border-t lg:border-t-0 lg:border-l border-slate-200"></div>
        {/* Third Partner */}
        <div className="flex flex-col items-center p-4">
          <SvgGoogle className="w-36 h-full" />
          <h1 className="mt-4 text-md font-semibold text-center">
            Winner of Google Business Group Stories
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Partner;
