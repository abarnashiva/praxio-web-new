import ContainerBox from "../../components/ContainerBox";
import Heading1 from "../../components/Heading1";
import Para from "../../components/Para";
import Mission from "./mission";
import Values from "./values";

export default function Content() {
  return (
    <div>
      <div className="pt-8">
        <ContainerBox>
          <Heading1>Leading The Charge In Technological Innovation</Heading1>
          <Para>
            Praxio stands as a trailblazer in urban transformation, committed to
            building smarter, sustainable cities. As an ISO 9001:2015 certified
            company, we are driven by a vision of interconnected, intelligent,
            and sustainable cities. From AI to IoT and Visual Intelligence, our
            team integrates advanced solutions into urban spaces, offering
            seamless end-to-end services. Being a customer-centric focus, we
            transform ideas into tangible solutions, believing in a future where
            technology and nature coexist in harmony.
          </Para>
        </ContainerBox>
      </div>
      <Mission />
      <Values />
    </div>
  );
}
