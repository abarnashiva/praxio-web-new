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

export default function DigitalMarketing() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Digital Marketing</Heading>
        <SubContent>
          Maximize Your Digital Growth with Expert Marketing Solutions.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/services/service 5.avif"}
        small={"../images/services/service 5 small.avif"}
      />
      <Content />
      <Overview />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
