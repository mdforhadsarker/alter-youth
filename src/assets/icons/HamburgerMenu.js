const HamburgerMenu = ({ isScrolled, isSidebarOpen, handleMenuClick }) => {
  return (
    <button
      onClick={handleMenuClick}
      className={`text-xl focus:outline-none z-50 transition-all ${
        isScrolled ? "text-[#1dc468]" : "text-white"
      }`}
    >
      {/* Mobile Hamburger icon (with transition) */}
      <div
        className={`hamburger-react ${isSidebarOpen ? "open" : ""} md:hidden`}
        aria-expanded={isSidebarOpen ? "true" : "false"}
        role="button"
        style={{
          cursor: "pointer",
          height: "36px",
          position: "relative",
          transition: "0.4s cubic-bezier(0, 0, 0, 1)",
          userSelect: "none",
          width: "36px",
          outline: "none",
        }}
        tabIndex="0"
      >
        <div
          style={{
            background: isScrolled ? "rgb(29, 196, 104)" : "white",
            height: "2px",
            left: "8px",
            position: "absolute",
            width: "20px",
            top: "12px",
            transition: "0.4s cubic-bezier(0, 0, 0, 1)",
            transform: isSidebarOpen
              ? "rotate(45deg) translate(4.23px, 4.23px)"
              : "rotate(0) translate(0, 0)",
          }}
        ></div>
        <div
          style={{
            background: isScrolled ? "rgb(29, 196, 104)" : "white",
            height: "2px",
            left: "8px",
            position: "absolute",
            width: "20px",
            top: "18px",
            transition: "0.2s cubic-bezier(0, 0, 0, 1)",
            transform: isSidebarOpen ? "scaleX(0)" : "scaleX(1)",
          }}
        ></div>
        <div
          style={{
            background: isScrolled ? "rgb(29, 196, 104)" : "white",
            height: "2px",
            left: "8px",
            position: "absolute",
            width: "20px",
            top: "24px",
            transition: "0.4s cubic-bezier(0, 0, 0, 1)",
            transform: isSidebarOpen
              ? "rotate(-45deg) translate(4.23px, -4.23px)"
              : "rotate(0) translate(0, 0)",
          }}
        ></div>
      </div>

      {/* Desktop Hamburger icon (without transition) */}
      <div
        className={`hamburger-react ${
          isSidebarOpen ? "open" : ""
        } hidden md:block`}
        aria-expanded={isSidebarOpen ? "true" : "false"}
        role="button"
        style={{
          cursor: "pointer",
          height: "36px",
          position: "relative",
          transition: "none",
          userSelect: "none",
          width: "36px",
          outline: "none",
        }}
        tabIndex="0"
      >
        <div
          style={{
            background: isScrolled ? "rgb(29, 196, 104)" : "white",
            height: "2px",
            left: "8px",
            position: "absolute",
            width: "20px",
            top: "12px",
          }}
        ></div>
        <div
          style={{
            background: isScrolled ? "rgb(29, 196, 104)" : "white",
            height: "2px",
            left: "8px",
            position: "absolute",
            width: "20px",
            top: "18px",
          }}
        ></div>
        <div
          style={{
            background: isScrolled ? "rgb(29, 196, 104)" : "white",
            height: "2px",
            left: "8px",
            position: "absolute",
            width: "20px",
            top: "24px",
          }}
        ></div>
      </div>
    </button>
  );
};

export default HamburgerMenu;
