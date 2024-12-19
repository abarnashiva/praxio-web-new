import Box from "../../common/Box";
import ContainerBox from "../../components/ContainerBox";
import { useReveal } from "../../components/Reveal";
import FutureTechnology from "./About";
import Hero from "./Hero";
import Services from "./Services";

export default function HomePage() {
  useReveal();

  return (
    <>
      <Hero />
      <FutureTechnology />
      <Services />
      <ContainerBox>
        <Box />
      </ContainerBox>
    </>
  );
}
