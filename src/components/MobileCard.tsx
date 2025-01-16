import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface MobileCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const MobileCard: FC<MobileCardProps> = ({ image, title, description }) => {
  return (
    <div className="p-4 max-w-sm flex flex-col justify-center items-center w-full ">
   
      <div className="w-44 h-full overflow-hidden rounded-[1.5rem]">
        <Image
          src={image.src}
          alt={title}
          className="w-full object-cover"
          width={500}
          height={500}
          priority
        />
      </div>
      <h2 className="text-lg font-bold mt-4 text-black">{title}</h2>
      <p className="text-black mt-2 text-center">{description}</p>
    </div>
  );
};

export default MobileCard;
