"use client";

import { useEffect } from "react";

type RouteScrollerProps = {
  section: string;
};

export function RouteScroller({ section }: RouteScrollerProps) {
  useEffect(() => {
    const target = document.getElementById(section);
    if (!target) return;

    const timeout = window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [section]);

  return null;
}
