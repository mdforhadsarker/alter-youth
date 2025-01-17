import Image from "next/image";
import { FC } from "react";
import HeroImage from "../assets/images/hero_pc.jpg";
import Card from "./Card";

const Hero: FC = () => {
  return (
    <section className="relative w-full h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src={HeroImage}
          alt="Hero Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40" />
      </div>
      <div className="relative z-10 flex flex-row max-w-screen-xl mx-auto justify-between items-center h-full text-center text-white px-20">
        <div className="flex flex-col w-96 text-left">
          <h1 className="text-6xl font-bold mb-4 ">Start your scholarship</h1>
          <h3 className="text-lg mb-6">
            Directly for students in Government Primary Schools throughout
            Bangladesh
          </h3>
        </div>
        <Card />
      </div>
    </section>
  );
};

export default Hero;
