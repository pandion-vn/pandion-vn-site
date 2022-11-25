import { getAllPosts, getPostBySlug } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { FiFacebook, FiLinkedin, FiCalendar, FiUser } from 'react-icons/fi';
import { formatDate, truncateStr } from '@/common/utils';
import Layout from '@/components/layout';
import Heading from '@/components/widgets/heading';
import Link from 'next/link';

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
      active: false,
    },
    {
      name: truncateStr(post.title, 20),
      path: `/blog/${post.slug}`,
      active: true,
    },
  ];

  return (
    <Layout>
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

                  <img src={post.feature_image ?? '/images/no-image.png'} className="img-fluid rounded-md shadow" alt="" />

                  <ul className="list-unstyled d-flex justify-content-between mt-3">
                    <li className="list-inline-item user me-2">
                      <p className="text-muted">
                        <FiUser className="uil text-dark" />{' '}Pandioner
                      </p>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <FiCalendar className="uil text-dark" />{' '}{formatDate(post.published_at)}
                    </li>
                  </ul>

                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{ __html: post.html.replace(/srcset=*/g, '') }}
                  />

                  {/* <h5 className="mt-4">Comments :</h5>

                  <ul className="media-list list-unstyled mb-0">
                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/images/client/01.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <a href="#" className="text-dark media-heading">
                                Lorenzo Peterson
                              </a>
                            </h6>
                            <small className="text-muted">
                              15th August, 2019 at 01:25 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/images/client/02.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <a href="#" className="media-heading text-dark">
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">
                              15th August, 2019 at 05:44 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>
                    </li>

                    <li className="mt-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <a className="pe-3" href="#">
                            <img
                              src="/images/client/03.jpg"
                              className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                              alt="img"
                            />
                          </a>
                          <div className="flex-1 commentor-detail">
                            <h6 className="mb-0">
                              <a href="#" className="media-heading text-dark">
                                Tammy Camacho
                              </a>
                            </h6>
                            <small className="text-muted">
                              16th August, 2019 at 03:44 pm
                            </small>
                          </div>
                        </div>
                        <a href="#" className="text-muted">
                          <i className="mdi mdi-reply"></i> Reply
                        </a>
                      </div>
                      <div className="mt-3">
                        <p className="text-muted fst-italic p-3 bg-light rounded">
                          " There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour "
                        </p>
                      </div>

                      <ul className="list-unstyled ps-4 ps-md-5 sub-comment">
                        <li className="mt-4">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                              <a className="pe-3" href="#">
                                <img
                                  src="/images/client/01.jpg"
                                  className="img-fluid avatar avatar-md-sm rounded-circle shadow"
                                  alt="img"
                                />
                              </a>
                              <div className="flex-1 commentor-detail">
                                <h6 className="mb-0">
                                  <a
                                    href="#"
                                    className="text-dark media-heading"
                                  >
                                    Lorenzo Peterson
                                  </a>
                                </h6>
                                <small className="text-muted">
                                  17th August, 2019 at 01:25 pm
                                </small>
                              </div>
                            </div>
                            <a href="#" className="text-muted">
                              <i className="mdi mdi-reply"></i> Reply
                            </a>
                          </div>
                          <div className="mt-3">
                            <p className="text-muted fst-italic p-3 bg-light rounded">
                              " There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour "
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h5 className="mt-4">Leave A Comment :</h5>

                  <form className="mt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Your Comment</label>
                          <div className="form-icon position-relative">
                            <i
                              data-feather="message-circle"
                              className="fea icon-sm icons"
                            ></i>
                            <textarea
                              id="message"
                              placeholder="Your Comment"
                              rows={5}
                              name="message"
                              className="form-control ps-5"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Name <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i
                              data-feather="user"
                              className="fea icon-sm icons"
                            ></i>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              className="form-control ps-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Email <span className="text-danger">*</span>
                          </label>
                          <div className="form-icon position-relative">
                            <i
                              data-feather="mail"
                              className="fea icon-sm icons"
                            ></i>
                            <input
                              id="email"
                              type="email"
                              placeholder="Email"
                              name="email"
                              className="form-control ps-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="send d-grid">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form> */}
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
