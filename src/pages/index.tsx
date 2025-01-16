import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Us</Link>
    </>
  );
};

export default Home;
