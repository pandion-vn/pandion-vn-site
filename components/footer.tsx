import Link from 'next/link';
import { FiFacebook, FiLinkedin, FiChevronRight, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
              <Link href="/" className="logo-footer">
                <img src="/images/pandion-logo-light.svg" height="65" alt="" />
              </Link>
              <p className="mt-4">Pandion sẵn sàng lắng nghe những khó khăn và sẽ cùng bạn giải quyết mọi vấn đề một cách tối ưu.</p>
              <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                <li className="list-inline-item"><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social" /></Link></li>
                <li className="list-inline-item"><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social" /></Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">Danh mục</h5>
              <ul className="list-unstyled footer-list mt-4">
                <li><Link href="/about_us" className="text-foot"><FiChevronRight className="uil uil-angle-right-b me-1" /> Về chúng tôi</Link></li>
                <li><Link href="/contact" className="text-foot"><FiChevronRight className="uil uil-angle-right-b me-1" /> Liên hệ</Link></li>
                <li><Link href="/portfolio" className="text-foot"><FiChevronRight className="uil uil-angle-right-b me-1" /> Portfolio</Link></li>
                <li><Link href="/blog" className="text-foot"><FiChevronRight className="uil uil-angle-right-b me-1" /> Bài viết</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">Khác</h5>
              <ul className="list-unstyled footer-list mt-4">
                <li><Link href="#" className="text-foot"><FiChevronRight className="uil uil-angle-right-b me-1" /> Điều khoản dịch vụ</Link></li>
                <li><Link href="#" className="text-foot"><FiChevronRight className="uil uil-angle-right-b me-1" /> Chính sách bảo mật</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h5 className="text-light footer-head">Đăng ký ngay</h5>
              <p className="mt-4">Hãy đăng ký và nhận các thông báo mới nhất qua email.</p>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="foot-subscribe mb-3">
                      <label className="form-label">Nhập email <span className="text-danger">*</span></label>
                      <div className="form-icon position-relative">
                        <FiMail className="fea icon-sm icons" />
                        <input type="email" name="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Email : " required />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-grid">
                      <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" defaultValue="Subscribe" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </footer>

      {/* Footer End */}
      <footer className="footer footer-bar">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="text-sm-start">
                <p className="mb-0">©  Pandion. Made with <i className="mdi mdi-heart text-danger" /> in <a className="text-reset">HCM City</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to top */}
      <Link href="#" id="back-to-top" className="btn btn-icon btn-primary back-to-top"><FiArrowUp className="icons" /></Link>
    </>
  );
};

export default Footer;
