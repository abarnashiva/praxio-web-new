interface ProductImageProps {
  source: string;
  product?: boolean;
}

export default function ProductImage({ source, product }: ProductImageProps) {
  const products = product ? "flex mx-auto w-full lg:py-5 md:py-8" : "w-full";
  return (
    <>
      <div>
        <img src={source} className={`${products}`} />
      </div>
    </>
  );
}
