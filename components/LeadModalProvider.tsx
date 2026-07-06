"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import DemoModal from "./DemoModal";
import Toast from "./Toast";

const LEAD_MODAL_COOKIE = "alhadi_lead_modal_seen";
const AUTO_SHOW_DELAY_MS = 3500;

type LeadModalContextValue = {
  openLeadModal: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

function hasSeenLeadModal(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie
    .split("; ")
    .some((row) => row.startsWith(`${LEAD_MODAL_COOKIE}=`));
}

function markLeadModalSeen(): void {
  // Long-lived cookie; only cleared when the user clears cookies.
  const maxAge = 60 * 60 * 24 * 365 * 10;
  document.cookie = `${LEAD_MODAL_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function useLeadModal(): LeadModalContextValue {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within LeadModalProvider");
  }
  return context;
}

export default function LeadModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const dismissLeadModal = useCallback(() => {
    markLeadModalSeen();
    setIsOpen(false);
  }, []);

  const openLeadModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSuccess = useCallback(() => {
    markLeadModalSeen();
    setToastVisible(true);
  }, []);

  useEffect(() => {
    if (hasSeenLeadModal()) return;

    const timer = window.setTimeout(() => {
      if (hasSeenLeadModal()) return;
      markLeadModalSeen();
      setIsOpen(true);
    }, AUTO_SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <LeadModalContext.Provider value={{ openLeadModal }}>
      {children}
      <DemoModal
        isOpen={isOpen}
        onClose={dismissLeadModal}
        onSuccess={handleSuccess}
      />
      <Toast
        isVisible={toastVisible}
        message="Consultation booked successfully!"
        onClose={() => setToastVisible(false)}
      />
    </LeadModalContext.Provider>
  );
}
