import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/ADEC.png";
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="https://adecinfocomm.com/" target="_blank">
          <img src={logo} alt="adecImg"/>
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
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/register'} className="nav-link" href="#">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/login'} className="nav-link" href="#">
                Login
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
