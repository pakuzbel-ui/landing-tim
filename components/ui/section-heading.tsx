type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  mobileAlign?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  mobileAlign = "left",
}: SectionHeadingProps) {
  return (
    <div className={mobileAlign === "center" ? "mx-auto max-w-xl text-center sm:mx-0 sm:max-w-none sm:text-left" : "max-w-none text-left"}>
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-copy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className={mobileAlign === "center" ? "mx-auto mt-4 max-w-lg text-base leading-7 text-copy-muted sm:mx-0 sm:max-w-5xl sm:text-lg" : "mt-4 max-w-5xl text-base leading-7 text-copy-muted sm:text-lg"}>
        {description}
      </p>
    </div>
  );
}
