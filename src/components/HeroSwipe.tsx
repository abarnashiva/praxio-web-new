import React from "react";

interface HeroSwipeProps {
  children: React.ReactNode;
  future?: boolean;
}

export default function HeroSwipe({ children, future }: HeroSwipeProps) {

  const futures = future ? "xl:mb-24 mb-14 py-4" : "";
  return (
    <div id="slider" className={`w-full bg-banner ${futures}`}>
      <div className="w-full xl:px-14 lg:px-6 p-2">{children}</div>
    </div>
  );
}
