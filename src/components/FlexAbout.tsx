import React from "react";

interface FlexAboutProps {
  children: React.ReactNode;
}

export default function FlexAbout({ children }: FlexAboutProps) {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-28 gap-10">{children}</div>
    </>
  );
}
