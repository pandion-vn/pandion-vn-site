import { WithChildren } from '@/types/shared';
import Link from 'next/link';

interface NavMenuProps extends WithChildren {
  theme?: string;
}

const NavMenu = ({ theme }: NavMenuProps) => {
  const menu = [
    {
      title: 'Trang Chủ',
      path: '/',
    },
    {
      title: 'Portfolio',
      path: '/portfolio',
    },
    {
      title: 'Bài Viết',
      path: '/blog',
    },
    {
      title: 'Đội Ngũ',
      path: '/about-us',
    },
    {
      title: 'Liên Hệ',
      path: '/contact',
    },
  ];

  const ulStyle = `navigation-menu ${theme}`;

  return (
    <ul className={ulStyle}>
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.path}>
              <p className="sub-menu-item">{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
