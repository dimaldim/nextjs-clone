import Layout from "../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Test title</title>
      </Head>
      {router.isFallback ? <div>Loading</div> : <div>Single view</div>}
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {},
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const test = await fetch("https://techcrunch.com/wp-json/wp/v2/posts");
  const response = await test.json();

  return {
    paths: [],
    fallback: true,
  };
};
