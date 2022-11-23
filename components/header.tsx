import Link from 'next/link';
import NavRightBtn from './navigation/nav-right-buttons';
import Navigation from './navigation/navigation';
import BlurImage from './widgets/blur_image';

const Header = () => {
  return (
    <header id="topnav" className="defaultscroll sticky">
      <div className="container">
        {/* Logo container */}
        <Link className="logo" href="/">
          <span className="logo-light-mode">
            <BlurImage
              src={"/assets/images/pandion-logo-dark.svg"}
              alt={"pandion-logo-dark"}
              width={56}
              height={56}
              className="l-dark"
            />
            <BlurImage
              src={"/assets/images/pandion-logo-light.svg"}
              alt={"pandion-logo-light"}
              width={56}
              height={56}
              className="l-light"
            />
          </span>
          <BlurImage
            src={"/assets/images/pandion-logo-light.svg"}
            alt={"pandion-logo-light-mode"}
            width={56}
            height={56}
            className="logo-dark-mode"
          />
        </Link>
        <ul className="buy-button list-inline mb-0">
          <NavRightBtn />
        </ul>
        {/* end login button */}
        {/* End Logo container */}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle */}
            <a className="navbar-toggle" id="isToggle" onClick={undefined}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            {/* End mobile menu toggle */}
          </div>
        </div>

        <Navigation menuTheme='nav-light' />
      </div>
    </header>
  );
};

export default Header;
