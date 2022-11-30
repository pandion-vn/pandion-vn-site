import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { PER_PAGE } from '@/common/utils';
import { getAllPosts } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import BlogListing from '@/components/blog/listing';

interface BlogPageProps extends WithChildren {
  posts: Post[];
  totalPosts: number;
  currentPage: number;
}

const BlogPage = ({ posts, currentPage, totalPosts }: BlogPageProps) => {
  return (
    <BlogListing
      posts={posts}
      currentPage={currentPage}
      totalPosts={totalPosts}
      perPage={PER_PAGE}
    />
  );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Prerender the next 4 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 4 }).map((_, i) => `/blog/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;

  const posts = (await getAllPosts({ limit: `${PER_PAGE}`, page })) as PostsOrPages;
  const totalPosts = posts.meta.pagination.total;

  if (!posts.length) {
    return {
      notFound: true,
    };
  }

  // Redirect the first page to `/blog` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
      totalPosts: totalPosts,
      currentPage: page,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  };
};
