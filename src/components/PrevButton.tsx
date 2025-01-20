import React from "react";

interface PrevButtonProps {
  onClick: () => void;
}

const PrevButton: React.FC<PrevButtonProps> = ({ onClick }) => {
  return (
    <button
      className="hidden md:flex absolute left-14 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg items-center justify-center z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="text-gray-700"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default PrevButton;
