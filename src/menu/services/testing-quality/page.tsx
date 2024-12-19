import Content from "./content";
import Box from "../../../common/Box";
import ContainerBox from "../../../components/ContainerBox";
import Heading from "../../../components/Heading";
import SubContent from "../../../components/SubContent";
import HeroSwipe from "../../../components/HeroSwipe";
import Router from "../../../breadCrumbs";
import HeroImage from "../../../common/HeroImage";
import { useReveal } from "../../../components/Reveal";

export default function TestingQuality() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Testing And Quality Assurance </Heading>
        <SubContent>
          Delivering Quality, Deploying Success: Your Path to Flawless
          Performance.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/services/service 3.avif"}
        small={"../images/services/service 3 small.avif"}
      />
      <Content />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
