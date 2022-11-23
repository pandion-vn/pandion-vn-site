import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
        <link rel="manifest" href="/assets/images/site.webmanifest" />
        {/* Bootstrap */}
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        {/* Icons */}
        <link href="/assets/css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
        {/* Slider */}
        <link rel="stylesheet" href="/assets/css/tiny-slider.css"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
