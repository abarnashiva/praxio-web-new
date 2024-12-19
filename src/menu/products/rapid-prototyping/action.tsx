import Card2 from "../../../common/ProductCard";
import CardGrid from "../../../components/cardgrid";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";

const Contents = [
  {
    heading: "Intuitive 3D Modelling",
    list: "Easy 3D Design Creation",
    list1: "Real-time Visualization",
    list2: "Simplified Design Process",
    list3: "Precision Modelling Tools",
    color: "slate",
    source: "../images/rapid/3D model.avif",
  },
  {
    heading: "Minimum Viable Product",
    list: "Rapid Prototype Development",
    list1: "Essential Feature Focus",
    list2: "Early User Feedback",
    list3: "Cost-Efficient Launch",
    color: "dark-olive",
    source: "../images/rapid/MVP.avif",
  },
  {
    heading: "Versatile Prototyping Tools",
    list: "Wide Range of Design Options",
    list1: "Flexible Model Customization",
    list2: "Breadboards, soldering kits",
    list3: "Microcontrollers, sensors",
    color: "royal-purple",
    source: "../images/rapid/versatile.avif",
  },
  {
    heading: "Spare Parts Management",
    list: "Customizable Part Design",
    list1: "Material Versatility",
    list2: "Quality Assurance and Testing",
    list3: "Flexible Production Scaling",
    color: "gray-purple",
    source: "../images/rapid/spare parts.avif",
  },
  {
    heading: "Integration With 3D Printing",
    list: "Seamless Print Compatibility",
    list1: "Direct Printing Options",
    list2: "Optimized 3D Print Output",
    list3: "Multi-Printer Support",
    color: "brown",
    source: "../images/rapid/3D print.avif",
  },
  {
    heading: "Customization And Compatibility",
    list: "Tailored Design Features",
    list1: "Broad Software Integration",
    list2: "Modular Add-Ons",
    list3: "Cross-Device Compatibility",
    color: "gray",
    source: "../images/rapid/customize.avif",
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
