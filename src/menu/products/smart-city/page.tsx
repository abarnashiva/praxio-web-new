import Content from "./content";
import Box from "../../../common/Box";
import ContainerBox from "../../../components/ContainerBox";
import Heading from "../../../components/Heading";
import SubContent from "../../../components/SubContent";
import HeroSwipe from "../../../components/HeroSwipe";
import Router from "../../../breadCrumbs";
import HeroImage from "../../../common/HeroImage";
import Action from "./action";
import { useReveal } from "../../../components/Reveal";

export default function SmartCity() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Smart City Solutions</Heading>
        <SubContent>
          Leveraging technology for sustainable growth and smarter city management.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/smart city/smart city image.avif"}
        small={"../images/smart city/smart city small.avif"}
      />
      <Content />
      <Action />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
