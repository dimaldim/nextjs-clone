import Layout from "../components/layout";
import { useRouter } from "next/router";
import Head from "next/head";
import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";
import ErrorPage from "next/error";
import Image from "next/image";

export default function Post({ postData }) {
  const router = useRouter();

  console.log(postData);

  if (!router.isFallback && !postData?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Head>
        <title>Test title</title>
      </Head>
      {router.isFallback ? (
        <div>Loading</div>
      ) : (
        <div className="container--tc-magazine" style={{ marginTop: "110px" }}>
          <Navigation />
          <div id="tc-main-content">
            <div className="content-wrap">
              <div className="content">
                <div className="feature-island__posts">
                  <article className="article-container article--post article--featured">
                    <button className="close-button " style={{ top: "15px" }}>
                      <div className="icon-wrap "></div>
                      <svg
                        className="icon icon--close icon--green-gradient"
                        viewBox="0 0 20 20"
                        version="1.1"
                        aria-labelledby="title"
                      >
                        <title>Close Screen</title>
                        <path d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z"></path>
                      </svg>
                      <div className="progress-wrap">
                        <svg viewBox="0 0 50 50">
                          <circle
                            className="progress-circle "
                            cx="25"
                            cy="25"
                            r="22"
                            style={{
                              strokeDasharray: "137.4",
                              strokeDashoffset: "104.012",
                            }}
                          ></circle>
                        </svg>
                      </div>
                    </button>
                    <div>
                      <div className="article__content-wrap">
                        <header className="article__header">
                          <div className="article__title-wrapper">
                            <div className="featured-article__label">
                              <div className="featured-article__label__text gradient-text gradient-text--green-gradient">
                                Featured Article
                              </div>
                            </div>
                            <h1 className="article__title" dangerouslySetInnerHTML={{__html: postData?.title?.rendered}}></h1>
                            <h2 className="article__subtitle">{postData?.subtitle}</h2>
                          </div>
                          <div className="article__byline-wrapper">
                            <div className="article__byline">
                              <a
                                aria-label="Posts by Zack Whittaker"
                              >
                                AUTHOR
                              </a>
                              <span className="article__byline__meta">
                                <span className="article__byline__meta__slash">
                                  {" "}
                                  /{" "}
                                </span>
                                <time
                                  className="full-date-time"
                                  datetime="2021-01-15T12:00:11"
                                >
                                  TIME
                                  <span className="full-date-time__separator">
                                    •
                                  </span>
                                  DATE
                                </time>
                              </span>
                            </div>
                            <div className="container__access-control">
                              <div className="article__action-links">
                                <div className="article__action-links__comments">
                                  <button type="button">
                                    <svg
                                      className="icon icon--comment icon--green-gradient"
                                      viewBox="0 0 20 20"
                                      version="1.1"
                                      aria-labelledby="title"
                                    >
                                      <title>comment</title>
                                      <path d="M15.3,14.1h2.4v2.4h-2.4V14.1z M12.5,11.8H0v2.4h15.3v-2.4H12.5z M7.1,2.4h10.6V0H2.4v2.4H7.1z M17.6,18.8H20V0h-2.4V18.8zM2.4,5.9V0H0v11.8h2.4V5.9z"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </header>
                      </div>
                      <div className="article__content-wrap">
                        <div className="article__featured-image article__featured-image--block breakout">
                          <Image
                            src="https://techcrunch.com/wp-content/uploads/2021/01/DPR-domain.jpg?w=730&amp;crop=1"
                            width="1300"
                            height="794"
                          />
                        </div>
                        <div className="image-credits">
                          <p>
                            <svg
                              className="icon icon--camera icon--green-gradient"
                              viewBox="0 0 20 20"
                              version="1.1"
                              aria-labelledby="title"
                            >
                              <title>camera</title>
                              <path d="M1,5H19V16.91H1ZM12,3h4V5H12ZM10,13.27a2.32,2.32,0,0,1,0-4.64h0a2.32,2.32,0,0,1,0,4.64Z"></path>
                            </svg>
                            <strong>Image Credits: </strong>Bryce Durbin /
                            TechCrunch
                          </p>
                        </div>
                        <div
                          className="article-content"
                          dangerouslySetInnerHTML={{
                            __html: postData?.content?.rendered,
                          }}
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const postSlug = params?.slug;
  const response = await fetch(
    `https://techcrunch.com/wp-json/wp/v2/posts?slug=${postSlug}`
  );
  let postData = await response.json();
  if (postData.length) {
    postData = postData[0];
  } else {
    postData = [];
  }

  console.log(postData);

  return {
    props: { postData },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?per_page=10"
  );
  const allPosts = await response.json();

  return {
    paths: allPosts?.map((post) => `/${post?.slug}`) || [],
    fallback: true,
  };
};
