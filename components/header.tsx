import Link from 'next/link';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';

const Header = () => {
  return (
    <header id="topnav" className="defaultscroll sticky bg-white">
      <div className="container">
        <Link className="logo" href="/">
          <img
            src="/images/pandion-logo-accent.svg"
            height="45"
            className="logo-light-mode"
            alt=""
          />
        </Link>
        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item mb-0 pe-1">
            <Link href="#" className="btn btn-icon btn-primary">
              <FiFacebook className="uil uil-facebook-f icons" />
            </Link>
          </li>
          <li className="list-inline-item mb-0 pe-1">
            <Link href="#" className="btn btn-icon btn-primary">
              <FiLinkedin className="uil uil-linkedin-alt icons" />
            </Link>
          </li>
        </ul>

        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle */}
            <a className="navbar-toggle" id="isToggle">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation">
          {/* Navigation Menu */}
          <ul className="navigation-menu">
            <li>
              <Link href="/" className="sub-menu-item">
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="sub-menu-item">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="sub-menu-item">
                Bài Viết
              </Link>
            </li>
            <li>
              <Link href="/about_us" className="sub-menu-item">
                Về Chúng Tôi
              </Link>
            </li>
            <li>
              <Link href="/contact" className="sub-menu-item">
                Liên Hệ
              </Link>
            </li>
          </ul>

          <ul className="buy-menu-btn d-none">
            <li className="list-inline-item mb-0 pe-1">
              <Link href="#" className="btn btn-icon btn-primary">
                <FiFacebook className="uil uil-facebook-f icons" />
              </Link>
            </li>
            <li className="list-inline-item mb-0 pe-1">
              <Link href="#" className="btn btn-icon btn-primary">
                <FiLinkedin className="uil uil-linkedin-alt icons" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
