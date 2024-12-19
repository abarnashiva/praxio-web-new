import React from "react";

interface FlexContentProps {
  children: React.ReactNode;
  normal?: boolean;
  product?: boolean;
}

export default function FlexContent({
  children,
  normal,
  product
}: FlexContentProps) {
  const defaultFlex = normal
    ? "grid gap-2"
    : product
    ? "xl:max-w-5xl w-full my-auto"
    : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:gap-x-20";

  return (
    <>
      <div className={`${defaultFlex}`}>{children}</div>
    </>
  );
}
