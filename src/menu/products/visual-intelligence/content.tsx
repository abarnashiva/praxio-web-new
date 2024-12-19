import { useEffect, useState } from "react";
import Card1 from "../../../common/Card";
import AboutImage from "../../../components/AboutImage";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import FlexAbout from "../../../components/FlexAbout";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";
import BlueBanner from "../../../common/BlueBanner";

type CardColor = "yellow" | "purple" | "cyan" | "emerald" | "orange";

const Contents: {
  heading: string;
  description: string;
  color: CardColor;
  logo: string;
}[] = [
  {
    heading: "Data Collecting",
    description: "Capture visual data from cameras, sensors, and devices.",
    color: "yellow",
    logo: "../images/visual/sensors.svg",
  },
  {
    heading: "Data Pre-processing",
    description:
      "Enhance image quality and maintain consistent format standardization.",
    color: "purple",
    logo: "../images/visual/cloud.svg",
  },
  {
    heading: "Feature Detection",
    description: "Identify key patterns, objects, and details in images.",
    color: "emerald",
    logo: "../images/visual/detection.svg",
  },
  {
    heading: "AI Analysis and Actions",
    description:
      "Use AI models to analyze and interpret visual data to make and trigger decisions.",
    color: "orange",
    logo: "../images/visual/monitoring.svg",
  },
];

export default function Content() {
  const [smallScreen, setSmallScreen] = useState(true);

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 900);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <ContainerBox>
        <FlexAbout>
          <div className="pt-8">
            <Heading1>Revolutionizing The Future</Heading1>
            {smallScreen && (
              <AboutImage
                source={"../images/visual/visual int vector.svg"}
              ></AboutImage>
            )}
            <Para>
              Our advanced visual intelligence solution transforms raw visual
              data into actionable insights, empowering businesses to enhance
              decision-making and streamline operations. Utilizing cutting-edge
              computer vision and AI, our product delivers Real-time image
              analysis and predictive insights, driving improvements in
              efficiency, accuracy, and performance. Whether for monitoring,
              automation, or strategic planning, it enables organizations to
              harness the full potential of visual data for unprecedented
              success.
            </Para>
          </div>
          {!smallScreen && (
            <AboutImage
              source={"../images/visual/visual int vector.svg"}
            ></AboutImage>
          )}
        </FlexAbout>
      </ContainerBox>

      <BlueBanner>
        <ContainerBox>
          <div className="pb-4 lg:pb-0">
            <Heading1 white>How Visual Intelligence Works</Heading1>
          </div>
          <CardGrid product>
            {Contents.map((content, index) => (
              <div key={index} className="my-3 md:my-0">
                <Card1 color={content.color} logo={content.logo}>
                  <Heading1 service>{content.heading}</Heading1>
                  <Para service>{content.description}</Para>
                </Card1>
              </div>
            ))}
          </CardGrid>
        </ContainerBox>
      </BlueBanner>
    </div>
  );
}
