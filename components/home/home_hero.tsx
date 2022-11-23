import BlurImage from '../widgets/blur_image';

const HomeHero = () => {
  return (
    <div>
      <section className="bg-half-260 pb-lg-0 pb-md-4 bg-primary d-table w-100">
        <div className="bg-overlay bg-black" style={{ opacity: 0.8 }}></div>
        <div className="container">
          <div className="row position-relative" style={{ zIndex: 1 }}>
            <div className="col-md-7 col-12 mt-lg-5">
              <div className="title-heading">
                <h1 className="heading text-white title-dark mb-4">
                  Tạo dựng những giá trị tốt nhất cho khách hàng
                </h1>
                <p className="para-desc text-white-50">
                  We are a company of highly trained professionals that help
                  small and medium size businesses with their IT needs.
                </p>
                <div className="mt-4 pt-2">
                  <a href="/portfolio" className="btn btn-primary m-1">
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="shape-before">
                <div className="carousel-cell">
                  <BlurImage
                    src={'/assets/images/landing/2.jpg'}
                    alt={'landing-2'}
                    className="img-fluid rounded-md"
                    layout="fill"
                  />
                </div>
                <BlurImage
                  src={'/assets/images/shapes/shape1.png'}
                  alt={'shape1'}
                  className="img-fluid shape-img"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M720 125L2160 0H2880V250H0V125H720Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
