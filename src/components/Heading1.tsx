interface HeadProps {
  children: React.ReactNode;
  white?: boolean;
  service?: boolean;
  blue?: boolean;
  about?: boolean;
}

export default function Heading1({
  children,
  white,
  service,
  blue,
  about,
}: HeadProps) {
  const whiteText = white ? "text-white border-white" : "border-gray-500";
  const blueText = blue ? "text-primary" : "";
  const Service = service
    ? "lg:text-2xl text-lg font-semibold"
    : about
    ? "xl:text-3xl lg:text-2xl text-lg font-semibold"
    : "xl:text-4xl lg:text-3xl text-xl font-semibold py-2";
  return (
    <div>
      <p className={`${whiteText} ${Service} ${blueText} leading-relaxed`}>
        {children}
      </p>
    </div>
  );
}
