import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { HeaderButton } from "./common/Button";
import { Arrow } from "./common";

function Header() {
  const [click, setClick] = useState(false);
  const [smallScreen, setSmallScreen] = useState<boolean>(true);
  const isClient = typeof window === `object` ? true : false;

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 950);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, [isClient]);

  const navigation = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/about",
      label: "About Us",
    },
    {
      label: "Products & Solutions",
      children: [
        {
          name: "Visual Intelligence",
          url: "/products/visual-intelligence",
        },
        {
          name: "IoT Solutions",
          url: "/products/iot-development",
        },
        {
          name: "Smart City Solutions",
          url: "/products/smart-city",
        },
        {
          name: "Rapid Prototyping",
          url: "/products/rapid-prototyping",
        },
      ],
    },
    {
      label: "Services",
      children: [
        {
          name: "Hardware Designing And Prototyping ",
          url: "/services/hardware-design",
        },
        {
          name: "Software Development And Integration",
          url: "/services/software-development",
        },
        {
          name: "Testing And Quality Assurance",
          url: "/services/testing-quality",
        },
        {
          name: "Deployment And Scalability",
          url: "/services/deployment",
        },
        {
          name: "Digital Marketing",
          url: "/services/digital-marketing",
        },
      ],
    },
    {
      url: "/contact",
      label: <HeaderButton text={"Contact Us"}></HeaderButton>,
    },
  ];

  return (
    <div className="w-full bg-neutral-50 shadow-md">
      <header
        className={` scroll-smooth ${
          !smallScreen
            ? "flex "
            : smallScreen && !click
            ? "flex w-full  "
            : "fixed w-full h-full overflow-auto bg-neutral-50 z-10  "
        } justify-between overFlow-auto lg:py-2.5 py-4 bg-neutral-50 text-neutral-900 xl:px-14 px-6`}
      >
        <div className={`flex ${smallScreen && `w-full`} justify-between`}>
          <a className="w-32" href="/">
            <img
              src="/Praxio logo final.png"
              alt="Image Description"
              className="w-full lg:pt-3"
            />
          </a>
          {smallScreen && (
            <div
              className="text-primary right-0 w-8 text-center cursor-pointer text-2xl font-medium rounded"
              onClick={() => setClick(!click)}
            >
              {click ? <FaXmark /> : <FaBars />}
            </div>
          )}
        </div>
        <nav>
          <ul
            className={`font-semibold ${
              smallScreen && click
                ? ` mt-4 flex pt-4 w-full h-auto  inset-y-0 right-0 bg-neutral-50 z-50 flex-col  overflow-auto text-base  space-y-8 `
                : smallScreen
                ? "hidden"
                : "flex items-center xl:space-x-11 space-x-4"
            }  `}
          >
            {navigation.map((item, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [show, setShow] = useState(false);
              return (
                <>
                  <hr />

                  <li
                    className=" navList cursor-pointer justify-between h-auto overflow-scroll hover:text-primary items-center px-3 md:px-1 sm:px-0.5 transition-all truncate"
                    key={index}
                    onClick={() => setShow(!show)}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                  >
                    <div className="flex justify-between text-lg">
                      {item.url ? (
                        <a
                          className={`h-full`}
                          href={`${item.url && item.url}`}
                          onClick={() => setClick(!click)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p>{item.label}</p>
                      )}
                      {item.children && (
                        <span
                          className={`color-red-600 group-hover:translate-y-1 transition-transform ${
                            show ? `-rotate-90` : `rotate-90`
                          } w-4 mx-1 scale-50`}
                        >
                          <Arrow fill="#106FB1" />
                        </span>
                      )}
                    </div>
                    {show && item.children && (
                      <div
                        className={` mt-2   ${
                          !smallScreen &&
                          "absolute top-8 z-10  bg-transperant rounded-lg pt-2.5"
                        } flex flex-col gap-4   ${smallScreen && "w-full"} `}
                        onMouseLeave={() => setShow(false)}
                        onClick={() => setClick(!click)}
                      >
                        <div
                          className={`bg-slate-50 ${
                            !smallScreen && "shadow-slate-400 shadow-md  mt-4"
                          }`}
                        >
                          {item.children.map((child, ind) => {
                            return (
                              <div
                                className="navList flex group px-4 py-2 text-gray-700 bg-slate-50 hover:text-primary  transition-all rounded-lg"
                                key={ind}
                              >
                                <a className="  truncate" href={`${child.url}`}>
                                  {child.name}
                                </a>
                                <span className="w-4  mx-4 opacity-0 scale-75 group-hover:opacity-100 ">
                                  <Arrow fill="#106FB1" />
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
