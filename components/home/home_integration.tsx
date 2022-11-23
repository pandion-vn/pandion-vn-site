import Link from 'next/link';
import BlurImage from '../widgets/blur_image';

const HomeIntegration = () => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div
              className="video-solution-cta position-relative"
              style={{ zIndex: 1 }}
            >
              <div className="position-relative">
                <BlurImage
                  src={'/assets/images/integration/hero.png'}
                  alt={'hero'}
                  className="img-fluid"
                  layout="fill"
                />
                <div className="play-icon">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="play-btn lightbox"
                  >
                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                  </a>
                </div>
              </div>
              <div className="content mt-md-4 pt-md-2">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-center">
                    <div className="row align-items-center">
                      <div className="col-md-6 mt-4 pt-2">
                        <div className="section-title text-md-start">
                          <h6 className="text-white-50">
                            Yêu cầu từ khách hàng
                          </h6>
                          <h4 className="title text-white mb-0 title-dark">
                            Truy cập mọi thông tin từ một điểm
                          </h4>
                        </div>
                      </div>

                      <div className="col-md-6 col-12 mt-4 pt-md-2">
                        <div className="section-title text-md-start">
                          <p className="text-white-50 para-desc">
                            Start working with{' '}
                            <span className="text-light title-dark">
                              Pandion
                            </span>{' '}
                            that can provide everything you need to generate
                            awareness, drive traffic, connect.
                          </p>
                          <Link href="#" className="text-light title-dark">
                            Thêm
                            <i
                              data-feather="arrow-right"
                              className="fea icon-sm"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-posts-placeholder bg-primary bg-gradient" />
      </div>
    </section>
  );
};

export default HomeIntegration;
