"use client";

import { useState, useTransition } from "react";
import { logout } from "@/app/actions/auth";
import ConfirmDialog from "@/components/ConfirmDialog";

export default function LogoutButton() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleConfirm = () => {
    startTransition(() => {
      void logout();
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark btn-sm fw-medium px-3"
        onClick={() => setConfirmOpen(true)}
      >
        Logout
      </button>

      <ConfirmDialog
        isOpen={confirmOpen}
        title="Log out?"
        message="Are you sure you want to log out of the dashboard?"
        confirmLabel="Log out"
        cancelLabel="Cancel"
        isLoading={isPending}
        onConfirm={handleConfirm}
        onCancel={() => {
          if (!isPending) setConfirmOpen(false);
        }}
      />
    </>
  );
}
