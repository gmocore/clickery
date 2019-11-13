import React from "react";

function Nav({score, highScore, message}) {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark shadow">
      <p className="navbar-brand" >
        Clickery
      </p>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p className="nav-link" >
              Score: {score}
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >
              High Score: {highScore}
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" >
               {message}
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
