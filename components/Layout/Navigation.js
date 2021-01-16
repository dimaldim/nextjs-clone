export default function Navigation() {
  return (
    <header className="site-navigation ">
      <div className="desktop-nav" style={{ top: "0px" }}>
        <div className="desktop-nav__header">
          <div className="logo">
            <a href="https://techcrunch.com/">
              <svg
                width="80px"
                height="40px"
                viewBox="0 0 60 30"
                version="1.1"
                style={{ display: "block" }}
              >
                <title>TechCrunch</title>
                <g mask="url(#tc-logo)">
                  <rect x="0" y="0" width="60" height="30" fill="#fff"></rect>
                  <rect
                    id="logo-gradient"
                    className="navigation__logo-gradient"
                    x="0"
                    y="0"
                    width="60"
                    height="30"
                    fill="url(#tc-gradient)"
                  ></rect>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="desktop-nav__login">
          <div className="navigation__login-links">
            <div className="navigation__login-links__profile">
              <a
                className=""
                href="https://oidc.techcrunch.com/login/?prompt=login&amp;dest=https%3A%2F%2Ftechcrunch.com%2F"
              >
                Login
              </a>
            </div>
            <div className="navigation__login-links__subscribe">
              <a
                className="button button--secondary button--subscribe"
                aria-label="Subscribe"
                href="/subscribe?tpcc=homepagetout"
              >
                Join Extra Crunch
              </a>
            </div>
          </div>
        </div>
        <div className="desktop-nav__body">
          <div className="search-box-container">
            <div className="search-toggle search-toggle--search">
              <label htmlFor="nav-search-field">Search</label>
              <svg
                className="icon icon--search icon--light-grey"
                viewBox="0 0 20 20"
                version="1.1"
                aria-labelledby="title"
              >
                <title>search</title>
                <g>
                  <ellipse cx="9.1" cy="8.7" rx="7" ry="7.2"></ellipse>
                  <path d="M18.9,18.7l-4.7-4.8"></path>
                </g>
              </svg>
            </div>
          </div>
          <ul className="menu navigation__main-menu">
            <li className="menu__item">
              <a href="/startups/">Startups</a>
            </li>
            <li className="menu__item">
              <a href="/video/">Videos</a>
            </li>
            <li className="menu__item">
              <a href="/pages/podcasts/">Audio</a>
            </li>
            <li className="menu__item">
              <a href="/newsletters">Newsletters</a>
            </li>
            <li className="menu__item menu__item--extra-crunch">
              <a href="/extracrunch/?tpcc=ecleftnav">Extra Crunch</a>
            </li>
            <li className="menu__item">
              <a href="/the-techcrunch-list/?tpcc=tclistleftnav">The TC List</a>
            </li>
            <li className="menu__item">
              <a href="/pages/advertisement-events-calendar/">Advertise</a>
            </li>
            <li className="menu__item">
              <a href="/events/">Events</a>
            </li>
            <li className="menu__item">
              <a href="/">—</a>
            </li>
            <li className="menu__item more-link">
              <a href="/">More</a>
            </li>
          </ul>
          <ul className="menu my-lists-container"></ul>
        </div>
      </div>
    </header>
  );
}
