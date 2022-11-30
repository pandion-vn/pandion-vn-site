import { GetStaticProps } from 'next';
import { getAllPosts } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import { WithChildren } from '@/types/shared';
import { Post } from '@/types/post';
import { PER_PAGE } from '@/common/utils';
import BlogListing from '@/components/blog/listing';

interface BlogProps extends WithChildren {
  posts: Post[];
  totalPosts: number;
  currentPage: number;
}

const Blog = ({ posts, totalPosts, currentPage }: BlogProps) => {
  return (
    <BlogListing
      posts={posts}
      currentPage={currentPage}
      totalPosts={totalPosts}
      perPage={PER_PAGE}
    />
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPosts({ limit: `${PER_PAGE}` })) as PostsOrPages;
  const totalPosts = posts.meta.pagination.total;

  return { props: { posts, totalPosts, currentPage: 1 } };
};
