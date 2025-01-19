// Navbar.js (or Navbar.tsx)
import { useState, useEffect } from "react";
import LogoWhite from "../assets/icons/LogoWhite";
import LogoGreen from "../assets/icons/LogoGreen";
import Link from "next/link";
import Sidebar from "./Sidebar";
import HamburgerMenu from "../assets/icons/HamburgerMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all py-3 ${
          isScrolled
            ? "bg-white text-[#1dc468] shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          {/* Left side with hamburger icon */}
          <div className="flex items-center ml-5">
            <HamburgerMenu
              isScrolled={isScrolled}
              isSidebarOpen={isSidebarOpen}
              handleMenuClick={handleMenuClick}
            />

            {/* Centered logo */}
            <div className="flex justify-center absolute left-0 right-0 md:relative">
              {isScrolled ? (
                <Link href="/">
                  <LogoGreen className="lg:h-10 h-8 w-full " />
                </Link>
              ) : (
                <Link href="/">
                  <LogoWhite className="lg:h-10 h-8 w-full " />
                </Link>
              )}
            </div>
          </div>

          {/* Right side nav items */}
          <nav className="flex-row gap-4 hidden md:flex">
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

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
};

export default Navbar;
