import React from "react";
import { Link } from "react-router-dom";
import "../../styles/globalStyle.css";

// navbar fixed-top navbar-expand-sm navbar-dark bg-primary

const Navbar = () => {
  return (
    <div className="container-fluid mr-auto">
      <nav className="navbar">
        <div className="container-fluid mr-auto">
          <Link to="/" className="">
            Restaurant Menu
          </Link>
          <div>
            <Link to="/dishes/add" className="btn  add-btn-navbar">
              Add Dish
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
