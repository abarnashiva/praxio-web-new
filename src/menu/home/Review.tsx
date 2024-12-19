import CommonHead from "../../common/heading";
import ContainerBox from "../../components/ContainerBox";
import FlexAbout from "../../components/FlexAbout";
import Heading1 from "../../components/Heading1";
import Para from "../../components/Para";

export default function Reviews() {
  return (
    <section id="products">
      <ContainerBox>
        <FlexAbout>
          <div>
            <CommonHead>Reviews</CommonHead>
            <Heading1 blue>What Our Clients Say</Heading1>
            <Para service>
              Our clients testimonials speak for themselves. Discover why they
              choose us repeatedly, reflecting our unwavering commitment to
              excellence.
            </Para>
          </div>
          <div>
            <Para service>
              "Praxio transformed our project with their innovative solutions
              and expert support. Their dedication and efficiency exceeded our
              expectations, making them a key partner in our success."
            </Para>
            <div className="flex items-center space-x-4 py-4">
              <div className="bg-primary h-14 w-14 rounded-full flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              <div>
                <Heading1 service>Radhakrishnan</Heading1>
                <p className="text-sm text-gray-500">Lead, SRM Technologies</p>
              </div>
            </div>
          </div>
        </FlexAbout>
      </ContainerBox>
    </section>
  );
}
