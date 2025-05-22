import React from "react";
import "./NavBar.css";
import { CiShoppingCart, CiUser } from "react-icons/ci";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow fixed-top">
        <div className="container-xl container py-2 d-flex align-items-center justify-content-between">
          <a className="navbar-brand fw-bold fs-3" href="/">
            SHOP.CO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu text-dark">
                  <li>
                    <a className="dropdown-item" href="/">
                      Men's
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Women's
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      On Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Best Sellers
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="/">
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Brands
                </a>
              </li>
            </ul>
            <div class="container-fluid w-50 position-relative">
            <span className="position-absolute top-50 start-0 translate-middle-y ps-4 text-secondary">
                  <i className="fas fa-search"></i>
                </span>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 rounded-pill ps-5 shadow-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
            <div className="icons d-flex gap-3 cursor-pointer">
              <a href="/">
                <CiShoppingCart size={30} color="black" />
              </a>
              <a href="/">
                <CiUser size={30} color="black" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
