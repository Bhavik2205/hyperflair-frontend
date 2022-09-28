import React, { useEffect } from "react";
// import Select from 'react-select';
import TopCollectionSlider from "./Slider/TopCollectionSlider";

const CreatorCollection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <section className="row row--grid">
          <div className="col-12">
            <div className="main__title">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <h2>Creator collections</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="main__carousel-wrap">
              <TopCollectionSlider />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default CreatorCollection;
