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
    heading: "Tailored Software Solutions",
    description:
      "Tailored hardware designs that meet specific project goals and user needs, ensuring optimal performance and scalability.",
    color: "purple",
    number: "01",
    numberColor: "text-purple-900",
  },
  {
    heading: "Agile Development",
    description:
      "Rapid and flexible development cycles to adapt to changing requirements and deliver faster, high-quality results.",
    color: "cyan",
    number: "02",
    numberColor: "text-teal-900",
  },
  {
    heading: "Cutting-edge Tech",
    description:
      "Leveraging the latest tools, frameworks and technologies to keep your software future-ready and competitive.",
    color: "orange",
    number: "03",
    numberColor: "text-amber-900",
  },
  {
    heading: "Scalable Architecture",
    description:
      "Building software with scalability in mind, enabling your systems to grow effortlessly as your business expands.",
    color: "emerald",
    number: "04",
    numberColor: "text-green-900",
  },
  {
    heading: "Comprehensive Testing",
    description:
      "Rigorous testing for performance, security and reliability, ensuring your software works flawlessly under all conditions.",
    color: "yellow",
    number: "05",
    numberColor: "text-amber-900",
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
              <Heading1 white>
                Building Innovation, Integrating Excellence
              </Heading1>
              <Para service white>
                Turn your vision into robust, scalable solutions with expert
                software development and seamless integration, designed to meet
                your business needs and drive innovation.
              </Para>
            </CardContent>

            {Contents.map((content, index) => (
              <div key={index} className="my-3 md:my-0">
                <Card1
                  color={content.color}
                  numberColor={content.numberColor}
                  number={content.number}
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
