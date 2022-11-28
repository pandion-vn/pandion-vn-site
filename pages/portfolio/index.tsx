import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import { FiCalendar, FiUser } from 'react-icons/fi';

const PortfolioListing = ({ portfolios }: any) => {
  const breadcrumbs = [
    {
      name: 'Pandion',
      path: '/',
      active: false,
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      active: true,
    },
  ];

  return (
    <Layout>
      <Heading title="Portfolio" breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          <div id="grid" className="row">
            {portfolios.map(({ slug, frontmatter }: any) => (
              <div
                key={slug}
                className="col-lg-4 col-md-8 col-12 pt-2 mt-4 picture-item"
              >
                <div className="card work-container work-modern position-relative overflow-hidden shadow rounded border-0">
                  <div className="card-body p-0">
                    <img
                      src={frontmatter.socialImage}
                      className="img-thumbnail"
                      alt="work-image"
                    />
                    <div className="overlay-work bg-dark"></div>
                    <div className="content">
                      <Link
                        href={`/portfolio/${slug}`}
                        className="title text-white d-block fw-bold"
                      >
                        {frontmatter.title}
                      </Link>
                      <small className="text-light">{frontmatter.desc}</small>
                    </div>
                    <div className="client">
                      <small className="text-light user d-block">
                        <FiUser className="uil uil-user" /> {frontmatter.client}
                      </small>
                      <small className="text-light date">
                        <FiCalendar className="muil uil-calendar-alt" />{' '}
                        {frontmatter.date}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioListing;

export async function getStaticProps() {
  const files = fs.readdirSync('markdown/portfolios');

  const portfolios = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(
      `markdown/portfolios/${fileName}`,
      'utf-8'
    );

    const { data: frontmatter } = matter(readFile);

    return { slug, frontmatter };
  });

  return { props: { portfolios } };
}
