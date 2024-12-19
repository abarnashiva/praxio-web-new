import { useEffect, useState } from "react";
import BlueBanner from "../../../common/BlueBanner";
import Card1 from "../../../common/Card";
import AboutImage from "../../../components/AboutImage";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import FlexAbout from "../../../components/FlexAbout";
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
    <div>
      <ContainerBox>
        <FlexAbout>
          <div className="pt-8">
            <Heading1>Bringing Ideas to Life Faster</Heading1>
            {smallScreen && (
              <AboutImage
                source={"../images/rapid/rapid vector.svg"}
              ></AboutImage>
            )}
            <Para>
              We excel in transforming ideas into tangible results with
              unmatched speed through our Rapid Prototyping & Development
              services. Our solutions empower businesses to innovate, refine,
              and launch products quickly and efficiently. From start-ups to
              established companies, we offer fast-paced product advancements
              tailored to your unique needs. Rely on our experienced team to
              bring your vision to life with precision, delivering high-quality
              prototypes and market-ready final products that drive success.
            </Para>
          </div>
          {!smallScreen && (
            <AboutImage
              source={"../images/rapid/rapid vector.svg"}
            ></AboutImage>
          )}
        </FlexAbout>
      </ContainerBox>

      <BlueBanner>
        <ContainerBox>
          <div className="pb-4 lg:pb-0">
            <Heading1 white>Benefits Of Rapid Prototyping</Heading1>
          </div>
          <CardGrid smallCard>
            <Card1 color="yellow">
              <Heading1 service>Speed to Market</Heading1>
              <Para service>
                Delivering innovative products quickly to stay ahead of the
                competition.
              </Para>
            </Card1>
            <Card1 color="purple">
              <Heading1 service>Cost Efficiency</Heading1>
              <Para service>
                Optimizing resources for maximum value and reduced costs.
              </Para>
            </Card1>
            <Card1 color="emerald">
              <Heading1 service>Flexibility in Design</Heading1>
              <Para service>
                Adapting solutions to meet evolving customer needs and
                preferences.
              </Para>
            </Card1>
            <Card1 color="cyan">
              <Heading1 service>Concept to creation</Heading1>
              <Para service>
                Turning visionary ideas into fully developed, market-ready
                products.
              </Para>
            </Card1>
            <Card1 color="sky">
              <Heading1 service>Enhanced Product Testing</Heading1>
              <Para service>
                Ensuring top-tier quality through advanced testing and
                validation.
              </Para>
            </Card1>
            <Card1 color="orange">
              <Heading1 service>Improved Collaboration</Heading1>
              <Para service>
                Promoting seamless teamwork to drive faster, better outcomes.
              </Para>
            </Card1>
          </CardGrid>
        </ContainerBox>
      </BlueBanner>
    </div>
  );
}
