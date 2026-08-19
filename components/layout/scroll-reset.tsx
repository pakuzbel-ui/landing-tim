"use client";

import { useLayoutEffect } from "react";

export function ScrollReset() {
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    const scrollToTop = () => {
      const scrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = scrollBehavior;
    };

    scrollToTop();

    const frame = window.requestAnimationFrame(scrollToTop);
    const timeouts = [80, 240, 600].map((delay) => window.setTimeout(scrollToTop, delay));
    window.addEventListener("load", scrollToTop);
    window.addEventListener("pageshow", scrollToTop);
    window.addEventListener("beforeunload", scrollToTop);

    return () => {
      window.cancelAnimationFrame(frame);
      timeouts.forEach(window.clearTimeout);
      window.removeEventListener("load", scrollToTop);
      window.removeEventListener("pageshow", scrollToTop);
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);

  return null;
}
