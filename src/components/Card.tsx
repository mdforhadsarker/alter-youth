import React, { useState } from "react";

const Card = () => {
  const [scholarships, setScholarships] = useState(1);
  const [countryCode, setCountryCode] = useState("+880");
  const scholarshipPrice = 1650;

  const incrementScholarships = () => {
    setScholarships((prev) => prev + 1);
  };

  const decrementScholarships = () => {
    setScholarships((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-lg w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <h1 className="text-black font-bold text-lg mb-6 text-left">
        Join the <span className="text-[#1dc468]">#alteryouthrevolution</span>
      </h1>

      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
          />
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
          />
        </div>

        {/* Phone Input */}
        <div>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#1dc468]">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="cursor-pointer bg-transparent px-3 py-3 text-gray-700 outline-none"
            >
              <option value="+880">🇧🇩 +880</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
            <span className="border-l border-gray-300 h-full"></span>
            <input
              type="tel"
              placeholder="Your number"
              className="flex-1 py-3 px-3 text-gray-700 outline-none"
            />
          </div>
        </div>
      </form>

      {/* Scholarship Controls */}
      <div className="mt-6 flex flex-col justify-start items-start">
        <label className="block text-black font-medium mb-2 ">
          Number of Scholarships
        </label>
        <div className="w-full flex items-center justify-between gap-8">
          {/* Increment/Decrement Buttons */}
          <div className="flex items-center bg-gray-100 rounded-lg">
            <button
              onClick={decrementScholarships}
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
            >
              −
            </button>
            <span className="px-3 py-2 text-lg font-medium text-black">
              {scholarships}
            </span>
            <button
              onClick={incrementScholarships}
              type="button"
              className="px-4 py-2 bg-[#1dc468] text-white rounded-lg hover:bg-[#17b957] focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
            >
              +
            </button>
          </div>

          {/* Total Amount */}
          <div className="text-black font-bold text-lg">
            BDT {`${(scholarships * scholarshipPrice).toLocaleString()}`}
            <span className="text-sm"> /month</span>
          </div>
        </div>
      </div>

      {/* Start Now Button */}
      <div className="mt-8">
        <button
          type="button"
          className="w-full px-4 py-3 bg-[#1dc468] text-white rounded-lg text-md font-bold hover:bg-[#17b957] focus:outline-none focus:ring-4 focus:ring-[#1dc468] uppercase"
        >
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Card;
