import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
}

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <h1 className="xl:text-5xl lg:text-4xl text-2xl text-white font-semibold pt-4">{children}</h1>
  );
}