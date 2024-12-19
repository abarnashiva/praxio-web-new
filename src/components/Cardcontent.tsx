import React from "react";

interface CardContentProps {
  children: React.ReactNode;
}

export default function CardContent({ children }: CardContentProps) {
  return (
    <>
      <div className="flex flex-col flex-wrap">{children}</div>
    </>
  );
}
