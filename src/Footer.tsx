import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import FlexBox from "./components/FlexBox";
import FlexContent from "./components/FlexContent";
import Icons from "./components/Icons";
import Paragraph from "./components/Paragraph";
import SubHeading from "./components/SubHeading";

export default function Footer() {
  const [smallScreen, setSmallScreen] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleResize = () => {
    setSmallScreen(window.innerWidth <= 900);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="bg-banner">
      <div className="text-white py-8 xl:px-10 px-6">
        {smallScreen && (
          <FlexBox logo>
            <div>
              <a href="/">
                <img src="/footer.svg" alt="logo" className="w-40 mb-6" />
              </a>
            </div>
          </FlexBox>
        )}
        <FlexBox footer>
          {!smallScreen && (
            <FlexBox logo>
              <div>
                <a href="/">
                  <img src="/footer.svg" alt="logo" className="w-40" />
                </a>
              </div>
            </FlexBox>
          )}
          <div>
            <SubHeading whiteText>Quick Links</SubHeading>
            <FlexContent normal>
              <a href="/" className="hover:text-secondary">
                Home
              </a>
              <a href="/about" className="hover:text-secondary">
                About Us
              </a>
              <a href="/contact" className="hover:text-secondary">
                Contact
              </a>
            </FlexContent>
          </div>
          <div>
            <SubHeading whiteText>Products & Solutions</SubHeading>
            <FlexContent normal>
              <a
                href="/products/visual-intelligence"
                className="hover:text-secondary"
              >
                Visual Intelligence
              </a>
              <a
                href="/products/iot-development"
                className="hover:text-secondary"
              >
                IoT Solutions
              </a>
              <a href="/products/smart-city" className="hover:text-secondary">
                Smart City Solutions
              </a>
              <a
                href="/products/rapid-prototyping"
                className="hover:text-secondary"
              >
                Rapid Prototyping
              </a>
            </FlexContent>
          </div>
          <div>
            <SubHeading whiteText>Services</SubHeading>
            <FlexContent normal>
              <a
                href="/services/hardware-design"
                className="hover:text-secondary"
              >
                Hardware Designing And Prototyping
              </a>
              <a
                href="/services/software-development"
                className="hover:text-secondary"
              >
                Software Development And Integration
              </a>
              <a
                href="/services/testing-quality"
                className="hover:text-secondary"
              >
                Testing And Quality Assurance
              </a>
              <a href="/services/deployment" className="hover:text-secondary">
                Deployment And Scalability
              </a>
              <a
                href="/services/digital-marketing"
                className="hover:text-secondary"
              >
                Digital Marketing
              </a>
            </FlexContent>
          </div>
          <FlexContent normal>
            <div>
              <SubHeading whiteText>Connect</SubHeading>
              <FlexBox contact>
                <Icons contact>
                  <div className="bg-secondary rounded-full p-2">
                    <MdLocationPin className="text-sm text-white" />
                  </div>
                </Icons>
                <div>
                  <Paragraph contact>
                    #17 Sanhasa Square, A2, IInd Floor,
                  </Paragraph>
                  <Paragraph contact>
                    Bharathi Park, 3rd Cross, Saibaba Colony,
                  </Paragraph>
                  <Paragraph contact>Coimbatore.Tamil Nadu 641043. </Paragraph>
                </div>
              </FlexBox>
              <div>
                <FlexBox contact>
                  <div className="bg-secondary rounded-full p-2">
                    <FaPhoneAlt className="text-xs" />
                  </div>
                  096000 43335
                </FlexBox>
                <FlexBox contact>
                  <div className="bg-secondary rounded-full p-2">
                    <MdEmail className="text-xs" />
                  </div>
                  info@praxio.in
                </FlexBox>
              </div>
            </div>
          </FlexContent>
        </FlexBox>
      </div>
      <hr />
      <Paragraph copyText>Copyright © {currentYear} Praxio</Paragraph>
    </footer>
  );
}
