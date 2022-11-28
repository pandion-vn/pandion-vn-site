import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import { truncateStr } from '@/common/utils';

const PortfolioDetail = ({ slug, frontmatter, content }: any) => {
  const breadcrumbs = [
    {
      name: 'Pandion',
      path: '/',
      active: false,
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
      active: false,
    },
    {
      name: truncateStr(frontmatter.title, 20),
      path: `/portfolio/${slug}`,
      active: true,
    },
  ];

  return (
    <Layout>
      <Heading title={frontmatter.title} breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          <img
            src={frontmatter.socialImage}
            className="img-thumbnail"
            alt=""
          />
          <div
            className="text-muted mt-4"
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetail;

export async function getStaticPaths() {
  const files = fs.readdirSync('markdown/portfolios');
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace('.md', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`markdown/portfolios/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);

  return { props: { slug, frontmatter, content } };
}
