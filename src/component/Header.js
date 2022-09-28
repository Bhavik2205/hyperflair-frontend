import { Link } from "react-router-dom";
import SigninButton from "./SigninButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <Link to={`${process.env.PUBLIC_URL}/`}>
                <img src={require("../assets/img/logo.png")} alt="" />
              </Link>
            </div>

            <form action="#" className="header__search">
              <input
                type="search"
                placeholder="Search items, collections, and creators"
              />
              <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                </svg>
              </button>
              <button type="button" className="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                </svg>
              </button>
            </form>

            <div className="header__menu">
              <ul className="header__nav">
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#"
                    role="button"
                    id="dropdownMenuHome"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Explore{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu header__nav-menu"
                    aria-labelledby="dropdownMenuHome"
                  >
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        All NFTs
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Art
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Collectibles
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Domain Names
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Music
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Photography
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Trading Cards
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Utility
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/explore-all`}>
                        Virtual Worlds
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#"
                    role="button"
                    id="dropdownMenu"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Stats{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu header__nav-menu"
                    aria-labelledby="dropdownMenu"
                  >
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/rankings`}>
                        Rankings
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/activity`}>
                        Activity
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#"
                    role="button"
                    id="dropdownMenu0"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Resource Center{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                    </svg>
                  </a>

                  <ul
                    className="dropdown-menu header__nav-menu"
                    aria-labelledby="dropdownMenu0"
                  >
                    <li>
                      <a
                        href="https://hyperflair.medium.com/hyperflair-flair-white-paper-81c0a09f63bd"
                        target="_blank"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/faqs`}>FAQ</Link>
                    </li>
                    <li>
                      <a href="#">Hyperflair token</a>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`}>
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/privacy`}>
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="header__actions">
              <div className="header__action header__action--search">
                <button className="header__action-btn" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                  </svg>
                </button>
              </div>

              <SigninButton />
            </div>

            <button className="header__btn" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
