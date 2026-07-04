
export default function SignIn() {
  return (
    <>


  {/*  Page Wrapper */}
  <div className="page-wrapper overflow-hidden">

    {/*  Get in touch Section */}
    <section
      className="bg-light-gray border-top border-primary border-4 d-flex align-items-center justify-content-center min-vh-100">
      <div className="container py-3">
        <div className="sign-in card mx-auto shadow-lg">
          <div className="card-body py-8 px-lg-5">
            <a href="/" className="mb-8 hstack justify-content-center">
              <img src="/assets/images/logos/logo-dark.svg" alt="logo-dark" className="img-fluid" />
            </a>
            <div className="hstack gap-3">
              <a href="javascript:void(0)"
                className="btn btn-outline-light bg-white px-3 py-2 fs-4 text-dark w-50 fw-medium hstack gap-2 lh-lg justify-content-center">Sign
                In <img src="/assets/images/svgs/icon-google.svg" alt="google" className="img-fluid" /></a>
              <a href="javascript:void(0)"
                className="btn btn-outline-light bg-white px-3 py-2 fs-4 text-dark w-50 fw-medium hstack gap-2 lh-lg justify-content-center">Sign
                In <img src="/assets/images/svgs/icon-github.svg" alt="google" className="img-fluid" /></a>
            </div>
            <div className="position-relative hstack justify-content-center">
              <hr className="my-8 w-100 d-block" />
              <p className="mb-0 fs-3 bg-body px-3 position-absolute top-50 start-50 translate-middle">OR</p>
            </div>
            <form className="d-flex flex-column gap-3">
              <div>
                <input type="email" className="form-control border-bottom" id="exampleInputEmail1" placeholder="Email"
                  aria-describedby="emailHelp" />
              </div>
              <div>
                <input type="password" className="form-control border-bottom" id="inputPassword" placeholder="Password" />
              </div>

              <a href="/" className="btn btn-dark w-100 justify-content-center py-2 fw-medium my-7 fs-4 lh-lg">
                Sign In
              </a>
            </form>
            <a className="text-center mb-1 d-block text-dark fw-medium" href="#">Forget Password?</a>
            <p className="mb-0 fw-medium text-center">Not a member yet? <a className="text-dark" href="/sign-up">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>

  


  
  
  
  
  
  {/* solar icons */}
  

    </>
  );
}
