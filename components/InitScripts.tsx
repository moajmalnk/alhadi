"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type StudiovaWindow = Window & {
  initStudiova?: () => void;
  refreshStudiovaAos?: () => void;
  studiovaAosInitialized?: boolean;
  AOS?: {
    init: (settings: { once: boolean }) => void;
    refreshHard: () => void;
  };
};

function refreshPageScripts() {
  const win = window as StudiovaWindow;

  if (win.initStudiova) {
    win.initStudiova();
    return;
  }

  if (win.refreshStudiovaAos) {
    win.refreshStudiovaAos();
    return;
  }

  if (win.AOS) {
    if (!win.studiovaAosInitialized) {
      win.AOS.init({ once: true });
      win.studiovaAosInitialized = true;
    } else {
      win.AOS.refreshHard();
    }
  }
}

export default function InitScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let retryTimer: ReturnType<typeof setTimeout> | undefined;

    const run = () => {
      if (cancelled) return;
      refreshPageScripts();
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });

    retryTimer = setTimeout(run, 350);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, [pathname]);

  return null;
}
