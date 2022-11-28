import { menu } from '@/types/menu';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

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
            <a
              className={isOpenMenu ? 'navbar-toggle open' : 'navbar-toggle'}
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div
          id="navigation"
          style={isOpenMenu ? { display: 'block' } : { display: 'none' }}
        >
          {/* Navigation Menu */}
          <ul className="navigation-menu">
            {menu.map((item) => (
              <li
                key={item.id}
                className={router.pathname == item.path ? 'active' : undefined}
              >
                <Link
                  href={item.path}
                  className={
                    router.pathname == item.path
                      ? 'sub-menu-item active'
                      : 'sub-menu-item'
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
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
