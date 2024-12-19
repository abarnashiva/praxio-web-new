import Content from "./content";
import ContainerBox from "../../components/ContainerBox";
import Heading from "../../components/Heading";
import SubContent from "../../components/SubContent";
import HeroSwipe from "../../components/HeroSwipe";
import Router from "../../breadCrumbs";

export default function Contact() {
  return (
    <>
      <Router />

      <HeroSwipe>
        <Heading green>Contact Us</Heading>
        <SubContent>Reach out to Praxio</SubContent>
      </HeroSwipe>
      <ContainerBox>
        <Content />
      </ContainerBox>
    </>
  );
}
