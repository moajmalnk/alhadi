"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  DASHBOARD_SESSION_COOKIE,
  DASHBOARD_SESSION_VALUE,
} from "@/lib/auth-constants";

export type LoginState = {
  error?: string;
};

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const cookieStore = await cookies();
  cookieStore.set(DASHBOARD_SESSION_COOKIE, DASHBOARD_SESSION_VALUE, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  const next = String(formData.get("next") ?? "").trim();
  const destination =
    next.startsWith("/dashboard") && !next.startsWith("//")
      ? next
      : "/dashboard";

  redirect(destination);
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(DASHBOARD_SESSION_COOKIE);
  redirect("/sign-in");
}
