import { getAllPosts } from '@/common/ghost';
import { PostsOrPages } from '@tryghost/content-api';
import { Post } from '@/types/post';
import { WithChildren } from '@/types/shared';
import Layout from '@/components/layout';
import HomeHero from '@/components/home/home_hero';
import HomeFeature from '@/components/home/home_feature';
import HomeTeams from '@/components/home/home_team';
import HomeIntro from '@/components/home/home_intro';
import Partners from '@/components/widgets/partners';
import HomeLatestBlog from '@/components/home/home_latest_blog';

interface HomeProps extends WithChildren {
  posts: Post[];
}

const Home = ({posts}: HomeProps) => {
  return (
    <Layout>
      <HomeHero />
      <HomeFeature />
      <HomeTeams />
      <HomeIntro />
      <Partners />
      <HomeLatestBlog posts={posts} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getAllPosts({limit: '3'})) as PostsOrPages;

  return { props: { posts } };
}
