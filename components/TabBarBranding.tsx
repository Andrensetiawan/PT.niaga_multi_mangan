"use client";

import { useEffect } from "react";

const BASE_TITLE = "PT.Niaga Multi Pangan";

export default function TabBarBranding() {
  useEffect(() => {
    const text = `${BASE_TITLE}   `;
    let index = 0;
    let timer: number | null = null;

    const stopTick = () => {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    };

    const tick = () => {
      if (document.hidden) {
        return;
      }
      const head = text.slice(index);
      const tail = text.slice(0, index);
      document.title = `${head}${tail}`;
      index = (index + 1) % text.length;
    };

    const startTick = () => {
      stopTick();
      timer = window.setInterval(tick, 1200);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTick();
        document.title = BASE_TITLE;
        return;
      }

      tick();
      startTick();
    };

    tick();
    startTick();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTick();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = BASE_TITLE;
    };
  }, []);

  return null;
}
