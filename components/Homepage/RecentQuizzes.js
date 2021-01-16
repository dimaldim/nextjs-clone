import Image from "next/image";
import Link from "next/link";

export default function RecentQuizzes({ recentQuizzes }) {
  return (
    <div className="column small-12 medium-12 large-8">
      <header className="section-heading">
        <h2 className="heading-title">Recently Added:</h2>
      </header>
      <div className="entries-list">
        {recentQuizzes.map((quiz) => {
          return (
            <div className="entry entry-box entry-box-horizontal" key={quiz.id}>
              <div className="entry-body">
                <h3 className="entry-title">
                  <Link href={`/${quiz.slug}`}>
                    <a>{quiz.title}</a>
                  </Link>
                </h3>
              </div>
              <Link href={`/${quiz.slug}`}>
                <a className="entry-thumbnail-wrapper">
                  <Image
                    src={quiz.quiz_settings.featuredImage.sourceUrl}
                    alt="Duis cupidatat est do minim ullamco exercitation veniam nulla id."
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
