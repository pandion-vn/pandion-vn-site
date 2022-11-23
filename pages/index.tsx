import HomeCollaborate from "@/components/home/home_collaborate";
import HomeFeature from "@/components/home/home_feature";
import HomeHero from "@/components/home/home_hero";
import HomeIntegration from "@/components/home/home_integration";
import Layout from "@/components/layout";
import PartnersWidget from "@/components/widgets/partners";

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeFeature />
      <HomeIntegration />
      <PartnersWidget />
      <HomeCollaborate />
    </Layout>
  );
}

export default Home;
