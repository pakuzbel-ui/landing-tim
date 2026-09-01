"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const DISPLAY_TIME = 3000;
const FADE_TIME = 180;

const loaderCoins = [
  ["2%", "-14px", "0.06s", "13px", "-12px", "0.82s"],
  ["6%", "8px", "0.12s", "18px", "10px", "0.9s"],
  ["10%", "-5px", "0.18s", "11px", "-7px", "0.76s"],
  ["14%", "12px", "0.23s", "15px", "15px", "0.86s"],
  ["18%", "-18px", "0.29s", "20px", "-13px", "0.94s"],
  ["22%", "2px", "0.34s", "12px", "8px", "0.78s"],
  ["26%", "15px", "0.39s", "17px", "14px", "0.88s"],
  ["30%", "-9px", "0.44s", "14px", "-10px", "0.82s"],
  ["34%", "9px", "0.49s", "19px", "12px", "0.92s"],
  ["38%", "-16px", "0.54s", "12px", "-8px", "0.8s"],
  ["42%", "5px", "0.59s", "16px", "11px", "0.86s"],
  ["46%", "14px", "0.64s", "10px", "-6px", "0.74s"],
  ["49%", "-11px", "0.69s", "14px", "8px", "0.78s"],
  ["52%", "10px", "1.68s", "13px", "-7px", "0.72s"],
  ["54%", "-12px", "1.76s", "14px", "-10px", "0.8s"],
  ["58%", "8px", "1.82s", "19px", "13px", "0.9s"],
  ["62%", "-4px", "1.88s", "11px", "-7px", "0.74s"],
  ["66%", "14px", "1.94s", "16px", "15px", "0.84s"],
  ["70%", "-17px", "2s", "20px", "-12px", "0.9s"],
  ["74%", "3px", "2.06s", "12px", "9px", "0.74s"],
  ["78%", "11px", "2.12s", "18px", "14px", "0.82s"],
  ["82%", "-8px", "2.18s", "13px", "-9px", "0.72s"],
  ["86%", "15px", "2.24s", "17px", "12px", "0.72s"],
  ["90%", "-15px", "2.3s", "11px", "-8px", "0.66s"],
  ["94%", "5px", "2.36s", "15px", "10px", "0.6s"],
  ["97%", "-6px", "2.42s", "10px", "-5px", "0.54s"],
] as const;

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => setClosing(true), DISPLAY_TIME - FADE_TIME);
    const removeTimer = window.setTimeout(() => setVisible(false), DISPLAY_TIME);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="site-loader"
      data-closing={closing ? "true" : "false"}
      role="status"
      aria-label="Загрузка TeamCash"
    >
      <div className="site-loader__glow" />
      <div className="site-loader__coins" aria-hidden="true">
        {loaderCoins.map(([x, y, delay, size, drift, duration], index) => (
          <span
            key={`${x}-${delay}`}
            style={
              {
                "--coin-x": x,
                "--coin-y": y,
                "--coin-delay": delay,
                "--coin-size": size,
                "--coin-drift": drift,
                "--coin-duration": duration,
                "--coin-turn": `${index % 2 === 0 ? 720 : -720}deg`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <span className="site-loader__impact" aria-hidden="true" />
      <div className="site-loader__ball-wrap" aria-hidden="true">
        <img className="site-loader__ball" src="/teamcash-loader-ball-v2.webp" alt="" />
      </div>
      <span className="site-loader__shadow" aria-hidden="true" />
    </div>
  );
}
