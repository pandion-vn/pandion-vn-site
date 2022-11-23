import BlurImage from "../widgets/blur_image";

const HomeCollaborate = () => {
  const items = [
    {
      icon: <i className="uil uil-capture"></i>,
      item: 'Find Better Leads',
    },
    {
      icon: <i className="uil uil-file"></i>,
      item: 'Set Instant Metting',
    },
    {
      icon: <i className="uil uil-credit-card-search"></i>,
      item: 'Get Paid Seemlessly',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <BlurImage
              src={'/assets/images/online/ab01.jpg'}
              alt={'ab01'}
              className="img-fluid rounded-md shadow-lg"
              layout="fill"
            />
          </div>

          <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div className="section-title text-md-start text-center">
              <h4 className="title mb-4">Hợp tác ở mọi lúc mọi nơi</h4>
              <p className="text-muted mb-0 para-desc">
                Start working with Pandion that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>

              {items.map((item, index) => {
                return (
                  <div key={index} className="d-flex align-items-center text-start mt-4 pt-2">
                    <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <a href="#" className="text-dark h6">
                        {item.item}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title mb-4">
                See everything about your employee at one place.
              </h4>
              <p className="text-muted para-desc mx-auto mb-0">
                Start working with Pandion that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>

              <div className="mt-4">
                <a
                  href="#"
                  className="btn btn-primary mt-2 me-2"
                >
                  Get Started Now
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary mt-2"
                >
                  Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCollaborate;
