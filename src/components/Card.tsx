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
    <div className="bg-white rounded-lg p-5 shadow-lg w-1/3">
      <h1 className="text-black font-bold text-lg mb-6 text-left">
        Join the <span className="text-[#1dc468]">#alteryouthrevolution</span>
      </h1>

      {/* Input fields */}
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-gray-300 rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
          />
        </div>

        <div>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#1dc468]">
            {/* Country Code Select */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="cursor-pointer bg-transparent px-3 py-3 text-gray-700  outline-none"
            >
              <option value="+880">🇧🇩 +880</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>

            {/* Divider */}
            <span className="border-l border-gray-300 h-full"></span>

            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="Your number"
              className="flex-1 py-2 text-gray-700 outline-none"
            />
          </div>
        </div>
      </form>

      {/* Scholarship controls */}
      <div className="mt-6 text-left">
        <label className="block text-black font-medium mb-2">
          Number of Scholarships
        </label>
        <div className="flex justify-between">
          {/* Decrease button */}
          <div className="flex items-center space-x-4 bg-[#f3f4f6] rounded-lg ">
            <button
              onClick={decrementScholarships}
              type="button"
              className="px-4 py-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4646 16.4751H3.53602C3.35923 16.4751 3.21459 16.6197 3.21459 16.7965V19.2072C3.21459 19.384 3.35923 19.5287 3.53602 19.5287H32.4646C32.6414 19.5287 32.786 19.384 32.786 19.2072V16.7965C32.786 16.6197 32.6414 16.4751 32.4646 16.4751Z"
                  fill="black"
                  fillOpacity="0.85"
                />
              </svg>
            </button>
            <span className="text-lg font-medium text-black text-md">
              {scholarships}
            </span>
            {/* Increase button */}
            <button
              onClick={incrementScholarships}
              type="button"
              className="px-4 py-4 bg-[#1dc468] text-white rounded-lg hover:bg-[#17b957] focus:outline-none focus:ring-2 focus:ring-[#1dc468]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.205 3.5376H16.7943C16.58 3.5376 16.4729 3.64474 16.4729 3.85903V16.4751H4.50063C4.28634 16.4751 4.1792 16.5822 4.1792 16.7965V19.2072C4.1792 19.4215 4.28634 19.5287 4.50063 19.5287H16.4729V32.1447C16.4729 32.359 16.58 32.4662 16.7943 32.4662H19.205C19.4193 32.4662 19.5265 32.359 19.5265 32.1447V19.5287H31.5006C31.7149 19.5287 31.8221 19.4215 31.8221 19.2072V16.7965C31.8221 16.5822 31.7149 16.4751 31.5006 16.4751H19.5265V3.85903C19.5265 3.64474 19.4193 3.5376 19.205 3.5376Z"
                  fill="black"
                  fillOpacity="0.85"
                />
              </svg>
            </button>
          </div>

          {/* Total amount */}
          <div className="mt-4 text-black font-bold text-2xl">
            BDT {`${(scholarships * scholarshipPrice).toLocaleString()}`}
            <span className="text-sm">/month</span>
          </div>
        </div>
      </div>

      {/* Start Now button */}
      <div className="mt-6">
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
