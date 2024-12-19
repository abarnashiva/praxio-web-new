import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "./menu/home/homePage";
import About from "./menu/about/page";
import HardwareDesign from "./menu/services/hardware-design/page";
import SoftwareDevelopment from "./menu/services/software-development/page";
import TestingQuality from "./menu/services/testing-quality/page";
import Deployment from "./menu/services/deployment/page";
import DigitalMarketing from "./menu/services/digital-marketing/page";
import VisualIntelligence from "./menu/products/visual-intelligence/page";
import IoTDevelopment from "./menu/products/iot-development/page";
import SmartCity from "./menu/products/smart-city/page";
import RapidProto from "./menu/products/rapid-prototyping/page";
import Contact from "./menu/contact/page";

export const router = createBrowserRouter([
  {
    path: "/",
    handle: { title: "Home Page" },
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: { title: "home" },
      },
      {
        path: "/about",
        element: <About />,
        handle: { title: "about" },
      },
      {
        path: "/services/hardware-design",
        element: <HardwareDesign />,
        handle: { title: "hardware-design" },
      },
      {
        path: "/services/software-development",
        element: <SoftwareDevelopment />,
        handle: { title: "software-development" },
      },
      {
        path: "/services/testing-quality",
        element: <TestingQuality />,
        handle: { title: "testing-quality" },
      },
      {
        path: "/services/deployment",
        element: <Deployment />,
        handle: { title: "deployment" },
      },
      {
        path: "/services/digital-marketing",
        element: <DigitalMarketing />,
        handle: { title: "digital-marketing" },
      },
      {
        path: "/products/visual-intelligence",
        element: <VisualIntelligence />,
        handle: { title: "visual-intelligence" },
      },
      {
        path: "/products/iot-development",
        element: <IoTDevelopment />,
        handle: { title: "iot-development" },
      },
      {
        path: "/products/smart-city",
        element: <SmartCity />,
        handle: { title: "smart-city" },
      },
      {
        path: "/products/rapid-prototyping",
        element: <RapidProto />,
        handle: { title: "rapid-prototyping" },
      },
      {
        path: "/contact",
        element: <Contact />,
        handle: { title: "contact" },
      },
    ],
  },
]);
