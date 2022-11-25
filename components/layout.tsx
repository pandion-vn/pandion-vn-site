import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import { WithChildren } from '@/types/shared';
import { Meta } from '@/types/seo';

interface LayoutProps extends WithChildren {
  meta?: Meta;
}

const Layout = ({ meta, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{meta?.title ?? "Pandion.vn - Your IT Solutions"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta?.description ?? "Doing IT the smart way"} />
        <meta name="keywords" content={meta?.keywords ?? "Software, Software Engineer, IT Solutions"} />
        <meta name="author" content="Pandion.vn" />
        <meta name="email" content="info@pandion.vn" />
        <meta name="website" content="https://pandion.vn" />
        <meta name="version" content="v1.0.0" />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;