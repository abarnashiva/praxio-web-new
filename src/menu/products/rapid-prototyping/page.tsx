import Content from "./content";
import ContainerBox from "../../../components/ContainerBox";
import Box from "../../../common/Box";
import Heading from "../../../components/Heading";
import HeroSwipe from "../../../components/HeroSwipe";
import SubContent from "../../..//components/SubContent";
import Router from "../../../breadCrumbs";
import HeroImage from "../../../common/HeroImage";
import Action from "./action";
import { useReveal } from "../../../components/Reveal";

export default function RapidProto() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Rapid Prototyping</Heading>
        <SubContent>
          Swiftly shaping ideas into impactful solutions, driving innovation and
          product growth.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/rapid/rapid img.avif"}
        small={"../images/rapid/rapid small.avif"}
      />
      <Content />
      <Action />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
