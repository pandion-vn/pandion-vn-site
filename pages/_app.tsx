import '../styles/scss/style.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import localFont from '@next/font/local';
import 'bootstrap/dist/css/bootstrap.css';

const materialFont = localFont({
  src: '../public/assets/fonts/materialdesignicons-webfont.woff2',
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  return (
    <main className={materialFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
