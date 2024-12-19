import Card1 from "../common/Card";
import Para from "./Para";

export default function YearCard() {
    return (
        <div className="flex h-full">
        <Card1 color="emerald">
          <div className="flex justify-center md:py-10 py-4">
            <div className="rounded-full shadow-md bg-secondary flex flex-col justify-center text-white xl:w-72 xl:h-72 w-40 h-40 items-center xl:text-2xl  text-xl font-bold">
              <p className="xl:text-5xl lg:text-3xl text-2xl font-thin pb-4">Since</p>
              <div className="xl:text-7xl lg:text-5xl text-4xl">2018</div>
            </div>
          </div>
          <Para>
            <p className="text-center xl:px-20 lg:px-8 font-bold leading-relaxed xl:text-4xl lg:text-3xl text-lg">
              Innovating For Tomorrow And Shaping A Connected World
            </p>
          </Para>
        </Card1>
      </div>
    );
  }
  