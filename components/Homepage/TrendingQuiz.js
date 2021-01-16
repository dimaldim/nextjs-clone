import Image from "next/image";
import Link from "next/link";

export default function TrendingQuiz({ trendingQuiz }) {
  return (
    <section className="section-welcome section-fullwidth">
      <div className="row">
        <div className="column small-12">
          <div className="entry entry-trending">
            <header className="entry-trending-header">
              <span className="trending-type">#trending</span>
              <div className="trending-bubble">
                <p>
                  <strong>5.2 M</strong>
                  <br />
                  People Took This Quiz
                </p>
              </div>
            </header>
            <div className="entry-card">
              <div className="trending-magician">
                <div className="magician-hand">
                  <Image
                    src="/images/magician-hand.svg"
                    alt="Fugiat ipsum minim ea id pariatur nisi nulla dolor qui eiusmod et commodo."
                    width={24}
                    height={21}
                  />
                </div>
                <div className="magician-image">
                  <Image src="/images/magician.svg" width={124} height={241} />
                </div>
                <div className="magician-star-1"></div>
                <div className="magician-star-2"></div>
                <div className="magician-star-3"></div>
              </div>
              <div className="entry-thumbnail-wrapper">
                <Link href={`/${trendingQuiz?.slug}`}>
                  <a>
                    <Image
                      src={trendingQuiz?.quiz_settings?.featuredImage?.sourceUrl}
                      alt="Aliqua laborum occaecat ullamco minim aute cupidatat culpa ea fugiat."
                      layout="fill"
                      className="entry-thumbnail"
                    />
                  </a>
                </Link>
              </div>
              <div className="entry-body">
                <h2 className="entry-title">
                  <Link href={`/${trendingQuiz?.slug}`}>
                    <a>{trendingQuiz?.title}</a>
                  </Link>
                </h2>
                <Link href={`/${trendingQuiz?.slug}`}>
                  <a className="button button-primary">Start the quiz</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
