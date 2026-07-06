"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { login, type LoginState } from "@/app/actions/auth";

const initialState: LoginState = {};

export default function SignInForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "";
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="d-flex flex-column gap-3">
      {next ? <input type="hidden" name="next" value={next} /> : null}
      <div>
        <input
          type="email"
          name="email"
          className="form-control border-bottom"
          id="exampleInputEmail1"
          placeholder="Email"
          aria-describedby="emailHelp"
          required
          autoComplete="email"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          className="form-control border-bottom"
          id="inputPassword"
          placeholder="Password"
          required
          autoComplete="current-password"
        />
      </div>

      {state.error ? (
        <p className="mb-0 text-danger fw-medium" role="alert">
          {state.error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-dark sign-in-submit w-100 justify-content-center py-2 fw-medium my-7 fs-4 lh-lg"
      >
        {isPending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
