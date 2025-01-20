import React from "react";

interface DividerProps {
  bgColor?: string;
  opacity?: number;
  marginTop?: string;
  marginBottom?: string;
  borderTop?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  bgColor = "#f5f5f5",
  opacity = 0.3,
  marginTop = "mt-5",
  marginBottom = "mb-5",
  borderTop = "border-t-2",
}) => {
  return (
    <div
      className={`${marginTop} ${marginBottom} ${borderTop} w-full h-full md:hidden`}
      style={{
        backgroundColor: bgColor,
        opacity: opacity,
      }}
    ></div>
  );
};

export default Divider;
