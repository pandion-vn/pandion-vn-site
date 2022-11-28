interface Menu {
  id: string;
  name: string;
  path: string;
}

export const menu: Menu[] = [
  { id: 'home', name: 'Trang Chủ', path: '/' },
  { id: 'portfolio', name: 'Portfolio', path: '/portfolio' },
  { id: 'blog', name: 'Bài Viết', path: '/blog' },
  { id: 'aboutUs', name: 'Về Chúng Tôi', path: '/about_us' },
  { id: 'contact', name: 'Liên Hệ', path: '/contact' },
];
