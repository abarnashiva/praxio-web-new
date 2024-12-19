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

export default function SoftwareDevelopment() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Software Development And Integration</Heading>
        <SubContent>
          Delivering prompt solutions that enrich user needs through flawless
          software creation and integration.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/services/service 2.avif"}
        small={"../images/services/service 2 small.avif"}
      />
      <Content />
      <Overview />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
