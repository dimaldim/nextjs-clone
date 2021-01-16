export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <ul className="menu site-footer__menu">
          <li className="menu__item menu__item--has-submenu menu__item--no-click">
            <a href="/">About</a>
            <ul className="menu menu__submenu">
              <li className="menu__item">
                <a href="/">TechCrunch</a>
              </li>
              <li className="menu__item">
                <a href="/pages/about-techcrunch">Staff</a>
              </li>
              <li className="menu__item">
                <a href="/pages/contact-us/">Contact Us</a>
              </li>
              <li className="menu__item">
                <a href="/pages/advertisement-events-calendar/">Advertise</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-submenu menu__item--no-click">
            <a href="/">Legal</a>
            <ul className="menu menu__submenu">
              <li className="menu__item">
                <a href="https://www.verizonmedia.com/policies/us/en/verizonmedia/privacy/index.html">
                  Privacy Policy
                </a>
              </li>
              <li className="menu__item">
                <a href="https://www.verizonmedia.com/policies/us/en/verizonmedia/terms/otos/index.html">
                  Terms of Service
                </a>
              </li>
              <li className="menu__item">
                <a href="/pages/extra-crunch-terms-of-service/">
                  Extra Crunch Terms
                </a>
              </li>
              <li className="menu__item">
                <a href="/pages/code-of-conduct/">Code of Conduct</a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-submenu menu__item--no-click">
            <a href="/">Read Anywhere</a>
            <ul className="menu menu__submenu">
              <li className="menu__item">
                <a href="https://itunes.apple.com/us/app/techcrunch/id526058642?mt=8">
                  App Store
                </a>
              </li>
              <li className="menu__item">
                <a href="https://play.google.com/store/apps/details?id=com.aol.mobile.techcrunch">
                  Google Play
                </a>
              </li>
            </ul>
          </li>
          <li className="menu__item menu__item--has-submenu menu__item--no-click">
            <a href="/">International</a>
            <ul className="menu menu__submenu">
              <li className="menu__item">
                <a href="http://jp.techcrunch.com/">Japan</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="navigation__social-links">
          <a
            href="https://www.facebook.com//techcrunch"
            className="social-link--facebook"
            target="_blank"
          >
            <svg
              className="icon icon--facebook icon--black"
              viewBox="0 0 20 20"
              version="1.1"
              aria-labelledby="title"
            >
              <title>Facebook</title>
              <path d="M11,7.2h4.3v2.6H11V20H7.8V9.8H4V7.2h3.8V3.7c0-2,1.6-3.7,3.7-3.7h3.8v2.7h-2.9c-0.7,0-1.4,0.7-1.4,1.5V7.2z"></path>
            </svg>
            <span>Facebook</span>
            <span className="screen-reader-text">(opens in a new window)</span>
          </a>
          <a
            href="https://twitter.com/techcrunch"
            className="social-link--twitter"
            target="_blank"
          >
            <svg
              className="icon icon--twitter icon--black"
              viewBox="0 0 20 20"
              version="1.1"
              aria-labelledby="title"
            >
              <title>Twitter</title>
              <path d="M20,4c-0.7,0.3-1.5,0.6-2.4,0.7c0.9-0.5,1.5-1.4,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1C16.1,2.5,15,2,13.8,2c-2.3,0-4.1,1.9-4.1,4.2c0,0.3,0,0.7,0.1,1C6.4,7,3.4,5.4,1.4,2.9C1,3.5,0.8,4.1,0.8,4.9c0,1.4,0.7,2.7,1.8,3.5C2,8.4,1.4,8.2,0.8,7.9v0.1c0,2,1.4,3.7,3.3,4.1c-0.4,0.1-0.7,0.2-1.1,0.2c-0.3,0-0.5,0-0.8-0.1c0.5,1.7,2,2.9,3.8,2.9c-1.4,1.1-3.2,2-5.1,2c-0.3,0-0.7,0-1-0.1c1.8,1.2,4,1.7,6.3,1.7c7.5,0,11.7-6.4,11.7-12V6.1C18.8,5.6,19.4,4.8,20,4z"></path>
            </svg>
            <span>Twitter</span>
            <span className="screen-reader-text">(opens in a new window)</span>
          </a>
          <a
            href="http://www.youtube.com/user/techcrunch"
            className="social-link--youtube"
            target="_blank"
          >
            <svg
              className="icon icon--youtube icon--black"
              viewBox="0 0 20 20"
              version="1.1"
              aria-labelledby="title"
            >
              <title>YouTube</title>
              <path d="M10,3C0,3,0,3,0,10.2s0,7.2,10,7.2s10,0,10-7.2S20,3,10,3z M7.5,14V6.4l6.2,3.8L7.5,14z"></path>
            </svg>
            <span>YouTube</span>
            <span className="screen-reader-text">(opens in a new window)</span>
          </a>
          <a
            href="http://instagram.com/techcrunch"
            className="social-link--instagram"
            target="_blank"
          >
            <svg
              className="icon icon--instagram icon--black"
              viewBox="0 0 20 20"
              version="1.1"
              aria-labelledby="title"
            >
              <title>Instagram</title>
              <path d="M13.3,10c0,1.8-1.5,3.3-3.3,3.3S6.7,11.8,6.7,10S8.2,6.7,10,6.7S13.3,8.2,13.3,10z M15.1,10c0-2.8-2.3-5.1-5.1-5.1S4.9,7.2,4.9,10s2.3,5.1,5.1,5.1S15.1,12.8,15.1,10z M16.5,4.7c0-0.7-0.5-1.2-1.2-1.2c-0.7,0-1.2,0.5-1.2,1.2s0.5,1.2,1.2,1.2C16,5.9,16.5,5.3,16.5,4.7z M10,1.8c1.5,0,4.6-0.1,5.9,0.4C16.4,2.4,16.7,2.6,17,3s0.6,0.7,0.8,1.1c0.5,1.3,0.4,4.4,0.4,5.9s0.1,4.6-0.4,5.9c-0.2,0.5-0.4,0.8-0.8,1.1s-0.7,0.6-1.1,0.8c-1.3,0.5-4.4,0.4-5.9,0.4s-4.6,0.1-5.9-0.4C3.6,17.6,3.3,17.4,3,17s-0.6-0.7-0.8-1.1c-0.5-1.3-0.4-4.4-0.4-5.9S1.7,5.4,2.2,4.1C2.4,3.6,2.6,3.3,3,3s0.7-0.6,1.1-0.8C5.4,1.7,8.5,1.8,10,1.8z M20,10c0-1.4,0-2.7-0.1-4.1c-0.1-1.6-0.4-3-1.6-4.2s-2.6-1.5-4.2-1.6C12.7,0,11.4,0,10,0S7.3,0,5.9,0.1c-1.6,0.1-3,0.4-4.2,1.6S0.1,4.3,0.1,5.9C0,7.3,0,8.6,0,10s0,2.7,0.1,4.1c0.1,1.6,0.4,3,1.6,4.2s2.6,1.5,4.2,1.6C7.3,20,8.6,20,10,20s2.7,0,4.1-0.1c1.6-0.1,3-0.4,4.2-1.6s1.5-2.6,1.6-4.2C20,12.7,20,11.4,20,10z"></path>
            </svg>
            <span>Instagram</span>
            <span className="screen-reader-text">(opens in a new window)</span>
          </a>
          <a
            href="http://www.linkedin.com/company/techcrunch"
            className="social-link--linkedin"
            target="_blank"
          >
            <svg
              className="icon icon--linkedin icon--black"
              viewBox="0 0 20 20"
              version="1.1"
              aria-labelledby="title"
            >
              <title>LinkedIn</title>
              <path d="M0.4,6.4v12.5h4.2V6.4H0.4z M11.2,11.7c0-1.6,1.1-2.4,2.3-2.4s2.3,0.8,2.3,2.8v6.9H20v-7.3C20,8.1,17.9,6,15,6c-1.7,0-2.9,0.9-3.8,2.1l-0.1-1.7H7C7,6.9,7,9.3,7,9.3v9.7h4.2V11.7z M2.4,4.4C4,4.4,5,3.4,5,2.2C4.9,1,4,0,2.5,0C0.9,0-0.1,1-0.1,2.2C-0.1,3.4,0.9,4.4,2.4,4.4L2.4,4.4z"></path>
            </svg>
            <span>LinkedIn</span>
            <span className="screen-reader-text">(opens in a new window)</span>
          </a>
        </div>
        <p className="site-footer__disclaimer">
          <span className="site-footer__disclaimer__item">
            © 2013-2021 Verizon Media.
          </span>
          <span className="site-footer__disclaimer__item">
            All rights reserved.
          </span>
          <span className="site-footer__disclaimer__item">
            Powered by{" "}
            <a
              target="_blank"
              href="https://vip.wordpress.com/?utm_source=vip_powered_wpcom&amp;utm_medium=web&amp;utm_campaign=VIP%20Footer%20Credit"
            >
              WordPress VIP
              <span className="screen-reader-text">
                (opens in a new window)
              </span>
            </a>
            .
          </span>
        </p>
      </div>
    </footer>
  );
}
