import Card2 from "../../../common/ProductCard";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";

const Contents = [
  {
    heading: "Intelligent Street Lighting",
    list: "Adaptive Brightness Control",
    list1: "Energy Efficiency",
    list2: "Remote Monitoring",
    list3: "Maintenance Alerts",
    color: "olive",
    source: "../images/smart city/street light.avif",
  },
  {
    heading: "Traffic Management ",
    list: "Real-time Traffic Flow Monitoring",
    list1: "Accident Detection",
    list2: "Congestion Reduction",
    list3: "Smart Signaling",
    color: "brown",
    source: "../images/smart city/traffic light.avif",
  },
  {
    heading: "ANPR Cameras",
    list: "Real-time License Plate Recognition",
    list1: "Enhanced Public Safety",
    list2: "Reduced Traffic Congestion",
    list3: "Vehicle Entry and Exit Monitoring",
    color: "slate",
    source: "../images/smart city/camera.avif",
  },
  {
    heading: "Smart Parking System",
    list: "Real-time Spot Detection",
    list1: "Automated Payment System",
    list2: "Mobile App Integration",
    list3: "License Plate Recognition Integration",
    color: "gray",
    source: "../images/smart city/parking.avif",
  },
  {
    heading: "Smart Barricade System",
    list: "Automated Operation",
    list1: "Integration and Real-time notifications",
    list2: "Real-time Traffic Control",
    list3: "Emergency Response Capabilities",
    color: "royal-purple",
    source: "../images/smart city/traffic.avif",
  },
  {
    heading: "Environmental Monitoring ",
    list: "Air Quality Monitoring",
    list1: "Water Quality Sensors",
    list2: "Noise Pollution Detection",
    list3: "Weather Condition Tracking",
    color: "gray-purple",
    source: "../images/smart city/environment.avif",
  },
];

export default function Action() {
  return (
    <div>
      <ContainerBox>
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
      </ContainerBox>
    </div>
  );
}
