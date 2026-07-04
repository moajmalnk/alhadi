
export default function Custom404() {
  return (
    <>


  {/*  Page Wrapper */}
  <div className="page-wrapper overflow-hidden">

    {/*  Get in touch Section */}
    <section
      className="bg-light-gray border-top border-primary border-4 d-flex align-items-center justify-content-center min-vh-100">
      <div className="container py-3">
        <div className="d-flex flex-column justify-content-center gap-8">
          <img src="/assets/images/backgrounds/404.svg" alt="404" width="550" className="img-fluid mx-auto"
            data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" />
          <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Oops! Page Not
            Found</h2>
          <a href="/" className="btn mx-auto" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            <span className="btn-text">Back to Home</span>
            <iconify-icon icon="lucide:arrow-up-right"
              className="btn-icon bg-white text-dark round-52 rounded-circle hstack justify-content-center fs-7 shadow-sm"></iconify-icon>
          </a>
        </div>
      </div>
    </section>

  </div>

  


  
  
  
  
  
  {/* solar icons */}
  

    </>
  );
}
