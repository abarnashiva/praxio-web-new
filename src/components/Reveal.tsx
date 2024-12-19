import { useEffect } from "react";

export const useReveal = () => {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const scroll = document.querySelectorAll(".scroll");
      const top = document.querySelectorAll(".backToTop");
      const features = document.querySelectorAll(".features");
      const windowHeight = window.innerHeight;

      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          top[i]?.classList.add("hide");
          scroll[i]?.classList.add("hide");
        } else {
          reveals[i].classList.remove("active");
          top[i]?.classList.remove("hide");
          scroll[i]?.classList.remove("hide");
        }
      }

      for (let j = 0; j < features.length; j++) {
        const elementTop = features[j].getBoundingClientRect().right; // Corrected variable name
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          features[j].classList.add("active");
        } else {
          features[j].classList.remove("active");
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", reveal);

      return () => {
        window.removeEventListener("scroll", reveal);
      };
    }
  }, []);
};