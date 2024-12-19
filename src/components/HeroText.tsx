import React from "react";

interface HeroTextProps {
  children: React.ReactNode;
  white?: boolean;
}

export default function HeroText({ children, white }: HeroTextProps) {
  const whiteText = white ? "text-white" : ""
  return (
    <>
      <text className={`lg:text-xl text-lg font-semibold text-banner ${whiteText}`}>
        {children}
      </text>
    </>
  );
}
