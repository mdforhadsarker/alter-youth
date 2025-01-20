import React from "react";
import ScholarshipEligibleCard from "./ScholarshipEligibleCard";
import DisableFather from "../assets/icons/DisabledFather";
import SingleMother from "../assets/icons/SingleMother";
import Orphan from "../assets/icons/Orphan";

const ScholarshipEligible = () => {
  return (
    <section className="max-w-screen-xl mx-auto mt-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className=" font-bold text-left lg:text-center lg:text-2xl">
          Scholarship Eligibility
        </h1>
        <p className="mt-2 mb-1 text-left lg:text-center">
          Only students who are currently enrolled in Government Primary Schools
          and fall <br />
          under any of the following criteria are eligible to apply for
          scholarships
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <ScholarshipEligibleCard
          icon={DisableFather}
          title="Disabled Father's Scholarship"
          description="Student's father is physically unable to work"
          size={50}
        />
        <ScholarshipEligibleCard
          icon={SingleMother}
          title="Single Mother"
          description="Student's father is deceased or has abandoned the family"
          size={35}
        />
        <ScholarshipEligibleCard
          icon={Orphan}
          title="Orphan"
          description="Both parents are deceased or have abandoned the child"
          size={30}
        />
      </div>
    </section>
  );
};

export default ScholarshipEligible;
