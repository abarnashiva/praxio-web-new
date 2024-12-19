import React from "react";

interface SubheadingProps {
  children: React.ReactNode;
  whiteText?: boolean;
  bottom?: boolean;
}

export default function SubHeading({
  children,
  whiteText,
  bottom,
}: SubheadingProps) {
  const whiteTexts = whiteText
    ? "text-white text-xl font-medium mb-6"
    : bottom
    ? "text-primary pt-6 pb-10 text-2xl font-semibold"
    : "text-primary py-3 lg:text-2xl text-xl font-semibold";

  return <h2 className={`${whiteTexts}`}>{children}</h2>;
}
