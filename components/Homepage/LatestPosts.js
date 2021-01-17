import Image from "next/image";
import Link from "next/link";

const LatestPosts = ({ latestPosts }) => {
  return (
    <div>
      <h2 className="river__title river__title--home">The Latest</h2>
      <div className="river river--homepage">
        <div>
          {latestPosts.map((post) => {
            return (
              <article
                key={post.id}
                className="post-block post-block--image post-block--unread"
              >
                <header className="post-block__header">
                  <h2 className="post-block__title">
                    <Link href={`/${post.slug}`}>
                      <a
                        className="post-block__title__link"
                        dangerouslySetInnerHTML={{
                          __html: post.title?.rendered,
                        }}
                      ></a>
                    </Link>
                  </h2>
                  <div className="post-block__meta">
                    <div className="river-byline">
                      <span className="river-byline__authors">
                        <span>
                          <a
                            aria-label="Posts by Mike Butcher"
                            href="/author/mike-butcher/"
                          >
                            AUTHOR
                          </a>
                        </span>
                      </span>
                      <div className="river-byline__full-date-time__wrapper">
                        <time
                          className="river-byline__full-date-time"
                          datetime="2021-01-16T22:30:31"
                        >
                          TIME
                          <span className="full-date-time__separator">•</span>
                          DATE
                        </time>
                      </div>
                    </div>
                  </div>
                </header>
                <div
                  className="post-block__content"
                  dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
                ></div>
                <footer className="post-block__footer">
                  <Image
                    src={post.jetpack_featured_media_url}
                    width="430"
                    height="230"
                  />
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
