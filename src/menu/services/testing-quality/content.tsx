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
    heading: "Requirement Analysis & Planning",
    description:
      "Understanding your product requirements, developing a customized test plan, ensure coverage of all functional and non-functional aspects.",
    color: "yellow",
    number: "01",
    numberColor: "text-amber-900",
  },
  {
    heading: "Test Case Development",
    description:
      "Our team crafts detailed test cases that align with your specifications, enabling us to identify potential issues early in the development cycle.",
    color: "cyan",
    number: "02",
    numberColor: "text-teal-900",
  },
  {
    heading: "Test Execution",
    description:
      "Manual and automated tests to assess your product's performance, security, and usability, ensuring it meets quality standards.",
    color: "purple",
    number: "03",
    numberColor: "text-purple-900",
  },
  {
    heading: "Bug Reporting & Fixing",
    description:
      "Defects are logged, prioritized, and communicated for prompt resolution, ensuring a high-quality product.",
    color: "orange",
    number: "04",
    numberColor: "text-amber-900",
  },
  {
    heading: "Regression & Final Validation",
    description:
      "Regression testing to ensure bug fixes don't impact existing functionality, followed by final validation to confirm all requirements are met.",
    color: "emerald",
    number: "05",
    numberColor: "text-green-900",
  },
];

export default function Content() {
  return (
    <div>
      <CommonPadding>
        <ContainerBox>
          <Heading1>
            Ensuring Excellence: Rigorous Testing For Unmatched Quality
          </Heading1>
          <Para>
            We deliver meticulously tested, high-quality solutions that
            seamlessly integrate into your infrastructure. From customized
            testing plans to scalable and efficient deployment, we ensure your
            product achieves peak performance, reliability, and long-term
            success.
          </Para>
        </ContainerBox>
      </CommonPadding>

      <BlueBanner service>
        <ContainerBox>
          <CommonHead white>Overview</CommonHead>

          <CardGrid service>
            <CardContent>
              <Heading1 white>Comprehensive Testing: Good Performance</Heading1>
              <Para service white>
                We ensure your product meets the highest quality standards. Our
                blend of automated and manual methods identifies and resolves
                issues early, delivering an exemplary user experience.
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
