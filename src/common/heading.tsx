interface HeadProps {
  children: React.ReactNode;
  white?: boolean;
}

export default function CommonHead({ children, white }: HeadProps) {
const whiteText = white ? "text-white border-white" : "border-gray-500";
    return (
      <div className="flex items-center py-2">
        <p className={`${whiteText} border font-medium  px-5 py-1 rounded-3xl xl:text-2xl lg:text-xl text-lg`}>{children}</p>
      </div>
    );
  }