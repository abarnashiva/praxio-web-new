import React from "react";

interface ContainerBoxProps {
  children: React.ReactNode;
}

export default function ContainerBox({ children }: ContainerBoxProps) {
  return (
    <>
      <div className="container w-full xl:px-12 px-6">{children}</div>
    </>
  );
}
