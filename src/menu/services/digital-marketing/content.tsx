import { useEffect, useState } from "react";
import Card1 from "../../../common/Card";
import CardGrid from "../../../components/cardgrid";
import CommonPadding from "../../../components/CommonPadding";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";

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
    <CommonPadding>
      <ContainerBox>
        <Heading1>
          Maximize Reach, Optimize Strategy, Elevate Your Brand
        </Heading1>
        <Para>
          We offer innovative digital marketing strategies that drive results.
          Our campaigns are designed to stand out and engage your target
          audience. We continuously explore new technologies and tactics to keep
          your brand ahead. Creativity and strategy combine to ensure impactful
          campaigns. Stay competitive with our cutting-edge marketing solutions
          with these benefits.
        </Para>

        <CardGrid gridBox>
          <Card1 color="purple">
            <Heading1 service>Customized Solutions</Heading1>
            <Para service>
              Offering bespoke solutions tailored to meet your specific
              challenges.
            </Para>
          </Card1>
          <Card1 color="rose">
            <Heading1 service>Real-time Analytics</Heading1>
            <Para service>
              Empowering data-driven decisions with instant insights and
              analytics.
            </Para>
          </Card1>
          <Card1 color="yellow">
            <Heading1 service>Global Reach</Heading1>
            <Para service>
              Expanding our impact across borders to serve a worldwide audience.
            </Para>
          </Card1>
          <Card1 color="emerald">
            <Heading1 service>Brand Awareness</Heading1>
            <Para service>
              Building a strong brand presence to increase recognition and
              trust.
            </Para>
          </Card1>
          {smallScreen && (
            <>
              <Card1 color="orange">
                <Heading1 service>Measurable Results</Heading1>
                <Para service>
                  Tracking and analyzing outcomes to ensure goals are achieved
                  effectively.
                </Para>
              </Card1>
              <Card1 color="cyan">
                <Heading1 service>Data-Driven Approach</Heading1>
                <Para service>
                  Leveraging insights for smarter decision-making and improved
                  performance.
                </Para>
              </Card1>
            </>
          )}
        </CardGrid>

        {!smallScreen && (
          <div className="flex justify-center">
            <CardGrid gridBox>
              <div></div>
              <Card1 color="orange">
                <Heading1 service>Measurable Results</Heading1>
                <Para service>
                  Leveraging insights for smarter decision-making and improved
                  performance.
                </Para>
              </Card1>
              <Card1 color="cyan">
                <Heading1 service>Data-Driven Approach</Heading1>
                <Para service>
                  Leveraging insights for smarter decision-making and improved
                  performance.
                </Para>
              </Card1>
            </CardGrid>
          </div>
        )}
      </ContainerBox>
    </CommonPadding>
  );
}
