import React, { useEffect } from "react";
import eth from "../assets/img/bnb.png";
import $ from "jquery";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  var countDownDate = new Date("April 30, 2022 15:37:25").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hour").innerHTML = "00";
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
    }
  }, 1000);
  return (
    <>
      <div className="container">
        <div className="row row--grid pt-4">
          <div className="col-12 col-lg-6">
            <article className="item_frame">
              <div className="item_header">
                <div className="item_img">
                  <img src={eth} alt="" />
                </div>
                <button className="asset__likes" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                  </svg>
                  <span>358</span>
                </button>
              </div>
              <div className="item_body">
                <img
                  src={require("../assets/img/cover/cover-big.jpg")}
                  alt=""
                />
              </div>
            </article>

            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-head" id="headingOne">
                  <h2
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i className="fa-solid fa-align-left mr-2"></i>Description
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body fix-body">
                    Akuma Origins is a brand bridging the digital and physical
                    world together. An army of 5555 Yokai will be set free on
                    the blockchain, roaming the realm. Owning a Yokai gives you
                    access to the realm through the portal. The realm is a place
                    defying the rules and boundaries you know today, blurring
                    the lines of reality and creating a phygital world. Visit
                    akumaorigins.com for more details. Do you dare to enter?
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingTwo">
                  <h2
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i className="fa-solid fa-angles-right mr-2"></i>Properties
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="item--properties">
                      <a href="#">
                        <div className="item--property">
                          <div className="Property--type">Assets</div>
                          <div className="Property--value">Ring High</div>
                          <div className="Property--rarity">
                            13% have this trait
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="item--property">
                          <div className="Property--type">Assets</div>
                          <div className="Property--value">Ring High</div>
                          <div className="Property--rarity">
                            13% have this trait
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="item--property">
                          <div className="Property--type">Assets</div>
                          <div className="Property--value">Ring High</div>
                          <div className="Property--rarity">
                            13% have this trait
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="item--property">
                          <div className="Property--type">Assets</div>
                          <div className="Property--value">Ring High</div>
                          <div className="Property--rarity">
                            13% have this trait
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="item--property">
                          <div className="Property--type">Assets</div>
                          <div className="Property--value">Ring High</div>
                          <div className="Property--rarity">
                            13% have this trait
                          </div>
                        </div>
                      </a>
                      <a href="#">
                        <div className="item--property">
                          <div className="Property--type">Assets</div>
                          <div className="Property--value">Ring High</div>
                          <div className="Property--rarity">
                            13% have this trait
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingThree">
                  <h2
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i className="fa-solid fa-image mr-2"></i> About Akuma
                    Origins
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="item--about-image">
                      <img
                        src={require("../assets/img/avatars/avatar5.jpg")}
                        alt=""
                      />
                    </div>
                    <p>
                      Akuma Origins is a brand bridging the digital and physical
                      world together.
                    </p>
                    <p>
                      An army of 5555 Yokai will be set free on the blockchain,
                      roaming the realm. Owning a Yokai gives you access to the
                      realm through the portal. The realm is a place defying the
                      rules and boundaries you know today, blurring the lines of
                      reality and creating a phygital world.
                    </p>
                    <p>Visit akumaorigins.com for more details</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-head" id="headingFour">
                  <h2
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <i className="fa-solid fa-file-image mr-2"></i>Details
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <div className="details-div">
                      <p>Contract Address</p>
                      <p>0xfa7e...6264</p>
                    </div>
                    <div className="details-div">
                      <p>Token ID</p>
                      <p>2567</p>
                    </div>
                    <div className="details-div">
                      <p>Token Standard</p>
                      <p>ERC-721</p>
                    </div>
                    <div className="details-div">
                      <p>Blockchain</p>
                      <p>Ethereum</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="item-main">
              <div className="item--header">
                <div className="item--collection-info">
                  <div className="item--collection-detail">
                    <p className="mb-0">Akuma Origins</p>
                  </div>
                  <div className="item--collection-toolbar-wrapper">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Refresh metadeda"
                      >
                        <i className="fa-solid fa-arrow-rotate-right"></i>
                      </button>
                      <Link
                        to={`${process.env.PUBLIC_URL}/creator-collections`}
                        className="btn btn-outline-secondary"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="View on Akuma Origins"
                      >
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </Link>

                      <div
                        className="btn-group"
                        role="group"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Share"
                      >
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          className="btn btn-outline-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-share-nodes"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="btnGroupDrop1"
                        >
                          <a className="dropdown-item" href="#">
                            <img
                              src={require("../assets/img/flair.png")}
                              alt=""
                              style={{ width: "16px" }}
                              className="mr-2"
                            />
                            Copy Link
                          </a>
                          <a
                            className="dropdown-item"
                            href="https://facebook.com/sharer/sharer.php"
                          >
                            <i className="fa-brands fa-facebook-f mr-2"></i>
                            Share on Facebook
                          </a>
                          <a
                            className="dropdown-item"
                            href="https://twitter.com/intent/tweet/?text=&amp;url="
                          >
                            <i className="fa-brands fa-twitter mr-2"></i>Share
                            on Twitter
                          </a>
                        </div>
                      </div>
                      <div
                        className="btn-group"
                        role="group"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="More"
                      >
                        <button
                          id="btnGroupDrop1"
                          type="button"
                          className="btn btn-outline-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="btnGroupDrop1"
                        >
                          <a
                            className="dropdown-item"
                            href="mailTo:team@hyperflair.io "
                          >
                            <i className="fa-solid fa-flag mr-2"></i> Report
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="item--title">Yokai #281</h1>
                <div className="item--counts">
                  <div className="item--owned mr-2">
                    <h4>Owned by LoudSmoke</h4>
                  </div>
                  <button className="asset__likes" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                    </svg>
                    <span>358</span>
                  </button>
                </div>
                <div className="item--frame">
                  <div className="timer--frame">
                    <p>
                      Sale ends <span>April 13, 2022 at 12:19am IST</span>
                    </p>
                    <ul>
                      <li>
                        <div id="days"></div>
                        <p>Days</p>
                      </li>
                      <li>
                        <div id="hour"></div>
                        <p>Hours</p>
                      </li>
                      <li>
                        <div id="min"></div>
                        <p>Minutes</p>
                      </li>
                      <li>
                        <div id="sec"></div>
                        <p>Seconds</p>
                      </li>
                    </ul>
                  </div>
                  <div className="trade--frame">
                    <div className="trade--ask">
                      Top bid -- Reserve price not met.
                    </div>
                    <h3 className="trade--price">
                      0.6 <span>($1,844.71)</span>
                    </h3>
                    <button
                      className="asset__btn asset__btn--full asset__btn--clr open-modal"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="accordionExample2">
              <div className="card">
                <div className="card-head" id="headeOne">
                  <h2
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapsOne"
                    aria-expanded="false"
                    aria-controls="collapsOne"
                  >
                    <i className="fa-solid fa-tag mr-2"></i>Listings
                  </h2>
                </div>
                <div
                  id="collapsOne"
                  className="collapse"
                  aria-labelledby="headeOne"
                  data-parent="#accordionExample2"
                >
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Price</th>
                            <th>USD Price</th>
                            <th>Expiration</th>
                            <th>From</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="pairs">
                                <img
                                  src={require("../assets/img/bnb.png")}
                                  alt=""
                                  className=""
                                />
                                <span>0.5 BNB</span>
                              </div>
                            </td>
                            <td>$471</td>
                            <td>1 day</td>
                            <td>LoudSmoke</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-head" id="headeTwo">
                  <h2
                    className="mb-0 collapsed"
                    data-toggle="collapse"
                    data-target="#collapsTwo"
                    aria-expanded="false"
                    aria-controls="collapsTwo"
                  >
                    <i className="fa-solid fa-list mr-2"></i>Offers
                  </h2>
                </div>
                <div
                  id="collapsTwo"
                  className="collapse"
                  aria-labelledby="headeTwo"
                  data-parent="#accordionExample2"
                >
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Price</th>
                            <th>USD Price</th>
                            <th>Floor Difference</th>
                            <th>Expiration</th>
                            <th>From</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="pairs">
                                <img
                                  src={require("../assets/img/bnb.png")}
                                  alt=""
                                  className=""
                                />
                                <span>0.5 BNB</span>
                              </div>
                            </td>
                            <td>$471</td>
                            <td>9% above</td>
                            <td>1 day</td>
                            <td>LoudSmoke</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* place bid modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Place a bid
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="mb-1 font-weight-bold">Price</p>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">BNB</span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <span className="float-right">Available: 0.0000 BNB</span>
            </div>
            <div className="modal-footer">
              <button type="button" className="sign__btn m-0">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetails;
