import Image from "next/image";
import Link from "next/link";

const FeatureIsland = ({featureIslandFirst, data}) => {
  return (
    <div className="feature-island">
      <div className="feature-island-main-block fi-main-block--unread">
        <h2 className="fi-main-block__title">
          <Link href={`/${featureIslandFirst?.slug}`}>
            <a
              className="post-block__title__link"
              dangerouslySetInnerHTML={{
                __html: featureIslandFirst?.title?.rendered,
              }}
            ></a>
          </Link>
        </h2>
        <h3 className="fi-main-block__subtitle">
          {featureIslandFirst?.subtitle}
        </h3>
        <p className="fi-main-block__byline">
          <span>
            <a aria-label="Posts by Zack Whittaker">AUTHOR</a>
          </span>
        </p>
        <Link href={`/${featureIslandFirst?.slug}`}>
          <a className="post-block__title__link">
            <Image
              src={`${featureIslandFirst?.jetpack_featured_media_url}?w=850&amp;h=492&amp;crop=1`}
              width={850}
              height={492}
            />
          </a>
        </Link>
      </div>
      <div className="mini-view">
        {data.map((post) => {
          return (
            <article
              key={post.id}
              className="mini-view__item mini-item--unread"
            >
              <h3 className="mini-view__item__title">
                <Link href={`/${post.slug}`}>
                  <a
                    dangerouslySetInnerHTML={{
                      __html: post.title?.rendered,
                    }}
                  ></a>
                </Link>
              </h3>
              <p className="fi-main-block__byline">
                <span>
                  <a>AUTHOR</a>
                </span>
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureIsland;
