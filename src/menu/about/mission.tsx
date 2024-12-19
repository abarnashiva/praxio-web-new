import BlueBanner from "../../common/BlueBanner";
import Card1 from "../../common/Card";
import ContainerBox from "../../components/ContainerBox";
import Heading1 from "../../components/Heading1";
import List from "../../components/List";
import Para from "../../components/Para";
import YearCard from "../../components/Year";

const contents = [
  {
    list1: "Innovate sustainable urban solutions.",
    list2: "Collaborate with communities.",
    list3: "Ensure excellence and integrity.",
    list4: "Shape a Sustainable Future",
    list5: "Build Strong Global Partnerships",
    list6: "Set High Industry Standards",
  },
];

export default function Mission() {
  return (
    <BlueBanner>
      <ContainerBox>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:gap-28 lg:gap-10 gap-6 py-8 md:py-0">
          {contents.map((list, index) => (
            <div key={index}>
              <div className="lg:col-start-1 lg:row-start-1 pb-6">
                <Card1 color="yellow" logo="./images/about/mission.svg">
                  <Heading1 about>Mission</Heading1>
                  <Para about>
                    <List>{list.list1}</List>
                    <List>{list.list2}</List>
                    <List>{list.list3}</List>
                  </Para>
                </Card1>
              </div>

              <div className="lg:col-start-1 lg:row-start-2">
                <Card1 color="purple" logo="./images/about/vision.svg">
                  <Heading1 about>Vision</Heading1>
                  <Para about>
                    <List>{list.list4}</List>
                    <List>{list.list5}</List>
                    <List>{list.list6}</List>
                  </Para>
                </Card1>
              </div>
            </div>
          ))}
          <YearCard />
        </div>
      </ContainerBox>
    </BlueBanner>
  );
}
