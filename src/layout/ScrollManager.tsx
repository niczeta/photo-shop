import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let frameId = 0;
    let timeoutId = 0;
    let attempts = 0;
    const maxAttempts = 30;

    const scrollToHash = () => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return true;
      }

      return false;
    };

    const run = () => {
      if (hash) {
        const tryFindElement = () => {
          const found = scrollToHash();

          if (found) return;

          if (attempts < maxAttempts) {
            attempts += 1;
            timeoutId = window.setTimeout(() => {
              frameId = window.requestAnimationFrame(tryFindElement);
            }, 80);
          }
        };

        frameId = window.requestAnimationFrame(tryFindElement);
        return;
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    timeoutId = window.setTimeout(run, 60);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname, hash]);

  return null;
};