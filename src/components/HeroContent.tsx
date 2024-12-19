import React from "react";

interface HeroContentProps {
  children: React.ReactNode;
}

export default function HeroContent({ children }: HeroContentProps) {
  return (
    <>
      <div className="flex flex-col items-start align-middle  justify-center  py-10 my-auto ">
        {children}
      </div>
    </>
  );
}
