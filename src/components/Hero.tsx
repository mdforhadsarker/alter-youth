import Image from "next/image";
import { FC } from "react";
import HeroImageDesktop from "../assets/images/hero_pc.jpg";
import HeroImageMobile from "../assets/images/hero_home_phone.jpg";
import Card from "./Card";

const Hero: FC = () => {
  return (
    <section className="relative w-full lg:h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src={HeroImageMobile}
          alt="Hero Background"
          fill
          className="object-cover md:hidden"
          priority
          sizes="(max-width: 768px) 100vw"
        />
        <Image
          src={HeroImageDesktop}
          alt="Hero Background"
          fill
          className="hidden md:block object-cover"
          priority
          sizes="(min-width: 769px) 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40" />
      </div>

      {/* Content */}
      <div className=" pt-96 lg:pt-0 relative z-10 flex flex-col items-left md:flex-row max-w-screen-xl mx-auto justify-between h-full text-center md:text-left text-white px-6 md:px-20">
        <div className="flex flex-col w-full md:flex-1 justify-end md:justify-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-left ">
            Start your scholarship
          </h1>
          <h3 className="text-base md:text-lg text-left">
            Directly for students in Government Primary Schools throughout
            Bangladesh
          </h3>
        </div>

        {/* Card Section */}
        <div className="flex justify-center items-center w-full md:w-auto ">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Hero;
