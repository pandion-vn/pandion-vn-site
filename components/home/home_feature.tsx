import useTrans from '../../hooks/useTrans';
import {
  FiTrendingUp,
  FiLock,
  FiAirplay,
  FiClock,
  FiUploadCloud,
  FiPieChart,
} from 'react-icons/fi';

const HomeFeature = () => {
  const trans = useTrans();

  return (
    <section className="bg-light">
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center">
          <div className="col-xl-2 col-lg-4 col-md-4">
            <div className="card features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
              <span className="h2 icon2 text-primary">
                <FiTrendingUp className="uil uil-chart-line" />
              </span>
              <div className="card-body p-0 content">
                <h5>{trans.home.featureTitleCard1}</h5>
                <p className="para text-muted mb-0">
                  {trans.home.featureContentCard1}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-4">
            <div className="card features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
              <span className="h2 icon2 text-primary">
                <FiLock className="uil uil-airplay" />
              </span>
              <div className="card-body p-0 content">
                <h5>{trans.home.featureTitleCard2}</h5>
                <p className="para text-muted mb-0">
                  {trans.home.featureContentCard2}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-4">
            <div className="card features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
              <span className="h2 icon2 text-primary">
                <FiAirplay className="uil uil-rocket" />
              </span>
              <div className="card-body p-0 content">
                <h5>{trans.home.featureTitleCard3}</h5>
                <p className="para text-muted mb-0">
                  {trans.home.featureContentCard3}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-4">
            <div className="card features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
              <span className="h2 icon2 text-primary">
                <FiClock className="uil uil-clock" />
              </span>
              <div className="card-body p-0 content">
                <h5>{trans.home.featureTitleCard4}</h5>
                <p className="para text-muted mb-0">
                  {trans.home.featureContentCard4}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-4">
            <div className="card features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
              <span className="h2 icon2 text-primary">
                <FiUploadCloud className="uil uil-users-alt" />
              </span>
              <div className="card-body p-0 content">
                <h5>{trans.home.featureTitleCard5}</h5>
                <p className="para text-muted mb-0">
                  {trans.home.featureContentCard5}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-4 col-md-4">
            <div className="card features fea-primary text-center rounded-0 px-4 py-5 bg-light bg-gradient position-relative overflow-hidden border-0">
              <span className="h2 icon2 text-primary">
                <FiPieChart className="uil uil-search" />
              </span>
              <div className="card-body p-0 content">
                <h5>{trans.home.featureTitleCard6}</h5>
                <p className="para text-muted mb-0">
                  {trans.home.featureContentCard6}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
