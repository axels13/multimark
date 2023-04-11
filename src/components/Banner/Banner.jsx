import React from "react";
import banner from "../../assets/images/hero-img.png";
import "./banner.css";
const Banner = () => {
  return (
    <section id="banner">
      <aside className="banner__container">
        <div className="banner__card">
          <div className="banner__text">
            <h4>Trending product in 2023</h4>
            <h2>Make Your Interior More Minimalistic & Modern</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
              totam.
            </p>
            <button>SHOP NOW</button>
          </div>

          <img src={banner} alt="banner-home" className="banner__img" />
        </div>
      </aside>

      <div className="banner__cards">
        <div className="cards__container  red">
          <div>
            <h4>Free Shipping</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="icons">
            <i class="ri-truck-line"></i>
          </div>
        </div>
        <div className="cards__container   cyan">
          {" "}
          <div>
            <h4>Easy Returns</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="icons">
            <i class="ri-refresh-line"></i>
          </div>
        </div>
        <div className="cards__container yellow">
          {" "}
          <div>
            <h4>Secure Payment</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="icons">
            <i class="ri-shield-flash-line"></i>
          </div>
        </div>
        <div className="cards__container blue">
          {" "}
          <div>
            <h4>Back Guarantee</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="icons">
            <i class="ri-refund-2-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
