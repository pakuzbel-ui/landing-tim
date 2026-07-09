type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <div className="mb-4 inline-flex rounded-md border border-primary/25 bg-primary/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary [clip-path:polygon(0_0,calc(100%-9px)_0,100%_9px,100%_100%,9px_100%,0_calc(100%-9px))]">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-copy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={align === "center" ? "mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" : "mt-5 h-px w-24 bg-gradient-to-r from-primary via-accent to-transparent"} />
      <p className="mt-5 text-base leading-7 text-copy-muted sm:text-lg">{description}</p>
    </div>
  );
}
