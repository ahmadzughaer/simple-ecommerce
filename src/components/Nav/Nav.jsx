import React from "react";
import { Link } from "react-router-dom";
import "./Nav.style.css";
function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="button">
        Home
      </Link>
      <Link to="/product" className="button">
        Products
      </Link>
      <Link to="/product" className="button"><i class="fas fa-shopping-cart"></i><span>0</span></Link>
    </div>
  );
}

export default Nav;
