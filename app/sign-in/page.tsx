import { Suspense } from "react";
import SignInForm from "@/components/SignInForm";
import { seoHead } from "@/lib/seo/seoHead";

export const metadata = seoHead({
  title: "Sign In",
  description: "Sign in to the Al Hadi Business Setup dashboard.",
  path: "/sign-in",
  noIndex: true,
});

export default function SignIn() {
  return (
    <>
      {/*  Page Wrapper */}
      <div className="page-wrapper overflow-hidden">
        {/*  Get in touch Section */}
        <section className="bg-light-gray border-top border-primary border-4 d-flex align-items-center justify-content-center min-vh-100">
          <div className="container py-3">
            <div className="sign-in card mx-auto shadow-lg">
              <div className="card-body py-8 px-lg-5">
                <a href="/" className="mb-8 hstack justify-content-center">
                  <img
                    src="/assets/images/logos/alhadi-business-logo.svg"
                    alt="Al Hadi Business Setup"
                    className="img-fluid"
                    style={{ width: "180px", filter: "brightness(0)" }}
                  />
                </a>
                <Suspense fallback={null}>
                  <SignInForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
