import { useState, useEffect } from "react";
import LogoWhite from "../assets/icons/LogoWhite";
import LogoGreen from "../assets/icons/LogoGreen";
import Link from "next/link";

const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all py-3 ${
        isScrolled
          ? "bg-white text-[#1dc468] shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left side with hamburger icon and logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className={`text-xl focus:outline-none ${
              isScrolled ? "text-[#1dc468]" : "text-white"
            }`}
          >
            &#9776;
          </button>
          {isScrolled ? (
            <Link href="/">
              <LogoGreen />
            </Link>
          ) : (
            <Link href="/">
              {" "}
              <LogoWhite />
            </Link>
          )}
        </div>

        {/* Right side nav items */}
        <nav className="flex flex-row gap-4">
          {[
            "about",
            "how-it-works",
            "scholarships",
            "collaborate",
            "login",
          ].map((path) => (
            <Link
              key={path}
              href={`/${path}`}
              className={`relative font-semibold transition-colors ${
                isScrolled ? "text-[#1dc468]" : "text-white"
              } custom-hover-underline`}
            >
              {path.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase())}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
