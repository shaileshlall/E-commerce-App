import React from "react";
import "./Catalogue.css";

export default function Catalogue() {

    const styles = [
        {
          image: '/images/image 11.png',
        },
        {
          image: '/images/image 12.png',
        },
        {
          image: '/images/image 13.png',
        },
        {
          image: '/images/image 14.png',
        },
      ];
  return (
    <div className="container catalogue py-5 text-center border border-dark" style={{ backgroundColor: 'transparent' }}>
      <h2 className="fw-bold mb-5 display-6">BROWSE BY DRESS STYLE</h2>
      <div className="row g-4">
        {styles.map((style, index) => (
          <div className="col-sm-6 col-lg-6" key={index}>
            <div className="card-1 rounded-4 overflow-hidden">
              <img
                src={style.image}
                className="img-fluid"
                style={{ borderRadius: '20px 20px 0 0' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{style.label}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
