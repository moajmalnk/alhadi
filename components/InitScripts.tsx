"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InitScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Wait a brief moment to ensure the new page DOM is fully mounted
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined" && (window as any).initStudiova) {
        (window as any).initStudiova();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
