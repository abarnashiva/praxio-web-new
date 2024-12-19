import { useEffect, useState } from "react";
import BlueBanner from "../../../common/BlueBanner";
import Card1 from "../../../common/Card";
import AboutImage from "../../../components/AboutImage";
import ContainerBox from "../../../components/ContainerBox";
import FlexAbout from "../../../components/FlexAbout";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";
import CardGrid from "../../../components/cardgrid";

type CardColor = "yellow" | "purple" | "cyan" | "emerald" | "orange";

const Contents: {
  heading: string;
  description: string;
  color: CardColor;
  logo: string;
}[] = [
  {
    heading: "Data Collecting",
    description: "Smart sensors gather Real-time data from the environment.",
    color: "yellow",
    logo: "../images/visual/sensors.svg",
  },
  {
    heading: "Data Transmission",
    description: "Data is sent via Wi-Fi, Bluetooth, or cellular networks.",
    color: "purple",
    logo: "../images/IOT/network.svg",
  },
  {
    heading: "Data Processing",
    description: "Data is processed locally or in the cloud for insights.",
    color: "emerald",
    logo: "../images/visual/cloud.svg",
  },
  {
    heading: "Automation",
    description:
      "Devices make autonomous decisions based on the analyzed data.",
    color: "orange",
    logo: "../images/IOT/bulb.svg",
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
            <Heading1>Simplify Life With IoT</Heading1>
            {smallScreen && (
              <AboutImage source={"../images/IOT/final vector.svg"}></AboutImage>
            )}
            <Para>
              The IoT solutions provided by Praxio help businesses thrive and
              succeed in today's rapidly evolving digital world. With seamless
              connectivity at the core, our experienced team expertly integrates
              smart devices, sensors, and systems into cohesive, intelligent
              networks. These advanced ecosystems drive greater efficiency,
              enhance user experiences, and unlock unprecedented opportunities
              for growth, innovation, and competitive advantage. Our solutions
              are designed to adapt to your business needs, ensuring long-term
              scalability and resilience.
            </Para>
          </div>
          {!smallScreen && (
            <AboutImage source={"../images/IOT/final vector.svg"}></AboutImage>
          )}
        </FlexAbout>
      </ContainerBox>

      <BlueBanner>
        <ContainerBox>
          <div className="pb-6 lg:pb-0">
            <Heading1 white>How IoT Works</Heading1>
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
