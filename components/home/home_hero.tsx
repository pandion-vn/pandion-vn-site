import useTrans from '../../hooks/useTrans';

const HomeHero = () => {
  const trans = useTrans();

  return (
    <section
      className="bg-half-260 d-table w-100"
      data-jarallax='{"speed": 0.5}'
      style={{ background: "url('images/finance/bg.jpg') top" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading">
              <h4 className="text-black-50">{trans.home.heroH4}</h4>
              <h1 className="heading fw-bold mb-3">
                {trans.home.heroH1}{' '}
                <br />{trans.home.heroH1Br}
              </h1>
              <h5 className="para-desc text-muted">
                {trans.home.heroDesc}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
