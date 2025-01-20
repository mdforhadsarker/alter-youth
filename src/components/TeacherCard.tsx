import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface TeacherCardProps {
  image: string;
  title: string;
  subtitle: string;
  footer: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  image,
  title,
  subtitle,
  footer,
}) => {
  return (
    <div className="relative rounded-lg h-[380px] cursor-pointer overflow-hidden sm:h-[450px] group">
      {/* Image with hover zoom effect */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="Teacher"
          width={500}
          height={500}
          priority
          className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top section */}
        <div>
          <h1 className="mb-1 text-2xl font-bold text-white lg:text-3xl w-56 lg:w-72 text-left">
            {title}
          </h1>
          <Link href="/#" className="flex flex-row items-center gap-1 mt-2">
            <h3 className="text-sm text-white underline">{subtitle}</h3>
            <FaArrowRightLong className="text-white transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
        {/* Bottom section */}
        <div className="mt-auto">
          <h4 className="text-xs text-white text-center">{footer}</h4>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
