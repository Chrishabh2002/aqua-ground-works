import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    // Check for elements already in view on initial load
    const checkInitialElements = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInView) {
          el.classList.add("revealed");
        }
      });
    };

    // Small delay to ensure DOM is ready
    setTimeout(checkInitialElements, 100);

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useScrollReveal;