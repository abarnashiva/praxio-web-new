import Card2 from "../../../common/ProductCard";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import FlexVision from "../../../components/FlexVision";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";

const Contents = [
  {
    heading: "Manufacturing Quality Control",
    list: "Real-time Defect Detection",
    list1: "Process Monitoring",
    list2: "Automated Inspections",
    list3: "Data-Driven Improvements",
    color: "gray",
    source: "../images/visual/vis use case 1.avif",
  },
  {
    heading: "Retail Analytics",
    list: "Instant Object Recognition",
    list1: "Store Layout Analysis",
    list2: "Inventory Management",
    list3: "Operational Efficiency",
    color: "dark-olive",
    source: "../images/visual/vis use case 2.avif",
  },
  {
    heading: "Security And Surveillance",
    list: "Real-time Object Detection ",
    list1: "Object Recognition",
    list2: "Behavioural Analysis",
    list3: "Crowd and Traffic Monitoring",
    color: "slate1",
    source: "../images/visual/vis use case 3.avif",
  },
];

export default function Vision() {
  return (
    <ContainerBox>
      <Heading1>Key Components Of VI</Heading1>
      <div className="bg-bluebanner my-8 rounded-lg">
        <FlexVision>
          <Para product white>
            <li>Image Recognition</li>
          </Para>
          <Para product white>
            <li>Video Analytics</li>
          </Para>
          <Para product white>
            <li>Facial Recognition</li>
          </Para>
          <Para product white>
            <li>Optical Character Recognition</li>
          </Para>
          <Para product white>
            <li>Data Visualization</li>
          </Para>
        </FlexVision>
      </div>

      <div>
        <Heading1>Bringing Vision To Life: Practical Use Cases</Heading1>
        <CardGrid imageCard>
          {Contents.map((content, index) => (
            <div key={index}>
              <Card2
                color={content.color}
                heading={content.heading}
                source={content.source}
              >
                <li>{content.list}</li>
                <li>{content.list1}</li>
                <li>{content.list2}</li>
                <li>{content.list3}</li>
              </Card2>
            </div>
          ))}
        </CardGrid>
      </div>
    </ContainerBox>
  );
}
