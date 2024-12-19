import BlueBanner from "../../common/BlueBanner";
import Card1 from "../../common/Card";
import CommonHead from "../../common/heading";
import CardContent from "../../components/Cardcontent";
import CardGrid from "../../components/cardgrid";
import ContainerBox from "../../components/ContainerBox";
import Heading1 from "../../components/Heading1";
import Para from "../../components/Para";

type CardColor = "yellow" | "purple" | "cyan" | "emerald" | "orange";

const Contents: {
  heading: string;
  description: string;
  color: CardColor;
  logo: string;
  link: string;
}[] = [
  {
    heading: "Hardware Design & Prototyping",
    description:
      "We bring ideas to life with innovative hardware design, precise prototyping and a steadfast commitment to excellence and quality.",
    color: "purple",
    logo: "./images/Home/hardware icon.svg",
    link: "/services/hardware-design",
  },
  {
    heading: "Software Development & Integration",
    description:
      "We craft seamless software development and integration solutions that drive innovation in technology.",
    color: "yellow",
    logo: "./images/Home/software icon.svg",
    link: "/services/software-development",
  },
  {
    heading: "Testing & Quality Assurance",
    description:
      "We ensure excellence with rigorous standards in testing and quality assurance, delivering flawless results.",
    color: "emerald",
    logo: "./images/Home/testing icon.svg",
    link: "/services/testing-quality",
  },
  {
    heading: "Deployment & Scalability",
    description:
      "We guarantee seamless and efficient deployment, ensuring your solutions are impactful and ready for success.",
    color: "orange",
    logo: "./images/Home/deployment icon.svg",
    link: "/services/deployment",
  },
  {
    heading: "Digital Marketing",
    description:
      "We empower brands and products with innovative and results-driven digital marketing strategies.",
    color: "cyan",
    logo: "./images/Home/digital icon.svg",
    link: "/services/digital-marketing",
  },
];

function Services() {
  return (
    <BlueBanner>
      <section id="services">
        <ContainerBox>
          <CardGrid service>
            <CardContent>
              <div>
                <CommonHead white>Services</CommonHead>
                <Heading1 white>Transforming Ideas Into Reality</Heading1>
                <Para service white>
                  Harnessing the power of technology to drive your business
                  forward with innovative and creation of reliable solutions.
                </Para>
              </div>
            </CardContent>
            {Contents.map((content, index) => (
              <div key={index} className="my-3 md:my-0">
                <a href={content.link}>
                  <Card1
                    color={content.color}
                    logo={content.logo}
                  >
                    <Heading1 service>{content.heading}</Heading1>
                    <Para service>{content.description}</Para>
                  </Card1>
                </a>
              </div>
            ))}
          </CardGrid>
        </ContainerBox>
      </section>
    </BlueBanner>
  );
}

export default Services;
