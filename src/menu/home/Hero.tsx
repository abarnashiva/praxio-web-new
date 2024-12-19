import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper as SwiperType } from "swiper";
import { Button } from "../../common/Button";
import MainHeading from "../../components/MainHeading";
import Paragraph from "../../components/Paragraph";
import HeroText from "../../components/HeroText";
import HeroContent from "../../components/HeroContent";
import HeroSwipe from "../../components/HeroSwipe";

const phrases = [
  {
    label: "Vision AI",
    heading: "Elevate Your Understanding with",
    description:
      "We use Visual Intelligence to swiftly transform data into meaningful insights, providing clarity in a world of information overload and empowering your decision-making process with confidence and precision.",
    shortDescription: "See Beyond with Visual Artificial Intelligence",
    name: "Explore Visual Intelligence Now",
    url: "/products/visual-intelligence",
    background: "../images/Home/vis home.avif",
  },
  {
    label: "IoT Solutions",
    heading: "Innovating Today, Shaping Tomorrow",
    description:
      "Our IoT solutions transform the way devices connect and communicate. Unlock seamless collaboration, gain valuable data insights, and embrace endless possibilities for innovation.",
    shortDescription: "Connecting the World, One Device at a Time",
    name: "Explore our IoT Management Platform",
    url: "/products/iot-development",
    background: "../images/Home/IOT solutions bg.avif",
  },
  {
    label: "Smart City Solutions",
    heading: "Discover Seamless",
    description:
      "We pioneer smart and sustainable cities with innovative and cutting-edge solutions, transforming urban living for enhanced efficiency, safety, environmental stewardship, and resident well-being.",
    shortDescription: "Connecting Cities, Empowering Communities",
    name: "Explore our Smart City Solutions",
    url: "/products/smart-city",
    background: "../images/Home/smart city.avif",
  },
  {
    label: "Rapid Prototyping",
    heading: "Unleash Your Ideas Faster with",
    description:
      "We break through the barriers of traditional development and swiftly bring your visionary ideas to life with our cutting-edge rapid prototyping solutions, fostering innovation, creativity, and tangible results.",
    shortDescription:
      "Quickly tests and refines initial product designs",
    name: "Explore our Rapid Prototype Solutions",
    url: "/products/rapid-prototyping",
    background: "../images/Home/rapid home image.avif",
  },
];

const Hero: React.FC = () => {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = React.useState<SwiperType>();
  const [secondSwiper, setSecondSwiper] = React.useState<SwiperType>();
  const [childHeight, setChildHeight] = React.useState<number>();
  const [active, setActive] = React.useState<number>(0);
  const handleResize = () => {
    if (typeof document !== "undefined") {
      const slider = document.getElementById("slider");
      console.log(slider?.clientHeight, "height");
      setChildHeight(slider?.clientHeight);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  firstSwiper?.on("slideChange", (swiper) => {
    setActive(swiper.realIndex);
  });

  const imageSize = window.innerWidth <= 768 ? "56px" : "64px" ;

  return (
    <div className="relative ">
      <Swiper
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Controller, Autoplay, EffectFade]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
      >
        {phrases.map((phrase, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center"
              style={{
                backgroundImage: `url('${phrase.background}')`,
                backgroundColor: "black",
                display: "flex",
                minHeight: `calc(100vh - ${imageSize} - ${childHeight}px)`,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="w-full xl:px-14 px-6">
                <HeroContent>
                  <HeroText white>{phrase.heading}</HeroText>
                  <MainHeading>{phrase.label}</MainHeading>
                  <div className="max-w-2xl ">
                    <Paragraph swiperText>{phrase.description}</Paragraph>
                  </div>
                  <a href={`${phrase.url}`}>
                    <Button text={"Learn More"} />
                  </a>
                </HeroContent>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <HeroSwipe future>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: phrases.length,
            },
          }}
          modules={[Controller]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          {phrases.map((phrase, index) => (
            <SwiperSlide
              key={index}
              onClick={() => {
                firstSwiper?.slideTo(index);
              }}
            >
              <div className=" mb-4 h-1">
                <div
                  className={`h-full transition-colors rounded-md ${
                    active === index ? "progress-animation" : ""
                  }  `}
                ></div>
              </div>
              <div
                className={`h-auto ${
                  active === index ? "text-secondary" : "text-white"
                }`}
              >
                <h2 className="font-semibold lg:text-2xl text-xl hover:cursor-pointer">
                  {phrase.label}
                </h2>
                <p className="hover:cursor-pointer pt-2">
                  {phrase.shortDescription}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroSwipe>
    </div>
  );
};

export default Hero;
