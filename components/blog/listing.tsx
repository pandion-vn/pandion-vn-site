import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { formatDate, truncateStr } from '@/common/utils';
import { Meta } from '@/types/seo';
import Layout from '../layout';
import Heading from '../widgets/heading';
import Link from 'next/link';
import Pagination from '../widgets/pagination';
import BlurImage from '../widgets/blur_image';

interface BlogListingProps extends WithChildren {
  posts: Post[];
  currentPage: number;
  totalPosts: number;
  perPage: number;
}

const BlogListing = ({
  posts,
  totalPosts,
  currentPage,
  perPage,
}: BlogListingProps) => {
  // const [isTagSelect, setTagSelect] = useState(0);
  // const onTagSelected = (index: number) => setTagSelect(index);

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

  const meta = {
    title: 'Software development blog',
    description:
      'Website to share information / technical about software development',
    keywords: undefined,
  } as Meta;

  return (
    <Layout meta={meta}>
      <Heading title="Danh Sách Bài Viết" breadcrumbs={breadcrumbs} />

      <section className="section">
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-12 filters-group-wrap">
              <div className="filters-group">
                <ul className="container-filter list-inline mb-0 filter-options text-center">
                  {tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/tag/${tag.slug}`}
                      onClick={() => onTagSelected(index)}
                      className={`list-inline-item categories-name border text-dark rounded ${
                        isTagSelect === index ? 'active' : ''
                      }`}
                    >
                      {tag.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}

          <div className="row  mt-5">
            {posts.map((post, index) => (
              <div key={index} className="col-lg-6 col-12 mb-4 pb-2">
                <div className="card blog rounded border-0 shadow overflow-hidden">
                  <div className="row align-items-center g-0">
                    <div className="col-md-6">
                      {post.feature_image ? (
                        <BlurImage
                          src={post.feature_image}
                          alt={post.feature_image_alt ?? `Image_${post.id}`}
                          className="img-fluid"
                          layout="responsive"
                        />
                      ) : (
                        <BlurImage
                          src="/images/blog/empty_feature_img_post.svg"
                          alt="No Img"
                          className="img-fluid"
                          layout="responsive"
                        />
                      )}
                      <div className="overlay bg-dark"></div>
                      <div className="author">
                        <small className="text-light user d-block">
                          <FiUser className="uil" /> The Pandioner
                        </small>
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
                            href={`/blog/detail/${post.slug}`}
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
            <Pagination
              totalItems={totalPosts}
              currentPage={currentPage}
              itemsPerPage={perPage}
              renderPageLink={(page) => `/blog/${page}`}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogListing;
