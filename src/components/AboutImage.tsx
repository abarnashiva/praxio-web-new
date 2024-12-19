interface AboutImageProps {
  source: string;
}

export default function AboutImage({ source }: AboutImageProps) {
  return (
    <>
      <div className="flex justify-center">
        <img
          src={source}
          className="w-full py-6 m-auto"
        />
      </div>
    </>
  );
}
