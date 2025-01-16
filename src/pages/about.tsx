import Link from "next/link";

const About = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <>
      <h1>About us</h1>
      <Link href="/">Go to Home</Link>
    </>
  );
};

export default About;
