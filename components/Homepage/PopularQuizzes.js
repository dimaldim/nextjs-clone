import Link from "next/link";

export default function PopularQuizzes({ popularQuizzes }) {
  return (
    <div className="widget widget-popular-posts">
      <ul className="list-posts">
        {popularQuizzes.map((quiz) => {
          return (
            <li className="list-item" key={quiz.id}>
              <Link href={`/${quiz.slug}`}>
                <a>{quiz.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
