import React, { useEffect, useState } from "react";

import Error from "./Modals/error";
import { Link } from "react-router-dom";
import Select from "react-select";
import eth from "../assets/img/eth.svg";

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buyfilter = [
    { value: "Buy Now", label: "Buy Now" },
    { value: "New", label: "New" },
    { value: "On Auction", label: "On Auction" },
  ];
  const categoriefilter = [
    { value: "All categories", label: "All categories" },
    { value: "Art", label: "Art" },
    { value: "Photography", label: "Photography" },
    { value: "Games", label: "Games" },
    { value: "Metaverses", label: "Metaverses" },
    { value: "Music", label: "Music" },
    { value: "Domains", label: "Domains" },
  ];
  const [menuWidth, setMenuWidth] = useState(0);

  const styles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    menu: (base) => ({
      ...base,
      fontSize: "16px",
      background: "#fff",
      hover: "transparent",
    }),
    control: (css) => ({
      ...css,
      width: menuWidth || "300",
      border: 0,
    }),
    menu: ({ width, ...css }) => ({
      ...css,
      width: 300,
      border: 0,
    }),
    // Add padding to account for width of Indicators Container plus padding
    option: (css) => ({ ...css, paddingRight: 36 + 8 }),
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="row row--grid">
          <div className="col-12">
            <div className="main__title main__title--page">
              <h2>Explore</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="main__filter">
              <form action="#" className="main__filter-search">
                <input type="text" placeholder="Search..." />
                <button type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                  </svg>
                </button>
              </form>

              <div className="main__filter-wrap">
                <Select
                  defaultValue={{ label: "Buy now", value: 0 }}
                  styles={styles}
                  onChange={setSelectedOption}
                  options={buyfilter}
                  isSearchable={false}
                  isFocused={false}
                />
                <Select
                  defaultValue={{ label: "All categories", value: 0 }}
                  styles={styles}
                  onChange={setSelectedOption}
                  options={categoriefilter}
                  isSearchable={false}
                  isFocused={false}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="row row--grid">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card">
              <div className="card__header">
                <div className="user__icon_group">
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar5.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="custom__dropdown">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </span>
                  <div
                    className="dropdown-menu custom__drop"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Place bid
                    </a>
                    <a className="dropdown-item" href="#">
                      Buy now
                    </a>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </div>
                </div>
              </div>
              <Link
                to={`${process.env.PUBLIC_URL}/item-details`}
                className="card__cover"
              >
                <img src={require("../assets/img/cover/cover1.jpg")} alt="" />
              </Link>
              <div className="card__title">
                <h3>
                  <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                    Walking on Air
                  </Link>
                </h3>
                <img src={eth} alt="" className="pair-icon" />
              </div>
              <div className="card_price">
                <span>55.555 ETH</span>
                <span>1/1</span>
              </div>
              <div className="card__info">
                <div className="card__price">
                  <a href="">
                    <span>Buy Now</span>
                  </a>
                </div>

                <button className="card__likes" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                  </svg>
                  <span>189</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card">
              <div className="card__header">
                <div className="user__icon_group">
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar5.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="custom__dropdown">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </span>
                  <div
                    className="dropdown-menu custom__drop"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Place bid
                    </a>
                    <a className="dropdown-item" href="#">
                      Buy now
                    </a>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </div>
                </div>
              </div>
              <Link
                to={`${process.env.PUBLIC_URL}/item-details`}
                className="card__cover"
              >
                <img src={require("../assets/img/cover/cover2.jpg")} alt="" />
              </Link>
              <div className="card__title">
                <h3>
                  <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                    Walking on Air
                  </Link>
                </h3>
                <img src={eth} alt="" className="pair-icon" />
              </div>
              <div className="card_price">
                <span>55.555 ETH</span>
                <span>1/1</span>
              </div>
              <div className="card__info">
                <div className="card__price">
                  <a href="">
                    <span>Buy Now</span>
                  </a>
                </div>

                <button className="card__likes" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                  </svg>
                  <span>189</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card">
              <div className="card__header">
                <div className="user__icon_group">
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar5.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="custom__dropdown">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </span>
                  <div
                    className="dropdown-menu custom__drop"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Place bid
                    </a>
                    <a className="dropdown-item" href="#">
                      Buy now
                    </a>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </div>
                </div>
              </div>
              <Link
                to={`${process.env.PUBLIC_URL}/item-details`}
                className="card__cover"
              >
                <img src={require("../assets/img/cover/cover3.jpg")} alt="" />
              </Link>
              <div className="card__title">
                <h3>
                  <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                    Walking on Air
                  </Link>
                </h3>
                <img src={eth} alt="" className="pair-icon" />
              </div>
              <div className="card_price">
                <span>55.555 ETH</span>
                <span>1/1</span>
              </div>
              <div className="card__info">
                <div className="card__price">
                  <a href="">
                    <span>Buy Now</span>
                  </a>
                </div>

                <button className="card__likes" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                  </svg>
                  <span>189</span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card">
              <div className="card__header">
                <div className="user__icon_group">
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar5.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="user-hover">
                    <div className="user__icon">
                      <img
                        src={require("../assets/img/avatars/avatar.jpg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="custom__dropdown">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="css-i6dzq1"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </span>
                  <div
                    className="dropdown-menu custom__drop"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Place bid
                    </a>
                    <a className="dropdown-item" href="#">
                      Buy now
                    </a>
                    <a className="dropdown-item" href="#">
                      Share
                    </a>
                    <a className="dropdown-item" href="#">
                      Report
                    </a>
                  </div>
                </div>
              </div>
              <Link
                to={`${process.env.PUBLIC_URL}/item-details`}
                className="card__cover"
              >
                <img src={require("../assets/img/cover/cover4.jpg")} alt="" />
              </Link>
              <div className="card__title">
                <h3>
                  <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                    Walking on Air
                  </Link>
                </h3>
                <img src={eth} alt="" className="pair-icon" />
              </div>
              <div className="card_price">
                <span>55.555 ETH</span>
                <span>1/1</span>
              </div>
              <div className="card__info">
                <div className="card__price">
                  <a href="">
                    <span>Buy Now</span>
                  </a>
                </div>

                <button className="card__likes" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                  </svg>
                  <span>189</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-12">
            <button className="filter__btn mt-4" type="button" onClick={handleShow}>
              Load more
            </button>
          </div>
        </section>
      </div>
      <Error show={show} hide={handleClose} errorMsg="Try Again" />
    </>
  );
};
export default Explore;
