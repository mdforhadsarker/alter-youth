import Hero from "../components/Hero";
import UberScholarship from "@/components/UberScholarship";
import ScholarshipCommunity from "@/components/ScholarshipCommunity";
import CommunityImpact from "@/components/CommunityImpact";
import SchoolSwiper from "@/components/SchoolSwiper";
import ScholarshipEligible from "@/components/ScholarshipEligible";
import Divider from "@/components/Divider";
import Teachers from "../../public/images/Teachers";

const Home = () => {
  return (
    <>
      <Hero />
      <UberScholarship />
      <Divider
        bgColor="#f5f5f5"
        opacity={0.2}
        marginTop="mt-10"
        marginBottom="mb-5"
        borderTop="border-t-2"
      />
      <ScholarshipCommunity />
      <Divider
        bgColor="#f5f5f5"
        opacity={0.2}
        marginTop="mt-10"
        marginBottom="mb-5"
        borderTop="border-t-2"
      />
      <CommunityImpact />
      <Divider
        bgColor="#f5f5f5"
        opacity={0.2}
        marginTop="mt-10"
        marginBottom="mb-5"
        borderTop="border-t-2"
      />
      <SchoolSwiper />
      <Divider
        bgColor="#f5f5f5"
        opacity={0.2}
        marginTop="mt-10"
        marginBottom="mb-5"
        borderTop="border-t-2"
      />
      <ScholarshipEligible />
      <Divider
        bgColor="#f5f5f5"
        opacity={0.2}
        marginTop="mt-10"
        marginBottom="mb-5"
        borderTop="border-t-2"
      />
      <Teachers />
    </>
  );
};

export default Home;
