import CommonHead from "../../common/heading";
import ContainerBox from "../../components/ContainerBox";
import Heading1 from "../../components/Heading1";
import ImageCard from "../../components/ImageCard";

const values: Array<{
  heading: string;
  direction: "left" | "right";
  source: string;
  color: string;
  content: string;
}> = [
  {
    heading: "Innovation in Technology",
    direction: "left",
    source: "./images/about/innovation-image.avif",
    color: "olive",
    content:
      "We lead in technology innovation, constantly exploring new frontiers and integrating the latest advancements. Our solutions push boundaries and drive progress.",
  },
  {
    heading: "Teamwork and Collaboration",
    direction: "right",
    source: "./images/about/teamwork-image.avif",
    color: "royal-purple",
    content:
      "Collaboration fuels our success. We foster a dynamic environment where diverse skills and perspectives come together, creating stronger solutions and achieving collective goals.",
  },
  {
    heading: "Quality and Precision",
    direction: "left",
    source: "./images/about/quality-image.avif",
    color: "gray",
    content:
      "We uphold the highest standards, ensuring that every detail meets our rigorous quality and benchmarks. Our commitment guarantees exceptional outcomes in every project.",
  },
  {
    heading: "Customer Satisfaction",
    direction: "right",
    source: "./images/about/customer-image.avif",
    color: "slate",
    content:
      "Our focus is on your success. We go beyond to ensure that our solutions exceed your expectations, delivering outstanding results and lasting value.",
  },
];

export default function Values() {
  return (
    <>
      <ContainerBox>
        <div className="pt-6 lg:pt-0">
          <CommonHead>Our values</CommonHead>
          <Heading1>Values That Define Us </Heading1>
        </div>
        {values.map((value, index) => (
          <div
            className="flex flex-col flex-wrap"
            key={index}
          >
            <ImageCard
              heading={value.heading}
              color={value.color}
              source={value.source}
              direction={value.direction}
            >
              {value.content}
            </ImageCard>
          </div>
        ))}
      </ContainerBox>
    </>
  );
}
