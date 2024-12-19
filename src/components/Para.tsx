interface ParaProps {
  children: React.ReactNode;
  service?: boolean;
  white?: boolean;
  about?: boolean;
  product?: boolean;
}

export default function Para({
  children,
  service,
  white,
  about,
  product,
}: ParaProps) {
  const whiteText = white ? "text-white" : "";
  const Service = service ? "xl:text-xl lg:text-lg" : "xl:text-2xl lg:text-xl";
  const About = about
    ? "xl:text-2xl lg:text-xl py-4"
    : product
    ? "py-4"
    : "py-4 leading-loose tracking-wide";
  return (
    <div>
      <p className={`${product} ${About} ${whiteText} ${Service}`}>
        {children}
      </p>
    </div>
  );
}
