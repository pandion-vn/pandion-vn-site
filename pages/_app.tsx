import '../styles/css/bootstrap.min.css';
import '../styles/css/materialdesignicons.min.css';
import '../styles/css/tiny-slider.css';
import '../styles/css/style.css';
import '../styles/css/colors/default.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LN35WDRJPT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LN35WDRJPT');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
