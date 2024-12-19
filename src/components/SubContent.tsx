import React from "react";

interface SubcontentProps {
  children: React.ReactNode;
}

export default function SubContent({ children }: SubcontentProps) {
  return <h5 className="text-white py-4 font-medium lg:text-xl">{children}</h5>;
}
