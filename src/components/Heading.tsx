import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
  margin?: boolean;
  green?: boolean;
}

export default function Heading({
  children,
  center,
  margin,
  green,
}: HeadingProps) {
  const textAlignClass = center ? "text-center" : "";
  const marginAlign = margin ? "my-7 pb-4" : "";
  const greentext = green
    ? "text-secondary xl:text-4xl"
    : "text-primary";

  return (
    <h1
      className={`font-semibold md:text-3xl text-2xl ${textAlignClass} ${marginAlign} ${greentext}`}
    >
      {children}
    </h1>
  );
}
