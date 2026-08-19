type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-none text-left">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-copy sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-5xl text-base leading-7 text-copy-muted sm:text-lg">{description}</p>
    </div>
  );
}
