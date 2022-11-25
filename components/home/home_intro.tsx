import useTrans from '../../hooks/useTrans';
import { FiPlay } from 'react-icons/fi';

const HomeIntro = () => {
  const trans = useTrans();

  return (
    <section
      className="section bg-cta"
      data-jarallax='{"speed": 0.5}'
      style={{ background: "url('images/finance/cta.jpg') center center" }}
      id="cta"
    >
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section-title">
              <h4 className="title title-dark text-white mb-4">
                {trans.home.introTitle}
              </h4>
              <p className="text-light para-dark para-desc mx-auto">
                {trans.home.introDesc}
              </p>
              <a
                href="#!"
                data-type="youtube"
                data-id="yba7hPeTSjk"
                className="play-btn mt-2 lightbox"
              >
                <i className="fea icon-ex-md text-white title-dark">
                  <FiPlay />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
