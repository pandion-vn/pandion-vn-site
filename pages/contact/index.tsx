import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';

const Contact = () => {
  const breadcrumbs = [
    {
      name: 'Pandion',
      path: '/',
      active: false,
    },
    {
      name: 'Liên Hệ',
      path: '/contact',
      active: true,
    },    
  ];

  return (
    <Layout>
      <Heading title='Liên Hệ' breadcrumbs={breadcrumbs} />

      <section className="section pt-5 mt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:EktI4bq7bSA2IE5nw7QgVGjhu51pIE5oaeG7h20sIFF14bqtbiAzLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0iLiosChQKEgnLwLhIMC91MRGMjQ5D8CZU-hIUChIJJZQWJdYudTERtWNeFmhQXXc&key=AIzaSyDE5Sd06B5ODnnF_drsYpohDXjXkNnFYvE"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1">
              <div className="card custom-form rounded border-0 shadow p-4">
                <form method="post" name="myForm">
                  <p id="error-msg" className="mb-0"></p>
                  <div id="simple-msg"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Tên <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="user"
                            className="fea icon-sm icons"
                          ></i>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control ps-5"
                            placeholder="Tên: ......"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="mail"
                            className="fea icon-sm icons"
                          ></i>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control ps-5"
                            placeholder="Email: ......"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Tiêu đề</label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="book"
                            className="fea icon-sm icons"
                          ></i>
                          <input
                            name="subject"
                            id="subject"
                            className="form-control ps-5"
                            placeholder="......"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Nội dung <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon position-relative">
                          <i
                            data-feather="message-circle"
                            className="fea icon-sm icons clearfix"
                          ></i>
                          <textarea
                            name="comments"
                            id="comments"
                            rows={4}
                            className="form-control ps-5"
                            placeholder="......"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Gửi Ngay
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 order-1 order-md-2">
              <div className="title-heading ms-lg-4">
                <h4 className="mb-4">Chi tiết liên hệ</h4>
                <p className="text-muted">
                  Hãy liên hệ với{' '}
                  <span className="text-primary fw-bold">Pandion</span> ngay để
                  mọi vấn đề của bạn được đơn giản hơn. Chúng tôi đang chờ yêu cầu từ bạn.
                </p>
                <div className="d-flex contact-detail align-items-center mt-3">
                  <div className="icon">
                    <i
                      data-feather="mail"
                      className="fea icon-m-md text-dark me-3"
                    ></i>
                  </div>
                  <div className="flex-1 content">
                    <h6 className="title fw-bold mb-0">Email:</h6>
                    <a
                      href="mailto:info@pandion.vn"
                      className="text-primary"
                    >
                      info@pandion.vn
                    </a>
                  </div>
                </div>

                <div className="d-flex contact-detail align-items-center mt-3">
                  <div className="icon">
                    <i
                      data-feather="phone"
                      className="fea icon-m-md text-dark me-3"
                    ></i>
                  </div>
                  <div className="flex-1 content">
                    <h6 className="title fw-bold mb-0">SDT:</h6>
                    <a href="tel:+84 918 445 541" className="text-primary">
                      +84 918 445 541
                    </a>
                  </div>
                </div>

                <div className="d-flex contact-detail align-items-center mt-3">
                  <div className="icon">
                    <i
                      data-feather="map-pin"
                      className="fea icon-m-md text-dark me-3"
                    ></i>
                  </div>
                  <div className="flex-1 content">
                    <h6 className="title fw-bold mb-0">Địa Chỉ:</h6>
                    <a
                      href="https://www.google.com/maps/place/6G1+Ng%C3%B4+Th%E1%BB%9Di+Nhi%E1%BB%87m,+Ph%C6%B0%E1%BB%9Dng+7,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vietnam/@10.781423,106.6902954,17.24z/data=!4m5!3m4!1s0x31752f304ee8a89b:0x4a61039e00aef5b7!8m2!3d10.781071!4d106.690039"
                      data-type="iframe"
                      className="video-play-icon text-primary lightbox"
                    >
                      6G1 Ngô Thời Nhiệm, P. Võ Thị Sáu, Quận 3, TP. HCMC
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
