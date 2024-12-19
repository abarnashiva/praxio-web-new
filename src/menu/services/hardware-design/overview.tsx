import BlueBanner from "../../../common/BlueBanner";
import Card1 from "../../../common/Card";
import CommonHead from "../../../common/heading";
import CardContent from "../../../components/Cardcontent";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";

type CardColor = "yellow" | "purple" | "cyan" | "emerald" | "orange";

const Contents: {
  heading: string;
  description: string;
  color: CardColor;
  number: string;
  numberColor: string;
}[] = [
  {
    heading: "Custom-fit Designs",
    description:
      "Tailored hardware designs that meet specific project goals and user needs, ensuring optimal performance and scalability.",
    color: "orange",
    number: "01",
    numberColor: "text-amber-900",
  },
  {
    heading: "Speedy Prototyping",
    description:
      "Quick iterations to speed up development, enabling efficient testing process and refinement for faster market delivery.",
    color: "cyan",
    number: "02",
    numberColor: "text-teal-900",
  },
  {
    heading: "Next-Gen Tech",
    description:
      "Cutting-edge components, sensors, and connectivity solutions, equipping your hardware with the latest innovations.",
    color: "purple",
    number: "03",
    numberColor: "text-purple-900",
  },
  {
    heading: "Scalable & Flexible",
    description:
      "Designs that grow with your project, easily adaptable to future needs with minimal effort.",
    color: "yellow",
    number: "04",
    numberColor: "text-amber-900",
  },
  {
    heading: "Rigorous Testing and support",
    description:
      "Comprehensive testing for performance, durability and reliability, for full production and support from concept to completion.",
    color: "emerald",
    number: "05",
    numberColor: "text-green-900",
  },
];

function Overview() {
  return (
    <div>
      <BlueBanner service>
        <ContainerBox>
          <CommonHead white>Overview</CommonHead>
          <CardGrid service>
            <CardContent>
              <Heading1 white>Precision-Driven Hardware Solutions</Heading1>
              <Para service white>
                Transform your ideas into reality with cutting-edge hardware
                design and rapid prototyping, delivering innovative solutions
                tailored to your needs.
              </Para>
            </CardContent>

            {Contents.map((content, index) => (
              <div key={index} className="my-3 md:my-0">
                <Card1
                  color={content.color}
                  number={content.number}
                  numberColor={content.numberColor}
                >
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

export default Overview;
