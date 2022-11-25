import Link from "next/link";

const FourOhFour = () => {
  return (
    <section className="bg-home d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 text-center">
            <img src="/images/404.svg" className="img-fluid" alt="" />
            <div className="text-uppercase mt-4 display-3">Không tìm thấy yêu cầu !</div>
            {/* <div className="text-capitalize text-dark mb-4 error-page">
              Không tìm thấy yêu cầu
            </div> */}
            {/* <p className="text-muted para-desc mx-auto">
              Start working with{' '}
              <span className="text-primary fw-bold">Landrick</span> that can
              provide everything you need to generate awareness, drive traffic,
              connect.
            </p> */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            {/* <a href="index.html" className="btn btn-outline-primary mt-4">
              Go Back
            </a> */}
            <Link href="/" className="btn btn-primary mt-4 ms-2">
              Về Trang Chủ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourOhFour;
