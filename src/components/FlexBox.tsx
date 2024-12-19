import React from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  normal?: boolean;
  content?: boolean;
  footer?: boolean;
  logo?: boolean;
  contact?: boolean;
  customClass?: string;
  product?: boolean;
}

export default function FlexBox({
  children,
  normal,
  content,
  footer,
  logo,
  contact,
  customClass,
  product
}: FlexBoxProps) {
  const defaultFlex = normal
    ? "flex flex-wrap"
    : content
    ? "flex gap-2 pt-3 pl-2"
    : footer
    ? "flex flex-wrap justify-start lg:flex-nowrap xl:justify-around md:gap-12 lg:gap-10 gap-14"
    : logo
    ? "my-auto flex justify-start py-6 lg:pt-0 mx-auto lg:mx-0"
    : contact
    ? "flex gap-2 pt-3"
    : product
    ? "flex lg:flex-nowrap flex-wrap-reverse xl:gap-20 lg:gap-16 gap-10"
    : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center";

  return <div className={` ${customClass} ${defaultFlex}`}>{children}</div>;
}
