import { MdKeyboardArrowRight } from "react-icons/md";

interface ListProps {
  children: React.ReactNode;
}

export default function List({ children }: ListProps) {
  return (
    <>
      <ul className="py-2 space-y-2">
        <div className="flex gap-4">
          <div className="bg-secondary rounded-full my-auto">
            <MdKeyboardArrowRight className="text-white xl:text-3xl text-2xl" />
          </div>
          <li>{children}</li>
        </div>
      </ul>
    </>
  );
}
