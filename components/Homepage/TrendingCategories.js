import Link from "next/link";

export default function TrendingCategories({ categories }) {
  return (
    <section className="section-tags-overlap">
      <div className="row">
        <div className="column">
          <div className="box-tags">
            <h3>Trending topics:</h3>
            <ul>
              <li>
                <a href="#">#Celebs</a>
              </li>
              <li>
                <a href="#">#Disney</a>
              </li>
              <li>
                <a href="#">#IQ</a>
              </li>
              <li>
                <a href="#">#Love & Sex</a>
              </li>
              <li>
                <a href="#">#Nostalgia</a>
              </li>
              <li>
                <a href="#">#Parenting</a>
              </li>
              <li>
                <a href="#">#Politics</a>
              </li>
              <li>
                <a href="#">#You!</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
