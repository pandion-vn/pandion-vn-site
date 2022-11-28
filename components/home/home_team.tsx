import useTrans from '../../hooks/useTrans';
import {
  FiEdit,
  FiCodepen,
  FiClipboard,
  FiFeather,
  FiHeart,
  FiSend,
} from 'react-icons/fi';

const HomeTeams = () => {
  const trans = useTrans();

  return (
    <section className="section">
      <div className="container">
        {/* Work Process */}
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
              <h6 className="text-primary">{trans.home.teamH6}</h6>
              <h4 className="title mb-4">{trans.home.teamH4}</h4>
              <p className="text-muted para-desc mx-auto mb-0">
                {trans.home.teamP}{' '}
                <span className="text-primary fw-bold">
                  {trans.home.teamSpanBold}
                </span>
                {trans.home.teamSpan}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mt-4 pt-2">
            <div className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <i className="uil d-block rounded h3 mb-0">
                  <FiEdit />
                </i>
              </div>

              <div className="card-body">
                <h5 className="text-dark">{trans.home.teamTitleCard1}</h5>
                <p className="text-muted mb-0">{trans.home.teamContentCard1}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
            <div className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <i className="uil d-block rounded h3 mb-0">
                  <FiCodepen />
                </i>
              </div>

              <div className="card-body">
                <h5 className="text-dark">{trans.home.teamTitleCard2}</h5>
                <p className="text-muted mb-0">{trans.home.teamConentCard2}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
            <div className="card features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <i className="uil d-block rounded h3 mb-0">
                  <FiClipboard />
                </i>
              </div>

              <div className="card-body">
                <h5 className="text-dark">{trans.home.teamTitleCard3}</h5>
                <p className="text-muted mb-0">{trans.home.teamContentCard3}</p>
              </div>
            </div>
          </div>
        </div>

        {/* C-Suite */}
        <div className="row align-items-center mt-100 mt-60">
          <div className="col-lg-6 col-md-6">
            <div className="row align-items-center">
              <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                  <div className="card-body p-0">
                    <img
                      src="/images/teams/founder.png"
                      className="img-fluid"
                      alt="work-image"
                    />
                    <div className="overlay-work bg-dark"></div>
                    <div className="content">
                      <a className="title text-white d-block fw-bold">
                        Founder
                      </a>
                      <small className="text-light">Ai B. Chung, Ph.D.</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                      <div className="card-body p-0">
                        <img
                          src="/images/teams/ceo.jpg"
                          className="img-fluid"
                          alt="work-image"
                        />
                        <div className="overlay-work bg-dark"></div>
                        <div className="content">
                          <a className="title text-white d-block fw-bold">
                            Co-Founder / CEO
                          </a>
                          <small className="text-light">
                            Nghia H. Chung, SE.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                      <div className="card-body p-0">
                        <img
                          src="/images/teams/cto.jpeg"
                          className="img-fluid"
                          alt="work-image"
                        />
                        <div className="overlay-work bg-dark"></div>
                        <div className="content">
                          <a className="title text-white d-block fw-bold">
                            CTO
                          </a>
                          <small className="text-light">
                            Huy T. Nguyen, SE.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
            <div className="ms-lg-4">
              <div className="section-title">
                <h6 className="badge bg-soft-primary rounded-pill fw-bold">
                  C-Suite
                </h6>
                <h4 className="title mb-4 mt-3">
                  {trans.home.teamCSuiteIntro}
                </h4>
                <p className="text-muted para-desc">
                  {trans.home.teamCSuiteDesc}
                </p>
              </div>

              <div className="d-flex mt-4 pt-2">
                <FiSend className="uil uil-create-dashboard h5 text-primary" />
                <div className="flex-1 ms-2">
                  <h6>Làm hết mình - Chơi hết sức​.</h6>
                  {/* <p className="mb-0 text-muted">
                    It is advantageous when the dummy text is relatively
                    realistic so that the layout impression
                  </p> */}
                </div>
              </div>

              <div className="d-flex mt-4 pt-2">
                <FiHeart className="uil uil-create-dashboard h5 text-primary" />
                <div className="flex-1 ms-2">
                  <h6>Tất cả vì giá trị mang lại​.</h6>
                  {/* <p className="mb-0 text-muted">
                    It is advantageous when the dummy text is relatively
                    realistic so that the layout impression
                  </p> */}
                </div>
              </div>

              <div className="d-flex mt-4 pt-2">
                <FiFeather className="uil uil-bullseye h5 text-primary" />
                <div className="flex-1 ms-2">
                  <h6>Năng lượng sạch là chìa khóa phát triển.​</h6>
                  {/* <p className="mb-0 text-muted">
                    It is advantageous when the dummy text is relatively
                    realistic so that the layout impression
                  </p> */}
                </div>
              </div>

              {/* <div className="mt-4 pt-2">
                <a
                  href="https://1.envato.market/4n73n"
                  target="_blank"
                  className="btn btn-primary m-1"
                >
                  Read More{' '}
                  <i className="uil uil-angle-right-b align-middle"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTeams;
