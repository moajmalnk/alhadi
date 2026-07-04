import { logout } from "@/app/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="btn btn-outline-dark btn-sm fw-medium px-3"
      >
        Logout
      </button>
    </form>
  );
}
