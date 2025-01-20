import React from "react";
import CommunityImpactSwiper from "./CommunityImpactSwiper";

const CommunityImpact = () => {
  return (
    <section className="mt-10">
      <div className="max-w-screen-xl mx-auto items-center px-4">
        <h1 className="mb-[6px] text-2xl font-bold sm:mb-3 lg:text-3xl px-4">
          Community Impact
        </h1>
        <p className="hidden lg:block px-4">
          Every scholarship begins with shipping a mobile phone to the parent of
          the student. Then they create their own mobile bank account <br />
          using that phone, to start receiving their child&apos;s scholarships
          directly, every month.
        </p>
      </div>
      <CommunityImpactSwiper />
      <p className="block lg:hidden px-5 mt-5 text-md">
        Every scholarship begins with shipping a mobile phone to the parent of
        the student. Then they create their own mobile bank account using that
        using that phone, to start receiving their child&apos;s scholarships
        phone, to start receiving their childs scholarships directly, every
        month.
      </p>
    </section>
  );
};

export default CommunityImpact;
