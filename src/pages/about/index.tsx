import Hero from "@/components/Hero";
import ScholarshipCommunity from "@/components/ScholarshipCommunity";
import UberScholarship from "@/components/UberScholarship";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Hero />
      <h1>About us</h1>
      <UberScholarship />
      <ScholarshipCommunity />
      <Link href="/">Go to Home</Link>
    </>
  );
};

export default About;
