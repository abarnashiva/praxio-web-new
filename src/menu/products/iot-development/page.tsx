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

export default function IoTDevelopment() {
  useReveal();
  
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>IoT Solutions</Heading>
        <SubContent>
        IoT redefines how we connect, making life more efficient and seamless.
        </SubContent>
      </HeroSwipe>
      <HeroImage
        source={"../images/IOT/Iot image.avif"}
        small={"../images/IOT/Iot small.avif"}
      />
      <Content />
      <Action />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
