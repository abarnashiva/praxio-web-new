import Content from "./content";
import Box from "../../common/Box";
import ContainerBox from "../../components/ContainerBox";
import Heading from "../../components/Heading";
import SubContent from "../../components/SubContent";
import HeroSwipe from "../../components/HeroSwipe";
import Router from "../../breadCrumbs";
import HeroImage from "../../common/HeroImage";
import { useReveal } from "../../components/Reveal";

export default function About() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>About US</Heading>
        <SubContent>
          With innovation, we turn ideas into impactful solutions that drive
          success and shape the future.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/about/about-main-image.avif"}
        small={"../images/about/about-small.avif"}
      />
      <Content />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
