import '../styles/css/bootstrap.min.css';
import '../styles/css/tobii.min.css';
import '../styles/css/materialdesignicons.min.css';
import '../styles/css/tiny-slider.css';
import '../styles/css/style.css';
import '../styles/css/colors/default.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
