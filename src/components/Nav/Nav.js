import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand" >
        Navbar
      </p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <p className="nav-link" >
              Home <span className="sr-only">(current)</span>
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >
              Features
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >
              Pricing
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link disabled"
              
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;