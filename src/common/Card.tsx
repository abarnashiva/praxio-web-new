interface CardProps {
  color?: "yellow" | "purple" | "cyan" | "emerald" | "orange" | "sky" | "rose";
  children?: React.ReactNode;
  logo?: string;
  number?: string;
  numberColor?: string;
}

const Card1: React.FC<CardProps> = ({
  children,
  color,
  logo,
  number,
  numberColor,
}) => {
  const baseCardStyles = `relative lg:px-6 px-4 py-4 w-full rounded-lg shadow-md flex flex-col h-full group`;

  const cardColors =
    color === "yellow"
      ? "bg-yellow-100 hover:bg-yellow-200"
      : color === "purple"
      ? "bg-purple-100 hover:bg-purple-200"
      : color === "cyan"
      ? "bg-cyan-100 hover:bg-cyan-200"
      : color === "emerald"
      ? "bg-green-100 hover:bg-green-200"
      : color === "orange"
      ? "bg-orange-100 hover:bg-orange-200"
      : color === "sky"
      ? "bg-sky-100 hover:bg-sky-200"
      : color === "rose"
      ? "bg-rose-100 hover:bg-rose-200"
      : "";

  const logoColors =
    color === "yellow"
      ? "bg-yellow-500"
      : color === "purple"
      ? "bg-purple-500 "
      : color === "cyan"
      ? "bg-cyan-500 "
      : color === "emerald"
      ? "bg-green-500 "
      : color === "orange"
      ? "bg-orange-500 "
      : "";

  const top = logo || number ? "pt-10" : "";

  return (
    <div className="flex flex-wrap py-4 h-full w-full">
      <div className={`${baseCardStyles} ${cardColors}`}>
        {logo && !number && (
          <div
            className={`absolute -top-8 p-4 left-5 rounded-full ${logoColors} shadow-md transition-all duration-300 group-hover:scale-105`}
          >
            <img src={logo} className="w-12 h-12 transition-all duration-300 group-hover:scale-105" />
          </div>
        )}
        {number && (
          <div
            className={`absolute -top-8 p-4 left-5 rounded-full ${logoColors} shadow-md transition-all duration-300 group-hover:scale-105`}
          >
            <p className={`text-4xl transition-all duration-300 group-hover:scale-105 font-bold ${numberColor}`}>{number}</p>
          </div>
        )}
        <div className={`${top}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card1;
