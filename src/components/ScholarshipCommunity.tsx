import React, { useState } from "react";
import ScholarshipCommunityCard from "./ScholarshipCommunityCard";
import scholarshipData from "../assets/data/leaderboard.json";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const ScholarshipCommunity = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className=" bg-white flex flex-col justify-between items-center px-6">
      <div className="max-w-screen-xl mx-auto mt-10">
        <h2 className="text-2xl font-medium text-[#1dc468] text-center">
          #alteryouthrevolution
        </h2>
        <h1 className="mt-3 text-center text-3xl font-bold lg:text-2xl">
          The Scholarship Community
        </h1>

        <p className="text-center mb-2 mt-3 px-0 lg:px-72">
          Despite public primary schools being free of cost in Bangladesh, many
          students still <span className="font-bold">drop out of school</span>
          to work and earn in order to support their families. Your scholarship
          helps a child attend school and support their families at the same
          time.
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

        <Link
          href="/#"
          className="md:hidden flex bg-green-500 text-white px-8 py-7 rounded-lg mt-8 items-center justify-center gap-2"
        >
          <h1 className="text-sm font-semibold">Join the community</h1>
          <FaArrowRightLong />
        </Link>
      </div>
    </section>
  );
};

export default ScholarshipCommunity;
