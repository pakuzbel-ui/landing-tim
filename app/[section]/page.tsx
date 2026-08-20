import Home from "@/app/page";
import { RouteScroller } from "@/components/layout/route-scroller";
import { notFound } from "next/navigation";

const allowedSections = new Set(["about", "how-it-works", "benefits", "geography", "faq", "contact"]);

type SectionPageProps = {
  params: {
    section: string;
  };
};

export function generateStaticParams() {
  return Array.from(allowedSections, (section) => ({ section }));
}

export const dynamicParams = false;

export default function SectionPage({ params }: SectionPageProps) {
  if (!allowedSections.has(params.section)) {
    notFound();
  }

  const section = params.section;

  return (
    <>
      <Home />
      <RouteScroller section={section} />
    </>
  );
}
