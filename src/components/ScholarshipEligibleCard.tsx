import React, { FC } from "react";

interface ScholarshipProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  size?: number;
}

const ScholarshipEligibleCard: FC<ScholarshipProps> = ({
  icon: Icon,
  title,
  description,
  size = 32,
}) => {
  return (
    <div className="flex flex-row w-full h-full bg-white shadow-md rounded-lg px-4 py-4 items-center">
      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
        {/* Render the SVG as a React component */}
        <Icon className="object-cover" width={size} height={size} />
      </div>
      <div className="flex flex-col ml-5">
        <h1 className="text-md font-bold mt-4 text-black">{title}</h1>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default ScholarshipEligibleCard;
