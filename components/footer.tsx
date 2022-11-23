import Link from 'next/link';
import BlurImage from './widgets/blur_image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <Link href="#" className="logo-footer">
              <BlurImage
                src={'/assets/images/pandion-logo-light.svg'}
                alt={'pandion-logo-light'}
                width={56}
                height={56}
              />
            </Link>
            <p className="mt-4">
              Pandion.vn cung cấp giải pháp nền tảng cho hệ thống mà khách hàng cần.
            </p>
            <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
              <li className="list-inline-item">
                <Link href="/" className="rounded">
                  <i
                    data-feather="facebook"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/" className="rounded">
                  <i
                    data-feather="instagram"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/" className="rounded">
                  <i
                    data-feather="twitter"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/" className="rounded">
                  <i
                    data-feather="linkedin"
                    className="fea icon-sm fea-social"
                  ></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 className="text-light footer-head">Company</h5>
            <ul className="list-unstyled footer-list mt-4">
              <li>
                <Link href="/about-us" className="text-foot">
                  <i className="uil uil-angle-right-b me-1"></i>About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foot">
                  <i className="uil uil-angle-right-b me-1"></i>Contact
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foot">
                  <i className="uil uil-angle-right-b me-1"></i>Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foot">
                  <i className="uil uil-angle-right-b me-1"></i>Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 className="text-light footer-head">Khác</h5>
            <ul className="list-unstyled footer-list mt-4">
              <li>
                <Link href="/terms" className="text-foot">
                  <i className="uil uil-angle-right-b me-1"></i> Terms of
                  Services
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foot">
                  <i className="uil uil-angle-right-b me-1"></i> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 className="text-light footer-head">Newsletter</h5>
            <p className="mt-4">
              Sign up and receive the latest tips via email.
            </p>
            {/* <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="foot-subscribe mb-3">
                    <label className="form-label">
                      Write your email <span className="text-danger">*</span>
                    </label>
                    <div className="form-icon position-relative">
                      <i data-feather="mail" className="fea icon-sm icons"></i>
                      <input type="email" name="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Your email : " required>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="d-grid">
                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe">
                  </div>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </div>

      <div className="footer footer-bar">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="text-sm-start">
                <p className="mb-0">
                  © Pandion. Made with{' '}
                  <i className="mdi mdi-heart text-danger" /> in HCM City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#"
        onClick={undefined}
        id="back-to-top"
        className="btn btn-icon btn-primary back-to-top"
      >
        <i data-feather="arrow-up" className="icons"></i>
      </Link>
    </footer>
  );
};

export default Footer;
