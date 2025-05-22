import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="container mt-5 d-flex justify-content-between py-5">
      <div className="left-box">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="btn btn-dark rounded-pill">Shop Now</button>
        <div className="disc-box d-flex gap-4 mt-5">
          <div>
            <h3>200+</h3>
            <p>Products</p>
          </div>
          <div>
            <h3>2,000+</h3>
            <p>Brands</p>
          </div>
          <div>
            <h3>30,000+</h3>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className="right-box">
        <div className="img-box">
          <img className="img-fluid" src="/images/shop.png" alt="" />
        </div>
      </div>
    </div>
  );
}
