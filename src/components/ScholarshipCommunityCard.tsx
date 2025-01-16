import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import countryImage from "../assets/icons/bd.png";

interface Student {
  name: string;
  message: string;
  image: string;
}

interface ScholarshipCommunityCardProps {
  name: string;
  countryCode: string;
  inviteCode: string;
  count: number;
  startedAt: string;
  invitedBy: string;
  message: string;
  students: Student[];
}

const ScholarshipCommunityCard: React.FC<ScholarshipCommunityCardProps> = ({
  countryCode,
  inviteCode,
  count,
  startedAt,
  students,
}) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div
      className={`flex flex-col bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out transform max-h-max flex-grow`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-1">
          @
          <Link
            href={`/${inviteCode}`}
            className="text-black font-semibold hover:underline"
          >
            {inviteCode}
          </Link>
          <Image
            src={countryImage}
            alt={countryCode}
            width={500}
            height={500}
            priority
            className="w-6 rounded-sm"
          />
        </div>
        <h2 className="text-xs text-gray-400">
          Joined on {new Date(startedAt).toLocaleDateString()}
        </h2>
      </div>

      <div className="mb-4">
        <h1 className="bg-green-200 text-green-800 rounded-full px-2 py-1 text-xs max-w-max">
          {count} Scholarship{count > 1 ? "s" : ""}
        </h1>
      </div>

      {/* Students Section */}
      <div className="flex flex-col gap-4 flex-grow">
        {students
          .slice(0, showAll ? students.length : 5)
          .map((student, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                <Image
                  src={student.image}
                  alt={`${student.name}'s profile`}
                  width={500}
                  height={500}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-800">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{student.message}</p>
              </div>
            </div>
          ))}

        {/* See More Button */}
        {students.length > 5 && (
          <button
            onClick={toggleShowAll}
            className="mt-2 text-md font-semibold text-[#1dc468] text-center"
          >
            {showAll ? "See less" : `See all (${students.length - 5})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default ScholarshipCommunityCard;
