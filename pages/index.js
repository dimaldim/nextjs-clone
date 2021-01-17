import FeatureIsland from "../components/Homepage/FeatureIsland";
import LatestPosts from "../components/Homepage/LatestPosts";
import Layout from "../components/layout";
import Footer from "../components/Layout/Footer";
import Navigation from "../components/Layout/Navigation";
import { getHomeFeauturePosts, getHomeLatestPosts } from "../libs/api";

export default function Home({ featureIslandFirst, data, latestPosts }) {
  return (
    <Layout>
      <div className="container--tc-magazine" style={{ marginTop: "110px" }}>
        <Navigation />
        <div id="tc-main-content">
          <div className="content-wrap">
            <div className="content">
              <FeatureIsland
                featureIslandFirst={featureIslandFirst}
                data={data}
              />
            </div>
          </div>
          <div className="content-wrap">
            <div className="content">
              <LatestPosts latestPosts={latestPosts} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data, featureIslandFirst } = await getHomeFeauturePosts();
  const latestPosts = await getHomeLatestPosts();

  return {
    props: { featureIslandFirst, data, latestPosts },
    revalidate: 1,
  };
}
