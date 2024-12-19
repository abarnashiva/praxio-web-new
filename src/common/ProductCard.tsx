import Heading1 from "../components/Heading1";

interface CardProps {
  color?: string;
  children?: React.ReactNode;
  heading?: string;
  source?: string;
}

const Card2: React.FC<CardProps> = ({ children, color, heading, source }) => {
  return (
    <div className="flex flex-wrap h-full w-full">
      <div className="relative flex flex-wrap">
        <div className={`${color} rounded-lg shadow-md hover:shadow-xl group`}>
          <div className="w-full relative mx-auto h-auto overflow-hidden rounded-t-lg">
            <img
              src={source}
              className="w-full h-auto relative z-0 scale-105 transition-all duration-300 group-hover:scale-100"
            />
          </div>
          <div className="p-6">
            <Heading1 service white>
              {heading}
            </Heading1>
            <ol className="list-decimal pl-5 py-2 space-y-2 text-lg text-white">
              {children}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
