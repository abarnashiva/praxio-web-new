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
    heading: "Targeted Campaigns",
    description:
      "Precision marketing strategies designed to reach your specific audience, driving engagement and conversions.",
    color: "cyan",
    number: "01",
    numberColor: "text-teal-900",
  },
  {
    heading: "SEO Optimization",
    description:
      "Ensuring your digital presence ranks highly on search engines with fully optimized strategies for increased visibility.",
    color: "orange",
    number: "02",
    numberColor: "text-amber-900",
  },
  {
    heading: "Data-Driven Insights",
    description:
      "Leveraging powerful analytics to refine campaigns, make informed decisions, and maximize your marketing ROI.",
    color: "purple",
    number: "03",
    numberColor: "text-purple-900",
  },
  {
    heading: "Social Media Mastery",
    description:
      "Crafting engaging, impactful content and strategic campaigns to elevate your brand’s presence on social platforms.",
    color: "yellow",
    number: "04",
    numberColor: "text-amber-900",
  },
  {
    heading: "Email Marketing Excellence",
    description:
      "Delivering personalized, dynamic email campaigns to nurture customer relationships and drive action.",
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
              <Heading1 white>Grow With Strategic Digital Marketing</Heading1>
              <Para service white>
                Our digital marketing services are designed to elevate your
                brand's online presence. From targeted campaigns to data-driven
                strategies, we help you connect with your audience, drive
                engagement, and achieve measurable results.
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
