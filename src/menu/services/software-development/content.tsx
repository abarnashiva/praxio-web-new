import { useEffect, useState } from "react";
import Card1 from "../../../common/Card";
import CardGrid from "../../../components/cardgrid";
import CommonPadding from "../../../components/CommonPadding";
import ContainerBox from "../../../components/ContainerBox";
import Heading1 from "../../../components/Heading1";
import Para from "../../../components/Para";

export default function Content() {
  const [smallScreen, setSmallScreen] = useState(true);

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 900);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CommonPadding>
      <ContainerBox>
 
          <Heading1>
            Unified Development, Seamless Integration and Possibilities
          </Heading1>
          <Para>
            By focusing on unity, the development process reduces complexity,
            allowing effective collaboration with seamless integration which
            ensures undisrupted communication within the system. This
            flexibility empowers businesses to innovate continuously, stay
            competitive, and meet future demands.
          </Para>


       
          <CardGrid gridBox>
            <Card1 color="purple">
              <Para service>
                Artificial Intelligence And Machine Learning Services
              </Para>
            </Card1>
            <Card1 color="rose">
              <Para service>Data Science And Big Data Analytics Services</Para>
            </Card1>
            <Card1 color="yellow">
              <Para service>Mobile And Web Application Development</Para>
            </Card1>
            <Card1 color="emerald">
              <Para service>API Development And Integration Services</Para>
            </Card1>
            {smallScreen && (
              <>
                <Card1 color="orange">
                  <Para service>
                    IT System And Software Integration Services
                  </Para>
                </Card1>
                <Card1 color="cyan">
                  <Para service>Comprehensive Data Integration Solutions</Para>
                </Card1>
              </>
            )}
          </CardGrid>
    

        {!smallScreen && (
          <div className="flex justify-center">
            <CardGrid gridBox>
              <div></div>
              <Card1 color="orange">
                <Para service>IT system and software integration services</Para>
              </Card1>
              <Card1 color="cyan">
                <Para service>Comprehensive Data Integration Solutions</Para>
              </Card1>
            </CardGrid>
          </div>
        )}
      </ContainerBox>
    </CommonPadding>
  );
}
