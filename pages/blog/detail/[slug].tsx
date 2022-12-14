import { getAllPosts, getPostBySlug } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { FiFacebook, FiLinkedin, FiCalendar, FiUser } from 'react-icons/fi';
import { formatHtmlContent, formatDate, truncateStr } from '@/common/utils';
import { Meta } from '@/types/seo';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import Link from 'next/link';
import BlurImage from '@/components/widgets/blur_image';

interface BlogDetailProps extends WithChildren {
  post: Post;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const breadcrumbs = [
    {
      name: 'Pandion',
      path: '/',
      active: false,
    },
    {
      name: 'Bài Viết',
      path: '/blog',
      active: true,
    },
    {
      name: truncateStr(post.title, 20),
      path: `/blog/${post.slug}`,
      active: true,
    },
  ];

  const meta = {
    title: post.title ?? 'Software development blog',
    description: post.excerpt ?? 'Website to share information / technical about software development',
    keywords: post.primary_tag,
  } as Meta;

  return (
    <Layout meta={meta}>
      <Heading title={post.title} breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-md-2 d-none d-md-block">
                  <ul className="list-unstyled text-center sticky-bar social-icon mb-0">
                    <li className="mb-3 h6">Chia Sẻ:</li>
                    <li>
                      <Link href="#" className="rounded">
                        <FiFacebook className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="rounded">
                        <FiLinkedin className="fea icon-sm fea-social" />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-md-10">
                  {post.feature_image ? (
                    <BlurImage
                      src={post.feature_image}
                      alt={post.feature_image_alt ?? `Image_${post.id}`}
                      className="img-fluid rounded-md shadow"
                      layout='responsive'
                    />
                  ) : (
                    <BlurImage
                      src="/images/blog/empty_feature_img_post.svg"
                      alt="No Img"
                      className="img-fluid rounded-md shadow"
                      layout="responsive"
                    />
                  )}
                  <ul className="list-unstyled d-flex justify-content-between mt-3">
                    <li className="list-inline-item user me-2">
                      <p className="text-muted">
                        <FiUser className="uil text-dark" /> The Pandioner
                      </p>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <FiCalendar className="uil text-dark" />{' '}
                      {formatDate(post.published_at)}
                    </li>
                  </ul>

                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{ __html: formatHtmlContent(post.html) }}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;

export async function getStaticPaths() {
  const posts = (await getAllPosts({})) as PostsOrPages;
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return { props: { post } };
}
