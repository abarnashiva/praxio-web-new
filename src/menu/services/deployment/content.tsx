import BlueBanner from "../../../common/BlueBanner";
import Card1 from "../../../common/Card";
import CommonHead from "../../../common/heading";
import CardContent from "../../../components/Cardcontent";
import CardGrid from "../../../components/cardgrid";
import CommonPadding from "../../../components/CommonPadding";
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
    heading: "Strategic Deployment Planning",
    description:
      "Efficient deployment strategies are planned to minimize downtime, reduce risks, and ensure smooth, flawless launches.",
    color: "emerald",
    number: "01",
    numberColor: "text-green-900",
  },
  {
    heading: "Infrastructure Setup",
    description:
      "Cloud-based or on-premise, we configure your infrastructure to handle your current needs so preparing it to scale as your business grows.",
    color: "purple",
    number: "02",
    numberColor: "text-purple-900",
  },
  {
    heading: "Automated CI/CD Pipelines",
    description:
      "Continuous Integration and Continuous Deployment (CI/CD) automates the release faster with minimal manual intervention.",
    color: "cyan",
    number: "03",
    numberColor: "text-teal-900",
  },
  {
    heading: "Monitoring & Optimization",
    description:
      "Monitor system performance in real-time, optimizing resource allocation to ensure your application can handle varying loads with ease.",
    color: "yellow",
    number: "04",
    numberColor: "text-amber-900",
  },
  {
    heading: "Scalability Implementation",
    description:
      "Architecting robust software that can easily scale up or down to meet evolving business demands.",
    color: "orange",
    number: "05",
    numberColor: "text-amber-900",
  },
];

export default function Content() {
  return (
    <div>
      <CommonPadding>
        <ContainerBox>
          <Heading1>
            Launch To Infinity, Mastering Deployment And Scalability
          </Heading1>
          <Para>
            Our deployment services are designed to ensure seamless
            implementation and growth. We build solutions that are scalable and
            adaptive to evolving business demands. Our team ensures that your
            systems are resilient and future-ready. Whether deploying locally or
            in the cloud, we provide robust solutions. Scale confidently with
            our expert support.
          </Para>
        </ContainerBox>
      </CommonPadding>

      <BlueBanner service>
        <ContainerBox>
          <CommonHead white>Overview</CommonHead>

          <CardGrid service>
            <CardContent>
              <Heading1 white>
                Seamless Deployment For Long-term Success
              </Heading1>
              <Para service white>
                we ensure smooth launches and prepare your system to handle
                growth and we optimize process, automate workflow, with scalable
                infrastructure that adapt high performance and reliability.
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
