import Card1 from "../../../common/Card";
import CardGrid from "../../../components/cardgrid";
import CommonPadding from "../../../components/CommonPadding";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";

export default function Content() {
  return (
    <CommonPadding>
      <ContainerBox>
        <Heading1>Rapid Prototypes, Future-Ready Hardware Solutions</Heading1>
        <Para>
          Our team specializes in cutting-edge hardware design and prototyping
          services. From concept development to PCB layout, we bring your ideas
          to life. We handle schematic design, fabrication and assembly with
          precision. Our solutions are customized to meet your specific
          requirements. Partner with us to transform your concepts into working
          prototypes.
        </Para>

        <CardGrid product>
          <Card1 color="yellow">
            <Heading1 service>Conceptualization</Heading1>
            <Para service>Turn your ideas into detailed blueprints.</Para>
          </Card1>
          <Card1 color="purple">
            <Heading1 service>Design</Heading1>
            <Para service>Develop schematics and layout with precision.</Para>
          </Card1>
          <Card1 color="emerald">
            <Heading1 service>Prototyping</Heading1>
            <Para service>Create functional prototypes for validation.</Para>
          </Card1>
          <Card1 color="orange">
            <Heading1 service>Testing With support</Heading1>
            <Para service>Ensure hardware reliability and performance.</Para>
          </Card1>
        </CardGrid>
      </ContainerBox>
    </CommonPadding>
  );
}
