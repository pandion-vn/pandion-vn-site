import { getAllPosts } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { formatDate, truncateStr } from '@/common/utils';
import { FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';

interface BlogListingProps extends WithChildren {
  posts: Post[];
}

const BlogListing = ({ posts }: BlogListingProps) => {
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
  ];

  return (
    <Layout>
      <Heading title="Danh Sách Bài Viết" breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter list-inline mb-0 filter-options text-center">
                  <li
                    className="list-inline-item categories-name border text-dark rounded active"
                    data-group="all"
                  >
                    Tất Cả
                  </li>
                  {/* <li
                    className="list-inline-item categories-name border text-dark rounded"
                    data-group="branding"
                  >
                    Branding
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="row  mt-5">
            {posts.map((post, index) => (
              <div key={index} className="col-lg-6 col-12 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="row align-items-center g-0">
                    <div className="col-md-6">
                      <img
                        src={post.feature_image ?? '/images/no-image.png'}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="overlay bg-dark"></div>
                      <div className="author">
                        <small className="text-light date">
                          <FiCalendar className="uil" />{' '}
                          {formatDate(post.published_at)}
                        </small>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="card-body content">
                        <h5>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="card-title title text-dark"
                          >
                            {post.title}
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">
                          {truncateStr(post.excerpt, 65)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* PAGINATION */}
            {/* <div className="col-12">
              <ul className="pagination justify-content-center mb-0">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    Trở về
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    Tiếp theo
                  </a>
                </li>
              </ul>
            </div> */}

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogListing;

export async function getStaticProps() {
  const posts = (await getAllPosts({})) as PostsOrPages;

  return { props: { posts } };
}
