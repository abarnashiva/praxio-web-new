import Content from "./content";
import Box from "../../../common/Box";
import ContainerBox from "../../../components/ContainerBox";
import Heading from "../../../components/Heading";
import SubContent from "../../../components/SubContent";
import HeroSwipe from "../../../components/HeroSwipe";
import Router from "../../../breadCrumbs";
import HeroImage from "../../../common/HeroImage";
import { useReveal } from "../../../components/Reveal";

export default function Deployment() {
  useReveal();
  
  return (
    <>
      <Router />
      <HeroSwipe>
        <Heading green>Deployment And Scalability</Heading>
        <SubContent>
          Effortless deployment of advanced technologies and scalable operations
          are key drivers of success.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/services/service 4.avif"}
        small={"../images/services/service 4 small.avif"}
      />
      <Content />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
