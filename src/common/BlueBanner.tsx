interface BlueBannerProps {
  children: React.ReactNode;
  service?: boolean;
}

export default function BlueBanner({ children, service }: BlueBannerProps) {
    const services = service ? "" : "lg:my-10 my-6";

  return (
    <>
      <div className={`bg-bluebanner py-12 ${services}`}>
        {children}
      </div>
    </>
  );
}
