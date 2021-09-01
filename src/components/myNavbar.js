import React from "react";

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="my-nav">
        <nav
          id="navbar"
          className=" navbar navbar-expand-lg navbar-light bg-light"
        >
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
              
              <li className="nav-item">
                <a className="nav-link" href="/training">
                  آموزش عمومی
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/corona">
                  کروناویروس2019
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/guidlines">
                  راهنماها
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#main_service">
                  صفحه اصلی
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
