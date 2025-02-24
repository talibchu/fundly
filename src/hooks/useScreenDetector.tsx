"use client";
import { useLayoutEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width <= 768;
  const isDesktop = width > 1024;

  return { isMobile, isDesktop };
};
