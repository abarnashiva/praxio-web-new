import Content from "./content";
import Box from "../../../common/Box";
import ContainerBox from "../../../components/ContainerBox";
import Heading from "../../../components/Heading";
import SubContent from "../../../components/SubContent";
import HeroSwipe from "../../../components/HeroSwipe";
import Router from "../../../breadCrumbs";
import HeroImage from "../../../common/HeroImage";
import Overview from "./overview";
import { useReveal } from "../../../components/Reveal";

export default function HardwareDesign() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Hardware Design And Prototyping</Heading>
        <SubContent>
          Bringing innovative concepts to life with expert hardware design and
          fast prototyping solutions.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/services/service 1.avif"}
        small={"../images/services/service 1 small.avif"}
      />
      <Content />
      <Overview />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
