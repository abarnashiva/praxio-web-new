interface HeroImageProps {
  source: string;
}

export default function HeroImage({ source }: HeroImageProps) {
  return (
    <>
      <div className="xl:px-7">
        <img src={source} className="object-fit w-full my-6" />
      </div>
    </>
  );
}
