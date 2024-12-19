import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import lodash from "lodash";
import HeroSwipe from "./components/HeroSwipe";

const Router = () => {
  const { pathname } = useLocation();

  const pageName = useMemo(() => {
    const firstSegment = pathname.split("/")?.[1];
    if (!firstSegment) return "";

    return firstSegment.toLowerCase();
  }, [pathname]);

  return (
    <>
      {pageName !== "home" && pageName !== "" ? (
        <HeroSwipe>
          <div className="flex mt-6">
            <div className="flex text-white" key="1">
              <Link to="/">
                <p className="hover:underline font-semibold">Home</p>
              </Link>
              <p className="ml-2 mt-1 font-bold">
                <FaChevronRight />
              </p>
              <p className="ml-2 font-semibold">
                {lodash.capitalize(pageName)}
              </p>
            </div>
          </div>
        </HeroSwipe>
      ) : (
        <div className="p-0 m-0 "></div>
      )}
    </>
  );
};

export default Router;
