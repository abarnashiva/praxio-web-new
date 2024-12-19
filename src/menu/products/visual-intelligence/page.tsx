import Content from "./content";
import Box from "../../../common/Box";
import ContainerBox from "../../../components/ContainerBox";
import Heading from "../../../components/Heading";
import SubContent from "../../../components/SubContent";
import HeroSwipe from "../../../components/HeroSwipe";
import Router from "../../../breadCrumbs";
import HeroImage from "../../../common/HeroImage";
import Vision from "./vision";
import { useReveal } from "../../../components/Reveal";

export default function VisualIntelligence() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Visual Intelligence</Heading>
        <SubContent>
          Visual Intelligence empowers machines to see, comprehend, and act on
          the world around them.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/visual/visual banner.avif"}
        small={"../images/visual/visual small.avif"}
      />
      <Content />
      <Vision />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
