import { SecondaryButton } from "../common/Button";
import { useEffect, useState } from "react";

const contents = [
  {
    words: "Have a project in mind?",
    BtnName: "Let's Discuss",
  },
  {
    words: "Excited about a new project?",
    BtnName: "Let's Start",
  },
  {
    words: "Ready to take the next step?",
    BtnName: "Contact Us",
  },
  {
    words: "Have a question or idea?",
    BtnName: "Let's Talk",
  },
];

export default function CenteredBoxWithButton() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-7/12 xl:w-5/12 w-full h-auto py-2 bg-primary mx-auto my-12 rounded-md">
      <div className=" xl:p-6 p-4">
        <p className="text-white font-bold xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center">
          {contents[currentContentIndex].words}
        </p>
        <div className="lg:mt-5 flex justify-center">
          <a href={"/contact"}>
            <SecondaryButton
              text={`${contents[currentContentIndex].BtnName}`}
            ></SecondaryButton>
          </a>
        </div>
      </div>
    </div>
  );
}
