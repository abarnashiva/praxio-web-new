import { useEffect, useState } from "react";

interface HeroImageProps {
  source: string;
  small: string;
}

export default function HeroImage({ source, small }: HeroImageProps) {
  const [smallScreen, setSmallScreen] = useState(true);

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 600);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {!smallScreen && <img src={source} className="bg-cover bg-center w-full" />}
        {smallScreen && <img src={small} className="bg-cover bg-center w-full" />}
      </div>
    </>
  );
}
