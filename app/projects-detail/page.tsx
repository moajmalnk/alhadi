import { seoHead } from "@/lib/seo/seoHead";

export const metadata = seoHead({
  title: "Project Detail",
  description:
    "Project case study from Al Hadi Business Services — business setup and consulting outcomes for clients in Dubai, UAE.",
  path: "/projects-detail",
});

export default function ProjectsDetail() {
  return (
    <>


  

  {/*  Page Wrapper */}
  <div className="page-wrapper overflow-hidden">

    {/*  Banner Section */}
    <section className="banner-section banner-inner-section position-relative overflow-hidden d-flex align-items-end"
      style={{ backgroundImage: 'url(/assets/images/backgrounds/projects-detail-banner.jpg)' }}>
      <div className="container">
        <div className="d-flex flex-column gap-4 pb-5 pb-xl-10 position-relative z-1">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="d-flex align-items-center gap-4" data-aos="fade-up" data-aos-delay="100"
                data-aos-duration="1000">
                <img src="/assets/images/svgs/primary-leaf.svg" alt="" className="img-fluid animate-spin" />
                <p className="mb-0 text-white fs-5 text-opacity-70">A <span className="text-primary">showcase of
                    creativity</span>, strategy, and results explore the projects that define us.</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-end gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h1 className="mb-0 fs-16 text-white lh-1">BioTrack LIMS</h1>
            <a href="javascript:void(0)" className="p-1 ps-7 bg-primary rounded-pill">
              <span className="bg-white round-52 rounded-circle d-flex align-items-center justify-content-center">
                <iconify-icon icon="lucide:arrow-up-right" className="fs-8 text-dark"></iconify-icon>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/*  Project Detail Section */}
    <section className="project-detail py-5 py-lg-11 py-xl-12">
      <div className="container">
        <div className="d-flex flex-column gap-5 gap-xl-11">
          <div className="d-flex flex-column gap-8">
            <a href="/projects" className="btn py-2 ps-3 pe-5" data-aos="fade-up" data-aos-delay="100"
              data-aos-duration="1000">
              <span className="btn-text pe-1">Back</span>
              <iconify-icon icon="lucide:arrow-up-right"
                className="btn-icon bg-white text-dark round-36 rounded-circle hstack justify-content-center fs-5 shadow-sm"></iconify-icon>
            </a>
            <div className="d-md-flex align-items-center gap-4 gap-lg-8" data-aos="fade-up" data-aos-delay="200"
              data-aos-duration="1000">
              <div className="d-flex flex-column gap-2 py-2 pe-4 pe-lg-8 border-end">
                <p className="mb-0">Scope of work</p>
                <p className="mb-0 text-dark fs-5 fw-medium">Brand identity, Digital design</p>
              </div>
              <div className="d-flex flex-column gap-2 py-2 pe-4 pe-lg-8 border-end">
                <p className="mb-0">Industry</p>
                <p className="mb-0 text-dark fs-5 fw-medium">Bags</p>
              </div>
              <div className="d-flex flex-column gap-2 py-2 pe-4 pe-lg-8 border-end">
                <p className="mb-0">Raised</p>
                <p className="mb-0 text-dark fs-5 fw-medium">$1.1M</p>
              </div>
              <div className="d-flex flex-column gap-2 py-2">
                <p className="mb-0">Website</p>
                <p className="mb-0 text-dark fs-5 fw-medium">www.studiova.com</p>
              </div>
            </div>
          </div>
          <div className="row gap-4 gap-lg-0">
            <div className="col-lg-4">
              <h2 className="fs-13 mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Description
              </h2>
            </div>
            <div className="col-lg-8">
              <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <p className="fs-5 mb-6">
                  exploring the world of handbags reveals a diverse array of blogs catering to various styles, trends,
                  and fashion insights. Here are some notable handbag blogs you might find engaging:
                </p>
                <h4>1. PurseBlog</h4>
                <p className="fs-5 mb-6">
                  PurseBlog offers daily editorial content focusing on designer handbag news, reviews, and features.
                  They cover the latest collections from both luxury and contemporary designers, providing readers with
                  in-depth analyses and insights into the handbag industry.
                </p>
                <h4>2. The MyBag Blog</h4>
                <p className="fs-5 mb-0">
                  The MyBag Blog is a hub for designer handbag inspiration, trends, and style guides. Packed with the
                  latest trends, blogger styles, and, of course, handbags, it serves as a valuable resource for fashion
                  enthusiasts seeking to stay updated on current styles.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-7" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <img src="/assets/images/portfolio/portfolio-img-4.jpg" alt="services" className="w-100 object-fit-cover" />
            </div>
            <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <img src="/assets/images/portfolio/portfolio-img-2.jpg" alt="services" className="w-100 object-fit-cover" />
            </div>
            <div className="col-lg-6 mb-7" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <img src="/assets/images/portfolio/portfolio-img-3.jpg" alt="services" className="w-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

  

  


  
  
  
  
  
  {/* solar icons */}
  

    </>
  );
}
