import React from "react";

interface CardGridProps {
  children: React.ReactNode;
  service?: boolean;
  product?: boolean;
  imageCard?: boolean;
  smallCard?: boolean;
  gridBox?: boolean;
}

export default function CardGrid({ children, service, product, imageCard, smallCard, gridBox }: CardGridProps) {
  const styles = service
    ? "grid xl:grid-cols-3 md:grid-cols-2 xl:gap-14 md:gap-8 gap-4"
    : product
    ? "grid lg:grid-cols-4 md:grid-cols-2 xl:gap-12 lg:gap-8 md:gap-6 lg:my-10 my-5"
    : imageCard
    ? "grid lg:grid-cols-3 md:grid-cols-2 xl:gap-12 gap-8 lg:my-10 my-5"
    : smallCard
    ? "grid xl:grid-cols-3 md:grid-cols-2 xl:gap-14 md:gap-8"
    : gridBox
    ? "grid lg:grid-cols-4 md:grid-cols-2 xl:gap-12 lg:gap-8 md:gap-6 my-2"
    : "grid grid-cols-2 gap-5";
  return (
    <>
      <div className={`${styles}`}>{children}</div>
    </>
  );
}
