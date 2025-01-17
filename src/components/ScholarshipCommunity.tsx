import React, { useState } from "react";
import ScholarshipCommunityCard from "./ScholarshipCommunityCard";
import scholarshipData from "../assets/data/leaderboard.json";

const ScholarshipCommunity = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className=" bg-white flex flex-col justify-between items-center">
      <div className="max-w-screen-xl mx-auto mt-10">
        <h2 className="text-2xl font-medium text-[#1dc468] text-center">
          #alteryouthrevolution
        </h2>
        <h1 className="mt-3 text-center text-3xl font-bold lg:text-2xl">
          The Scholarship Community
        </h1>

        <p className="text-center mb-2 mt-3">
          Despite public primary schools being free of cost in Bangladesh,
          <br />
          many students still <strong>drop out of school</strong>
          to work and earn in order to support their families.
          <br />
          Your scholarship helps a child attend school and support their
          families at the same time.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {scholarshipData.slice(0, visibleCount).map((item, index) => (
            <ScholarshipCommunityCard
              key={index}
              name={item.name || ""}
              message={item.message || ""}
              count={item.count}
              countryCode={item.country_code}
              inviteCode={item.invite_code}
              startedAt={item.started_at}
              invitedBy={item.invited_by}
              students={item.students}
            />
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < scholarshipData.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleSeeMore}
              className="text-[#1dc468] font-medium"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScholarshipCommunity;
