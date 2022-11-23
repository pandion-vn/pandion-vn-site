import BlurImage from './blur_image';

const PartnersWidget = () => {
  const partners = [
    {
      title: 'acons',
      imgPath: '/assets/images/partner/acons.svg',
    },
    {
      title: 'farmacia',
      imgPath: '/assets/images/partner/farmacia.svg',
    },
    {
      title: 'nhadatzen',
      imgPath: '/assets/images/partner/nhadatzen.svg',
    },
    {
      title: 'printme',
      imgPath: '/assets/images/partner/printme1.svg',
    },
    {
      title: 'udrivevn',
      imgPath: '/assets/images/partner/udrivevn.svg',
    },
    {
      title: 'zitavn',
      imgPath: '/assets/images/partner/zitavn.svg',
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {partners.map((partner, index) => {
          return (
            <div key={index} className="col-lg-2 col-md-2 col-6 text-center py-2">
              <BlurImage
                src={partner.imgPath}
                alt={partner.title}
                className="avatar avatar-large-wide"
                layout="fill"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersWidget;
