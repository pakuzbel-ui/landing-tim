import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

type WavingFlagProps = {
  flag: string;
  className?: string;
  delay?: number;
};

const FLAG_SLICES = 5;

export function WavingFlag({ flag, className, delay = 0 }: WavingFlagProps) {
  return (
    <span className={cn("flag-wave", className)} aria-hidden="true">
      {Array.from({ length: FLAG_SLICES }, (_, index) => {
        const sliceWidth = 100 / FLAG_SLICES;
        const left = index * sliceWidth;
        const right = 100 - (index + 1) * sliceWidth;
        const waveHeight = 0.25 + index * 0.14;

        return (
          <span
            key={index}
            className="flag-wave__slice"
            style={
              {
                clipPath: `inset(0 ${right}% 0 ${left}%)`,
                animationDelay: `${delay - index * 0.1}s`,
                "--flag-wave-down": `${waveHeight}px`,
                "--flag-wave-up": `${-waveHeight}px`,
              } as CSSProperties
            }
          >
            {flag}
          </span>
        );
      })}
    </span>
  );
}
