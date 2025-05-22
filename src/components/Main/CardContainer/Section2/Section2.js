import React from "react";

export default function Section2() {
  return (
    <section>
      <div className="container">
        <h1 className="text-center mt-5 mb-3 fw-bold text-uppercase">Top Sellings</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
          <div className="col">
            <div className="card">
              <img
                src="/images/Frame 29.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-6">VERTICAL STRIPED SHIRT</h5>
                <span className="card-text me-1">
                  <img
                    className="img-fluid"
                    src="/images/halfstar.png"
                    alt="HALF STAR"
                  />
                </span>
                <span className="card-text">4.5/5</span>
                <p className="card-text">$120.00</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/images/Frame 30.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-6">COURAGE GRAPHIC T-SHIRT</h5>
                <span className="card-text me-1">
                  <img
                    className="img-fluid"
                    src="/images/halfstar.png"
                    alt="HALF STAR"
                  />
                </span>
                <span className="card-text">4.5/5</span>
                <p className="card-text">
                  $240.00 <del>$260.00</del>{" "}
                  <span className="text-danger fw-bold fs-6 ms-2 border rounded-pill px-2">
                    -20%
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/images/Frame 31.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-6">LOOSE FIT BERMUDA SHORTS</h5>
                <span className="card-text me-1">
                  <img
                    className="img-fluid"
                    src="/images/halfstar.png"
                    alt="HALF STAR"
                  />
                </span>
                <span className="card-text">4.5/5</span>
                <p className="card-text">$180.00</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="/images/Frame 39.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title fs-6">FADED SKINNY JEANS</h5>
                <span className="card-text me-1">
                  <img
                    className="img-fluid"
                    src="/images/halfstar.png"
                    alt="HALF STAR"
                  />
                </span>
                <span className="card-text">4.5/5</span>
                <p className="card-text">
                  $130.00 <del>$160.00</del>{" "}
                  <span className="text-danger fw-bold fs-6 ms-2 border rounded-pill px-2">
                    -30%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-transparent border border-dark rounded-pill mt-5 mb-5 px-5 py-2 ms-3">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
