import { useEffect, useState } from "react";
import Card1 from "../../../common/Card";
import AboutImage from "../../../components/AboutImage";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import FlexAbout from "../../../components/FlexAbout";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";
import BlueBanner from "../../../common/BlueBanner";

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
            <Heading1>Empowering Smarter Futures</Heading1>
            {smallScreen && (
              <AboutImage
                source={"../images/smart city/smart city final.svg"}
              ></AboutImage>
            )}
            <Para>
              For Smart City Development, we focus on cutting-edge solutions
              designed to transform urban areas into sustainable, connected, and
              highly efficient spaces. Our skilled team of urban planners,
              engineers, and technology experts collaborates seamlessly to
              deliver integrated and innovative solutions that enhance
              infrastructure, elevate living standards, promote environmental
              sustainability, and accelerate economic growth. Together, we build
              future-ready cities that prioritize the well-being of citizens and
              the planet.
            </Para>
          </div>
          {!smallScreen && (
            <AboutImage
              source={"../images/smart city/smart city final.svg"}
            ></AboutImage>
          )}
        </FlexAbout>
      </ContainerBox>

      <BlueBanner>
        <ContainerBox>
          <div className="pb-4 lg:pb-0">
            <Heading1 white>Why Smart City Solutions Matter</Heading1>
          </div>
          <CardGrid smallCard>
            <Card1 color="purple">
              <Heading1 service>Urban Mobility and Traffic Management</Heading1>
              <Para service>
                Optimizing city transportation systems for smoother travel and
                reduced congestion.
              </Para>
            </Card1>
            <Card1 color="orange">
              <Heading1 service>
                Public Safety and Security Surveillance
              </Heading1>
              <Para service>
                Monitoring and protecting communities to ensure a safe
                environment for everyone.
              </Para>
            </Card1>
            <Card1 color="emerald">
              <Heading1 service>Sustainability and Energy Efficiency</Heading1>
              <Para service>
                Innovating with eco-friendly solutions to reduce energy
                consumption.
              </Para>
            </Card1>
            <Card1 color="sky">
              <Heading1 service>
                Data-Driven Decision Making and Maintenance
              </Heading1>
              <Para service>
                Using insights from data to make informed choices and ensure
                upkeep.
              </Para>
            </Card1>
            <Card1 color="cyan">
              <Heading1 service>
                Smart infrastructure and Resource Optimization
              </Heading1>
              <Para service>
                Leveraging technology to enhance systems and optimize resource
                efficiency.
              </Para>
            </Card1>
            <Card1 color="yellow">
              <Heading1 service>AI in Cities with Digital Governance</Heading1>
              <Para service>
                Revolutionizing urban management with AI-driven smart city
                solutions.
              </Para>
            </Card1>
          </CardGrid>
        </ContainerBox>
      </BlueBanner>
    </div>
  );
}
