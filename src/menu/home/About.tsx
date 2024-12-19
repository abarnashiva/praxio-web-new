import { useEffect, useState } from "react";
import { Button } from "../../common/Button";
import Card1 from "../../common/Card";
import CommonHead from "../../common/heading";
import AboutImage from "../../components/AboutImage";
import ContainerBox from "../../components/ContainerBox";
import FlexAbout from "../../components/FlexAbout";
import Heading1 from "../../components/Heading1";
import Para from "../../components/Para";
import CardGrid from "../../components/cardgrid";

export default function FutureTechnology() {
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
    <div className="xl:pb-10">
      <ContainerBox>
        <FlexAbout>
          <div>
            <CommonHead>About Us</CommonHead>
            <Heading1>Your Vision, Our Innovation</Heading1>
            {smallScreen && (
              <AboutImage source={"./images/Home/about small.avif"}></AboutImage>
            )}
            <Para>
              As architects of tomorrow, we are driven by a passion to transform
              technology into a force for simplicity and innovation. With
              combined expertise, our team excels in unlocking potential through
              strategic business consulting, cutting-edge application
              development, smooth implementation, and continuous support. We
              don't just follow trends we set them, delivering breakthrough
              solutions that propel success and redefine what's possible.
            </Para>
            {!smallScreen && (
              <div className="flex pt-6 xl:pt-10">
                <a href={"/about"}>
                  <Button text={"Learn More"}></Button>
                </a>
              </div>
            )}
          </div>
          <div>
            {!smallScreen && (
              <AboutImage source={"./images/Home/about.avif"}></AboutImage>
            )}
            <div className="pt-4">
              <CardGrid>
                <Card1 color="yellow" logo="./images/Home/iso icon.svg">
                  <p className="xl:text-2xl lg:text-xl text-lg">
                    <span className="font-semibold">ISO 9001:2015</span>{" "}
                    Certified
                  </p>
                </Card1>
                <Card1 color="purple" logo="./images/Home/cutting icon.svg">
                  <p className="xl:text-2xl lg:text-xl text-lg">
                    <span className="font-semibold">Cutting Edge</span>{" "}
                    Technology
                  </p>
                </Card1>

                <Card1 color="cyan" logo="./images/Home/6years icon.svg">
                  <p className="xl:text-2xl lg:text-xl text-lg">
                    <span className="font-semibold">6 years </span> of
                    excellence
                  </p>
                </Card1>
                <Card1 color="emerald" logo="./images/Home/cross icon.svg">
                  <p className="xl:text-2xl lg:text-xl text-lg">
                    <span className="font-semibold">Cross Sector </span>{" "}
                    Expertise
                  </p>
                </Card1>
              </CardGrid>
            </div>
          </div>
        </FlexAbout>
        {smallScreen && (
          <div>
            <div className="flex pt-6 xl:pt-0">
              <a href={"/about"}>
                <Button text={"Learn More"}></Button>
              </a>
            </div>
          </div>
        )}
      </ContainerBox>
    </div>
  );
}
