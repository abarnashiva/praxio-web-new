import Card1 from "../../../common/Card";
import Card2 from "../../../common/ProductCard";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";

const Contents = [
  {
    heading: "Smart Homes",
    list: "Voice Assistants",
    list1: "Automation",
    list2: "Optimize power consumption",
    list3: "Hands-free control of devices",
    color: "olive",
    source: "../images/IOT/smart home.avif",
  },
  {
    heading: "Industrial IoT",
    list: "Predictive Maintenance",
    list1: "Asset Tracking",
    list2: "Factory Automation",
    list3: "Monitor performance",
    color: "slate",
    source: "../images/IOT/industrial.avif",
  },
  {
    heading: "IoT in Retail",
    list: "Smart Shelves",
    list1: "Customer Insights",
    list2: "Supply Chain Optimization",
    list3: "Predicts low product levels",
    color: "gray",
    source: "../images/IOT/retail.avif",
  },
];

export default function Action() {
  return (
    <ContainerBox>
      <div>
        <Heading1>Why IoT Matters</Heading1>
        <CardGrid product>
          <Card1 color="purple">
            <Heading1 service>Efficiency</Heading1>
            <Para service>Automate routine tasks to save time.</Para>
          </Card1>
          <Card1 color="emerald">
            <Heading1 service>Cost Savings</Heading1>
            <Para service>Optimize energy consumption.</Para>
          </Card1>
          <Card1 color="orange">
            <Heading1 service>Smart Insights</Heading1>
            <Para service>Better decisions with Real-time data.</Para>
          </Card1>
          <Card1 color="yellow">
            <Heading1 service>Convenience</Heading1>
            <Para service>Control devices anywhere, anytime.</Para>
          </Card1>
        </CardGrid>
      </div>
      <div>
        <Heading1>IoT In Action: Real-world Applications</Heading1>
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
