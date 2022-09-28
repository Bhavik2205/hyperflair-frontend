import eth from "../assets/img/eth.svg";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="container">
        <div className="row row--grid">
          <div className="col-12">
            <div className="main__title main__title--page">
              <h2>My Collections</h2>
              
              
            </div>
            <h5>Create, curate, and manage collections of unique NFTs to share and sell.</h5>
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
              <div className="col-4">
              <Link to={`${process.env.PUBLIC_URL}/create-collection`}>
              <button className="filter__btn mt-0" type="button">
                Create A Collection
              </button>
              </Link>
            </div>
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
                     
                    </div>
                  </div>
                  <div className="user-hover">
                    <div className="user__icon">
                     
                    </div>
                  </div>
                </div>
                <div className="custom__dropdown">
                </div>
              </div>
              <Link
                to={`${process.env.PUBLIC_URL}/item-details`}
                className="card__cover"
              >
                <img src={require("../assets/img/cover/cover1.jpg")} alt="" />
              </Link>
              <div className="card__title">
              <div className="user__icon" style={{width:"70px",height:"70px",borderRadius:"10px",marginTop:"-50px",border:"5px solid",borderColor:"white"}}>
              <img
                src={require("../assets/img/avatars/avatar5.jpg")}
                alt=""
              />
            </div>
                <h3 style={{marginTop:"-10px",marginRight:"20px"}}>
                  <Link to={`${process.env.PUBLIC_URL}/item-details`}>
                    Walking on Air
                  </Link>
                </h3>
               
              </div>
              
            </div>
          </div>
        
        </section>
      </div>
    </>
  );
};
export default Explore;
