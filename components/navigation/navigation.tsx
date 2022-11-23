import { WithChildren } from '@/types/shared';
import NavMenu from './menu';
import NavRightBtn from './nav-right-buttons';

interface NavigationProps extends WithChildren {
  menuTheme?: string;
}

const Navigation = ({ menuTheme }: NavigationProps) => {
  return (
    <div id="navigation">
      <NavMenu theme={menuTheme} />
      <ul className="buy-menu-btn d-none">
        <NavRightBtn />
      </ul>
    </div>
  );
};

export default Navigation;
