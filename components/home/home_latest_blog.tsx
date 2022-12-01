import { formatDate } from '@/common/utils';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import { FiChevronsRight, FiCalendar, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import useTrans from '../../hooks/useTrans';
import BlurImage from '../widgets/blur_image';

interface HomeLatestBlogProps extends WithChildren {
  posts: Post[];
}

const HomeLatestBlog = ({ posts }: HomeLatestBlogProps) => {
  const trans = useTrans();

  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center mb-4 pb-2">
          <div className="col-lg-6">
            <div className="section-title text-center text-lg-start">
              <h6 className="mb-4 mb-lg-0">{trans.home.newsBlogH6} </h6>
              <h5 className="title text-primary">{trans.home.newsBlogH5}</h5>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-title text-center text-lg-start">
              <p className="text-muted mb-0 mx-auto para-desc">
                {trans.home.newsBlogDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog rounded border-0 shadow">
                <div className="position-relative">
                  {post.feature_image ? (
                    <BlurImage
                      src={post.feature_image}
                      alt={post.feature_image_alt ?? `Image_${post.id}`}
                      className="card-img-top rounded-top"
                      // layout='responsive'
                    />
                  ) : (
                    <BlurImage
                      src="/images/blog/empty_feature_img_post.svg"
                      alt="No Img"
                      className="card-img-top rounded-top"
                      // layout="responsive"
                    />
                  )}
                  <div className="overlay rounded-top bg-dark"></div>
                </div>
                <div className="card-body content">
                  <h5>
                    <Link
                      href={`/blog/detail/${post.slug}`}
                      className="card-title title text-dark"
                    >
                      {post.title}
                    </Link>
                  </h5>
                  <div className="post-meta d-flex justify-content-between mt-3">
                    <div> </div>
                    {/* <ul className="list-unstyled mb-0">
                      <li className="list-inline-item me-2 mb-0">
                        <a href="#" className="text-muted like">
                          <i className="uil uil-heart me-1"></i>33
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="text-muted comments">
                          <i className="uil uil-comment me-1"></i>08
                        </a>
                      </li>
                    </ul> */}
                    <Link
                      href={`/blog/detail/${post.slug}`}
                      className="text-muted readmore"
                    >
                      Xem thêm{' '}
                      <FiChevronsRight className="uil align-middle" />
                    </Link>
                  </div>
                </div>
                <div className="author">
                  <small className="text-light user d-block">
                    <FiUser className="uil" />{' '}The Pandioner
                  </small>
                  <small className="text-light date">
                    <FiCalendar className="uil" />{' '}
                    {formatDate(post.published_at)}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeLatestBlog;
