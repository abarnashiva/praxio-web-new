import { useEffect, useState } from "react";
import Heading1 from "./Heading1";
import Para from "./Para";

interface ImageProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  heading?: string;
  source?: string;
  color?: string;
}

export default function ImageCard({ children, direction, heading, source, color }: ImageProps) {
  const [smallScreen, setSmallScreen] = useState(true);

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 800);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="lg:pt-12 pt-8">
      <div className={`${color} flex flex-wrap lg:flex-nowrap rounded-lg`}>
      {direction === "left"  && <img src={source} alt={heading} className="w-full rounded-xl" />}
      {direction === "right" && smallScreen && <img src={source} alt={heading} className="w-full rounded-xl" />}
        <div className="py-6 xl:px-12 lg:px-6 px-4">
          <Heading1 white>{heading}</Heading1>
          <Para white service>
            {children}
          </Para>
        </div>
        {direction === "right" && !smallScreen && <img src={source} alt={heading} className="w-full rounded-xl" />}
      </div>
    </div>
  );
}
