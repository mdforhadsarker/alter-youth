import React from "react";
import CommunityImpactSlider from "./CommunityImpactSlider";

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
          using that phone, to start receiving their child's scholarships
          directly, every month.
        </p>
      </div>
      <CommunityImpactSlider />

      <p className="block lg:hidden px-4">
        Every scholarship begins with shipping a mobile phone to the parent of
        the student. Then they create their own mobile bank account using that
        phone, to start receiving their child's scholarships directly, every
        month.
      </p>
    </section>
  );
};

export default CommunityImpact;
