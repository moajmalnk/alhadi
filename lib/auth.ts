import { cookies } from "next/headers";
import {
  DASHBOARD_SESSION_COOKIE,
  DASHBOARD_SESSION_VALUE,
} from "@/lib/auth-constants";

export {
  DASHBOARD_SESSION_COOKIE,
  DASHBOARD_SESSION_VALUE,
} from "@/lib/auth-constants";

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(DASHBOARD_SESSION_COOKIE)?.value === DASHBOARD_SESSION_VALUE;
}
