interface FlexVisionProps {
  children: React.ReactNode;
}

export default function FlexVision({ children }: FlexVisionProps) {
  return (
    <div className="flex flex-wrap lg:flex-nowrap md:gap-10 gap-y-2 gap-x-6 px-8 py-2 lg:justify-center">
      {children}
    </div>
  );
}
