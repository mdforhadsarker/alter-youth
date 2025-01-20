import Hero from "../components/Hero";
import UberScholarship from "@/components/UberScholarship";
import ScholarshipCommunity from "@/components/ScholarshipCommunity";
import CommunityImpact from "@/components/CommunityImpact";
import SchoolSwiper from "@/components/SchoolSwiper";
import ScholarshipEligible from "@/components/ScholarshipEligible";
import Divider from "@/components/Divider";
import Teachers from "../../public/images/Teachers";
import Video from "@/components/Video";
import Partner from "@/components/Partner";

const Home = () => {
  return (
    <>
      <Hero />
      <UberScholarship />
      <Divider />
      <ScholarshipCommunity />
      <Divider />
      <CommunityImpact />
      <Divider />
      <SchoolSwiper />
      <Divider />
      <ScholarshipEligible />
      <Divider />
      <Teachers />
      <Video />
      <Partner />
    </>
  );
};

export default Home;
