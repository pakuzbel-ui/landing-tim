"use client";

import { useEffect, useState } from "react";

export function LoadingSplash() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2600);
    const hideTimer = window.setTimeout(() => setVisible(false), 3000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`loading-splash ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="loading-splash__glow" />
      <div className="loading-splash__mark">
        <svg viewBox="0 0 24 24" role="img">
          <path
            d="M8.7 9.1v5.9l-6.7 3.5A12 12 0 0 1 .1 12c0-2.4.7-4.6 1.9-6.5l6.7 3.6ZM18.8 2.2 9.6 7.1 3.3 3.7a12 12 0 0 1 2.4-2l1.3-.7A12 12 0 0 1 12 0c1.7 0 3.3.3 4.7 1l1.7.9.4.3ZM18.9 4.6 10.9 8.9v6.2l8 4.3-8-4.3V8.9l8-4.3ZM18.8 21.8a12 12 0 0 1-1 .6l-.5.3A12 12 0 0 1 12 24a12 12 0 0 1-8.6-3.7l5.3-2.8.9-.5 9.2 4.8Z"
            fill="#fede33"
          />
          <path
            d="M24 12a12 12 0 0 1-1.3 5.4l-3.8 2-8-4.3V8.9l8-4.3 3.7 2A12 12 0 0 1 24 12Z"
            fill="#fede33"
          />
        </svg>
      </div>
      <div className="loading-splash__text">TeamCash</div>
    </div>
  );
}
