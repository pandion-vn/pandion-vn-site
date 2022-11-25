import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import {
  FiLayers,
  FiHardDrive,
  FiBarChart2,
  FiPackage,
  FiCast,
  FiZap,
} from 'react-icons/fi';

const AboutUs = () => {
  const breadcrumbs = [
    {
      name: 'Pandion',
      path: '/',
      active: false,
    },
    {
      name: 'Về Chúng Tôi',
      path: '/about_us',
      active: true,
    },    
  ];

  return (
    <Layout>
      <Heading title='Về Chúng Tôi' breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="position-relative">
                <img
                  src="/images/company/about.jpg"
                  className="rounded img-fluid mx-auto d-block"
                  alt=""
                />
                <div className="play-icon">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="play-btn lightbox"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="section-title ms-lg-4">
                <h4 className="title mb-4">Lịch Sử  Hình Thành</h4>
                <p className="text-muted">
                  <span className="text-primary fw-bold">Pandion</span> được thành lập
                  vào năm 2020 với tiền thân là Công ty 66. Với những con người tài năng và
                  nhiệt huyết chúng tôi áp dụng Công Nghệ để giúp ích cho Đời Sống và
                  có tác động tích cực cho Xã Hội. Với ý tưởng đưa Trí Tuệ Nhân Tạo
                  & Chuyển Đổi Số vào những nền tảng như Bất Động Sản, Sức Khỏe, Xây Dựng, Nông Trại & Thủy Sản 4.0.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Những điểm mạnh</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Khó khăn không nằm trong từ điển của{' '}
                  <span className="text-primary fw-bold">Pandion</span> vì chúng tôi luôn
                  cố gắng nỗ lực từng ngày để có thể mang lại những giá trị tốt nhất cho Khách Hàng và Cộng Đồng.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiLayers
                    className="fea icon-ex-md text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Full-Stack Development</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiPackage
                    className="fea icon-ex-md text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">DevOps</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiBarChart2
                    className="fea icon-ex-md text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Data Analysis</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiHardDrive
                    className="fea icon-ex-md text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">Design System</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiCast
                    className="fea icon-ex-md text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">IT Management</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="d-flex key-feature align-items-center p-3 rounded shadow">
                <div className="icon text-center rounded-circle me-3">
                  <FiZap
                    className="fea icon-ex-md text-primary"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="title mb-0">AI & IoT</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Our Greatest Minds</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="/images/client/01.jpg"
                      className="img-fluid avatar avatar-ex-large rounded-circle"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="facebook"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="instagram"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="twitter"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="linkedin"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <a href="#" className="name text-dark">
                        Ronny Jofra
                      </a>
                    </h5>
                    <small className="designation text-muted">C.E.O</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="/images/client/04.jpg"
                      className="img-fluid avatar avatar-ex-large rounded-circle"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="facebook"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="instagram"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="twitter"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="linkedin"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <a href="#" className="name text-dark">
                        Micheal Carlo
                      </a>
                    </h5>
                    <small className="designation text-muted">Director</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="/images/client/02.jpg"
                      className="img-fluid avatar avatar-ex-large rounded-circle"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="facebook"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="instagram"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="twitter"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="linkedin"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <a href="#" className="name text-dark">
                        Aliana Rosy
                      </a>
                    </h5>
                    <small className="designation text-muted">Manager</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 pt-2">
              <div className="card team text-center bg-transparent border-0">
                <div className="card-body p-0">
                  <div className="position-relative">
                    <img
                      src="/images/client/03.jpg"
                      className="img-fluid avatar avatar-ex-large rounded-circle"
                      alt=""
                    />
                    <ul className="list-unstyled social-icon team-icon mb-0 mt-4">
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="facebook"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="instagram"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="twitter"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="rounded">
                          <i
                            data-feather="linkedin"
                            className="fea icon-sm fea-social"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="content pt-3 pb-3">
                    <h5 className="mb-0">
                      <a href="#" className="name text-dark">
                        Sofia Razaq
                      </a>
                    </h5>
                    <small className="designation text-muted">Developer</small>
                  </div>
                </div>
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
                <p className="text-muted para-desc mx-auto">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Landrick</span> that
                  can provide everything you need to generate awareness, drive
                  traffic, connect.
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
      </section> */}
    </Layout>
  );
};

export default AboutUs;
