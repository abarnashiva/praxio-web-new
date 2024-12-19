import React from "react";

interface IconsProps {
  children: React.ReactNode;
  white?: boolean;
  small?: boolean;
  contact?: boolean;
}

export default function Icons({ children, white, small, contact }: IconsProps) {

  const iconsAlign = white
    ? "text-white py-4"
    : small
    ? "text-xl mt-5 py-4"
    : contact
    ? "text-secondary"
    : "text-secondary py-4";

  return (
    <>
      <div className={`text-2xl ${iconsAlign}`}>{children}</div>
    </>
  );
}
