import React from "react";
import "./nav.css";
function Nav() {
  return (
    <nav className="bottom-nav">
      <button className="nav-item active">
        <span className="material-symbols-outlined">home</span>
        <span>Home</span>
      </button>
      <button className="nav-item">
        <span className="material-symbols-outlined">receipt_long</span>
        <span>Orders</span>
      </button>
      <button className="nav-item">
        <span className="material-symbols-outlined">search</span>
        <span>Search</span>
      </button>
      <button className="nav-item">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>Profile</span>
      </button>
    </nav>
  );
}

export default Nav;
