const HamburgerMenu = ({ isScrolled, isSidebarOpen, handleMenuClick }) => {
  const iconColor = isScrolled ? "rgb(29, 196, 104)" : "rgb(255, 255, 255)";

  // Hamburger line styles (common for all)
  const lineStyle = {
    background: iconColor,
    height: "2px",
    left: "8px",
    position: "absolute",
    width: "20px",
    transition: "0.4s cubic-bezier(0, 0, 0, 1)",
  };

  // Transformations for mobile
  const topLineTransform = isSidebarOpen
    ? "rotate(45deg) translate(4.23px, 4.23px)"
    : "rotate(0) translate(0, 0)";
  const middleLineTransform = isSidebarOpen ? "scaleX(0)" : "scaleX(1)";
  const bottomLineTransform = isSidebarOpen
    ? "rotate(-45deg) translate(4.23px, -4.23px)"
    : "rotate(0) translate(0, 0)";

  return (
    <button
      onClick={handleMenuClick}
      className="text-xl focus:outline-none z-50 transition-all"
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
        {/* Top line */}
        <div
          style={{
            ...lineStyle,
            top: "12px",
            transform: topLineTransform,
          }}
        ></div>
        {/* Middle line */}
        <div
          style={{
            ...lineStyle,
            top: "18px",
            transform: middleLineTransform,
          }}
        ></div>
        {/* Bottom line */}
        <div
          style={{
            ...lineStyle,
            top: "24px",
            transform: bottomLineTransform,
          }}
        ></div>
      </div>

      {/* Desktop Hamburger icon (no transition) */}
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
        {/* Top line */}
        <div
          style={{
            ...lineStyle,
            top: "12px",
          }}
        ></div>
        {/* Middle line */}
        <div
          style={{
            ...lineStyle,
            top: "18px",
          }}
        ></div>
        {/* Bottom line */}
        <div
          style={{
            ...lineStyle,
            top: "24px",
          }}
        ></div>
      </div>
    </button>
  );
};

export default HamburgerMenu;
